"use client";

import { useEffect, useMemo, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  Leaf,
  HeartHandshake,
  FlaskConical,
  Flame,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Product = {
  id: string;
  section: "productos" | "servicios" | "protocolos" | "desarrollo";
  name: string;
  desc?: string; // línea principal
  details?: string[]; // bullets extra
  price: number; // 0 = donación / cotización
  priceLabel?: string; // si quieres “desde $...”
};

type CartItem = { id: string; name: string; price: number; qty: number };

const RAW_WA = process.env.NEXT_PUBLIC_WA_NUMBER || "";

// Paleta Casa Cora (editorial/nocturna)
const bg = "#0f0e17";
const gold = "#d4af37";
const botanic = "#1B3D2F";

const money = (v: number) =>
  new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(v);

function waPhone(): string | null {
  const digits = RAW_WA.trim().replace(/[^\d]/g, "");
  if (!/^\d{10,15}$/.test(digits)) return null;
  return digits;
}

function slugId(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const CATALOG: Product[] = [
  // 🌿 PRODUCTOS
  {
    id: "prod-gel-terapeutico-120g",
    section: "productos",
    name: "Gel Terapéutico Casa Cora – 120 g",
    desc: "Uso tópico · Bienestar corporal",
    price: 299,
  },
  {
    id: "prod-trip-enhancer-10ml",
    section: "productos",
    name: "Trip Enhancer Casa Cora – 10 ml",
    desc: "Gotas sublinguales de terpenos",
    details: ["Potencia o canaliza la experiencia según perfil terpénico"],
    price: 199,
  },
  {
    id: "prod-aceite-cbd-1600-30ml",
    section: "productos",
    name: "Aceite CBD Casa Cora – 1600 mg / 30 ml",
    desc: "CBD con terpenos personalizados",
    details: [
      "Perfiles disponibles: Ansiedad y estrés · Insomnio · Dolor · Energizante",
    ],
    price: 980,
  },

  // 🧠 SERVICIOS TERAPÉUTICOS
  {
    id: "srv-sesion-psicologica",
    section: "servicios",
    name: "Sesión Psicológica",
    desc: "Acompañamiento psicológico tradicional (sin cannabis)",
    price: 420,
  },
  {
    id: "srv-consulta-psicocannabica",
    section: "servicios",
    name: "Consulta Psicocannábica",
    desc: "Sesión individual con acompañamiento terapéutico",
    price: 1499,
    priceLabel: "desde $1,499 MXN",
  },
  {
    id: "srv-inmersion-psicoterapeutica",
    section: "servicios",
    name: "Inmersión Psicoterapéutica",
    desc: "Proceso individual guiado",
    price: 12500,
    priceLabel: "desde $12,500 MXN",
  },
  {
    id: "srv-inmersion-psicoterapeutica-premium",
    section: "servicios",
    name: "Inmersión Psicoterapéutica Premium",
    desc: "Proceso extendido con seguimiento y hospedaje",
    price: 25000,
    priceLabel: "desde $25,000 MXN",
  },

  // 🧪 PROTOCOLOS EXPERIMENTALES
  {
    id: "prot-rehabilitacion-inmersiva-15d",
    section: "protocolos",
    name: "Rehabilitación Inmersiva – 15 días",
    desc: "Acompañamiento intensivo con hospedaje y comidas",
    price: 49000,
    priceLabel: "desde $49,000 MXN",
  },
  {
    id: "prot-oncologico-experimental",
    section: "protocolos",
    name: "Protocolo Experimental Oncológico",
    desc: "Evaluación y acompañamiento especializado",
    price: 59000,
    priceLabel: "desde $59,000 MXN",
  },

  // 🔥 DESARROLLO PERSONAL
  {
    id: "dev-coaching-personal-espiritual",
    section: "desarrollo",
    name: "Coaching Personal–Espiritual",
    desc: "Sesión individual de claridad y dirección consciente",
    price: 420,
  },
  {
    id: "dev-circulo-masculino-420",
    section: "desarrollo",
    name: "Círculo Masculino 420",
    desc: "Espacio grupal de escucha y responsabilidad",
    price: 0,
    priceLabel: "donación voluntaria",
  },
];

type MenuSection = {
  id: Product["section"];
  title: string;
  Icon: LucideIcon;
  accent: "gold" | "botanic";
  note?: string;
};

const SECTIONS: MenuSection[] = [
  { id: "productos", title: "PRODUCTOS", Icon: Leaf, accent: "botanic" },
  {
    id: "servicios",
    title: "SERVICIOS TERAPÉUTICOS",
    Icon: HeartHandshake,
    accent: "gold",
  },
  {
    id: "protocolos",
    title: "PROTOCOLOS EXPERIMENTALES",
    Icon: FlaskConical,
    accent: "gold",
    note: "(Sujeto a evaluación y criterios de admisión)",
  },
  {
    id: "desarrollo",
    title: "DESARROLLO PERSONAL",
    Icon: Flame,
    accent: "gold",
  },
];

export default function TiendaCasaCoraPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [form, setForm] = useState({ name: "", phone: "", note: "" });
  const [openCart, setOpenCart] = useState(false);
  const { toast } = useToast();

  // Persistencia
  useEffect(() => {
    const s = localStorage.getItem("cc_cart");
    if (s) setCart(JSON.parse(s));
    const f = localStorage.getItem("cc_form");
    if (f) setForm(JSON.parse(f));
  }, []);
  useEffect(() => localStorage.setItem("cc_cart", JSON.stringify(cart)), [cart]);
  useEffect(() => localStorage.setItem("cc_form", JSON.stringify(form)), [form]);

  const total = useMemo(
    () => cart.reduce((a, i) => a + i.price * i.qty, 0),
    [cart]
  );
  const itemsCount = useMemo(() => cart.reduce((a, i) => a + i.qty, 0), [cart]);
  const canSend = cart.length > 0 && form.name.trim() && form.phone.trim();

  function waLink() {
    const phone = waPhone();
    const lines = cart
      .map((i) => {
        const subtotal = i.price * i.qty;
        const subtotalTxt =
          i.price > 0 ? money(subtotal) : "Donación / acordar";
        return `• ${i.name} ×${i.qty} — ${subtotalTxt}`;
      })
      .join("\n");

    const datos =
      `\n*Nombre:* ${form.name}` +
      `\n*Teléfono:* ${form.phone}` +
      (form.note ? `\n*Notas:* ${form.note}` : "");

    const msg =
      `*Casa Cora* — Pedido de Tienda\n\n${lines}\n\n` +
      `*Total estimado:* ${money(total)}\n` +
      `_Nota: items con donación/cotización pueden variar._\n` +
      `${datos}`;

    return phone
      ? `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
          msg
        )}`
      : "#";
  }

  // Carrito
  function add(p: { id: string; name: string; price: number }) {
    setCart((prev) => {
      const f = prev.find((x) => x.id === p.id);
      return f
        ? prev.map((x) => (x.id === p.id ? { ...x, qty: x.qty + 1 } : x))
        : [...prev, { ...p, qty: 1 }];
    });
    toast({
      title: "Añadido al carrito",
      description: p.name,
      variant: "success",
      durationMs: 1400,
    });
  }

  function dec(id: string) {
    setCart((prev) =>
      prev
        .map((x) => (x.id === id ? { ...x, qty: x.qty - 1 } : x))
        .filter((x) => x.qty > 0)
    );
  }

  function setQty(id: string, qty: number) {
    setCart((prev) =>
      prev
        .map((x) =>
          x.id === id ? { ...x, qty: Math.max(0, Math.floor(qty) || 0) } : x
        )
        .filter((x) => x.qty > 0)
    );
  }

  function removeItem(id: string) {
    setCart((prev) => prev.filter((x) => x.id !== id));
    toast({ title: "Eliminado", variant: "info", durationMs: 1100 });
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <section className="relative min-h-screen px-5 py-12 sm:px-8" style={{marginTop: '80px'}}>
      {/* Fondo editorial nocturno */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0" style={{ background: bg }} />
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] via-black/0 to-white/[0.03]" />
      </div>

      <div className="mx-auto w-full max-w-3xl">
        {/* Header */}
        <header className="pb-6">
          <div className="text-left">
            <h1 className="font-serif text-2xl sm:text-3xl text-white">
              CASA CORA
            </h1>
            <p className="mt-2 text-sm sm:text-base text-white/70">
              Menú de Servicios y Productos
            </p>
          </div>
          <div className="mt-6 h-px w-full bg-white/15" />
        </header>

        {/* Menú */}
        <div className="space-y-10">
          {SECTIONS.map((sec) => {
            const items = CATALOG.filter((p) => p.section === sec.id);
            if (!items.length) return null;

            const accentColor = sec.accent === "botanic" ? botanic : gold;

            return (
              <section key={sec.id} aria-label={sec.title}>
                <div className="flex items-center gap-2">
                  <sec.Icon
                    className="h-4 w-4"
                    aria-hidden="true"
                    style={{ color: accentColor, opacity: 0.95 }}
                  />
                  <h2
                    className="text-xs font-semibold tracking-[0.16em]"
                    style={{ color: accentColor }}
                  >
                    {sec.title}
                  </h2>
                </div>

                {sec.note && (
                  <p className="mt-3 text-xs text-white/60 italic">{sec.note}</p>
                )}

                <div className="mt-4 space-y-6">
                  {items.map((p, idx) => {
                    const inCart = cart.find((x) => x.id === p.id);

                    const priceText =
                      p.priceLabel ??
                      (p.price > 0 ? `${money(p.price)} MXN` : "Cotización");

                    return (
                      <div key={p.id}>
                        <div className="flex items-start justify-between gap-4">
                          <div className="min-w-0">
                            <h3 className="text-sm sm:text-base font-semibold text-white">
                              {p.name}
                            </h3>

                            {p.desc && (
                              <p className="mt-1 text-xs sm:text-sm text-white/70 leading-relaxed">
                                {p.desc}
                              </p>
                            )}

                            {p.details?.length ? (
                              <ul className="mt-2 space-y-1 text-xs sm:text-sm text-white/65">
                                {p.details.map((d) => (
                                  <li key={d} className="leading-relaxed">
                                    {d}
                                  </li>
                                ))}
                              </ul>
                            ) : null}

                            <p className="mt-2 text-xs sm:text-sm text-white/80">
                              <span className="font-semibold text-white/85">
                                Precio:
                              </span>{" "}
                              <span className="font-semibold text-white">
                                {priceText}
                              </span>
                            </p>
                          </div>

                          <div className="shrink-0 flex flex-col items-end gap-2">
                            <button
                              onClick={() =>
                                add({
                                  id: p.id,
                                  name: p.name,
                                  price: Math.max(p.price, 0),
                                })
                              }
                              className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold transition"
                              style={{
                                background:
                                  "linear-gradient(90deg, rgba(27,61,47,1) 0%, rgba(38,84,68,1) 100%)",
                                color: "white",
                              }}
                              aria-label={`Agregar ${p.name}`}
                            >
                              Agregar{" "}
                              <ArrowRight className="h-4 w-4 opacity-90" />
                            </button>

                            {inCart && (
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => dec(p.id)}
                                  className="rounded-full border px-2 py-1 text-xs text-white/85"
                                  style={{
                                    borderColor: "rgba(255,255,255,0.14)",
                                    background: "rgba(255,255,255,0.04)",
                                  }}
                                  aria-label="Disminuir"
                                >
                                  –
                                </button>

                                <span className="min-w-6 text-center text-xs font-semibold text-white">
                                  {inCart.qty}
                                </span>

                                <button
                                  onClick={() =>
                                    add({
                                      id: p.id,
                                      name: p.name,
                                      price: Math.max(p.price, 0),
                                    })
                                  }
                                  className="rounded-full border px-2 py-1 text-xs text-white/85"
                                  style={{
                                    borderColor: "rgba(255,255,255,0.14)",
                                    background: "rgba(255,255,255,0.04)",
                                  }}
                                  aria-label="Aumentar"
                                >
                                  +
                                </button>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Separador “—” */}
                        {idx < items.length - 1 && (
                          <div className="mt-5">
                            <div className="text-white/50 text-sm">—</div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 h-px w-full bg-white/12" />
              </section>
            );
          })}
        </div>

        <p className="mt-8 text-xs text-white/60 italic">
          Casa Cora opera bajo un enfoque medicinal, ético y responsable. Todos
          los servicios están sujetos a evaluación previa.
        </p>

        {/* Datos paciente */}
        <div
          className="mt-10 rounded-3xl border bg-white/[0.03] p-5 sm:p-6 backdrop-blur-md shadow-[0_16px_55px_rgba(0,0,0,.35)]"
          style={{ borderColor: "rgba(212,175,55,0.14)" }}
        >
          <h3 className="font-serif text-lg text-white">Datos del paciente</h3>
          <p className="mt-2 text-xs text-white/60">
            Se incluirán en el mensaje de WhatsApp.
          </p>

          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <input
              className="rounded-2xl border bg-black/30 px-4 py-3 text-sm text-white/90 outline-none transition focus:ring-2"
              style={{ borderColor: "rgba(255,255,255,0.12)" }}
              placeholder="Nombre completo"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            />
            <input
              className="rounded-2xl border bg-black/30 px-4 py-3 text-sm text-white/90 outline-none transition focus:ring-2"
              style={{ borderColor: "rgba(255,255,255,0.12)" }}
              placeholder="Teléfono de contacto"
              value={form.phone}
              onChange={(e) =>
                setForm((f) => ({ ...f, phone: e.target.value }))
              }
            />
            <textarea
              className="sm:col-span-2 rounded-2xl border bg-black/30 px-4 py-3 text-sm text-white/90 outline-none transition focus:ring-2"
              style={{ borderColor: "rgba(255,255,255,0.12)" }}
              rows={2}
              placeholder="Notas (opcional)"
              value={form.note}
              onChange={(e) => setForm((f) => ({ ...f, note: e.target.value }))}
            />
          </div>
        </div>

        {/* Barra sticky */}
        <div className="sticky bottom-4 z-40 mt-10 flex w-full justify-center px-1">
          <div
            className="flex w-full max-w-3xl items-center justify-between gap-3 rounded-full border px-4 py-3 backdrop-blur-md shadow-[0_18px_60px_rgba(0,0,0,.55)]"
            style={{
              borderColor: "rgba(212,175,55,0.18)",
              background:
                "linear-gradient(180deg, rgba(15,14,23,0.92) 0%, rgba(10,10,14,0.92) 100%)",
            }}
          >
            <button
              onClick={() => setOpenCart(true)}
              className="rounded-full px-3 py-2 text-sm font-semibold text-white/90 transition hover:bg-white/[0.06]"
              aria-label="Abrir carrito"
            >
              Carrito <span className="text-white/60">({itemsCount})</span>{" "}
              <span className="text-white/35">·</span>{" "}
              <span className="text-[#d4af37]">{money(total)}</span>
            </button>

            <a
              href={canSend ? waLink() : "#"}
              onClick={(e) => {
                if (!canSend) {
                  e.preventDefault();
                  if (cart.length === 0) {
                    toast({
                      title: "Carrito vacío",
                      description: "Agrega al menos un producto o servicio.",
                      variant: "destructive",
                    });
                    return;
                  }
                  toast({
                    title: "Datos incompletos",
                    description: "Completa nombre y teléfono del paciente.",
                    variant: "destructive",
                  });
                  return;
                }
                if (!waPhone()) {
                  e.preventDefault();
                  toast({
                    title: "Número de WhatsApp no configurado",
                    description:
                      "Revisa NEXT_PUBLIC_WA_NUMBER en tu .env (solo dígitos, con código de país).",
                    variant: "destructive",
                  });
                }
              }}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-4 py-2 text-sm font-semibold transition"
              style={{
                background: canSend ? gold : "rgba(255,255,255,0.12)",
                color: canSend ? "#0f0e17" : "rgba(255,255,255,0.55)",
                cursor: canSend ? "pointer" : "not-allowed",
              }}
            >
              Enviar por WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Drawer carrito */}
      {openCart && (
        <div
          className="fixed inset-0 z-50 flex items-end md:items-stretch md:justify-end"
          role="dialog"
          aria-modal="true"
          onKeyDown={(e) => e.key === "Escape" && setOpenCart(false)}
        >
          <div
            className="absolute inset-0 bg-black/65"
            onClick={() => setOpenCart(false)}
          />

          <div
            className="relative z-10 h-[82vh] w-full rounded-t-3xl border bg-[#0f0e17] p-5 shadow-[0_26px_90px_rgba(0,0,0,.75)] md:h-full md:max-w-md md:rounded-none"
            style={{ borderColor: "rgba(212,175,55,0.18)" }}
          >
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-serif text-xl text-white">
                Tu carrito{" "}
                <span className="text-white/45 text-sm">({itemsCount})</span>
              </h3>

              <button
                onClick={() => setOpenCart(false)}
                className="rounded-full border px-3 py-1 text-sm text-white/85 transition hover:bg-white/[0.06]"
                style={{ borderColor: "rgba(255,255,255,0.14)" }}
                aria-label="Cerrar carrito"
              >
                Cerrar
              </button>
            </div>

            <div className="space-y-3 overflow-y-auto pb-28">
              {cart.length === 0 && (
                <p className="text-sm text-white/65">
                  Aún no agregas productos o servicios.
                </p>
              )}

              {cart.map((it) => (
                <div
                  key={it.id}
                  className="flex items-center justify-between rounded-2xl border bg-white/[0.03] px-3 py-3"
                  style={{ borderColor: "rgba(255,255,255,0.10)" }}
                >
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-white truncate">
                      {it.name}
                    </div>
                    <div className="mt-1 text-xs text-white/60">
                      {it.price > 0 ? money(it.price) : "Donación / cotización"} ·
                      Subtotal{" "}
                      <span className="text-[#d4af37]">
                        {it.price > 0
                          ? money(it.price * it.qty)
                          : "Acordar"}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => dec(it.id)}
                      className="rounded-full border px-3 py-1 text-sm text-white/85"
                      style={{
                        borderColor: "rgba(255,255,255,0.14)",
                        background: "rgba(255,255,255,0.04)",
                      }}
                      aria-label="Disminuir"
                    >
                      –
                    </button>

                    <input
                      type="number"
                      min={1}
                      value={it.qty}
                      onChange={(e) => setQty(it.id, Number(e.target.value))}
                      className="w-16 rounded-xl border bg-black/25 px-2 py-1 text-center text-sm text-white/90 outline-none"
                      style={{ borderColor: "rgba(255,255,255,0.14)" }}
                    />

                    <button
                      onClick={() =>
                        add({ id: it.id, name: it.name, price: it.price })
                      }
                      className="rounded-full border px-3 py-1 text-sm text-white/85"
                      style={{
                        borderColor: "rgba(255,255,255,0.14)",
                        background: "rgba(255,255,255,0.04)",
                      }}
                      aria-label="Aumentar"
                    >
                      +
                    </button>

                    <button
                      onClick={() => removeItem(it.id)}
                      className="ml-1 rounded-full border px-2.5 py-1 text-xs font-bold transition"
                      style={{
                        borderColor: "rgba(255,255,255,0.14)",
                        background: "rgba(255,255,255,0.04)",
                        color: "rgba(255,255,255,0.80)",
                      }}
                      aria-label="Eliminar"
                      title="Eliminar"
                    >
                      ×
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="absolute bottom-0 left-0 right-0 border-t bg-[#0f0e17] p-4"
              style={{ borderColor: "rgba(255,255,255,0.10)" }}
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm text-white/70">Total estimado</span>
                <span className="text-base font-semibold text-[#d4af37]">
                  {money(total)}
                </span>
              </div>

              <div className="flex items-center justify-between gap-3">
                <button
                  onClick={() => {
                    clearCart();
                    toast({ title: "Carrito vaciado", variant: "info" });
                  }}
                  className="rounded-xl border px-3 py-2 text-sm font-semibold text-white/85 transition hover:bg-white/[0.06]"
                  style={{ borderColor: "rgba(255,255,255,0.14)" }}
                >
                  Vaciar
                </button>

                <a
                  href={canSend ? waLink() : "#"}
                  onClick={(e) => {
                    if (!canSend) {
                      e.preventDefault();
                      if (cart.length === 0) {
                        toast({
                          title: "Carrito vacío",
                          description: "Agrega al menos un producto o servicio.",
                          variant: "destructive",
                        });
                        return;
                      }
                      toast({
                        title: "Datos incompletos",
                        description: "Completa nombre y teléfono del paciente.",
                        variant: "destructive",
                      });
                      return;
                    }
                    if (!waPhone()) {
                      e.preventDefault();
                      toast({
                        title: "Número de WhatsApp no configurado",
                        description:
                          "Revisa NEXT_PUBLIC_WA_NUMBER en tu .env (solo dígitos, con código de país).",
                        variant: "destructive",
                      });
                      return;
                    }
                    setOpenCart(false);
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full px-4 py-2 text-sm font-semibold transition"
                  style={{
                    background: canSend ? gold : "rgba(255,255,255,0.12)",
                    color: canSend ? "#0f0e17" : "rgba(255,255,255,0.55)",
                    cursor: canSend ? "pointer" : "not-allowed",
                  }}
                >
                  Enviar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
