"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const Comunidad = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [estado, setEstado] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEstado("loading");
    setMensaje("Enviando...");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: nombre, email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setEstado("error");
        setMensaje(data?.message || "Hubo un error al suscribirte.");
        return;
      }

      setEstado("success");
      setMensaje(
        "¡Gracias por confiar en Casa Cora! Pronto recibirás noticias nuestras."
      );
      setNombre("");
      setEmail("");
    } catch {
      setEstado("error");
      setMensaje("No se pudo enviar. Intenta de nuevo en unos minutos.");
    }
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

        {estado !== "success" ? (
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
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="bg-white/5 border border-white/10 p-3 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/5 border border-white/10 p-3 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold"
            />

            <button
              type="submit"
              disabled={estado === "loading"}
              className={`mt-4 bg-white text-[#0f0e17] font-medium py-3 px-6 rounded-lg transition flex items-center justify-center gap-2 mx-auto ${
                estado === "loading"
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:brightness-110 cursor-pointer"
              }`}
            >
              <span>
                {estado === "loading" ? "Enviando..." : "Unirme a la comunidad"}
              </span>
              <span role="img" aria-label="Correo">
                💌
              </span>
            </button>

            {estado !== "idle" && (
              <p
                className={`text-sm mt-2 ${
                  estado === "error" ? "text-red-400" : "text-white/80"
                }`}
              >
                {mensaje}
              </p>
            )}
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mt-6 text-lg text-gold font-serif"
          >
            {mensaje}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Comunidad;
