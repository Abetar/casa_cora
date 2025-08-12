'use client'
import { useEffect, useRef, useState } from 'react'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js'

// 👉 apúntalo al .js (que ahora sí existe)
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js'

export default function PdfViewer({ file }: { file: string }) {
  const [numPages, setNumPages] = useState(0)
  const [scale, setScale] = useState(1)
  const containerRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState<number>(0)

  useEffect(() => {
    const obs = new ResizeObserver((entries) => setWidth(entries[0].contentRect.width))
    if (containerRef.current) obs.observe(containerRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={containerRef} className="mx-auto w-full max-w-3xl h-[80vh] overflow-auto rounded-lg border border-[#d4af37]/30 bg-white shadow-lg">
      <div className="sticky top-0 z-10 flex items-center gap-3 bg-white/90 backdrop-blur px-3 py-2 border-b">
        <button onClick={() => setScale(s => Math.max(0.6, s - 0.1))} className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200">−</button>
        <span className="text-sm text-gray-700">Zoom {(scale*100).toFixed(0)}%</span>
        <button onClick={() => setScale(s => Math.min(2, s + 0.1))} className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200">+</button>
        <a href={file} target="_blank" className="ml-auto px-3 py-1 rounded bg-[#d4af37] text-white hover:bg-[#b48d2b]">Abrir/Descargar</a>
      </div>

      <Document
        file={file}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        onLoadError={(e) => console.error('PDF load error:', e)}
        loading={<div className="p-6 text-center text-gray-600">Cargando…</div>}
        error={<div className="p-6 text-center text-red-600">No se pudo cargar el PDF.</div>}
      >
        {Array.from({ length: numPages }, (_, i) => (
          <Page
            key={i}
            pageNumber={i + 1}
            width={Math.max(320, Math.min(width, 900)) * scale}
            renderAnnotationLayer={false}
            renderTextLayer={false}
            className="mx-auto my-4"
          />
        ))}
      </Document>
    </div>
  )
}
