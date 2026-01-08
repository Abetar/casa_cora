const Footer = () => {
  return (
    <footer className="bg-[#0f0e17] border-t border-white/10 text-white">
      <div className="mx-auto max-w-6xl px-6 py-12 grid gap-10 md:grid-cols-3">

        {/* Identidad */}
        <div>
          <p className="text-sm text-white/80 leading-relaxed">
            Fundación <span className="text-[#d4af37] font-semibold">Casa Cora</span>
            <br />
            Sanación integral, sin dogmas ni barreras.
          </p>

          <p className="mt-3 text-xs italic text-white/50">
            Hecho con plantas, conciencia y comunidad. © {new Date().getFullYear()}
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h4 className="mb-3 text-sm font-semibold text-[#d4af37]">
            Navegación
          </h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><a href="#servicios" className="hover:text-white">Servicios</a></li>
            <li><a href="#comunidad" className="hover:text-white">Comunidad</a></li>
            <li><a href="/tienda" className="hover:text-white">Tienda</a></li>
            <li><a href="#donativos" className="hover:text-white">Donativos</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="mb-3 text-sm font-semibold text-[#d4af37]">
            Legal
          </h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><a href="/aviso-legal" className="hover:text-white">Aviso legal</a></li>
            <li><a href="/privacidad" className="hover:text-white">Privacidad</a></li>
            <li><a href="/contacto" className="hover:text-white">Contacto</a></li>
          </ul>
        </div>
      </div>

      {/* Créditos */}
      <div className="border-t border-white/5 py-4 text-center text-xs text-white/40">
        Diseño web:{' '}
        <a
          href="https://agsolutions.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#d4af37] hover:underline font-medium"
        >
          AG Solutions
        </a>
      </div>
    </footer>
  )
}

export default Footer
