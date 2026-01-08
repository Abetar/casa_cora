"use client";

import Pilares from "@/components/Pilares";
import { motion } from "framer-motion";
import Servicios from "@/sections/Servicios";
import Testimonios from "@/sections/Testimonios";
import Comunidad from "@/sections/Comunidad";
import DonativosSection from "@/sections/DonativosSection";
import SocialSection from "@/components/SocialSelection";
import ReseachCTA from "@/components/ReseatchCTA";
import MapaCasaCora from "@/components/MapaCasaCora";
import GaleriaPreview from "@/sections/GaleriaPreview";
import Link from "next/link";
// import { ShoppingBag } from "lucide-react";
import PaternidadConAmorCTA from "@/components/PaternidadConAmorCTA";
import PrimerScrollClaridad from "@/components/PrimerScrollClaridad";
import DonadoresMarquee from "@/components/DonadoresMarquee";

const DONORS = [
  { name: "Promptory AI", src: "/donors/promptory_icon.jpeg", href: "https://promptory-ai.vercel.app/" },
  { name: "La Caverna", src: "/donors/caverna-logo.png" },
  { name: "AG Solutions", src: "/donors/agsolutions_icon.jpg", href: "https://agsolutions.dev" },
  { name: "Petunia Arte Digital", src: "/donors/petunia_logo.png"}
];

const BRAND = "#1B3D2F";

const Hero = () => {
  return (
    <>
      <section
        id="inicio"
        className="relative isolate min-h-screen overflow-hidden flex flex-col justify-center items-center text-center"
      >
        {/* Video */}
        <video
          className="absolute inset-0 h-full w-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/hero_poster_cora.jpg"
        >
          <source src="/hero_video_cora.mp4" type="video/mp4" />
          Tu navegador no soporta video HTML5.
        </video>

        {/* Overlay editorial */}
        <div className="absolute inset-0 z-[1]">
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-black/70" />
          <div className="absolute inset-0 backdrop-saturate-50" />
        </div>

        {/* Contenido arriba */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Logo (visual) */}
          <motion.img
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
            src="/logo.png"
            alt="Casa Cora"
            width={170}
            height={170}
            className="object-contain mt-2 opacity-95"
          />

          {/* H1 (real) */}
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.12 }}
            className="mt-7 max-w-3xl px-6 font-serif text-4xl sm:text-5xl md:text-6xl leading-tight text-[#d4af37]"
          >
            Acompañamiento terapéutico con enfoque clínico y botánico
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.22 }}
            className="mt-6 max-w-2xl px-6 text-base sm:text-lg text-white/85"
          >
            Un espacio seguro para regular, sanar e integrar procesos
            personales.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.35 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 px-6 w-full"
          >
            <Link
              href="/#contacto"
              className="w-full sm:w-auto rounded-full border border-[#d4af37]/50 bg-[#0f0e17]/60 px-6 py-3 text-sm sm:text-base text-[#d4af37] backdrop-blur-md transition hover:border-[#d4af37]/70 hover:bg-[#0f0e17]/70"
              aria-label="Agendar evaluación"
            >
              Agendar evaluación
            </Link>

            <Link
              href="/#servicios"
              className="w-full sm:w-auto rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm sm:text-base text-white/85 backdrop-blur-md transition hover:border-white/25 hover:bg-white/10"
              aria-label="Ver servicios"
            >
              Ver servicios
            </Link>
          </motion.div>

          {/* Nota sutil */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.55 }}
            className="mt-8 text-xs sm:text-sm text-white/55 px-6"
          >
            Presencia, claridad y acompañamiento humano.
          </motion.p>
        </div>
      </section>

      <PrimerScrollClaridad />
      <PaternidadConAmorCTA />
      {/* <Pilares /> */}
      <ReseachCTA />
      <Servicios />
      <GaleriaPreview />
      <Testimonios />
      <Comunidad />
      <SocialSection
        variant="cards"
        align="center"
        links={{
          instagram:
            "https://www.instagram.com/casacoramty?igsh=cmliYmZoYzd5OGts",
          whatsapp: "https://wa.me/528132497377",
        }}
      />
      <MapaCasaCora />
      <DonativosSection />
      <DonadoresMarquee donors={DONORS} speedSeconds={15}></DonadoresMarquee>
    </>
  );
};

export default Hero;
