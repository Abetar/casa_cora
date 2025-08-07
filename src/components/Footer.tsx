const Footer = () => {
  return (
    <footer className="bg-[#0f0e17] text-white py-8 text-center text-sm border-t border-white/10">
      <p className="mb-1 text-white/80">
        Fundación Casa Cora — Sanación integral, sin dogmas ni barreras.
      </p>
      <p className="text-white/50 italic mb-2">
        Hecho con plantas, conciencia y comunidad. © {new Date().getFullYear()}
      </p>
      <p className="text-white/40 text-xs">
        Desarrollado por{' '}
        <a
          href="https://agsolutions.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold hover:underline font-medium"
        >
          AG Solution Dev
        </a>
      </p>
    </footer>
  )
}

export default Footer
