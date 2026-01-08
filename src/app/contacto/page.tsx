"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, Mail, MapPin } from "lucide-react";

const BRAND_GOLD = "#d4af37";
const BRAND_BG = "#0f0e17";

export default function ContactoPage() {
  return (
    <section
      className="min-h-screen px-6 py-24"
      style={{ backgroundColor: BRAND_BG }}
    >
      <div className="mx-auto max-w-5xl">
        {/* Back */}
        <div className="mb-6">
          <Link href="/" className="text-sm text-[#d4af37] hover:underline">
            ← Volver al inicio
          </Link>
        </div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-center text-4xl font-extrabold"
          style={{ color: BRAND_GOLD }}
        >
          Contacto
        </motion.h1>

        <p className="mx-auto mb-12 max-w-2xl text-center text-white/70">
          Si tienes dudas, deseas agendar un espacio terapéutico o explorar una
          colaboración con Casa Cora, estamos para escucharte.
        </p>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* WhatsApp */}
          <ContactCard
            icon={<MessageCircle size={22} />}
            title="WhatsApp"
            desc="Canal principal de contacto. Respuesta humana."
            action="Escribir por WhatsApp"
            href="https://wa.me/528132497377"
          />

          {/* Email */}
          <ContactCard
            icon={<Mail size={22} />}
            title="Correo"
            desc="Para alianzas, prensa o temas administrativos."
            action="Enviar correo"
            href="mailto:casacoramty@gmail.com"
          />

          {/* Location */}
          <ContactCard
            icon={<MapPin size={22} />}
            title="Ubicación"
            desc="Atención principalmente con cita previa."
            action="Sanación comunitaria · México"
            disabled
          />
        </div>

        {/* Note */}
        <div className="mt-12 text-center text-xs text-white/50">
          Casa Cora opera bajo un enfoque ético, clínico y humano.  
          Todos los procesos están sujetos a evaluación previa.
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  title,
  desc,
  action,
  href,
  disabled,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  action: string;
  href?: string;
  disabled?: boolean;
}) {
  const content = (
    <div
      className="rounded-3xl border p-6 shadow-[0_16px_50px_rgba(0,0,0,.35)] backdrop-blur-md transition"
      style={{
        borderColor: "rgba(212,175,55,0.25)",
        background:
          "radial-gradient(180px 120px at 50% -20%, rgba(212,175,55,0.12), transparent)",
      }}
    >
      <div className="mb-3 flex items-center gap-3 text-[#d4af37]">
        {icon}
        <h3 className="text-lg font-extrabold">{title}</h3>
      </div>

      <p className="mb-4 text-sm text-white/70">{desc}</p>

      <div
        className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${
          disabled
            ? "cursor-default text-white/50"
            : "text-[#0f0e17]"
        }`}
        style={{
          background: disabled ? "rgba(255,255,255,0.08)" : BRAND_GOLD,
        }}
      >
        {action}
      </div>
    </div>
  );

  if (disabled || !href) return content;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  );
}
