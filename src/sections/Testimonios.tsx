"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonios = [
  "Nunca me había sentido tan escuchado. No sabía que podía hablar sin miedo.",
  "Mi ansiedad bajó desde la primera sesión cannábica. Me sentí acompañada de verdad.",
  "El círculo masculino me salvó. Por fin puedo hablar con otros hombres sin sentirme débil.",
  "Pude pagar con trueque. Nadie me juzgó. Solo me ayudaron.",
];

const fondos = ["bg-[#1a1a24]", "bg-[#2a1e2e]", "bg-[#1f2a2f]", "bg-[#2c1f18]"];

const Testimonios = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonios.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.section
        key={index}
        id="testimonios"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className={`py-24 px-6 text-center ${fondos[index]} transition-colors duration-500`}
      >
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-serif text-gold mb-10"
          >
            La medicina más poderosa es la experiencia compartida.
          </motion.h2>

          <div className="relative h-36 md:h-24 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="text-white/90 text-lg italic px-4"
              >
                “{testimonios[index]}”
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-10"
          >
            <a
              href="https://wa.me/5215555555555"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-bold bg-gold bg-white text-[#000000] px-6 py-3 rounded-full text-sm hover:brightness-110 transition"
            >
              Quiero compartir mi experiencia
            </a>
          </motion.div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default Testimonios;
