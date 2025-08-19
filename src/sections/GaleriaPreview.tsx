'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { gallery } from '@/data/gallery'
import { ArrowRight } from 'lucide-react'

export default function GaleriaPreview() {
  const featured = gallery.slice(0, 3)

  return (
    <section id="galeria" className="py-20 px-6" style={{ backgroundColor: '#fff1f5' }}>
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center font-serif text-4xl text-[#d4af37]"
        >
          Galería
        </motion.h2>

        {/* 2 cols móvil, 3 en sm, 5 en desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
          {featured.map((g, i) => (
            <div
              key={g.id}
              className="relative aspect-square overflow-hidden rounded-xl border border-[#d4af37]/30 bg-white shadow-sm"
              style={{
                backgroundImage:
                  'radial-gradient(120px 80px at 50% -20%, rgba(212,175,55,0.10), transparent)',
              }}
            >
              <Image
                src={g.src}
                alt={g.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                className="object-cover"
                priority={i < 3}
              />
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/galeria"
            className="inline-flex items-center gap-2 rounded-full bg-[#d4af37] px-5 py-2 text-sm font-medium text-white shadow-md transition hover:bg-[#b48d2b]"
          >
            Ver galería completa <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
