"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Comunidad", href: "#comunidad" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md px-6 py-4 text-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="#inicio" className="text-xl font-serif text-gold">
          Casa Cora
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/90 hover:text-gold transition"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Abrir menú">
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
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white hover:text-gold transition"
                onClick={() => setIsOpen(false)} // cerrar menú al hacer clic
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
