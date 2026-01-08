"use client";

import { useState } from "react";
import { MapPin, Navigation2 } from "lucide-react";

const LAT = 25.7171722;
const LNG = -100.3367462;

export default function MapaCasaCora() {
  const [mode, setMode] = useState<"map" | "street">("map");

  const mapSrc = `https://www.google.com/maps?q=${LAT},${LNG}&z=17&output=embed`;
  const streetSrc = `https://www.google.com/maps?output=embed&layer=c&cbll=${LAT},${LNG}&cbp=11,0,0,0,0`;
  const placeUrl = `https://www.google.com/maps/place/Casa+Cora/@${LAT},${LNG},17z`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${LAT},${LNG}`;

  return (
    <section id="mapa" className="relative py-16 sm:py-20 px-6">
      {/* Fondo nocturno sutil, nativo */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0f0e17]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] via-black/0 to-white/[0.03]" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs tracking-[0.18em] uppercase text-white/55">
            Ubicación
          </p>
          <h3 className="mt-3 font-serif text-3xl text-[#d4af37]">
            ¿Cómo llegar?
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Alterna entre el mapa y Street View. Abre la ubicación o genera la
            ruta en Google Maps.
          </p>
        </div>

        {/* Toggle */}
        <div className="mt-7 flex justify-center gap-2">
          <button
            onClick={() => setMode("map")}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition border ${
              mode === "map"
                ? "border-[#d4af37]/55 bg-[#0f0e17]/60 text-[#d4af37]"
                : "border-white/15 text-white/80 hover:bg-white/[0.06]"
            }`}
            aria-pressed={mode === "map"}
            aria-label="Ver mapa"
            type="button"
          >
            <MapPin size={16} /> Mapa
          </button>

          <button
            onClick={() => setMode("street")}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition border ${
              mode === "street"
                ? "border-[#d4af37]/55 bg-[#0f0e17]/60 text-[#d4af37]"
                : "border-white/15 text-white/80 hover:bg-white/[0.06]"
            }`}
            aria-pressed={mode === "street"}
            aria-label="Ver Street View"
            type="button"
          >
            <Navigation2 size={16} /> Street View
          </button>
        </div>

        {/* Iframe */}
        <div className="mt-6 mx-auto w-full max-w-5xl overflow-hidden rounded-3xl border border-[#d4af37]/15 bg-white/[0.03] backdrop-blur-md shadow-[0_18px_60px_rgba(0,0,0,.45)]">
          <div className="w-full" style={{ aspectRatio: "16 / 9" }}>
            <iframe
              key={mode}
              src={mode === "map" ? mapSrc : streetSrc}
              className="h-full w-full"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              aria-label={mode === "map" ? "Mapa de Casa Cora" : "Street View de Casa Cora"}
            />
          </div>
        </div>

        {/* Acciones */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href={placeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/45 bg-[#0f0e17]/60 px-6 py-3 text-sm font-medium text-[#d4af37] backdrop-blur-md transition hover:border-[#d4af37]/65 hover:bg-[#0f0e17]/70"
          >
            <MapPin size={18} />
            Abrir en Google Maps
          </a>

          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-medium text-white/85 transition hover:border-white/25 hover:bg-white/[0.07]"
          >
            <Navigation2 size={18} />
            Cómo llegar
          </a>
        </div>
      </div>
    </section>
  );
}
