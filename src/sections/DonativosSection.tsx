"use client";

import { useState } from "react";
import Image from "next/image";
import { Copy } from "lucide-react";

export default function DonativosSection() {
  const [copiado, setCopiado] = useState<string | null>(null);

  const copiar = async (texto: string, key: string) => {
    try {
      await navigator.clipboard.writeText(texto);
      setCopiado(key);
      setTimeout(() => setCopiado(null), 1500);
    } catch {
      // opcional: fallback
    }
  };

  return (
    <section
      id="donativos"
      className="py-16 px-6"
      style={{
        // Fondo verde con "speckles"
        backgroundColor: "#cfe3d6",
        backgroundImage:
          "radial-gradient(rgba(255,255,255,0.45) 1px, transparent 1px)",
        backgroundSize: "16px 16px",
      }}
    >
      <div className="max-w-3xl mx-auto relative">
        {/* Cinta simulada */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 -rotate-2 w-40 h-6 bg-[#d8c3a5]/90 shadow-md rounded-[2px]" />

        {/* Tarjeta */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-10">
          <h2 className="text-3xl md:text-4xl text-[#1d1d1d] font-serif text-center mb-6">
            Datos para pagos
          </h2>

          {/* Logo (opcional) */}
          <div className="flex justify-center mb-4">
            {/* Cambia la ruta si tu archivo es diferente */}
            <Image
              src="/logo.png"
              alt="Casa Cora"
              width={300}
              height={300}
              style={{ backgroundColor: "#0F0E17", padding: "12px", borderRadius: "8px" }}
              className="object-contain"
            />
          </div>

          {/* Grid con divisor vertical en desktop */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 md:divide-x md:divide-neutral-200">
            {/* Transferencia bancaria */}
            <div>
              <h3 className="text-xl font-semibold text-[#121212] text-center md:text-left">
                Transferencia Bancaria
              </h3>

              <div className="mt-5 space-y-4 text-[#2e2e2e]">
                <p>
                  <span className="font-semibold">Nombre:</span> Casa CORA
                </p>
                <p>
                  <span className="font-semibold">Banco:</span> Cuenca
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <p className="whitespace-nowrap">
                    <span className="font-semibold">Cuenta CLABE:</span>{" "}
                    723969000012525852
                  </p>
                  <button
                    onClick={() => copiar("723969000012525852", "clabe")}
                    className="inline-flex items-center gap-1 text-xs bg-[#ffd1dc] text-[#0f0e17] px-2 py-1 rounded-md border border-[#f5b9c4]"
                    aria-label="Copiar CLABE"
                  >
                    <Copy size={14} />{" "}
                    {copiado === "clabe" ? "Copiado" : "Copiar"}
                  </button>
                </div>
              </div>
            </div>

            {/* Depósito en efectivo */}
            <div className="md:pl-10">
              <h3 className="text-xl font-semibold text-[#121212] text-center md:text-left">
                Depósito en efectivo
              </h3>

              <div className="mt-5 space-y-3 text-[#2e2e2e]">
                <p>
                  <span className="font-semibold">Tienda:</span> Seven Eleven
                </p>
                <ol className="list-decimal pl-5 space-y-2 text-[15px]">
                  <li>
                    Acude a la sucursal y pide al cajero pagar un servicio
                    Dappay.
                  </li>
                  <li>Dicta la referencia de 12 dígitos (abajo).</li>
                  <li>
                    Paga el monto en efectivo + comisión aproximada de $12.00
                    MXN que cobra 7‑Eleven.
                  </li>
                </ol>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 pt-1">
                  <p className="whitespace-nowrap">
                    <span className="font-semibold">Referencia:</span>{" "}
                    028255848199
                  </p>
                  <button
                    onClick={() => copiar("028255848199", "ref")}
                    className="inline-flex items-center gap-1 text-xs bg-[#ffd1dc] text-[#0f0e17] px-2 py-1 rounded-md border border-[#f5b9c4]"
                    aria-label="Copiar referencia"
                  >
                    <Copy size={14} />{" "}
                    {copiado === "ref" ? "Copiado" : "Copiar"}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Nota y contacto */}
          <div className="mt-8 text-center">
            <p className="text-[15px] text-[#333]">
              <span className="font-semibold">Concepto:</span> tu nombre
              completo y/o teléfono celular. Envía tu comprobante por WhatsApp
              para recibir confirmación.
            </p>

            <p className="mt-4 text-lg font-medium text-[#1d1d1d]">
              Envía tu comprobante al:{" "}
              <a
                href="https://wa.me/528132497377"
                target="_blank"
                className="underline decoration-[#d4af37] decoration-2 underline-offset-4 hover:opacity-90"
              >
                813.249.7377
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
