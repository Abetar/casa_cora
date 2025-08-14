"use client";

import { useState, useCallback, MouseEvent as ReactMouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

type NavLink = { label: string; href: string };

const links: NavLink[] = [
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

  const isSection = (href: string): boolean => href.startsWith("#");
  const resolveHref = (href: string): string =>
    isSection(href) ? (pathname === "/" ? href : `/${href}`) : href;

  const handleSectionClick = useCallback(
    (e: ReactMouseEvent<HTMLAnchorElement>, href: string) => {
      if (!isSection(href)) return; // enlaces a páginas siguen su curso

      if (pathname === "/") {
        e.preventDefault();
        const id = href.slice(1);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setIsOpen(false);
    },
    [pathname]
  );

  // Devuelve un onClick tipado para cada href de sección/página
  const clickHandlerFor =
    (href: string) => (e: ReactMouseEvent<HTMLAnchorElement>) =>
      handleSectionClick(e, href);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md px-6 py-4 text-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          href={resolveHref("#inicio")}
          onClick={clickHandlerFor("#inicio")}
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
        <div className="hidden md:flex gap-8">
          {links.map((link) => {
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
            className="md:hidden bg-[#0f0e17]/95 backdrop-blur-sm rounded-lg mt-2 px-6 py-4 flex flex-col gap-4 text-center"
          >
            {links.map((link) => {
              const href = resolveHref(link.href);
              return (
                <Link
                  key={link.label}
                  href={href}
                  onClick={clickHandlerFor(link.href)}
                  className="text-white hover:text-gold transition"
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
