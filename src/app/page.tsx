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
import { ShoppingBag } from "lucide-react";

const BRAND = "#1B3D2F";

const Hero = () => {
  return (
    <>
      <section
        id="inicio"
        className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden"
      >
        <video
          className="absolute inset-0 w-full h-full object-cover -z-10 brightness-75"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/hero_video_cora.mp4" type="video/mp4" />
          Tu navegador no soporta video HTML5.
        </video>

        {/* Logo */}
        <motion.img
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          src="/logo.png"
          alt="Logo Casa Cora"
          width={185}
          height={185}
          className="rounded-md object-contain mt-4"
        />

        {/* Subtítulos */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mt-4 text-xl text-white/90 font-light"
        >
          Fundación viva de psicoterapia económica
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.6 }}
          className="mt-2 text-white/60"
        >
          Donde la planta, la palabra y la comunidad se encuentran para sanar.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.9 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          {/* Botón principal → Tienda */}
          <Link
            href="/tienda"
            className="group relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(27,61,47,0.45)] transition hover:shadow-[0_10px_34px_rgba(27,61,47,0.6)]"
            style={{ background: "linear-gradient(90deg, #1B3D2F 0%, #265444 100%)" }}
            aria-label="Ir a la Tienda"
          >
            <ShoppingBag size={18} className="opacity-90" />
            Ir a la Tienda
            <span className="ml-1 rounded-full bg-[#d4af37] px-2 py-[2px] text-[10px] font-bold text-black/90">
              Nuevo
            </span>
            {/* brillo sutil */}
            <span
              className="pointer-events-none absolute inset-0 -z-10 rounded-full opacity-0 blur-md transition group-hover:opacity-60"
              style={{
                background:
                  "radial-gradient(60% 60% at 50% 50%, rgba(212,175,55,0.35), transparent 70%)",
              }}
            />
          </Link>

          {/* Botón secundario → Servicios */}
          <Link
            href="/#servicios"
            className="inline-flex items-center rounded-full border px-6 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10"
            style={{ borderColor: "rgba(255,255,255,0.35)" }}
          >
            Ver servicios
          </Link>
        </motion.div>
      </section>

      <Pilares />
      <ReseachCTA />
      <Servicios />
      <GaleriaPreview />
      <Testimonios />
      <Comunidad />
      <SocialSection
        variant="cards"
        align="center"
        links={{
          instagram: "https://www.instagram.com/casacoramty?igsh=cmliYmZoYzd5OGts",
          whatsapp: "https://wa.me/528132497377",
        }}
      />
      <MapaCasaCora />
      <DonativosSection />
    </>
  );
};

export default Hero;
