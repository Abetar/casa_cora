export async function GET() {
  try {
    const RESEND_API_KEY = process.env.RESEND_API_KEY
    const ALERT_FROM = process.env.ALERT_FROM || 'Casa Cora <onboarding@resend.dev>'
    const ALERT_TO = process.env.ALERT_TO

    if (!RESEND_API_KEY || !ALERT_TO) {
      return new Response(JSON.stringify({ ok: false, reason: 'Faltan RESEND_API_KEY o ALERT_TO' }), { status: 500 })
    }

    const { Resend } = await import('resend')
    const resend = new Resend(RESEND_API_KEY)

    const result = await resend.emails.send({
      from: ALERT_FROM,
      to: ALERT_TO,
      subject: 'Ping de prueba · Casa Cora',
      html: `<p>Hola 👋 — esto es un ping de prueba desde /api/test-email</p>`,
    })

    return new Response(JSON.stringify({ ok: true, result }), { status: 200 })
  } catch (e) {
    return new Response(JSON.stringify({ ok: false, error: String(e) }), { status: 500 })
  }
}
