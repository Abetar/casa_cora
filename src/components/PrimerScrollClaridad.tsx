"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { Leaf, Shield, Users, ArrowRight, CheckCircle2 } from "lucide-react";

const fadeUp = (reduce: boolean, delay = 0): HTMLMotionProps<"div"> => ({
  initial: reduce ? false : { opacity: 0, y: 14 },
  animate: reduce ? undefined : { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" as const, delay },
});

export default function PrimerScrollClaridad() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section
      id="claridad"
      className="relative py-16 sm:py-20"
      aria-label="Claridad inmediata"
    >
      {/* Fondo sutil para separar del hero sin cambiar look general */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0f0e17]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-white/[0.03] to-black/0" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div {...fadeUp(reduceMotion, 0.05)} className="mb-10 sm:mb-12">
          <p className="text-xs tracking-[0.18em] uppercase text-white/55">
            · Claridad inmediata
          </p>
          <h2 className="mt-3 font-serif text-2xl sm:text-3xl text-[#d4af37]">
            ¿Qué hacemos?
          </h2>
          <p className="mt-4 max-w-3xl text-base sm:text-lg text-white/80 leading-relaxed">
            Acompañamiento psicológico y psicoterapéutico con protocolos
            conscientes y responsables.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Card 1 */}
          <motion.div
            {...fadeUp(reduceMotion, 0.12)}
            className="rounded-3xl border border-[#d4af37]/15 bg-white/[0.03] p-6 sm:p-7 backdrop-blur-md"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-black/30">
                <Leaf className="h-5 w-5 text-[#d4af37]" aria-hidden="true" />
              </span>
              <h3 className="font-serif text-xl text-white">¿Qué hacemos?</h3>
            </div>

            <p className="mt-4 text-sm sm:text-base text-white/75 leading-relaxed">
              Un proceso terapéutico con contención, criterio clínico y un
              lenguaje humano. Sin prisa. Sin juicio.
            </p>

            <div className="mt-5 flex items-center gap-2 text-xs text-white/50">
              <Shield className="h-4 w-4" aria-hidden="true" />
              Protocolos conscientes y responsables
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            {...fadeUp(reduceMotion, 0.18)}
            className="rounded-3xl border border-[#d4af37]/15 bg-white/[0.03] p-6 sm:p-7 backdrop-blur-md"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-black/30">
                <Users className="h-5 w-5 text-[#d4af37]" aria-hidden="true" />
              </span>
              <h3 className="font-serif text-xl text-white">¿Para quién es?</h3>
            </div>

            <ul className="mt-5 space-y-3 text-sm sm:text-base text-white/75">
              {[
                "Personas en búsqueda de regulación emocional",
                "Procesos de ansiedad, estrés, bloqueo o transición vital",
                "Quienes buscan un espacio serio, contenido y sin juicio",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 text-[#d4af37]/90"
                    aria-hidden="true"
                  />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            {...fadeUp(reduceMotion, 0.24)}
            className="rounded-3xl border border-[#d4af37]/15 bg-white/[0.03] p-6 sm:p-7 backdrop-blur-md"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-black/30">
                <ArrowRight
                  className="h-5 w-5 text-[#d4af37]"
                  aria-hidden="true"
                />
              </span>
              <h3 className="font-serif text-xl text-white">¿Cómo iniciar?</h3>
            </div>

            <ol className="mt-5 space-y-3 text-sm sm:text-base text-white/75">
              {[
                "Agenda evaluación",
                "Definimos protocolo",
                "Iniciamos acompañamiento",
              ].map((step, i) => (
                <li key={step} className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/15 bg-black/30 text-xs text-[#d4af37]">
                    {i + 1}
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>

            <div className="mt-7 flex flex-col gap-3">
              <a
                href="#contacto"
                className="rounded-full border border-[#d4af37]/45 bg-black/30 px-5 py-3 text-center text-sm sm:text-base text-[#d4af37] transition hover:border-[#d4af37]/65 hover:bg-black/40"
              >
                Agendar evaluación
              </a>

              <a
                href="#servicios"
                className="rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-center text-sm sm:text-base text-white/80 transition hover:border-white/25 hover:bg-white/[0.07]"
              >
                Ver servicios
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
