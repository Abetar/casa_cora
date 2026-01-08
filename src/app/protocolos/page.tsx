"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

const PdfViewer = dynamic(() => import("@/components/PdfViewer"), { ssr: false });

export default function ProtocolosPage() {
  const pdfPath = "/docs/ACOMPAÑAMIENTO_EMOCIONAL.pdf";

  return (
    <section className="relative min-h-screen px-6 py-24">
      {/* Fondo editorial nocturno */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0f0e17]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] via-black/0 to-white/[0.03]" />
      </div>

      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"
          >
            <ArrowLeft size={16} className="opacity-80" />
            Volver al inicio
          </Link>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-center font-serif text-3xl sm:text-4xl text-[#d4af37]"
        >
          Protocolos Psicodélicos — Casa Cora
        </motion.h1>

        <p className="mx-auto mt-4 mb-10 max-w-3xl text-center text-sm sm:text-base text-white/70 leading-relaxed">
          Documento de referencia. Si tu dispositivo se pone lento, abre el PDF
          en el visor nativo.
        </p>

        <PdfViewer file={pdfPath} />

        <div className="mt-10 flex justify-center">
          <a
            href={pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition"
            style={{ background: "#d4af37", color: "#0f0e17" }}
          >
            Abrir en visor nativo
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
