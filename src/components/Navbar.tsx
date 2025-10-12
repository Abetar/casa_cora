"use client";

import { useState, useCallback, MouseEvent as ReactMouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown, ShoppingBag, Sparkles } from "lucide-react";
import { usePathname } from "next/navigation";

type NavLink = { label: string; href: string };

const primaryLinks: NavLink[] = [
  { label: "Servicios", href: "#servicios" },
  { label: "Comunidad", href: "#comunidad" },
];

const recursosLinks: NavLink[] = [
  { label: "Investigación", href: "/investigacion" },
  { label: "Galería", href: "/galeria" },
  { label: "Protocolo", href: "/protocolos" },
  { label: "Ubicación", href: "#mapa" },
];

// 👉 Link destacado a la tienda
const shopLink: NavLink = { label: "Tienda", href: "/tienda" };

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [recursosOpen, setRecursosOpen] = useState(false);
  const pathname = usePathname();

  const isSection = (href: string): boolean => href.startsWith("#");
  const resolveHref = (href: string): string =>
    isSection(href) ? (pathname === "/" ? href : `/${href}`) : href;

  const handleSectionClick = useCallback(
    (e: ReactMouseEvent<HTMLAnchorElement>, href: string) => {
      if (!isSection(href)) return;
      if (pathname === "/") {
        e.preventDefault();
        const id = href.slice(1);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setIsOpen(false);
      setRecursosOpen(false);
    },
    [pathname]
  );

  const clickHandlerFor =
    (href: string) => (e: ReactMouseEvent<HTMLAnchorElement>) =>
      handleSectionClick(e, href);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-black/30 px-6 py-4 text-white backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        {/* Logo (Inicio) */}
        <Link
          href={resolveHref("#inicio")}
          onClick={clickHandlerFor("#inicio")}
          className="flex items-center gap-3"
          aria-label="Ir al inicio"
        >
          <Image
            src="/logo.png"
            alt="Casa Cora"
            width={150}
            height={150}
            priority
            className="rounded-md object-contain"
          />
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-6 md:flex">
          {primaryLinks.map((link) => {
            const href = resolveHref(link.href);
            return (
              <Link
                key={link.label}
                href={href}
                onClick={clickHandlerFor(link.href)}
                className="transition text-white/90 hover:text-gold"
              >
                {link.label}
              </Link>
            );
          })}

          {/* Link destacado a Tienda (pill con brillo) */}
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative"
          >
            <Link
              href={shopLink.href}
              aria-label="Abrir Tienda"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1B3D2F] to-[#265444] px-4 py-2 text-sm font-semibold text-white shadow-[0_4px_24px_rgba(27,61,47,0.45)] transition hover:shadow-[0_6px_28px_rgba(27,61,47,0.6)]"
            >
              <ShoppingBag size={16} className="opacity-90" />
              {shopLink.label}
              <span className="rounded-full bg-[#d4af37] px-2 py-[2px] text-[10px] font-bold text-black/90">
                Nuevo
              </span>

              {/* brillo sutil al pasar */}
              <span className="absolute inset-0 -z-10 rounded-full opacity-0 blur-md transition group-hover:opacity-60"
                style={{ background: "radial-gradient(60% 60% at 50% 50%, rgba(212,175,55,0.35), transparent 70%)" }}
              />
            </Link>

            {/* destello animado */}
            <Sparkles
              size={16}
              className="pointer-events-none absolute -right-2 -top-2 text-[#d4af37] animate-pulse"
              aria-hidden="true"
            />
          </motion.div>

          {/* Dropdown Recursos */}
          <div
            className="relative"
            onMouseEnter={() => setRecursosOpen(true)}
            onMouseLeave={() => setRecursosOpen(false)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 transition text-white/90 hover:text-gold"
              onClick={() => setRecursosOpen((o) => !o)}
              aria-haspopup="menu"
              aria-expanded={recursosOpen}
            >
              Recursos <ChevronDown size={16} />
            </button>

            <AnimatePresence>
              {recursosOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="absolute right-0 mt-2 min-w-[220px] rounded-xl border border-[#d4af37]/40 bg-[#0f0e17]/95 p-2 shadow-lg backdrop-blur-md"
                  role="menu"
                >
                  {recursosLinks.map((r) => {
                    const href = resolveHref(r.href);
                    return (
                      <Link
                        key={r.label}
                        href={href}
                        onClick={clickHandlerFor(r.href)}
                        className="block rounded-lg px-3 py-2 text-sm transition text-white/90 hover:bg-white/10 hover:text-gold"
                        role="menuitem"
                      >
                        {r.label}
                      </Link>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* CTA Donativos (pulso suave) */}
          <motion.div
            aria-hidden="true"
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(212,175,55,0.0)",
                "0 0 28px 8px rgba(212,175,55,0.45)",
                "0 0 0 0 rgba(212,175,55,0.0)",
              ],
              scale: [1, 1.04, 1],
            }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-full"
          >
            <Link
              href={resolveHref("#donativos")}
              onClick={clickHandlerFor("#donativos")}
              className="inline-block rounded-full bg-[#d4af37] px-4 py-2 text-sm font-medium text-white shadow-md transition hover:bg-[#b48d2b]"
            >
              Donativos
            </Link>
          </motion.div>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen((o) => !o)} aria-label="Abrir menú">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-2 flex flex-col gap-3 rounded-lg bg-[#0f0e17]/95 px-6 py-4 backdrop-blur-sm md:hidden"
          >
            {primaryLinks.map((link) => {
              const href = resolveHref(link.href);
              return (
                <Link
                  key={link.label}
                  href={href}
                  onClick={clickHandlerFor(link.href)}
                  className="transition text-white/90 hover:text-gold"
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Botón destacado Tienda (mobile) */}
            <Link
              href={shopLink.href}
              onClick={() => {
                setIsOpen(false);
                setRecursosOpen(false);
              }}
              className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#1B3D2F] to-[#265444] px-4 py-2 text-sm font-semibold text-white shadow-[0_4px_24px_rgba(27,61,47,0.45)] transition hover:opacity-95"
            >
              <ShoppingBag size={16} />
              {shopLink.label}
              <span className="rounded-full bg-[#d4af37] px-2 py-[2px] text-[10px] font-bold text-black/90">
                Nuevo
              </span>
            </Link>

            {/* Recursos (colapsable en mobile) */}
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between text-white/90 transition hover:text-gold">
                Recursos
                <ChevronDown size={16} className="transition group-open:rotate-180" />
              </summary>
              <div className="mt-2 flex flex-col gap-2">
                {recursosLinks.map((r) => {
                  const href = resolveHref(r.href);
                  return (
                    <Link
                      key={r.label}
                      href={href}
                      onClick={clickHandlerFor(r.href)}
                      className="text-sm transition text-white/90 hover:text-gold"
                    >
                      {r.label}
                    </Link>
                  );
                })}
              </div>
            </details>

            {/* CTA Donativos con pulso */}
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(212,175,55,0.0)",
                  "0 0 28px 8px rgba(212,175,55,0.45)",
                  "0 0 0 0 rgba(212,175,55,0.0)",
                ],
                scale: [1, 1.04, 1],
              }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              className="mt-2 rounded-full"
            >
              <Link
                href={resolveHref("#donativos")}
                onClick={clickHandlerFor("#donativos")}
                className="inline-block w-full rounded-full bg-[#d4af37] px-4 py-2 text-center text-sm font-medium text-white shadow-md transition hover:bg-[#b48d2b]"
              >
                Donativos
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
