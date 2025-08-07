'use client'

import { HeartHandshake } from 'lucide-react'

const DonativosSection = () => {
  return (
    <section className="bg-white/5 dark:bg-white/10 border border-white/10 dark:border-white/20 rounded-lg p-6 text-left text-slate-800 dark:text-white/90" id="donativos">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex justify-center">
          <HeartHandshake className="text-[#d4af37] w-10 h-10 animate-pulse" />
        </div>
        <h2 className="text-3xl font-semibold text-[#d46a92]">
          Un gesto que sostiene
        </h2>
        <p className="text-lg leading-relaxed text-[#0f0e17]">
          Si este espacio ha tocado tu alma y deseas apoyar nuestra labor terapéutica y comunitaria, puedes hacer tu donativo a la siguiente cuenta:
        </p>
        <div className="bg-white/70 p-4 rounded-lg border border-[#ffd1dc]/70 text-sm md:text-base text-[#0f0e17]">
          <p><span className="font-bold text-[#d46a92]">Banco:</span> Banco del Bienestar</p>
          <p><span className="font-bold text-[#d46a92]">Titular:</span> Fundación Casa Cora A.C.</p>
          <p><span className="font-bold text-[#d46a92]">Cuenta:</span> 1234567890</p>
          <p><span className="font-bold text-[#d46a92]">CLABE:</span> 123456789012345678</p>
        </div>
        <p className="text-sm italic text-gray-600">
          *Agradecemos profundamente tu energía compartida.*
        </p>
      </div>
    </section>
  )
}

export default DonativosSection
