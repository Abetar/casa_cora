"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FileText, ArrowRight, HandHeart } from "lucide-react";

export default function HomeResearchCTA() {
  return (
    <section className="relative py-16 sm:py-20 px-6">
      {/* Fondo ceremonial sutil */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0f0e17]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] via-black/0 to-white/[0.03]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-6xl overflow-hidden rounded-3xl border bg-white/[0.03] p-6 sm:p-8 backdrop-blur-md shadow-[0_18px_60px_rgba(0,0,0,.45)]"
        style={{
          borderColor: "rgba(212,175,55,0.18)",
          backgroundImage:
            "radial-gradient(700px 240px at 18% 15%, rgba(212,175,55,0.10), transparent 60%)," +
            "radial-gradient(900px 300px at 85% 85%, rgba(27,61,47,0.16), transparent 55%)",
        }}
      >
        {/* halos sutiles */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl"
          style={{ background: "rgba(212,175,55,0.14)" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-28 -left-28 h-80 w-80 rounded-full blur-3xl"
          style={{ background: "rgba(27,61,47,0.18)" }}
        />

        <div className="relative text-center">
          <p className="text-xs tracking-[0.18em] uppercase text-white/55">
            Marco clínico · Metodología · Artículos
          </p>

          <h3 className="mt-3 font-serif text-2xl sm:text-3xl text-[#d4af37]">
            Investigación de Casa CORA
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-sm sm:text-base text-white/70 leading-relaxed">
            Explora artículos publicados, metodología y avances clínicos. Conoce
            el marco que sostiene nuestras prácticas comunitarias y terapéuticas.
          </p>
        </div>

        <div className="relative mt-7 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3">
          {/* Primario */}
          <Link
            href="/investigacion"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-[#d4af37]/50 bg-[#0f0e17]/60 px-6 py-3 text-sm sm:text-base text-[#d4af37] backdrop-blur-md transition hover:border-[#d4af37]/70 hover:bg-[#0f0e17]/70"
            aria-label="Ver artículos"
          >
            Ver artículos <ArrowRight size={18} />
          </Link>

          {/* Secundario */}
          <Link
            href="/protocolos"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm sm:text-base text-white/85 transition hover:border-white/25 hover:bg-white/[0.07]"
            aria-label="Ver protocolo"
          >
            <FileText size={18} /> Ver protocolo
          </Link>

          {/* Terciario */}
          <Link
            href="/#donativos"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full px-6 py-3 text-sm sm:text-base text-white/70 transition hover:text-white/90"
            aria-label="Apoyar investigación"
          >
            <HandHeart size={18} className="text-[#d4af37]" />
            Apoyar investigación
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
