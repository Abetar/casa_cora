'use client'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import Link from 'next/link'

const PdfViewer = dynamic(() => import('@/components/PdfViewer'), { ssr: false })

export default function ProtocolosPage() {
  // ⬇️ aquí va
  const pdfPath = '/docs/protocolos-psicodelicos.pdf'

  return (
    <section className="min-h-screen py-24 px-6 bg-[#fff1f5]">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6">
          <Link href="/" className="text-[#d4af37] hover:underline">← Volver al inicio</Link>
        </div>

        <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.6}}
          className="text-4xl text-center font-serif text-[#d4af37] mb-4">
          Protocolos Psicodélicos – Casa Cora
        </motion.h1>

        <PdfViewer file={pdfPath} />

        <div className="mt-6 text-center">
          <a href={pdfPath} target="_blank"
             className="inline-block bg-[#d4af37] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#b48d2b]">
            Abrir en visor nativo
          </a>
        </div>
      </div>
    </section>
  )
}
