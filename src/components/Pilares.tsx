"use client";

import { motion } from "framer-motion";

const Donativos = () => {
  return (
    <section
      id="donativos"
      className="py-24 px-6 text-center bg-[#ffd1dc]/10 dark:bg-[#0f0e17] transition-colors duration-500"
    >
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-serif text-gold mb-8"
        >
          Donativos
        </motion.h2>

        <p className="text-slate-700 dark:text-white/90 text-lg mb-4">
          Casa Cora es una fundación viva que ofrece terapias económicas y espacios de sanación colectiva.
        </p>

        <p className="text-slate-600 dark:text-white/70 text-sm mb-6">
          Tu aportación ayuda a sostener este proyecto. Puedes hacer tu donativo a la siguiente cuenta:
        </p>

        <div className="bg-white/5 dark:bg-white/10 border border-white/10 dark:border-white/20 rounded-lg p-6 text-left text-slate-800 dark:text-white/90">
          <p><strong>Banco:</strong> BBVA</p>
          <p><strong>Nombre:</strong> Fundación Casa Cora A.C.</p>
          <p><strong>Cuenta:</strong> 0123 4567 8910 1112</p>
          <p><strong>CLABE:</strong> 012345678901112345</p>
          <p className="mt-4 text-xs text-slate-600 dark:text-white/50 italic">
            * Por favor envía tu comprobante al WhatsApp para confirmación y agradecimiento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Donativos;
