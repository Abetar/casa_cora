"use client";

import Image from "next/image";

type Donor = {
  name: string;
  src: string;
  href?: string;
};

type Props = {
  donors: Donor[];
  speedSeconds?: number;
};

export default function DonadoresMarquee({ donors, speedSeconds = 22 }: Props) {
  // ✅ SOLO duplicamos 1 vez (2 sets), para que -50% sea exacto
  const loop = [...donors, ...donors];

  return (
    <section id="donadores" className="px-6 py-16">
      <div className="mx-auto max-w-7xl">
        {/* Panel oscuro */}
        <div
          className="rounded-3xl border bg-[#0f0e17] p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
          style={{ borderColor: "rgba(212,175,55,0.18)" }}
        >
          <h3 className="font-serif text-2xl sm:text-3xl text-[#d4af37]">
            Donadores y Aliados
          </h3>

          <p className="mt-2 max-w-3xl text-sm sm:text-base text-white/70">
            Reconocemos públicamente a las personas y organizaciones que hacen
            posible Casa Cora.
          </p>

          {/* Carrusel */}
          <div className="relative mt-8 overflow-hidden">
            {/* fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0f0e17] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0f0e17] to-transparent" />

            <div
              className="cc-marquee"
              style={{ ["--duration" as any]: `${speedSeconds}s` }}
              aria-label="Carrusel de donadores"
            >
              {/* Track */}
              <div className="cc-track">
                {loop.map((d, i) => (
                  <LogoCircle key={`${d.name}-${i}`} donor={d} />
                ))}
              </div>
            </div>
          </div>

          <p className="mt-6 text-xs text-white/55">
            ¿Quieres ser donador o aliado? Escríbenos por WhatsApp.
          </p>
        </div>
      </div>

      <style jsx>{`
        .cc-marquee {
          --gap: 28px;
          --pad: 26px; /* ✅ evita que se corte el primer logo */
          overflow: hidden;
        }

        .cc-track {
          display: flex;
          align-items: center;
          gap: var(--gap);
          width: max-content;
          padding-inline: var(--pad);
          animation: scroll var(--duration) linear infinite;
          will-change: transform;
        }

        /* ✅ como hay 2 sets iguales, movemos exactamente 50% del track */
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        /* Accesibilidad: respeta reduce motion */
        @media (prefers-reduced-motion: reduce) {
          .cc-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}

function LogoCircle({ donor }: { donor: Donor }) {
  const content = (
    <div className="flex flex-col items-center gap-2 shrink-0">
      {/* ✅ círculo real, imagen cubre todo */}
      <div
        className="relative h-24 w-24 md:h-28 md:w-28 rounded-full overflow-hidden"
        style={{
          boxShadow: "0 0 0 1px rgba(212,175,55,0.22)",
        }}
        aria-label={donor.name}
        title={donor.name}
      >
        <Image
          src={donor.src}
          alt={donor.name}
          fill
          sizes="112px"
          className="object-cover"
        />
      </div>

      {/* ✅ nombre compacto */}
      <span className="text-xs md:text-sm text-white/75 text-center leading-tight max-w-[112px]">
        {donor.name}
      </span>
    </div>
  );

  return donor.href ? (
    <a
      href={donor.href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:opacity-90 transition"
    >
      {content}
    </a>
  ) : (
    content
  );
}
