"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ShoppingCart,
  MessageCircle,
  BookOpen,
  CalendarDays,
  FileText,
  Sparkles,
  ShieldCheck,
  Download,
  CheckCircle2,
  HeartHandshake,
  Leaf,
  Brain,
  Gift,
  Zap,
  ChevronRight,
  X,
} from "lucide-react";

const BRAND = "#1B3D2F";
const MP_LINK = "https://mpago.la/2ctwFwD";
const WA_LINK =
  "https://wa.me/5218132497377?text=Quiero%20saber%20m%C3%A1s%20del%20libro%20de%20paternidad%2C%20por%20favor";

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function PaternidadConAmorPage() {
  return (
    <main
      className="min-h-screen"
      style={{
        background:
          "radial-gradient(900px 700px at 15% 10%, rgba(212,175,55,0.12) 0%, rgba(212,175,55,0) 60%)," +
          "radial-gradient(900px 700px at 80% 20%, rgba(27,61,47,0.18) 0%, rgba(27,61,47,0) 60%)," +
          "radial-gradient(900px 700px at 40% 90%, rgba(255,209,220,0.14) 0%, rgba(255,209,220,0) 60%)," +
          "#fbf6ef",
      }}
    >
      <div className="mx-auto max-w-6xl px-4 pb-28 pt-24">
        {/* Hero */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {/* Copy Card */}
          <motion.section
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="rounded-3xl border bg-white/70 p-6 shadow-[0_16px_50px_rgba(0,0,0,.08)] backdrop-blur-md"
            style={{ borderColor: "rgba(27,61,47,0.16)" }}
          >
            <h1
              className="text-4xl font-extrabold leading-tight sm:text-5xl"
              style={{ color: "#243535" }}
            >
              Papá: no tienes que improvisar.
              <br />
              Aquí tienes <span style={{ color: BRAND }}>1,095 días</span>{" "}
              listos.
            </h1>

            <p
              className="mt-4 text-base leading-relaxed"
              style={{ color: "rgba(36,53,53,.78)" }}
            >
              <b>Guía y Bitácora 0–3 años (Papás)</b> — porque a veces lo que
              falta no es amor… es <b>estructura</b>. Hecho para <b>imprimir</b>
              , <b>encuadernar</b> y guardarse como <b>recuerdo familiar</b> al
              cumplir 3 años.
            </p>

            {/* KPIs */}
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <Kpi
                icon={<CalendarDays size={18} />}
                value="1,095"
                label="días listos"
              />
              <Kpi
                icon={<FileText size={18} />}
                value="2"
                label="páginas por día"
              />
              <Kpi
                icon={<CheckCircle2 size={18} />}
                value="6"
                label="actividades + Plan B"
              />
            </div>

            {/* Chips */}
            <div className="mt-5 flex flex-wrap gap-2">
              <Chip icon={<BookOpen size={14} />}>Bitácora imprimible</Chip>
              <Chip icon={<Leaf size={14} />}>Nutrición robusta</Chip>
              <Chip icon={<Brain size={14} />}>Crianza realista</Chip>
              <Chip icon={<Gift size={14} />}>Regalo perfecto</Chip>
              <Chip icon={<Zap size={14} />}>Acceso inmediato</Chip>
            </div>

            {/* CTAs */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={MP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-extrabold text-white",
                  "shadow-[0_16px_50px_rgba(0,0,0,.12)] active:translate-y-[1px]"
                )}
                style={{
                  background: `linear-gradient(135deg, ${BRAND} 0%, rgba(27,61,47,0.85) 100%)`,
                }}
              >
                <ShoppingCart size={18} />
                Comprar ahora
                <ChevronRight size={18} className="opacity-90" />
              </a>

              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center justify-center gap-2 rounded-2xl border px-5 py-3 text-sm font-extrabold",
                  "bg-white/70 active:translate-y-[1px]"
                )}
                style={{
                  borderColor: "rgba(27,61,47,0.18)",
                  color: BRAND,
                }}
              >
                <MessageCircle size={18} />
                Dudas por WhatsApp
              </a>
            </div>

            <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold">
              <Pill icon={<ShieldCheck size={14} />}>
                Pago seguro (Mercado Pago)
              </Pill>
              <Pill icon={<Download size={14} />}>Descarga inmediata</Pill>
            </div>
          </motion.section>

          {/* Visual Card */}
          <motion.section
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
            className="rounded-3xl border bg-white/60 p-6 shadow-[0_16px_50px_rgba(0,0,0,.08)] backdrop-blur-md"
            style={{ borderColor: "rgba(27,61,47,0.16)" }}
          >
            <div
              className="relative w-full overflow-hidden rounded-3xl border"
              style={{
                borderColor: "rgba(27,61,47,0.16)",
                background:
                  "linear-gradient(145deg, rgba(27,61,47,.10), rgba(212,175,55,.10))",
                aspectRatio: "4 / 5",
              }}
            >
              {/* Imagen */}
              <Image
                src="/banner.jpeg" // ✅ cambia esto a tu imagen real
                alt="Paternidad con Amor — Portada"
                fill
                priority
                className="object-cover"
              />

              {/* Overlay suave (premium) */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.18) 55%, rgba(0,0,0,0.38) 100%)",
                }}
              />

              {/* Badge superior */}
              <div className="absolute left-4 top-4">
                <span
                  className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-extrabold"
                  style={{
                    borderColor: "rgba(255,255,255,0.35)",
                    background: "rgba(255,255,255,0.18)",
                    color: "rgba(255,255,255,0.95)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <Sparkles size={14} />
                  Guía + Bitácora 0–3
                </span>
              </div>
            </div>
          </motion.section>
        </div>

        {/* ¿Qué incluye? */}
        <SectionCard title="¿Qué incluye?">
          <Ul>
            <Li icon={<CalendarDays size={16} />}>
              <b>Guía Día a Día (0–3):</b> 1,095 días con 2 páginas por día
              (Actividades + Bitácora).
            </Li>
            <Li icon={<CheckCircle2 size={16} />}>
              <b>Actividades realistas:</b> 6 por día, con variación
              fácil/retadora y <b>Plan B</b> para días difíciles.
            </Li>
            <Li icon={<BookOpen size={16} />}>
              <b>Bitácora imprimible:</b> sueño, alimentación, vínculo,
              crisis/berrinche, gratitud y “mejor recuerdo del día”.
            </Li>
            <Li icon={<Leaf size={16} />}>
              <b>Nutrición robusta:</b> 12 menús (4 por año), alternativas por
              selectividad, lista de compras + batch cooking.
            </Li>
            <Li icon={<FileText size={16} />}>
              <b>Recetario + plantillas:</b> 24 recetas y formatos de registro
              para hacerlo práctico.
            </Li>
            <Li icon={<HeartHandshake size={16} />}>
              <b>Hitos 1/2/3 años:</b> páginas especiales para celebrar y
              guardar memoria familiar.
            </Li>
          </Ul>
        </SectionCard>

        {/* ¿Para quién es? */}
        <SectionCard title="¿Para quién es?">
          <div className="grid gap-3 sm:grid-cols-3">
            <Kpi
              icon={<BookOpen size={18} />}
              value="Papás nuevos"
              label="que quieren una guía clara desde el día 1"
            />
            <Kpi
              icon={<CalendarDays size={18} />}
              value="Papás ocupados"
              label="estructura suave, sin culpa"
            />
            <Kpi
              icon={<Gift size={18} />}
              value="Regalo"
              label="para baby shower / nacimiento"
            />
          </div>
          <p className="mt-3 text-sm" style={{ color: "rgba(27,61,47,0.70)" }}>
            Este material no sustituye evaluación médica. Si algo te preocupa,
            consulta a tu pediatra.
          </p>
        </SectionCard>

        {/* Cómo funciona */}
        <SectionCard title="Cómo funciona (simple)">
          <Ul>
            <Li icon={<ShoppingCart size={16} />}>
              <b>1) Compra</b> con Mercado Pago.
            </Li>
            <Li icon={<Download size={16} />}>
              <b>2) Acceso inmediato:</b> descarga PDF (impresión) + DOCX
              (editable) + ZIP (plantillas).
            </Li>
            <Li icon={<CheckCircle2 size={16} />}>
              <b>3) Un día a la vez:</b> haz 1–3 actividades y registra el
              “mejor recuerdo del día”.
            </Li>
          </Ul>

          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={MP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-extrabold text-white shadow-[0_16px_50px_rgba(0,0,0,.12)] active:translate-y-[1px]"
              style={{
                background: `linear-gradient(135deg, ${BRAND} 0%, rgba(27,61,47,0.85) 100%)`,
              }}
            >
              <ShoppingCart size={18} />
              Comprar ahora
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border bg-white/70 px-5 py-3 text-sm font-extrabold active:translate-y-[1px]"
              style={{ borderColor: "rgba(27,61,47,0.18)", color: BRAND }}
            >
              <MessageCircle size={18} />
              Preguntar por WhatsApp
            </a>
          </div>
        </SectionCard>

        {/* FAQ */}
        <SectionCard title="Preguntas frecuentes">
          <Faq
            q="¿La compra es inmediata?"
            a="Sí. Al pagar, obtienes acceso para descargar el material (PDF / DOCX / ZIP)."
          />
          <Faq
            q="¿Puedo imprimir solo una parte?"
            a="Sí. Puedes imprimir por semanas/meses. Recomendación: imprime 4 páginas primero para calibrar impresora y márgenes."
          />
          <Faq
            q="¿Y si me salto días?"
            a="Continúas donde vas. No hay “atraso”: hay vida real. La constancia suave vale más que la perfección."
          />
          <Faq
            q="¿Cómo pido soporte?"
            a="WhatsApp: 81 3249 7377. El botón abre un mensaje prellenado."
          />
        </SectionCard>
      </div>

      {/* Floating CTA (minimizable) */}
      <FloatingCTA />
    </main>
  );
}

function Kpi({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div
      className="rounded-2xl border bg-white px-4 py-4"
      style={{ borderColor: "rgba(27,61,47,0.16)" }}
    >
      <div className="flex items-center gap-2 text-lg font-extrabold text-[#243535]">
        {icon}
        {value}
      </div>
      <div className="mt-1 text-xs font-semibold text-[rgba(27,61,47,0.70)]">
        {label}
      </div>
    </div>
  );
}

function Chip({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-2 text-xs font-extrabold"
      style={{ borderColor: "rgba(27,61,47,0.16)", color: "#243535" }}
    >
      {icon}
      {children}
    </span>
  );
}

function Pill({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full border px-3 py-1"
      style={{
        borderColor: "rgba(27,61,47,0.16)",
        background: "rgba(255,255,255,0.55)",
        color: "rgba(27,61,47,0.75)",
      }}
    >
      {icon}
      {children}
    </span>
  );
}

function SectionCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className="mt-6 rounded-3xl border bg-white/70 p-6 shadow-[0_16px_50px_rgba(0,0,0,.08)] backdrop-blur-md"
      style={{ borderColor: "rgba(27,61,47,0.16)" }}
    >
      <h2 className="text-xl font-extrabold" style={{ color: "#243535" }}>
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function Ul({ children }: { children: React.ReactNode }) {
  return <ul className="grid gap-3">{children}</ul>;
}

function Li({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <li
      className="flex gap-3 rounded-2xl border bg-white px-4 py-3"
      style={{ borderColor: "rgba(27,61,47,0.14)" }}
    >
      <span
        className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-xl border"
        style={{
          borderColor: "rgba(27,61,47,0.14)",
          background: "rgba(212,175,55,0.12)",
          color: BRAND,
        }}
      >
        {icon}
      </span>
      <div className="text-sm leading-relaxed" style={{ color: "#243535" }}>
        {children}
      </div>
    </li>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details
      className="mt-3 rounded-2xl border bg-white px-4 py-3"
      style={{ borderColor: "rgba(27,61,47,0.14)" }}
    >
      <summary
        className="cursor-pointer text-sm font-extrabold"
        style={{ color: "#243535" }}
      >
        {q}
      </summary>
      <p className="mt-2 text-sm" style={{ color: "rgba(27,61,47,0.75)" }}>
        {a}
      </p>
    </details>
  );
}

function FloatingCTA() {
  const [minimized, setMinimized] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-[60]">
      <AnimatePresence initial={false} mode="wait">
        {!minimized ? (
          <motion.div
            key="expanded"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="w-[min(360px,calc(100vw-32px))] rounded-3xl border bg-white/85 p-3 shadow-[0_16px_50px_rgba(0,0,0,.12)] backdrop-blur-md"
            style={{ borderColor: "rgba(27,61,47,0.16)" }}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div
                  className="flex items-center gap-2 text-sm font-black"
                  style={{ color: "#243535" }}
                >
                  <Sparkles size={16} />
                  Compra hoy
                </div>
                <div
                  className="mt-0.5 text-[12px] font-semibold"
                  style={{ color: "rgba(27,61,47,0.70)" }}
                >
                  Acceso inmediato · PDF + DOCX + plantillas
                </div>
              </div>

              <button
                type="button"
                onClick={() => setMinimized(true)}
                className="rounded-xl border bg-white px-2 py-2"
                style={{
                  borderColor: "rgba(27,61,47,0.14)",
                  color: "#243535",
                }}
                aria-label="Minimizar"
                title="Minimizar"
              >
                <X size={16} />
              </button>
            </div>

            <div className="mt-3 flex items-center justify-between">
              <div className="text-sm font-black" style={{ color: "#243535" }}>
                MXN $49
              </div>
              <span
                className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-extrabold"
                style={{
                  borderColor: "rgba(27,61,47,0.14)",
                  background: "rgba(212,175,55,0.16)",
                  color: "rgba(27,61,47,0.85)",
                }}
              >
                <ShieldCheck size={14} />
                Pago seguro
              </span>
            </div>

            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              <a
                href={MP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-extrabold text-white active:translate-y-[1px]"
                style={{
                  background: `linear-gradient(135deg, ${BRAND} 0%, rgba(27,61,47,0.85) 100%)`,
                }}
              >
                <ShoppingCart size={18} />
                Comprar
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border bg-[#e8faf2] px-4 py-3 text-sm font-extrabold active:translate-y-[1px]"
                style={{
                  borderColor: "rgba(27,61,47,0.14)",
                  color: BRAND,
                }}
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>

            <div
              className="mt-2 text-[12px] font-semibold"
              style={{ color: "rgba(27,61,47,0.70)" }}
            >
              Mensajes 24/7 (respondemos lo antes posible).
            </div>

            <div
              className="mt-3 h-px w-full"
              style={{ background: "rgba(27,61,47,0.10)" }}
            />

            <a
              href={MP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-black active:translate-y-[1px]"
              style={{
                background:
                  "linear-gradient(90deg, rgba(212,175,55,0.22) 0%, rgba(212,175,55,0.10) 100%)",
                color: "#243535",
                border: "1px solid rgba(27,61,47,0.14)",
              }}
            >
              <Download size={18} />
              Empieza hoy — descarga inmediata
            </a>
          </motion.div>
        ) : (
          <motion.button
            key="minimized"
            type="button"
            onClick={() => setMinimized(false)}
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            aria-label="Expandir CTA"
            title="Ver compra"
            className="relative inline-flex h-14 w-14 items-center justify-center rounded-full border shadow-[0_16px_50px_rgba(0,0,0,.14)]"
            style={{
              borderColor: "rgba(27,61,47,0.18)",
              background:
                "linear-gradient(135deg, rgba(27,61,47,0.95) 0%, rgba(27,61,47,0.80) 100%)",
              color: "white",
            }}
          >
            {/* pulso suave */}
            <motion.span
              aria-hidden="true"
              className="absolute inset-0 rounded-full"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(212,175,55,0.00)",
                  "0 0 0 10px rgba(212,175,55,0.12)",
                  "0 0 0 0 rgba(212,175,55,0.00)",
                ],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <Sparkles size={22} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
