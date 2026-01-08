"use client";

export default function AvisoLegalPage() {
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
          Aviso Legal
        </h1>

        <div className="space-y-6 text-sm leading-relaxed text-white/75">
          <p>
            El presente Aviso Legal regula el uso del sitio web de{" "}
            <strong className="text-white">Casa Cora</strong>, cuyo objetivo es
            brindar información sobre servicios terapéuticos, programas de
            acompañamiento y recursos educativos.
          </p>

          <Section title="1. Identidad">
            Casa Cora es una iniciativa de acompañamiento terapéutico y
            comunitario con enfoque ético, consciente y responsable.
          </Section>

          <Section title="2. Uso del sitio web">
            El uso de este sitio implica la aceptación plena de los términos aquí
            descritos. El usuario se compromete a hacer un uso adecuado del
            contenido.
          </Section>

          <Section title="3. Contenidos y responsabilidad">
            La información publicada tiene fines informativos y educativos. No
            sustituye evaluación, diagnóstico ni tratamiento profesional.
          </Section>

          <Section title="4. Propiedad intelectual">
            Todos los contenidos del sitio son propiedad de Casa Cora o se
            utilizan con autorización expresa.
          </Section>

          <Section title="5. Enlaces externos">
            Casa Cora no se responsabiliza por contenidos o políticas de sitios
            externos enlazados.
          </Section>

          <Section title="6. Modificaciones">
            Casa Cora se reserva el derecho de modificar este Aviso Legal en
            cualquier momento.
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
