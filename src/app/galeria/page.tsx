"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import { gallery, type GalleryItem } from "@/data/gallery";

export default function GaleriaPage() {
  const [active, setActive] = useState<number | null>(null);

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

  return (
    <section className="relative min-h-screen py-24 px-6">
      {/* Fondo nocturno nativo */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0f0e17]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] via-black/0 to-white/[0.03]" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(rgba(212,175,55,0.08) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Back */}
        <div className="mb-8 mt-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-sm text-white/80 backdrop-blur-md transition hover:border-white/25 hover:bg-white/[0.07]"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 text-center"
        >
          <p className="text-xs tracking-[0.18em] uppercase text-white/55">
            Casa Cora · Comunidad y espacio
          </p>

          <h1 className="mt-3 font-serif text-3xl sm:text-4xl text-[#d4af37]">
            Galería Casa CORA
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-white/70">
            Imágenes de comunidad, cultivo y espacio terapéutico.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {gallery.map((item: GalleryItem, idx: number) => (
            <button
              key={item.id}
              onClick={() => open(idx)}
              className="group relative aspect-square overflow-hidden rounded-2xl border border-[#d4af37]/15 bg-white/[0.03] backdrop-blur-md shadow-[0_14px_50px_rgba(0,0,0,.35)] transition hover:border-[#d4af37]/25"
              aria-label={`Abrir ${item.title || item.alt}`}
              type="button"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                className="object-cover transition duration-500 ease-out group-hover:scale-[1.04]"
                priority={idx < 3}
              />

              {/* overlay editorial */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/0 opacity-90" />

              {item.title && (
                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-2 text-center">
                  <span className="inline-block rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[11px] text-white/85 backdrop-blur-md">
                    {item.title}
                  </span>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active !== null && gallery[active] && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/65 backdrop-blur-sm p-4"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-3xl border bg-[#0f0e17] shadow-[0_22px_80px_rgba(0,0,0,.7)]"
            style={{ borderColor: "rgba(212,175,55,0.22)" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* halo sutil */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl"
              style={{ background: "rgba(212,175,55,0.12)" }}
            />

            {/* Close */}
            <button
              type="button"
              className="absolute right-4 top-4 z-10 rounded-full border border-white/12 bg-white/[0.06] p-2 text-white/80 backdrop-blur-md transition hover:bg-white/[0.10] hover:text-white"
              aria-label="Cerrar"
              onClick={() => setActive(null)}
            >
              <X size={20} />
            </button>

            {/* Image */}
            <div className="relative w-full bg-black/20">
              <div className="relative mx-auto aspect-video w-full max-w-5xl">
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
            </div>

            {/* Meta + nav */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 px-5 py-5">
              <div className="min-w-0">
                <h3 className="font-serif text-lg sm:text-xl text-[#d4af37]">
                  {gallery[active].title || gallery[active].alt}
                </h3>
                {gallery[active].desc && (
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">
                    {gallery[active].desc}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-2 sm:justify-end">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] p-2 text-white/85 transition hover:border-white/25 hover:bg-white/[0.07] touch-manipulation"
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
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] p-2 text-white/85 transition hover:border-white/25 hover:bg-white/[0.07] touch-manipulation"
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
          </motion.div>
        </div>
      )}
    </section>
  );
}
