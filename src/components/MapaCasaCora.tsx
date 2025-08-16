'use client'

import { useState } from 'react'
import { MapPin, Navigation2, Eye } from 'lucide-react'

const LAT = 25.7171722
const LNG = -100.3367462

export default function MapaCasaCora() {
  const [mode, setMode] = useState<'map' | 'street'>('map')

  const mapSrc = `https://www.google.com/maps?q=${LAT},${LNG}&z=17&output=embed`
  // Street View “simple” sin API key
  const streetSrc = `https://www.google.com/maps?output=embed&layer=c&cbll=${LAT},${LNG}&cbp=11,0,0,0,0`
  const placeUrl = `https://www.google.com/maps/place/Casa+Cora/@${LAT},${LNG},17z`
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${LAT},${LNG}`

  return (
    <section id="mapa" className="py-16 px-6" style={{ backgroundColor: '#fff1f5' }}>
      <div className="mx-auto max-w-7xl">
        <h3 className="text-center font-serif text-3xl text-[#d4af37] mb-3">
          ¿Cómo llegar?
        </h3>
        <p className="mx-auto max-w-2xl text-center text-[#4a4a4a] mb-6">
          Alterna entre el mapa y Street View. Abre la ubicación o genera la ruta en Google Maps.
        </p>

        {/* Toggle */}
        <div className="flex justify-center gap-2 mb-3">
          <button
            onClick={() => setMode('map')}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition border
              ${mode === 'map'
                ? 'border-[#d4af37] bg-[#fff8e6] text-[#2e2e2e]'
                : 'border-[#d4af37]/50 text-[#2e2e2e] hover:bg-white'}`}
            aria-pressed={mode === 'map'}
            aria-label="Ver mapa"
          >
            <MapPin size={16} /> Mapa
          </button>
        </div>

        {/* Mapa/StreetView embebido (responsive) */}
        <div
          className="mx-auto w-full max-w-5xl overflow-hidden rounded-2xl border border-[#d4af37]/40 shadow-md bg-white"
          style={{ aspectRatio: '16 / 9' }}
        >
          <iframe
            key={mode}
            src={mode === 'map' ? mapSrc : streetSrc}
            className="h-full w-full"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            aria-label={mode === 'map' ? 'Mapa de Casa Cora' : 'Street View de Casa Cora'}
          />
        </div>

        {/* Acciones */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <a
            href={placeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#d4af37] px-5 py-2 text-sm font-medium text-white shadow-md transition hover:bg-[#b48d2b]"
          >
            <MapPin size={18} />
            Abrir en Google Maps
          </a>
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/60 px-5 py-2 text-sm font-medium text-[#2e2e2e] transition hover:bg-[#fff8e6]"
          >
            <Navigation2 size={18} />
            Cómo llegar
          </a>
        </div>
      </div>
    </section>
  )
}
