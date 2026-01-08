"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { gallery } from "@/data/gallery";
import { ArrowRight } from "lucide-react";

export default function GaleriaPreview() {
  const featured = gallery.slice(0, 3);

  return (
    <section id="galeria" className="relative py-16 sm:py-20 px-6">
      {/* Fondo ceremonial sutil */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0f0e17]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] via-black/0 to-white/[0.03]" />
      </div>

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 text-center"
        >
          <p className="text-xs tracking-[0.18em] uppercase text-white/55">
            Casa Cora · Espacios y momentos
          </p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-[#d4af37]">
            Galería
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Un vistazo breve al espacio, la comunidad y la atmósfera ceremonial.
          </p>
        </motion.div>

        {/* Grid editorial */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          {featured.map((g, i) => (
            <motion.div
              key={g.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-3xl border border-[#d4af37]/15 bg-white/[0.03] backdrop-blur-md shadow-[0_18px_60px_rgba(0,0,0,.45)]"
            >
              <div className="relative aspect-[4/5] sm:aspect-square">
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 33vw"
                  className="object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
                  priority={i < 3}
                />

                {/* Overlay suave para coherencia editorial */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-black/10 opacity-90" />

                {/* Halo dorado sutil */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full blur-3xl opacity-60"
                  style={{ background: "rgba(212,175,55,0.14)" }}
                />
              </div>

              {/* Caption mínimo (opcional, se muestra en hover) */}
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="text-xs text-white/0 transition duration-300 group-hover:text-white/70">
                  {g.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA editorial */}
        <div className="mt-8 sm:mt-10 flex justify-center">
          <Link
            href="/galeria"
            className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/45 bg-[#0f0e17]/60 px-6 py-3 text-sm sm:text-base text-[#d4af37] backdrop-blur-md transition hover:border-[#d4af37]/65 hover:bg-[#0f0e17]/70"
          >
            Ver galería completa <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
