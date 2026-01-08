"use client";

import { papers } from "@/data/papers";
import { ExternalLink, Calendar, Tag } from "lucide-react";
import { motion } from "framer-motion";

function domainFrom(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

export default function InvestigacionPage() {
  return (
    <section className="relative min-h-screen px-6 py-24">
      {/* Fondo editorial nocturno */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0f0e17]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] via-black/0 to-white/[0.03]" />
      </div>

      <div className="mx-auto max-w-6xl">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-3 mt-6 text-center font-serif text-3xl sm:text-4xl text-[#d4af37]"
        >
          Investigación de Casa CORA
        </motion.h1>

        <p className="mx-auto mb-10 max-w-3xl text-center text-sm sm:text-base text-white/70 leading-relaxed">
          Selección de artículos y publicaciones científicas relacionados con
          nuestra práctica. Todos los enlaces abren en una pestaña nueva.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {papers.map((p) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-3xl border bg-white/[0.03] p-5 sm:p-6 backdrop-blur-md shadow-[0_16px_55px_rgba(0,0,0,.35)] transition hover:bg-white/[0.045]"
              style={{ borderColor: "rgba(212,175,55,0.14)" }}
            >
              {/* halos sutiles */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full blur-3xl opacity-0 transition group-hover:opacity-100"
                style={{ background: "rgba(212,175,55,0.14)" }}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full blur-3xl opacity-0 transition group-hover:opacity-100"
                style={{ background: "rgba(255,209,220,0.10)" }}
              />

              <h3 className="mb-2 font-serif text-lg sm:text-xl font-semibold text-white leading-snug">
                {p.titulo}
              </h3>

              <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-white/55">
                {p.fecha && (
                  <span className="inline-flex items-center gap-1">
                    <Calendar size={14} className="opacity-80" /> {p.fecha}
                  </span>
                )}
                <span className="inline-flex items-center gap-1">
                  <ExternalLink size={14} className="opacity-80" />{" "}
                  {p.fuente || domainFrom(p.url)}
                </span>
              </div>

              {p.resumen && (
                <p className="mb-4 line-clamp-3 text-sm text-white/70 leading-relaxed">
                  {p.resumen}
                </p>
              )}

              {p.tags && p.tags.length > 0 && (
                <div className="mb-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[11px] text-white/60"
                      style={{
                        borderColor: "rgba(255,255,255,0.14)",
                        background: "rgba(0,0,0,0.18)",
                      }}
                    >
                      <Tag size={12} className="opacity-80" /> {t}
                    </span>
                  ))}
                </div>
              )}

              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition"
                style={{
                  background: "#d4af37",
                  color: "#0f0e17",
                }}
              >
                Leer artículo
                <ExternalLink size={16} />
              </a>

              {/* micro-línea inferior editorial */}
              <div className="mt-5 h-px w-full bg-white/10" />
              <p className="mt-3 text-[11px] text-white/45">
                Referencia externa · lectura en nueva pestaña
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
