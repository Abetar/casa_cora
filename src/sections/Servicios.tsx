"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  CheckCircle2,
  Shield,
  Users,
  FileText,
  X,
  ShoppingBag,
} from "lucide-react";

/** Tipado */
type MenuItem = {
  nombre: string;
  costo: string;
  descripcion?: string;
  detalles?: string;
  cta?: { texto: string; url: string };
  badge?: string; // "desde", "donación", etc
};

type MenuSection = {
  titulo: string;
  items: MenuItem[];
  nota?: string;
};

export default function Servicios() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<MenuItem | null>(null);

  const openModal = (item: MenuItem) => {
    if (!item.detalles) return; // conservador: solo abre modal si hay detalles
    setModalContent(item);
    setModalOpen(true);
  };

  const menu = useMemo<MenuSection[]>(
    () => [
      {
        titulo: "Servicios Base",
        items: [
          {
            nombre: "Sesión psicológica (sin cannabis)",
            costo: "$420 MXN",
            descripcion:
              "Acompañamiento clínico para regulación emocional y procesos personales.",
            detalles:
              "Sesión individual con enfoque terapéutico: contención, claridad y acompañamiento responsable. Modalidad: online o presencial (según disponibilidad).",
          },
          {
            nombre: "Consultoría Personal Estratégica",
            costo: "$420 MXN",
            descripcion:
              "Sesión enfocada en claridad personal, toma de decisiones y orden financiero.",
            detalles:
              "Acompañamiento estratégico y humano para evaluar decisiones, hábitos y carga emocional relacionada a lo económico. No motivacional; orientado a claridad.",
          },
          {
            nombre: "Círculo masculino 420",
            costo: "Donación voluntaria",
            descripcion: "Espacio grupal contenido, serio y sin juicio.",
            detalles:
              "Círculo mensual para compartir, reflexionar y sostener procesos en comunidad. Donación voluntaria para sostener el espacio.",
          },
        ],
      },
      {
        titulo: "Servicios con Acompañamiento Psicocannábico",
        items: [
          {
            nombre: "Consulta psicocannábica",
            costo: "desde $1,499 MXN",
            badge: "desde",
            descripcion:
              "Evaluación y acompañamiento responsable para uso medicinal.",
            detalles:
              "Proceso guiado y contenido. Sujeto a evaluación y criterios de admisión. No es una venta de producto: es acompañamiento terapéutico responsable.",
          },
          {
            nombre: "Inmersión psicoterapéutica",
            costo: "desde $12,500 MXN",
            badge: "desde",
            descripcion:
              "Proceso intensivo con estructura y contención profesional.",
            detalles:
              "Inmersión diseñada para profundizar en un proceso terapéutico. Sujeto a evaluación y criterios de admisión.",
          },
          {
            nombre: "Inmersión premium",
            costo: "desde $25,000 MXN",
            badge: "desde",
            descripcion:
              "Acompañamiento extendido, personalizado y con mayor contención.",
            detalles:
              "Versión premium de inmersión. Sujeto a evaluación y criterios de admisión.",
          },
        ],
      },
      {
        titulo: "Protocolos Experimentales*",
        nota: "*Sujetos a evaluación y criterios de admisión.",
        items: [
          {
            nombre: "Rehabilitación inmersiva (15 días)",
            costo: "desde $49,000 MXN",
            badge: "desde",
            descripcion:
              "Intervención intensiva con estructura, contención y evaluación previa.",
            detalles:
              "Protocolo intensivo de 15 días. Requiere evaluación y admisión. Enfoque clínico y acompañamiento responsable.",
          },
          {
            nombre: "Protocolo experimental oncológico",
            costo: "desde $59,000 MXN",
            badge: "desde",
            descripcion:
              "Protocolo experimental sujeto a criterios y evaluación profesional.",
            detalles:
              "Protocolo experimental con criterios estrictos de admisión. Evaluación previa obligatoria.",
          },
        ],
      },
    ],
    []
  );

  const productos = useMemo<MenuItem[]>(
    () => [
      { nombre: "Gel terapéutico Casa Cora 120 g", costo: "$299 MXN" },
      { nombre: "Trip Enhancer Casa Cora 10 ml", costo: "$199 MXN" },
      { nombre: "Aceite CBD 1600 mg / 30 ml", costo: "$980 MXN" },
    ],
    []
  );

  return (
    <section
      id="servicios"
      className="relative py-20 sm:py-24"
      aria-label="Servicios en formato menú"
    >
      {/* Fondo ceremonial, sin rosa */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0f0e17]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] via-black/0 to-white/[0.03]" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-10 sm:mb-12"
        >
          <p className="text-xs tracking-[0.18em] uppercase text-white/55">
            Servicios · Casa Cora
          </p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-[#d4af37]">
            Servicios Terapéuticos
          </h2>
          <p className="mt-4 max-w-3xl text-base sm:text-lg text-white/80 leading-relaxed">
            Acompañamiento serio, contenido y responsable. Cada proceso se define
            con evaluación previa.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr]">
          {/* Columna izquierda: menú */}
          <div className="space-y-10">
            {menu.map((section) => (
              <div key={section.titulo}>
                <h3 className="font-serif text-xl sm:text-2xl text-white">
                  {section.titulo}
                </h3>

                <div className="mt-5 rounded-3xl border border-[#d4af37]/15 bg-white/[0.03] backdrop-blur-md">
                  <ul className="divide-y divide-white/10">
                    {section.items.map((item) => (
                      <li key={item.nombre}>
                        <button
                          type="button"
                          onClick={() => openModal(item)}
                          className="w-full text-left px-5 sm:px-6 py-5 transition hover:bg-white/[0.03]"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="min-w-0">
                              <p className="text-sm sm:text-base text-white/90">
                                {item.nombre}
                              </p>
                              {item.descripcion && (
                                <p className="mt-1 text-xs sm:text-sm text-white/60 leading-relaxed">
                                  {item.descripcion}
                                </p>
                              )}
                            </div>

                            <div className="shrink-0 text-right">
                              <p className="text-sm sm:text-base font-semibold text-[#d4af37]">
                                {item.costo}
                              </p>
                              {item.detalles && (
                                <p className="mt-1 text-[11px] text-white/45">
                                  Ver detalles
                                </p>
                              )}
                            </div>
                          </div>

                          {item.cta && (
                            <div className="mt-3">
                              <Link
                                href={item.cta.url}
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/35 bg-black/30 px-4 py-2 text-xs sm:text-sm text-[#d4af37] transition hover:border-[#d4af37]/55 hover:bg-black/40"
                              >
                                <FileText className="h-4 w-4" />
                                {item.cta.texto}
                              </Link>
                            </div>
                          )}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {section.nota && (
                  <p className="mt-3 text-xs text-white/50">{section.nota}</p>
                )}
              </div>
            ))}

            {/* Productos */}
            <div className="pt-2">
              <h3 className="font-serif text-xl sm:text-2xl text-white">
                Productos Casa Cora
              </h3>

              <div className="mt-5 rounded-3xl border border-[#d4af37]/15 bg-white/[0.03] backdrop-blur-md">
                <ul className="divide-y divide-white/10">
                  {productos.map((p) => (
                    <li key={p.nombre} className="px-5 sm:px-6 py-5">
                      <div className="flex items-start justify-between gap-4">
                        <p className="text-sm sm:text-base text-white/90">
                          {p.nombre}
                        </p>
                        <p className="shrink-0 text-sm sm:text-base font-semibold text-[#d4af37]">
                          {p.costo}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <Link
                  href="/tienda"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d4af37]/45 bg-black/30 px-6 py-3 text-sm sm:text-base text-[#d4af37] backdrop-blur-md transition hover:border-[#d4af37]/65 hover:bg-black/40"
                  aria-label="Ir a la tienda"
                >
                  <ShoppingBag className="h-4 w-4" />
                  Ir a la tienda
                </Link>
              </div>
            </div>
          </div>

          {/* Columna derecha: autoridad y confianza */}
          <aside className="lg:pt-[74px]">
            <div className="rounded-3xl border border-[#d4af37]/15 bg-white/[0.03] p-6 sm:p-7 backdrop-blur-md">
              <h3 className="font-serif text-xl text-white">Autoridad y confianza</h3>

              <div className="mt-6 space-y-7">
                <div>
                  <div className="flex items-center gap-2 text-white/85">
                    <Shield className="h-4 w-4 text-[#d4af37]" />
                    <h4 className="font-serif text-base">Nuestro enfoque</h4>
                  </div>
                  <ul className="mt-3 space-y-3 text-sm text-white/70">
                    {[
                      "Uso medicinal y responsable",
                      "Protocolos escritos y contención profesional",
                      "Espacios controlados y evaluación previa",
                    ].map((t) => (
                      <li key={t} className="flex gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#d4af37]/90" />
                        <span className="leading-relaxed">{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="h-px bg-white/10" />

                <div>
                  <div className="flex items-center gap-2 text-white/85">
                    <Users className="h-4 w-4 text-[#d4af37]" />
                    <h4 className="font-serif text-base">Equipo y respaldo</h4>
                  </div>
                  <ul className="mt-3 space-y-3 text-sm text-white/70">
                    {[
                      "Psicoterapia clínica",
                      "Experiencia real en análisis financiero personal y toma de decisiones",
                      "Acompañamiento estratégico, no motivacional ni aspiracional",
                    ].map((t) => (
                      <li key={t} className="flex gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#d4af37]/90" />
                        <span className="leading-relaxed">{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/#contacto"
                  className="inline-flex w-full items-center justify-center rounded-full border border-[#d4af37]/45 bg-[#0f0e17]/60 px-6 py-3 text-sm text-[#d4af37] transition hover:border-[#d4af37]/65 hover:bg-[#0f0e17]/70"
                >
                  Agendar evaluación
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Modal detalles (solo si hay detalles) */}
      {modalOpen && modalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-[#d4af37]/20 bg-[#0f0e17] p-6 shadow-[0_18px_60px_rgba(0,0,0,.55)]"
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/[0.04] p-2 text-white/70 transition hover:bg-white/[0.08] hover:text-white"
              aria-label="Cerrar"
              type="button"
            >
              <X className="h-5 w-5" />
            </button>

            <h3 className="mb-2 font-serif text-2xl text-[#d4af37]">
              {modalContent.nombre}
            </h3>
            <p className="mb-5 text-sm text-white/70">{modalContent.costo}</p>

            <p className="whitespace-pre-line text-sm leading-relaxed text-white/80">
              {modalContent.detalles ?? ""}
            </p>

            {modalContent.cta && (
              <div className="mt-6">
                <Link
                  href={modalContent.cta.url}
                  className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/45 bg-black/30 px-5 py-2.5 text-sm text-[#d4af37] transition hover:border-[#d4af37]/65 hover:bg-black/40"
                >
                  <FileText className="h-4 w-4" />
                  {modalContent.cta.texto}
                </Link>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </section>
  );
}
