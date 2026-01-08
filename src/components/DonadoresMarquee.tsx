"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type Donor = {
  name: string;
  src: string;
  href?: string;
};

type Props = {
  donors: Donor[];
  speedSeconds?: number;
  size?: number;
  gapPx?: number;
};

export default function DonadoresMarquee({
  donors,
  speedSeconds = 18,
  size = 92,
  gapPx = 34,
}: Props) {
  const groupRef = useRef<HTMLDivElement | null>(null);
  const [groupWidth, setGroupWidth] = useState<number>(0);

  // Medir el ancho real del grupo A (incluye gaps)
  useEffect(() => {
    if (!groupRef.current) return;

    const el = groupRef.current;

    const measure = () => {
      // scrollWidth da el ancho real del contenido
      setGroupWidth(el.scrollWidth);
    };

    measure();

    const ro = new ResizeObserver(() => measure());
    ro.observe(el);

    // Re-medimos cuando cargan imágenes (por si cambian tamaños)
    const t = window.setTimeout(measure, 250);

    return () => {
      window.clearTimeout(t);
      ro.disconnect();
    };
  }, [donors, size, gapPx]);

  if (!donors?.length) return null;

  return (
    <section id="donadores" className="px-6 py-16">
      <div className="mx-auto max-w-7xl">
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

          <div className="relative mt-8 overflow-hidden">
            {/* Fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0f0e17] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0f0e17] to-transparent" />

            {/* Track */}
            <div
              className="cc-track"
              style={
                {
                  ["--duration" as any]: `${speedSeconds}s`,
                  ["--shift" as any]: `${groupWidth}px`, // ✅ movimiento exacto
                } as React.CSSProperties
              }
            >
              {/* Grupo A (medido) */}
              <div
                ref={groupRef}
                className="cc-group"
                style={{ gap: `${gapPx}px`, paddingRight: `${gapPx}px` }}
              >
                {donors.map((d) => (
                  <LogoItem key={`a-${d.name}`} donor={d} size={size} />
                ))}
              </div>

              {/* Grupo B (duplicado) */}
              <div
                className="cc-group"
                aria-hidden="true"
                style={{ gap: `${gapPx}px`, paddingRight: `${gapPx}px` }}
              >
                {donors.map((d) => (
                  <LogoItem key={`b-${d.name}`} donor={d} size={size} />
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
        .cc-track {
          display: flex;
          width: max-content;
          animation: scroll var(--duration) linear infinite;
          will-change: transform;
        }

        .cc-group {
          display: flex;
          align-items: flex-start;
          flex-shrink: 0;
        }

        /* ✅ mueve exactamente el ancho del grupo A (sin huecos) */
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-1 * var(--shift)));
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .cc-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}

function LogoItem({ donor, size }: { donor: Donor; size: number }) {
  const itemWidth = Math.max(size + 36, 140);

  const content = (
    <div className="shrink-0" style={{ width: itemWidth }} title={donor.name}>
      <div className="flex flex-col items-center gap-2">
        <div
          className="relative overflow-hidden rounded-full"
          style={{
            width: size,
            height: size,
            boxShadow: "0 0 0 1px rgba(212,175,55,0.22)",
          }}
        >
          <Image
            src={donor.src}
            alt={donor.name}
            fill
            sizes={`${size}px`}
            className="object-cover"
          />
        </div>

        <span
          className="text-xs md:text-sm text-white/75 text-center leading-snug"
          style={{ width: itemWidth, minHeight: 36 }}
        >
          {donor.name}
        </span>
      </div>
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
