'use client'

import { HeartHandshake } from 'lucide-react'

const DonativosSection = () => {
  return (
    <section className="bg-[#ffd1dc]/10 py-16 px-6 text-center text-white font-serif" id="donativos">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex justify-center">
          <HeartHandshake className="text-[#d4af37] w-10 h-10 animate-pulse" />
        </div>
        <h2 className="text-3xl font-semibold text-[#ffd1dc]">
          Un gesto que sostiene
        </h2>
        <p className="text-lg leading-relaxed">
          Si este espacio ha tocado tu alma y deseas apoyar nuestra labor terapéutica y comunitaria, puedes hacer tu donativo a la siguiente cuenta:
        </p>
        <div className="bg-white/10 p-4 rounded-lg border border-[#ffd1dc]/30 text-sm md:text-base">
          <p><span className="font-bold text-[#ffd1dc]">Banco:</span> Banco del Bienestar</p>
          <p><span className="font-bold text-[#ffd1dc]">Titular:</span> Fundación Casa Cora A.C.</p>
          <p><span className="font-bold text-[#ffd1dc]">Cuenta:</span> 1234567890</p>
          <p><span className="font-bold text-[#ffd1dc]">CLABE:</span> 123456789012345678</p>
        </div>
        <p className="text-sm italic text-gray-300">
          *Agradecemos profundamente tu energía compartida.*
        </p>
      </div>
    </section>
  )
}

export default DonativosSection
