"use client";

import { papers } from "@/data/papers";
import { ExternalLink, Calendar, Tag } from "lucide-react";
import { motion } from "framer-motion";

// export const metadata = {
//   title: "Investigación",
//   description: "Publicaciones y artículos de investigación de Casa CORA.",
// };

function domainFrom(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

export default function InvestigacionPage() {
  return (
    <section
      className="min-h-screen py-24 px-6"
      style={{ backgroundColor: "#fff1f5" }}
    >
      <div className="mx-auto max-w-6xl">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-2 text-center font-serif text-4xl mt-6 text-[#d4af37]"
        >
          Investigación de Casa CORA
        </motion.h1>

        <p className="mx-auto mb-10 max-w-3xl text-center text-[#4a4a4a]">
          Selección de artículos y publicaciones científicas relacionados con
          nuestra práctica. Todos los enlaces abren en una pestaña nueva.
        </p>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {papers.map((p) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="group rounded-2xl border border-[#d4af37]/40 bg-white p-5 shadow-md
                         hover:shadow-[0_0_28px_rgba(212,175,55,0.35)] transition-shadow"
              style={{
                backgroundImage:
                  "radial-gradient(120px 80px at 50% -20%, rgba(212,175,55,0.10), transparent)",
              }}
            >
              <h3 className="mb-2 font-serif text-xl font-semibold text-[#2e2e2e]">
                {p.titulo}
              </h3>

              <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#6b6b6b]">
                {p.fecha && (
                  <span className="inline-flex items-center gap-1">
                    <Calendar size={14} /> {p.fecha}
                  </span>
                )}
                <span className="inline-flex items-center gap-1">
                  <ExternalLink size={14} /> {p.fuente || domainFrom(p.url)}
                </span>
              </div>

              {p.resumen && (
                <p className="mb-4 line-clamp-3 text-sm text-[#4a4a4a]">
                  {p.resumen}
                </p>
              )}

              {p.tags && p.tags.length > 0 && (
                <div className="mb-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-1 rounded-full border border-[#d4af37]/30
                                 px-2 py-0.5 text-[11px] text-[#6b6b6b]"
                    >
                      <Tag size={12} /> {t}
                    </span>
                  ))}
                </div>
              )}

              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#d4af37] px-4 py-2 text-sm
                           font-medium text-white transition hover:bg-[#b48d2b]"
              >
                Leer artículo
                <ExternalLink size={16} />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
