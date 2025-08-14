"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaInfoCircle } from "react-icons/fa";

/** Tipado */
type Servicio = {
  nombre: string;
  costo: string;
  descripcion: string;
  modalidad: string;
  detalles?: string;
  cta?: { texto: string; url: string };
  notaPagos?: string;
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
    nombre: "Consulta cannábica guiada",
    costo: "$800 MXN",
    descripcion: "Asesoría personalizada sobre uso medicinal de cannabis.",
    modalidad: "Presencial",
    detalles:
      "Consulta enfocada en el uso terapéutico del cannabis medicinal, con guía profesional en un entorno seguro.",
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
  {
    nombre: "Sistema Integral de Sanación – Casa Cora",
    costo: "$800 MXN quincenales",
    descripcion:
      "Ciclo de 10 quincenas con terapia, guía espiritual y cultivo de tu planta medicinal.",
    modalidad: "Presencial en Monterrey / Virtual en México",
    detalles: `Modelo integral de 10 quincenas (5–6 meses) que combina la adopción de una planta medicinal con acompañamiento terapéutico quincenal: 30 min de psicoanálisis + 30 min de guía espiritual. Aportación: $800 MXN quincenales.

Incluye:
- 1 planta (mínimo 120 g cosechados, genética premium)
- 10 sesiones quincenales (presencial o virtual)
- Actualizaciones personalizadas del crecimiento
- Sticker simbólico por etapa
- Certificado de cosecha y genética
- Derecho a plantar tus propias semillas
- Afiliación gratuita a Casa CORA

Modalidad: presencial en Monterrey o virtual en toda la república.
Cupo: 20 personas por ciclo.

Costos no incluidos (si se requieren): insumos de cultivo (sustratos, macetas, nutrientes) y análisis de laboratorio; se cotizan y pagan por separado.

Consulta el protocolo completo en “Ver protocolo”.`,
    cta: { texto: "Ver protocolo", url: "/protocolos" },
    notaPagos:
      "Insumos de cultivo y/o análisis de laboratorio (si se solicitan) se cubren aparte.",
  },
];

/** Card (con “brillo de vela” suave) */
function CardServicio({
  servicio,
  onClick,
}: {
  servicio: Servicio;
  onClick: () => void;
}) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: false, margin: "0px 0px -10% 0px" });

  useEffect(() => {
    if (inView) {
      controls.start({
        boxShadow: [
          "0 0 18px 0 rgba(212,175,55,0.16)",
          "0 0 26px 2px rgba(212,175,55,0.28)",
          "0 0 18px 0 rgba(212,175,55,0.16)",
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
        scale: 1.03,
        boxShadow: "0 0 36px 8px rgba(212,175,55,0.45)",
      }}
      onClick={onClick}
      className="w-full max-w-sm cursor-pointer rounded-2xl border border-[#d4af37]/40 bg-white/95 backdrop-blur-sm p-6 text-center shadow-md transition-transform"
      style={{
        backgroundImage:
          "radial-gradient(120px 80px at 50% -20%, rgba(212,175,55,0.10), transparent)",
      }}
    >
      <h3 className="mb-1 font-serif text-xl font-bold leading-tight text-[#d4af37]">
        {servicio.nombre}
      </h3>

      <p className="text-2xl font-extrabold text-[#2e2e2e]">{servicio.costo}</p>

      <p className="mt-3 text-sm italic text-[#4a4a4a]">
        {servicio.descripcion}
      </p>
      <p className="mt-2 text-xs text-[#6b6b6b]">{servicio.modalidad}</p>

      {servicio.cta && (
        <>
          <Link
            href={servicio.cta.url}
            className="mt-5 inline-block rounded-full bg-[#d4af37] px-5 py-2 text-sm font-medium text-white shadow-md transition hover:bg-[#b48d2b]"
            onClick={(e) => e.stopPropagation()} // evita abrir el modal al pulsar el CTA
          >
            {servicio.cta.texto}
          </Link>

          {servicio.notaPagos && (
            <p className="mx-auto mt-2 flex max-w-[260px] items-start gap-1 text-[11px] leading-snug text-gray-600">
              <FaInfoCircle className="mt-[2px] shrink-0" />
              <span>{servicio.notaPagos}</span>
            </p>
          )}
        </>
      )}
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
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 font-serif text-4xl text-[#d4af37]"
        >
          Servicios Terapéuticos
        </motion.h2>

        {/* Grid de cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 place-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {servicios.map((s) => (
            <CardServicio
              key={s.nombre}
              servicio={s}
              onClick={() => openModal(s)}
            />
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      {modalOpen && modalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 p-4 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-xl bg-white p-6 shadow-lg"
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute right-3 top-3 text-xl text-gray-500 hover:text-gray-800"
              aria-label="Cerrar"
            >
              ✕
            </button>
            <h3 className="mb-4 font-serif text-2xl font-bold text-[#d4af37]">
              {modalContent.nombre}
            </h3>
            {modalContent.detalles ? (
              <p className="whitespace-pre-line text-sm text-[#2e2e2e]">
                {modalContent.detalles}
              </p>
            ) : (
              <p className="text-sm text-[#2e2e2e]">…</p>
            )}
          </motion.div>
        </div>
      )}
    </section>
  );
}
