import crypto from 'crypto'

export async function POST(req) {
  try {
    const { email, name } = await req.json()

    if (!email) {
      return new Response(JSON.stringify({ message: 'El email es requerido' }), { status: 400 })
    }

    const API_KEY = process.env.MAILCHIMP_API_KEY
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID
    const DATACENTER = API_KEY?.split('-')[1] // ej: us21

    if (!API_KEY || !AUDIENCE_ID || !DATACENTER) {
      return new Response(JSON.stringify({ message: 'Faltan variables MAILCHIMP_*' }), { status: 500 })
    }

    const normalizedEmail = String(email).trim().toLowerCase()
    const payload = {
      email_address: normalizedEmail,
      status: 'subscribed',
      merge_fields: { FNAME: name || '' },
    }

    // 1) Alta en Mailchimp
    const createResp = await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
      {
        method: 'POST',
        headers: {
          Authorization: `apikey ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    )

    let ok = createResp.ok
    let msg = 'Suscripción exitosa'

    if (!ok) {
      const bodyText = await createResp.text()
      const exists =
        createResp.status === 400 && /member exists|already a list member/i.test(bodyText)

      if (exists) {
        // 2) Upsert
        const subscriberHash = crypto.createHash('md5').update(normalizedEmail).digest('hex')
        const updateResp = await fetch(
          `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members/${subscriberHash}`,
          {
            method: 'PUT',
            headers: {
              Authorization: `apikey ${API_KEY}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          }
        )
        ok = updateResp.ok
        msg = ok ? 'Ya estabas suscrit@. Datos actualizados ✔️' : 'No se pudo actualizar al suscriptor'
        if (!ok) {
          const updErr = await updateResp.text()
          return new Response(JSON.stringify({ message: msg, details: updErr }), { status: 400 })
        }
      } else {
        return new Response(JSON.stringify({ message: 'Error al suscribir', details: bodyText }), {
          status: createResp.status || 400,
        })
      }
    }

    // 3) Notificación por email (Resend) — lazy & opcional
    const RESEND_API_KEY = process.env.RESEND_API_KEY
    const ALERT_FROM = process.env.ALERT_FROM || 'Casa Cora <onboarding@resend.dev>'
    const ALERT_TO = process.env.ALERT_TO

    if (RESEND_API_KEY && ALERT_TO) {
      // Carga dinámica para evitar que el constructor corra en build
      const { Resend } = await import('resend')
      const resend = new Resend(RESEND_API_KEY)

      try {
        await resend.emails.send({
          from: ALERT_FROM,
          to: ALERT_TO,
          subject: 'Nuevo registro en Comunidad · Casa Cora',
          html: `
            <div style="font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; line-height:1.6; color:#111">
              <h2 style="margin:0 0 8px">Nuevo registro</h2>
              <p style="margin:0 0 4px"><strong>Nombre:</strong> ${name || '(sin nombre)'}</p>
              <p style="margin:0 0 8px"><strong>Email:</strong> ${normalizedEmail}</p>
              <hr style="border:none;border-top:1px solid #eee;margin:16px 0" />
              <p style="font-size:13px;color:#666;margin:0">Mensaje automático desde Casa Cora.</p>
            </div>
          `,
        })
      } catch (e) {
        console.error('Error enviando notificación (Resend):', e)
        // No rompemos la respuesta al cliente si falla el email
      }
    } else {
      // Si falta la key en build/preview, seguimos sin bloquear
      console.warn('RESEND_API_KEY o ALERT_TO no definida(s); se omite email de alerta.')
    }

    return new Response(JSON.stringify({ message: msg }), { status: ok ? 201 : 200 })
  } catch (error) {
    return new Response(JSON.stringify({ message: error?.message || 'Error interno' }), {
      status: 500,
    })
  }
}
