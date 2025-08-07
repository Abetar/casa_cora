"use client";

import Pilares from "@/components/Pilares";
import { motion } from "framer-motion";
import Servicios from "@/sections/Servicios";
import Testimonios from "@/sections/Testimonios";
import Comunidad from "@/sections/Comunidad";
import DonativosSection from "@/sections/DonativosSection";

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

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-serif text-gold drop-shadow-lg"
        >
          Casa Cora
        </motion.h1>

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
      </section>
      <Pilares />
      <Servicios />
      <Testimonios />
      <Comunidad />
      <DonativosSection />
    </>
  );
};

export default Hero;
