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

      </div>
    </section>
  );
};

export default Donativos;
