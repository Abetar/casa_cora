"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const Comunidad = () => {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <section
      id="comunidad"
      className="pt-24 pb-40 px-6 text-center bg-[#0f0e17] text-white"
    >
      <div className="max-w-xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-serif text-gold mb-6"
        >
          Queremos conocerte.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-white/80 mb-10"
        >
          Este espacio también es tuyo. Déjanos tu nombre y correo para
          invitarte a rituales, círculos o sesiones abiertas.
        </motion.p>

        {!enviado ? (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              placeholder="Nombre completo"
              required
              className="bg-white/5 border border-white/10 p-3 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              required
              className="bg-white/5 border border-white/10 p-3 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <button
              type="submit"
              className="mt-4 bg-white text-[#0f0e17] font-regular py-3 px-6 rounded-lg hover: cursor-pointer hover:brightness-110 transition flex items-center justify-center gap-2 mx-auto"
            >
              <span>Unirme a la comunidad</span>
              <span role="img" aria-label="Correo">
                💌
              </span>
            </button>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mt-6 text-lg text-gold font-serif"
          >
            ¡Gracias por confiar en Casa Cora! <br />
            Pronto recibirás noticias nuestras. No estás sol@.
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Comunidad;
