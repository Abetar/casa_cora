"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/** Tipado del servicio */
type Servicio = {
  nombre: string;
  costo: string;
  descripcion: string;
  modalidad: string;
  detalles?: string;
  cta?: { texto: string; url: string };
};

/** Datos */
const servicios: Servicio[] = [
  {
    nombre: "Psicoterapia básica",
    costo: "$450 MXN",
    descripcion:
      "Sesiones de psicoterapia para el manejo emocional y crecimiento personal.",
    modalidad: "Online / Presencial",
    detalles:
      "Atención psicológica profesional en modalidad presencial o virtual, adaptada a tus necesidades.",
  },
  {
    nombre: "Sistema Integral de Sanación – Casa Cora",
    costo: "$800 MXN quincenales",
    descripcion:
      "Un ciclo de 10 quincenas con terapia, guía espiritual y cultivo de tu planta medicinal.",
    modalidad: "Presencial en Monterrey / Online México",
    detalles: `
      Modelo integral de 10 quincenas (5–6 meses) que combina la adopción de una planta medicinal con acompañamiento terapéutico quincenal: 30 min de psicoanálisis + 30 min de guía espiritual. Aportación: $800 MXN quincenales.

        Incluye:

        1 planta (mínimo 120 g cosechados, genética premium)

        10 sesiones quincenales (presencial o virtual)

        Actualizaciones personalizadas del crecimiento

        Sticker simbólico por etapa

        Certificado de cosecha y genética

        Derecho a plantar tus propias semillas

        Afiliación gratuita a Casa CORA

        Modalidad: presencial en Monterrey o virtual en toda la república.
        Cupo: 20 personas por ciclo.

        Costos no incluidos (si se requieren): insumos de cultivo (sustratos, macetas, nutrientes) y análisis de laboratorio; se cotizan y pagan por separado.

        Consulta el protocolo completo en “Ver protocolo”.
    `, // (tu texto)
    cta: { texto: "Ver protocolo", url: "/protocolos" },
  },
  {
    nombre: "Círculo Masculino 420",
    costo: "Donación libre",
    descripcion: "Espacio seguro para hombres que comparten y reflexionan.",
    modalidad: "Grupal mensual",
    detalles:
      "Reunión mensual para trabajar en comunidad, compartir experiencias y generar conciencia.",
  },
  {
    nombre: "Coaching existencial filosófico",
    costo: "$200 MXN",
    descripcion: "Acompañamiento para encontrar propósito y claridad.",
    modalidad: "Online",
    detalles:
      "Sesiones virtuales para reflexionar sobre tu vida, decisiones y dirección personal.",
  },
  {
    nombre: "Aplicación de parches / aceites",
    costo: "Incluido en consulta",
    descripcion: "Tratamientos naturales aplicados durante la consulta.",
    modalidad: "Complementaria",
    detalles:
      "Aplicación de parches o aceites como complemento terapéutico en consultas presenciales.",
  },
];

/** Card con forma de hoja */
function CardHoja({
  servicio,
  onClick,
}: {
  servicio: Servicio;
  onClick: () => void;
}) {
  return (
    <motion.div
      whileHover={{
        rotate: [0, -2, 2, 0],
        transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
      }}
      className="relative w-60 h-[22rem] cursor-pointer flex items-center justify-center"
      onClick={onClick}
      style={{ filter: "drop-shadow(0 0 12px rgba(212,175,55,.4))" }}
    >
      <Image
        src="/hoja-cora.png"
        alt="Hoja decorativa"
        fill
        style={{ objectFit: "contain", pointerEvents: "none" }}
      />
      <div className="absolute flex flex-col items-center justify-center px-4 text-center">
        <h3 className="text-lg font-serif text-[#d4af37] font-bold leading-tight">
          {servicio.nombre}
        </h3>
        <p className="text-xl font-bold text-[#2e2e2e]">{servicio.costo}</p>
        <p className="text-sm italic text-[#4a4a4a] mt-2">
          {servicio.descripcion}
        </p>
        <span className="text-xs text-[#6b6b6b] mt-2">
          {servicio.modalidad}
        </span>

        {servicio.cta && (
          <Link
            href={servicio.cta.url}
            className="mt-4 inline-block bg-[#d4af37] text-white text-sm px-4 py-2 rounded-full shadow-md hover:bg-[#b48d2b] transition font-medium"
            onClick={(e) => e.stopPropagation()} // evita abrir modal al clickear CTA
          >
            {servicio.cta.texto}
          </Link>
        )}
      </div>
    </motion.div>
  );
}

export default function Servicios() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<Servicio | null>(null);

  const openModal = (servicio: Servicio) => {
    setModalContent(servicio);
    setModalOpen(true);
  };

  return (
    <section
      id="servicios"
      className="py-24 px-6 text-center"
      style={{ backgroundColor: "#fff1f5" }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-serif text-[#d4af37] mb-12">
          Servicios Terapéuticos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
          {servicios.map((servicio) => (
            <CardHoja
              key={servicio.nombre}
              servicio={servicio}
              onClick={() => openModal(servicio)}
            />
          ))}
        </div>
      </div>

      {modalOpen && modalContent && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl max-w-lg w-full p-6 relative overflow-y-auto max-h-[90vh] shadow-lg"
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
            >
              ✕
            </button>
            <h3 className="text-2xl font-serif text-[#d4af37] mb-4 font-bold">
              {modalContent.nombre}
            </h3>
            {modalContent.detalles && (
              <p className="text-sm text-[#2e2e2e] whitespace-pre-line">
                {modalContent.detalles}
              </p>
            )}
          </motion.div>
        </div>
      )}
    </section>
  );
}
