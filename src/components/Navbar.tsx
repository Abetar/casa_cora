"use client";

import { useState, useCallback, MouseEvent as ReactMouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

type NavLink = { label: string; href: string };

const primaryLinks: NavLink[] = [
  { label: "Servicios", href: "#servicios" },
  { label: "Comunidad", href: "#comunidad" },
];

const recursosLinks: NavLink[] = [
  { label: "Investigación", href: "/investigacion" }, // página
  { label: "Galería", href: "/galeria" }, // página
  { label: "Protocolo", href: "/protocolos" }, // página
  { label: "Ubicación", href: "#mapa" }, // sección del home
];

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
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md px-6 py-4 text-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
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
        <div className="hidden md:flex items-center gap-6">
          {primaryLinks.map((link) => {
            const href = resolveHref(link.href);
            return (
              <Link
                key={link.label}
                href={href}
                onClick={clickHandlerFor(link.href)}
                className="text-white/90 hover:text-gold transition"
              >
                {link.label}
              </Link>
            );
          })}

          {/* Dropdown Recursos */}
          <div
            className="relative"
            onMouseEnter={() => setRecursosOpen(true)}
            onMouseLeave={() => setRecursosOpen(false)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 text-white/90 hover:text-gold transition"
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
                  className="absolute right-0 mt-2 min-w-[220px] rounded-xl border border-[#d4af37]/40 bg-[#0f0e17]/95 backdrop-blur-md p-2 shadow-lg"
                  role="menu"
                >
                  {recursosLinks.map((r) => {
                    const href = resolveHref(r.href);
                    return (
                      <Link
                        key={r.label}
                        href={href}
                        onClick={clickHandlerFor(r.href)}
                        className="block rounded-lg px-3 py-2 text-sm text-white/90 hover:bg-white/10 hover:text-gold transition"
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
              className="inline-block rounded-full bg-[#d4af37] px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-[#b48d2b] transition"
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
            className="md:hidden bg-[#0f0e17]/95 backdrop-blur-sm rounded-lg mt-2 px-6 py-4 flex flex-col gap-3"
          >
            {primaryLinks.map((link) => {
              const href = resolveHref(link.href);
              return (
                <Link
                  key={link.label}
                  href={href}
                  onClick={clickHandlerFor(link.href)}
                  className="text-white/90 hover:text-gold transition"
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Recursos (colapsable en mobile) */}
            <details className="group">
              <summary className="cursor-pointer list-none text-white/90 hover:text-gold transition flex items-center justify-between">
                Recursos
                <ChevronDown
                  size={16}
                  className="transition group-open:rotate-180"
                />
              </summary>
              <div className="mt-2 flex flex-col gap-2">
                {recursosLinks.map((r) => {
                  const href = resolveHref(r.href);
                  return (
                    <Link
                      key={r.label}
                      href={href}
                      onClick={clickHandlerFor(r.href)}
                      className="text-sm text-white/90 hover:text-gold transition"
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
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="rounded-full mt-2"
            >
              <Link
                href={resolveHref("#donativos")}
                onClick={clickHandlerFor("#donativos")}
                className="inline-block w-full text-center rounded-full bg-[#d4af37] px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-[#b48d2b] transition"
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
