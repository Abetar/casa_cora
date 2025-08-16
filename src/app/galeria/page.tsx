"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { gallery, type GalleryItem } from "@/data/gallery";

// export const metadata = {
//   title: "Galería",
//   description:
//     "Imágenes de comunidad, cultivo y espacio terapéutico de Casa CORA.",
// };

export default function GaleriaPage() {
  const [active, setActive] = useState<number | null>(null);

  // Navegación por teclado dentro del lightbox
  const onKey = useCallback(
    (e: KeyboardEvent) => {
      if (active === null) return;
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight")
        setActive((i) => (i === null ? i : (i + 1) % gallery.length));
      if (e.key === "ArrowLeft")
        setActive((i) =>
          i === null ? i : (i - 1 + gallery.length) % gallery.length
        );
    },
    [active]
  );

  useEffect(() => {
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onKey]);

  const open = (idx: number) => setActive(idx);
  const close = () => setActive(null);
  const prev = () =>
    setActive((i) =>
      i === null ? i : (i - 1 + gallery.length) % gallery.length
    );
  const next = () =>
    setActive((i) => (i === null ? i : (i + 1) % gallery.length));

  return (
    <section
      className="min-h-screen py-24 px-6"
      style={{ backgroundColor: "#fff1f5" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-6">
          <Link href="/" className="text-[#d4af37] hover:underline">
            ← Volver al inicio
          </Link>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-3 text-center font-serif text-4xl text-[#d4af37]"
        >
          Galería Casa CORA
        </motion.h1>

        <p className="mx-auto mb-10 max-w-3xl text-center text-[#4a4a4a]">
          Imágenes de comunidad, cultivo y espacio terapéutico.
        </p>

        {/* Grid: 2 columnas en móvil, 3 en tablet, 5 en desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {gallery.map((item: GalleryItem, idx: number) => (
            <button
              key={item.id}
              onClick={() => open(idx)}
              className="group relative aspect-square overflow-hidden rounded-xl border border-[#d4af37]/30 bg-white shadow-sm"
              style={{
                backgroundImage:
                  "radial-gradient(120px 80px at 50% -20%, rgba(212,175,55,0.10), transparent)",
              }}
              aria-label={`Abrir ${item.title || item.alt}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority={idx < 3}
              />
              {item.title && (
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-black/30 p-1 text-center text-xs text-white">
                  {item.title}
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {/* Lightbox */}
      {active !== null && gallery[active] && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4" // <-- z-[80] > z-50 del Navbar
          onClick={() => setActive(null)} // cerrar tocando el fondo
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-h-[92vh] w-full max-w-5xl rounded-2xl bg-white p-3 shadow-xl"
            onClick={(e) => e.stopPropagation()} // no cerrar si tocan el contenido
          >
            <button
              type="button"
              className="absolute right-3 top-3 z-10 rounded-full bg-white/80 p-1 text-gray-700 shadow hover:bg-white touch-manipulation" // <-- z-10 para estar sobre imágenes
              aria-label="Cerrar"
              onClick={() => setActive(null)}
            >
              <X size={22} />
            </button>

            <div className="relative mx-auto aspect-video w-full overflow-hidden rounded-lg bg-black/5">
              <Image
                key={gallery[active].id}
                src={gallery[active].src}
                alt={gallery[active].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-contain"
                priority
              />
            </div>

            <div className="mt-3 flex items-start justify-between gap-3 px-1">
              <div>
                <h3 className="font-serif text-lg font-semibold text-[#2e2e2e]">
                  {gallery[active].title || gallery[active].alt}
                </h3>
                {gallery[active].desc && (
                  <p className="text-sm text-[#4a4a4a]">
                    {gallery[active].desc}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="rounded-full border border-[#d4af37]/50 p-2 text-[#2e2e2e] hover:bg-[#fff8e6] touch-manipulation"
                  onClick={() =>
                    setActive((i) =>
                      i === null ? i : (i - 1 + gallery.length) % gallery.length
                    )
                  }
                  aria-label="Anterior"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  className="rounded-full border border-[#d4af37]/50 p-2 text-[#2e2e2e] hover:bg-[#fff8e6] touch-manipulation"
                  onClick={() =>
                    setActive((i) =>
                      i === null ? i : (i + 1) % gallery.length
                    )
                  }
                  aria-label="Siguiente"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
