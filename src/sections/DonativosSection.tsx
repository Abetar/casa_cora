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
    <section id="donativos" className="relative py-16 sm:py-20 px-6">
      {/* Fondo ceremonial nativo */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0f0e17]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] via-black/0 to-white/[0.03]" />
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(rgba(212,175,55,0.08) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
      </div>

      <div className="mx-auto max-w-5xl">
        <div
          className="relative overflow-hidden rounded-3xl border shadow-[0_18px_60px_rgba(0,0,0,.55)]"
          style={{
            borderColor: "rgba(212,175,55,0.18)",
            background:
              "radial-gradient(700px 260px at 20% 10%, rgba(212,175,55,0.10) 0%, rgba(212,175,55,0.00) 60%)," +
              "radial-gradient(900px 300px at 85% 85%, rgba(27,61,47,0.16) 0%, rgba(27,61,47,0.00) 55%)," +
              "linear-gradient(180deg, rgba(15,14,23,0.94) 0%, rgba(10,10,14,0.96) 100%)",
          }}
        >
          {/* halos sutiles */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl"
            style={{ background: "rgba(212,175,55,0.14)" }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-28 -left-28 h-80 w-80 rounded-full blur-3xl"
            style={{ background: "rgba(27,61,47,0.18)" }}
          />

          <div className="relative p-6 sm:p-8 md:p-10">
            <div className="text-center">
              <p className="text-xs tracking-[0.18em] uppercase text-white/55">
                Donativos
              </p>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-[#d4af37]">
                Datos para pagos
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-white/70">
                Si deseas sostener Casa Cora, aquí están los datos para
                transferencia o depósito. Gracias por contribuir a este espacio.
              </p>
            </div>

            {/* Logo (opcional) */}
            <div className="mt-8 flex justify-center">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 backdrop-blur-md">
                <Image
                  src="/logo.png"
                  alt="Casa Cora"
                  width={190}
                  height={190}
                  className="h-auto w-[140px] sm:w-[160px] object-contain opacity-95"
                  priority={false}
                />
              </div>
            </div>

            {/* Grid */}
            <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-10 md:divide-x md:divide-white/10">
              {/* Transferencia */}
              <div>
                <h3 className="font-serif text-xl text-white">
                  Transferencia bancaria
                </h3>

                <div className="mt-5 space-y-4 text-white/80">
                  <p>
                    <span className="text-white/55">Nombre:</span>{" "}
                    <span className="text-white/90">Casa CORA</span>
                  </p>
                  <p>
                    <span className="text-white/55">Banco:</span>{" "}
                    <span className="text-white/90">Cuenca</span>
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <p className="whitespace-nowrap">
                      <span className="text-white/55">Cuenta CLABE:</span>{" "}
                      <span className="font-medium text-white/90">
                        723969000012525852
                      </span>
                    </p>

                    <button
                      onClick={() => copiar("723969000012525852", "clabe")}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d4af37]/35 bg-black/30 px-4 py-2 text-xs font-medium text-[#d4af37] transition hover:border-[#d4af37]/55 hover:bg-black/40"
                      aria-label="Copiar CLABE"
                      type="button"
                    >
                      <Copy size={14} />
                      {copiado === "clabe" ? "Copiado" : "Copiar"}
                    </button>
                  </div>
                </div>
              </div>

              {/* Depósito */}
              <div className="md:pl-10">
                <h3 className="font-serif text-xl text-white">
                  Depósito en efectivo
                </h3>

                <div className="mt-5 space-y-4 text-white/80">
                  <p>
                    <span className="text-white/55">Tienda:</span>{" "}
                    <span className="text-white/90">Seven Eleven</span>
                  </p>

                  <ol className="list-decimal pl-5 space-y-2 text-sm leading-relaxed text-white/75">
                    <li>
                      Acude a la sucursal y pide al cajero pagar un servicio
                      Dappay.
                    </li>
                    <li>Dicta la referencia de 12 dígitos (abajo).</li>
                    <li>
                      Paga el monto en efectivo + comisión aproximada de $12.00
                      MXN que cobra 7-Eleven.
                    </li>
                  </ol>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <p className="whitespace-nowrap">
                      <span className="text-white/55">Referencia:</span>{" "}
                      <span className="font-medium text-white/90">
                        028255848199
                      </span>
                    </p>

                    <button
                      onClick={() => copiar("028255848199", "ref")}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d4af37]/35 bg-black/30 px-4 py-2 text-xs font-medium text-[#d4af37] transition hover:border-[#d4af37]/55 hover:bg-black/40"
                      aria-label="Copiar referencia"
                      type="button"
                    >
                      <Copy size={14} />
                      {copiado === "ref" ? "Copiado" : "Copiar"}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Nota + WhatsApp */}
            <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-md">
              <p className="text-sm text-white/75 leading-relaxed">
                <span className="text-white/55">Concepto:</span>{" "}
                <span className="text-white/90">
                  tu nombre completo y/o teléfono celular
                </span>
                . Envía tu comprobante por WhatsApp para recibir confirmación.
              </p>

              <p className="mt-4 text-base sm:text-lg font-medium text-white/85">
                Envía tu comprobante al{" "}
                <a
                  href="https://wa.me/528132497377"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-[#d4af37]/80 decoration-2 underline-offset-4 hover:opacity-90"
                >
                  813.249.7377
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
