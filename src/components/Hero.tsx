"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const Hero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden flex items-center"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero_image_cora.jpg"
          alt="Casa Cora — atmósfera ceremonial"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay editorial estable (50–60%) */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Degradado sutil para profundidad y legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
      </div>

      <div className="mx-auto w-full max-w-5xl px-6 py-24 text-center">
        {/* Logo (visual, no reemplaza el H1) */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mb-8 flex justify-center"
        >
          <Image
            src="/logo.png"
            alt="Casa Cora"
            width={140}
            height={140}
            priority
            className="h-auto w-[110px] sm:w-[130px] opacity-95"
          />
        </motion.div>

        {/* H1 real */}
        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
          className="mx-auto max-w-3xl font-serif text-4xl sm:text-5xl md:text-6xl leading-tight text-[#d4af37]"
        >
          Acompañamiento terapéutico con enfoque clínico y botánico
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.18 }}
          className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-white/85"
        >
          Un espacio seguro para regular, sanar e integrar procesos personales.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          {/* Primario */}
          <Link
            href="#contacto"
            className="w-full sm:w-auto rounded-full border border-[#d4af37]/50 bg-[#0f0e17]/60 px-6 py-3 text-sm sm:text-base text-[#d4af37] backdrop-blur-md transition hover:border-[#d4af37]/70 hover:bg-[#0f0e17]/70"
          >
            Agendar evaluación
          </Link>

          {/* Secundario */}
          <Link
            href="#servicios"
            className="w-full sm:w-auto rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm sm:text-base text-white/85 backdrop-blur-md transition hover:border-white/25 hover:bg-white/10"
          >
            Ver servicios
          </Link>
        </motion.div>

        {/* Nota opcional (muy sutil, editorial) */}
        <motion.p
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={reduceMotion ? undefined : { opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.55 }}
          className="mt-8 text-xs sm:text-sm text-white/55"
        >
          Presencia, claridad y acompañamiento humano.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
