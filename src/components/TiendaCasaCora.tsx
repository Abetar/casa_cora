"use client";
import { useEffect, useMemo, useState } from "react";
import { PRODUCTS } from "@/lib/products";
import { useToast } from "@/hooks/use-toast";

type CartItem = { id: string; name: string; price: number; qty: number };

const WA = process.env.NEXT_PUBLIC_WA_NUMBER || "";
const brand = "#1B3D2F"; // verde botánico Casa Cora (sin dark/light)
const money = (v: number) =>
  new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(v);

const categories = ["Programas", "Consultas", "Terapias", "Productos"] as const;

export default function TiendaCasaCora() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [form, setForm] = useState({ name: "", phone: "", note: "" });
  const [openCart, setOpenCart] = useState(false); // 👈 drawer carrito

  const { toast } = useToast();

  // Persistencia local
  useEffect(() => {
    const s = localStorage.getItem("cc_cart");
    if (s) setCart(JSON.parse(s));
    const f = localStorage.getItem("cc_form");
    if (f) setForm(JSON.parse(f));
  }, []);
  useEffect(
    () => localStorage.setItem("cc_cart", JSON.stringify(cart)),
    [cart]
  );
  useEffect(
    () => localStorage.setItem("cc_form", JSON.stringify(form)),
    [form]
  );

  const total = useMemo(
    () => cart.reduce((a, i) => a + i.price * i.qty, 0),
    [cart]
  );
  const itemsCount = useMemo(() => cart.reduce((a, i) => a + i.qty, 0), [cart]);
  const canSend = cart.length > 0 && form.name.trim() && form.phone.trim();

  // helpers carrito
  function add(p: { id: string; name: string; price: number }) {
    setCart((prev) => {
      const f = prev.find((x) => x.id === p.id);
      return f
        ? prev.map((x) => (x.id === p.id ? { ...x, qty: x.qty + 1 } : x))
        : [...prev, { ...p, qty: 1 }];
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
  }
  function clearCart() {
    setCart([]);
  }

  function waLink() {
    const lines = cart
      .map((i) => `• ${i.name} ×${i.qty} — ${money(i.price * i.qty)}`)
      .join("\n");
    const datos =
      `\n*Nombre:* ${form.name}` +
      `\n*Teléfono:* ${form.phone}` +
      (form.note ? `\n*Notas:* ${form.note}` : "");
    const msg = `*Casa Cora* — Pedido de Tienda\n\n${lines}\n\n*Total:* ${money(
      total
    )}\n${datos}`;
    return `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      {/* Header (sin dark/light) */}
      <header className="mb-8 text-center">
        <h1
          className="text-3xl font-extrabold tracking-tight"
          style={{ color: brand }}
        >
          Tienda Casa Cora
        </h1>
        <p className="mt-1 text-sm" style={{ color: "#1B3D2FCC" }}>
          Medicina + Naturaleza + Psique · Selecciona productos o programas y
          envía por WhatsApp.
        </p>
      </header>

      {/* Listado por categoría */}
      {categories.map((cat) => {
        const items = PRODUCTS.filter((p) => p.category === cat);
        if (!items.length) return null;
        return (
          <section key={cat} className="mb-10">
            <h2 className="mb-4 text-lg font-semibold" style={{ color: brand }}>
              {cat}
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {items.map((p) => (
                <div
                  key={p.id}
                  className="rounded-2xl border bg-white p-5 shadow-sm"
                  style={{ borderColor: "#1B3D2F26" }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3
                          className="text-lg font-semibold"
                          style={{ color: brand }}
                        >
                          {p.name}
                        </h3>
                        {p.badge && (
                          <span
                            className="rounded-full px-2 py-0.5 text-[11px] font-semibold"
                            style={{ background: "#E8EFEA", color: brand }}
                          >
                            {p.badge}
                          </span>
                        )}
                      </div>
                      {p.desc && (
                        <p
                          className="mt-2 text-sm leading-relaxed"
                          style={{ color: "#1B3D2FCC" }}
                        >
                          {p.desc}
                        </p>
                      )}
                      <div
                        className="mt-3 text-base font-extrabold"
                        style={{ color: brand }}
                      >
                        {p.price > 0 ? money(p.price) : "Cotización"}
                        {p.unit ? ` / ${p.unit}` : ""}
                      </div>
                    </div>

                    <button
                      onClick={() =>
                        add({
                          id: p.id,
                          name: p.name,
                          price: Math.max(p.price, 0),
                        })
                      }
                      className="rounded-full px-4 py-2 text-sm font-semibold text-white"
                      style={{ background: brand }}
                    >
                      Agregar
                    </button>
                  </div>

                  {/* Controles si ya está en carrito */}
                  {cart.find((x) => x.id === p.id) && (
                    <div className="mt-3 flex items-center justify-end gap-2">
                      <button
                        onClick={() => dec(p.id)}
                        className="rounded-full px-2 py-1"
                        style={{ background: "#E8EFEA", color: brand }}
                        aria-label="Disminuir"
                      >
                        –
                      </button>
                      <span
                        className="min-w-6 text-center text-sm font-bold"
                        style={{ color: brand }}
                      >
                        {cart.find((x) => x.id === p.id)?.qty}
                      </span>
                      <button
                        onClick={() =>
                          add({
                            id: p.id,
                            name: p.name,
                            price: Math.max(p.price, 0),
                          })
                        }
                        className="rounded-full px-2 py-1"
                        style={{ background: "#E8EFEA", color: brand }}
                        aria-label="Aumentar"
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        );
      })}

      {/* Formulario (sin dark/light) */}
      <div
        className="mt-8 rounded-2xl border bg-white p-5 shadow-sm"
        style={{ borderColor: "#1B3D2F26" }}
      >
        <h2 className="mb-3 text-lg font-semibold" style={{ color: brand }}>
          Datos del paciente
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <input
            className="rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2"
            style={{
              borderColor: "#1B3D2F33",
              color: brand,
              caretColor: brand,
            }}
            placeholder="Nombre completo"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          />
          <input
            className="rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2"
            style={{
              borderColor: "#1B3D2F33",
              color: brand,
              caretColor: brand,
            }}
            placeholder="Teléfono de contacto"
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
          />
          <textarea
            className="md:col-span-2 rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2"
            style={{
              borderColor: "#1B3D2F33",
              color: brand,
              caretColor: brand,
            }}
            rows={2}
            placeholder="Notas (opcional)"
            value={form.note}
            onChange={(e) => setForm((f) => ({ ...f, note: e.target.value }))}
          />
        </div>
      </div>

      {/* Barra sticky: botón carrito + WhatsApp */}
      <div className="sticky bottom-4 z-40 mt-8 flex w-full justify-center px-2">
        <div
          className="flex w-full max-w-3xl items-center justify-between gap-3 rounded-full px-5 py-3 text-white shadow-xl"
          style={{ background: brand }}
        >
          <button
            onClick={() => setOpenCart(true)}
            className="rounded-full px-3 py-2 text-sm font-semibold"
            style={{ background: "rgba(255,255,255,0.12)" }}
            aria-label="Abrir carrito"
          >
            Carrito ({itemsCount}) · {money(total)}
          </button>

          <a
            href={canSend ? waLink() : "#"}
            onClick={(e) => {
              if (!canSend) {
                e.preventDefault();
                if (cart.length === 0) {
                  alert("Agrega al menos un producto o programa.");
                  return;
                }
                alert("Completa nombre y teléfono del paciente.");
              }
            }}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-4 py-2 text-sm font-bold"
            style={{
              background: canSend ? "#FFFFFF" : "rgba(255,255,255,0.35)",
              color: canSend ? brand : "rgba(255,255,255,0.7)",
              cursor: canSend ? "pointer" : "not-allowed",
            }}
          >
            Enviar por WhatsApp
          </a>
        </div>
      </div>

      {/* DRAWER CARRITO (editable) */}
      {openCart && (
        <div
          className="fixed inset-0 z-50 flex items-end md:items-stretch md:justify-end"
          role="dialog"
          aria-modal="true"
          onKeyDown={(e) => e.key === "Escape" && setOpenCart(false)}
        >
          {/* overlay */}
          <div
            className="absolute inset-0 bg-black/45"
            onClick={() => setOpenCart(false)}
          />
          {/* panel */}
          <div className="relative z-10 h-[80vh] w-full rounded-t-3xl bg-white p-5 shadow-2xl md:h-full md:max-w-md md:rounded-none">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-lg font-extrabold" style={{ color: brand }}>
                Tu carrito
              </h3>
              <button
                onClick={() => setOpenCart(false)}
                className="rounded-full px-3 py-1 text-sm"
                style={{ background: "#E8EFEA", color: brand }}
                aria-label="Cerrar carrito"
              >
                Cerrar
              </button>
            </div>

            <div className="space-y-3 overflow-y-auto pb-28">
              {cart.length === 0 && (
                <p className="text-sm" style={{ color: "#1B3D2F99" }}>
                  Aún no agregas productos o programas.
                </p>
              )}

              {cart.map((it) => (
                <div
                  key={it.id}
                  className="flex items-center justify-between rounded-xl border bg-white px-3 py-2"
                  style={{ borderColor: "#1B3D2F1A" }}
                >
                  <div>
                    <div
                      className="text-sm font-semibold"
                      style={{ color: brand }}
                    >
                      {it.name}
                    </div>
                    <div className="text-xs" style={{ color: "#1B3D2F99" }}>
                      {money(it.price)} · Subtotal {money(it.price * it.qty)}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => dec(it.id)}
                      className="rounded-full px-2 py-1"
                      style={{ background: "#E8EFEA", color: brand }}
                      aria-label="Disminuir"
                    >
                      –
                    </button>

                    {/* input cantidad editable */}
                    <input
                      type="number"
                      min={1}
                      value={it.qty}
                      onChange={(e) => setQty(it.id, Number(e.target.value))}
                      className="w-14 rounded-lg border px-2 py-1 text-center text-sm outline-none"
                      style={{ borderColor: "#1B3D2F33", color: brand }}
                    />

                    <button
                      onClick={() =>
                        add({ id: it.id, name: it.name, price: it.price })
                      }
                      className="rounded-full px-2 py-1"
                      style={{ background: "#E8EFEA", color: brand }}
                      aria-label="Aumentar"
                    >
                      +
                    </button>

                    <button
                      onClick={() => removeItem(it.id)}
                      className="ml-1 rounded-full px-2 py-1 text-xs font-bold"
                      style={{ background: "#FFE5E5", color: "#9B1C1C" }}
                      aria-label="Eliminar"
                      title="Eliminar"
                    >
                      ×
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* footer */}
            <div
              className="absolute bottom-0 left-0 right-0 border-t bg-white p-4"
              style={{ borderColor: "#1B3D2F14" }}
            >
              <div className="mb-3 flex items-center justify-between">
                <span
                  className="text-sm font-semibold"
                  style={{ color: brand }}
                >
                  Total
                </span>
                <span
                  className="text-base font-extrabold"
                  style={{ color: brand }}
                >
                  {money(total)}
                </span>
              </div>

              <div className="flex items-center justify-between gap-3">
                <button
                  onClick={clearCart}
                  className="rounded-xl px-3 py-2 text-sm font-semibold"
                  style={{ background: "#E8EFEA", color: brand }}
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
                          description:
                            "Agrega al menos un producto o programa.",
                          variant: "destructive",
                        });
                        return;
                      }
                      toast({
                        title: "Datos incompletos",
                        description: "Completa nombre y teléfono del paciente.",
                        variant: "destructive",
                      });
                    }
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full px-4 py-2 text-sm font-bold"
                  style={{
                    background: canSend ? "#FFFFFF" : "rgba(255,255,255,0.35)",
                    color: canSend ? "#1B3D2F" : "rgba(255,255,255,0.7)",
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
