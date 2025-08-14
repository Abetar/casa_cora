"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FileText, ArrowRight, HandHeart } from "lucide-react";

export default function HomeResearchCTA() {
  return (
    <section className="py-16 px-6" style={{ backgroundColor: "#fff1f5" }}>
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-5xl rounded-2xl border border-[#d4af37]/40 bg-white p-6 shadow-md"
        style={{
          backgroundImage:
            "radial-gradient(160px 100px at 50% -20%, rgba(212,175,55,0.10), transparent)",
        }}
      >
        <div className="text-center">
          <h3 className="font-serif text-2xl font-semibold text-[#2e2e2e]">
            Investigación de Casa CORA
          </h3>
          <p className="mx-auto mt-2 max-w-3xl text-sm text-[#4a4a4a]">
            Explora nuestros artículos publicados, metodología y avances
            clínicos. Conoce el marco que sostiene nuestras prácticas
            comunitarias y terapéuticas.
          </p>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/investigacion"
            className="inline-flex items-center gap-2 rounded-full bg-[#d4af37] px-5 py-2 text-sm font-medium text-white shadow-md transition hover:bg-[#b48d2b]"
            aria-label="Ver artículos"
          >
            Ver artículos <ArrowRight size={18} />
          </Link>

          <Link
            href="/protocolos"
            className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/60 px-5 py-2 text-sm font-medium text-[#2e2e2e] transition hover:bg-[#fff8e6]"
            aria-label="Ver protocolo"
          >
            <FileText size={18} /> Ver protocolo
          </Link>

          <Link
            href="/#donativos"
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium text-[#d4af37] underline-offset-2 hover:underline"
            aria-label="Apoyar investigación"
          >
            <HandHeart size={18} /> Apoyar investigación
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
