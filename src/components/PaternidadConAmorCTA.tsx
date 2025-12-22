"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, MessageCircle } from "lucide-react";

type Props = {
  href?: string; // a la landing del producto o subpage
  waHref?: string; // whatsapp directo opcional
};

export default function PaternidadCTA({
  href = "/paternidadconamor",
  waHref = "https://wa.me/5218132497377?text=Quiero%20info%20de%20Paternidad%20con%20Amor",
}: Props) {
  return (
    <section className="px-6" style={{backgroundColor: "#fff1f5", paddingBottom: "5rem"}}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl border shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
          style={{
            borderColor: "rgba(212,175,55,0.25)",
            background:
              "radial-gradient(700px 260px at 25% 20%, rgba(212,175,55,0.10) 0%, rgba(212,175,55,0.00) 60%)," +
              "radial-gradient(900px 300px at 80% 80%, rgba(255,209,220,0.10) 0%, rgba(255,209,220,0.00) 55%)," +
              "linear-gradient(180deg, rgba(15,14,23,0.96) 0%, rgba(10,10,14,0.96) 100%)",
          }}
        >
          {/* halo decorativo */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl"
            style={{ background: "rgba(212,175,55,0.18)" }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-28 -left-28 h-80 w-80 rounded-full blur-3xl"
            style={{ background: "rgba(255,209,220,0.12)" }}
          />

          <div className="relative grid gap-6 p-6 sm:p-8 md:grid-cols-[1.4fr_0.9fr] md:items-center">
            {/* Copy */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold"
                style={{
                  borderColor: "rgba(212,175,55,0.28)",
                  color: "rgba(212,175,55,0.95)",
                  background: "rgba(212,175,55,0.08)",
                }}
              >
                <Sparkles size={14} />
                Nuevo · Paternidad con Amor
              </div>

              <h3 className="mt-4 text-2xl md:text-3xl font-semibold text-white font-serif leading-tight">
                No improvises la crianza.
                <span className="block text-white/85">
                  Estructura suave, día a día.
                </span>
              </h3>

              <p className="mt-3 text-sm md:text-base text-white/70 leading-relaxed max-w-xl">
                Guía + bitácora 0–3 años: actividades realistas, nutrición robusta y registro imprimible.
                Ideal para papás ocupados que quieren claridad sin culpa.
              </p>

              <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/70">
                <span
                  className="rounded-full border px-3 py-1"
                  style={{ borderColor: "rgba(255,255,255,0.14)" }}
                >
                  1,095 días
                </span>
                <span
                  className="rounded-full border px-3 py-1"
                  style={{ borderColor: "rgba(255,255,255,0.14)" }}
                >
                  PDF + DOCX
                </span>
                <span
                  className="rounded-full border px-3 py-1"
                  style={{ borderColor: "rgba(255,255,255,0.14)" }}
                >
                  Imprimible
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-3 md:justify-self-end md:text-right">
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(212,175,55,0.00)",
                    "0 0 28px 8px rgba(212,175,55,0.22)",
                    "0 0 0 0 rgba(212,175,55,0.00)",
                  ],
                }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                className="rounded-2xl"
              >
                <Link
                  href={href}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-[#0f0e17]"
                  style={{ background: "#d4af37" }}
                >
                  Ver la guía (1,095 días)
                  <ArrowRight size={18} />
                </Link>
              </motion.div>

              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition"
                style={{ borderColor: "rgba(255,255,255,0.18)" }}
              >
                <MessageCircle size={18} />
                Quiero info rápida
              </a>

              <div className="text-[11px] text-white/55">
                Respuesta humana · WhatsApp
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
