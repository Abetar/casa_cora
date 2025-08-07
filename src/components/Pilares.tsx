'use client'

import { motion } from 'framer-motion'

const pilares = [
  {
    emoji: '🌿',
    titulo: 'Alquimia',
    texto: 'Transformamos el dolor en aprendizaje. Mezclamos ciencia, arte y medicina natural.',
  },
  {
    emoji: '✍',
    titulo: 'Poesía',
    texto: 'La palabra como medicina. Escuchamos con presencia y hablamos con intención.',
  },
  {
    emoji: '🔥',
    titulo: 'Ritual',
    texto: 'Creamos espacios sagrados que nos permiten reconectar cuerpo, emoción y memoria.',
  },
  {
    emoji: '🤖',
    titulo: 'Inteligencia Artificial',
    texto: 'Usamos tecnología simbólica para amplificar el acceso, la reflexión y el cuidado.',
  },
  {
    emoji: '🫂',
    titulo: 'Comunidad',
    texto: 'Nadie sana sol@. Creamos red viva para que el proceso sea colectivo y accesible.',
  },
]

const Pilares = () => {
  return (
    <section
      id="pilares"
      className="py-24 px-6 max-w-7xl mx-auto text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-4xl font-serif text-[#d4af37] mb-16"
      >
        Pilares de Casa Cora
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-6">
        {pilares.map((pilar, i) => (
          <motion.div
            key={i}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: 'easeOut',
              delay: i * 0.2,
            }}
            className="origin-bottom bg-white border border-[#d4af37]/50 w-44 h-64 flex flex-col justify-between p-4 rounded-2xl shadow-lg hover:scale-105 transition"
          >
            <div className="text-4xl">{pilar.emoji}</div>
            <div>
              <h3 className="text-lg text-[#d4af37] font-serif mb-1">
                {pilar.titulo}
              </h3>
              <p className="text-[#2e2e2e] text-sm">{pilar.texto}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Pilares
