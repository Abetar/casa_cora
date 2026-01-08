"use client";

import { useEffect, useMemo, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

type Props = {
  file: string;
};

export default function PdfViewer({ file }: Props) {
  const [numPages, setNumPages] = useState<number>(0);

  /**
   * ✅ Worker SIEMPRE igual a la versión de la API que usa react-pdf
   * Evita mismatch aunque tengas 2 pdfjs-dist instalados por pnpm.
   */
  useEffect(() => {
    // Para pdfjs v5: build/pdf.worker.min.mjs es el estándar en CDN
    pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
  }, []);

  const width = useMemo(() => {
    if (typeof window === "undefined") return 900;
    const w = Math.min(window.innerWidth - 48, 980);
    return Math.max(320, w);
  }, []);

  return (
    <div className="w-full">
      <div
        className="rounded-3xl border bg-white/[0.03] p-3 sm:p-4 backdrop-blur-md shadow-[0_16px_55px_rgba(0,0,0,.35)]"
        style={{ borderColor: "rgba(212,175,55,0.14)" }}
      >
        <Document
          file={file}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          onLoadError={(e) => console.error("PDF load error:", e)}
          loading={
            <div className="p-8 text-center text-sm text-white/65">
              Cargando documento…
            </div>
          }
          error={
            <div className="p-8 text-center text-sm text-white/70">
              No se pudo cargar el PDF. Intenta abrirlo en visor nativo.
            </div>
          }
        >
          <div className="flex flex-col gap-4">
            {Array.from({ length: numPages }, (_, i) => (
              <div key={i} className="overflow-hidden rounded-2xl bg-black/10">
                <Page
                  pageNumber={i + 1}
                  width={width}
                  renderTextLayer={false}
                  renderAnnotationLayer={true}
                />
              </div>
            ))}
          </div>
        </Document>
      </div>

      {numPages > 0 && (
        <p className="mt-4 text-center text-xs text-white/55">
          {numPages} páginas · Desplaza para leer
        </p>
      )}
    </div>
  );
}
