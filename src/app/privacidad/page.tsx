"use client";

export default function PrivacidadPage() {
  return (
    <main
      className="min-h-screen px-6 py-24"
      style={{
        background:
          "radial-gradient(900px 600px at 20% 10%, rgba(212,175,55,0.10), transparent 60%)," +
          "radial-gradient(800px 500px at 80% 20%, rgba(27,61,47,0.20), transparent 60%)," +
          "#0f0e17",
      }}
    >
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 font-montserrat text-4xl font-bold text-[#d4af37]">
          Política de Privacidad
        </h1>

        <div className="space-y-6 text-sm leading-relaxed text-white/75">
          <p>
            En <strong className="text-white">Casa Cora</strong> respetamos
            profundamente la privacidad de las personas. Esta política explica
            cómo se recopila y protege la información personal.
          </p>

          <Section title="1. Datos recopilados">
            Únicamente se recopilan datos proporcionados voluntariamente como
            nombre, teléfono o mensajes de contacto.
          </Section>

          <Section title="2. Uso de la información">
            La información se utiliza para responder consultas y brindar
            información sobre servicios.
          </Section>

          <Section title="3. Confidencialidad">
            Casa Cora no vende ni comparte datos personales con terceros.
          </Section>

          <Section title="4. Seguridad">
            Se aplican medidas razonables para proteger los datos personales.
          </Section>

          <Section title="5. Cookies">
            Este sitio puede usar cookies técnicas para mejorar la experiencia
            del usuario.
          </Section>

          <Section title="6. Derechos del usuario">
            El usuario puede solicitar la eliminación o modificación de sus
            datos mediante los canales de contacto disponibles.
          </Section>

          <Section title="7. Cambios en la política">
            Casa Cora puede actualizar esta política en cualquier momento.
          </Section>
        </div>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-2 font-montserrat text-lg font-semibold text-[#d4af37]">
        {title}
      </h2>
      <p>{children}</p>
    </section>
  );
}
