'use client'

import { motion } from 'framer-motion'
import { HeartHandshake } from 'lucide-react'

const Donativos = () => {
  return (
    <section
      id="donativos"
      className="py-24 px-6 text-center bg-white dark:bg-[#0f0e17] transition-colors duration-500"
    >
      <div className="max-w-xl mx-auto">
        <HeartHandshake className="mx-auto mb-6 text-gold w-10 h-10" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-serif font-semibold text-slate-900 dark:text-pink-400 mb-4"
        >
          Un gesto que sostiene
        </motion.h2>

        <p className="text-slate-700 dark:text-white/80 mb-10">
          Si este espacio ha tocado tu alma y deseas apoyar nuestra labor terapéutica y comunitaria, puedes hacer tu donativo a la siguiente cuenta:
        </p>

        <div className="border border-pink-300/30 dark:border-pink-400/20 bg-pink-50/30 dark:bg-white/10 rounded-xl p-6 text-left text-sm leading-relaxed text-slate-800 dark:text-white/90">
          <p><span className="font-bold text-pink-500">Banco:</span> Banco del Bienestar</p>
          <p><span className="font-bold text-pink-500">Titular:</span> Fundación Casa Cora A.C.</p>
          <p><span className="font-bold text-pink-500">Cuenta:</span> 1234567890</p>
          <p><span className="font-bold text-pink-500">CLABE:</span> 123456789012345678</p>
        </div>

        <p className="text-xs text-slate-500 dark:text-white/50 italic mt-6">
          *Agradecemos profundamente tu energía compartida.*
        </p>
      </div>
    </section>
  )
}

export default Donativos
