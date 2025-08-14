"use client";

import { useState, MouseEvent, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Investigación", href: "/investigacion" }, // página real
  { label: "Testimonios", href: "#testimonios" },
  { label: "Comunidad", href: "#comunidad" },
  { label: "Donativos", href: "#donativos" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isSection = (href: string) => href.startsWith("#");
  const resolveHref = (href: string) =>
    isSection(href) ? (pathname === "/" ? href : `/${href}`) : href;

  const handleSectionClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>, href: string) => {
      if (!isSection(href)) return; // links de página (ej. /investigacion) siguen su curso
      if (pathname === "/") {
        // ya estamos en el home: previene navegación y hace scroll suave
        e.preventDefault();
        const id = href.replace("#", "");
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      // si NO estamos en el home, dejamos que navegue a "/#seccion"
      setIsOpen(false);
    },
    [pathname]
  );

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-black/30 backdrop-blur-md px-6 py-4 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        {/* Logo */}
        <Link
          href={resolveHref("#inicio")}
          onClick={(e) => handleSectionClick(e as any, "#inicio")}
          className="flex items-center gap-3"
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

        {/* Desktop links */}
        <div className="hidden gap-8 md:flex">
          {links.map((link) => {
            const href = resolveHref(link.href);
            return (
              <Link
                key={link.label}
                href={href}
                onClick={(e) => handleSectionClick(e as any, link.href)}
                className="text-white/90 transition hover:text-gold"
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile menu toggle */}
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
            className="mt-2 flex flex-col gap-4 rounded-lg bg-[#0f0e17]/95 px-6 py-4 text-center md:hidden backdrop-blur-sm"
          >
            {links.map((link) => {
              const href = resolveHref(link.href);
              return (
                <Link
                  key={link.label}
                  href={href}
                  onClick={(e) => handleSectionClick(e as any, link.href)}
                  className="transition text-white hover:text-gold"
                >
                  {link.label}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
