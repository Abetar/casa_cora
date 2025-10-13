"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden"
    >
      <Image
        src="/hero_image_cora.jpg"
        alt="Fondo hero"
        fill
        priority
        className="object-cover brightness-75 -z-10"
      />

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-5xl font-serif text-gold drop-shadow-lg"
      >
        <Image
          src="/logo.png"
          alt="Fondo hero"
          fill
          priority
          className="object-cover brightness-75 -z-10"
        />
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        className="mt-4 text-xl text-white/90 font-light"
      >
        Fundación viva de psicoterapia económica
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 0.6 }}
        className="mt-2 text-white/60"
      >
        Donde la planta, la palabra y la comunidad se encuentran para sanar.
      </motion.p>
    </section>
  );
};

export default Hero;
