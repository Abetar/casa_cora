"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const servicios = [
  {
    nombre: "Psicoterapia individual",
    modalidad: "Online / Presencial",
    costo: "$300 MXN",
  },
  {
    nombre: "Consulta cannábica guiada",
    modalidad: "Presencial",
    costo: "$250 MXN",
  },
  {
    nombre: "Círculo Masculino 420",
    modalidad: "Grupal mensual",
    costo: "Donación libre",
  },
  {
    nombre: "Coaching existencial filosófico",
    modalidad: "Online",
    costo: "$200 MXN",
  },
  {
    nombre: "Aplicación de parches / aceites",
    modalidad: "Complementaria",
    costo: "Incluido en consulta",
  },
];

const CardServicio = ({ servicio }: { servicio: (typeof servicios)[0] }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "0px 0px -10% 0px" });

  useEffect(() => {
    if (inView) {
      controls.start({
        boxShadow: [
          "0 0 20px 4px rgba(212, 175, 55, 0.3)",
          "0 0 28px 6px rgba(212, 175, 55, 0.5)",
          "0 0 20px 4px rgba(212, 175, 55, 0.3)",
        ],
        transition: {
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        },
      });
    } else {
      controls.stop();
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 36px 10px rgba(212, 175, 55, 0.6)",
      }}
      className="bg-white/5 dark:bg-white/10 border border-white/10 dark:border-white/20 w-44 h-64 flex flex-col items-center justify-between px-4 py-6 rounded-2xl backdrop-blur-sm text-center transition-transform"
    >
      <div>
        <h3 className="text-base font-serif text-gold mb-2 leading-snug">
          {servicio.nombre}
        </h3>
        <p className="text-slate-800 dark:text-white/90 text-sm font-medium">
          {servicio.costo}
        </p>
      </div>
      <p className="text-slate-600 dark:text-white/60 text-xs italic mt-auto">
        {servicio.modalidad}
      </p>
    </motion.div>
  );
};

const Servicios = () => {
  return (
    <section
      id="servicios"
      className="py-24 px-6 text-center bg-[#ffd1dc]/5 dark:bg-[#0f0e17]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-serif text-gold mb-12"
        >
          Servicios Terapéuticos
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-6"
        >
          {servicios.map((servicio, i) => (
            <CardServicio key={i} servicio={servicio} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Servicios;
