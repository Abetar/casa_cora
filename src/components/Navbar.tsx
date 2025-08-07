'use client'

import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 50)
  })

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-300 ${
        scrolled
          ? 'bg-fondo/80 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <h1 className="text-lg font-bold tracking-wide text-white">Casa Cora</h1>
      <div className="space-x-6 text-sm font-light text-white">
        <a href="#inicio" className="hover:text-gold transition hover:bg-amber-900 hover:rounded-lg hover: p-2">Inicio</a>
        <a href="#servicios" className="hover:text-gold transition hover:bg-amber-900  hover:rounded-lg hover: p-2 ">Servicios</a>
        <a href="#testimonios" className="hover:text-gold transition hover:bg-amber-900  hover:rounded-lg hover: p-2 ">Testimonios</a>
        <a href="#comunidad" className="hover:text-gold transition hover:bg-amber-900  hover:rounded-lg hover: p-2 ">Comunidad</a>
      </div>
    </motion.nav>
  )
}

export default Navbar
