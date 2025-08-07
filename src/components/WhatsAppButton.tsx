'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

const WhatsAppButton = () => {
  const whatsappNumber = '5215555555555' // Reemplaza con el número real

  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar por WhatsApp"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 1 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full bg-green-500 hover:bg-green-600 transition shadow-lg shadow-black/30 focus:outline-none"
    >
      <FaWhatsapp className="text-white text-2xl" />
      <span className="text-white text-sm font-medium hidden sm:inline">
        ¿Necesitas hablar con alguien?
      </span>
    </motion.a>
  )
}

export default WhatsAppButton
