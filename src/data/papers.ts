export type PaperLink = {
  slug: string
  titulo: string
  url: string
  fuente?: string
  fecha?: string // 'YYYY' o 'YYYY-MM-DD'
  resumen?: string
  tags?: string[]
}

export const papers: PaperLink[] = [
  {
    slug: 'escansion-tempodifusa-psicoanalisis-cannabico',
    titulo: 'La Escansión Tempodifusa en el Psicoanálisis Cannábico',
    url: 'https://revistaveritas.org/index.php/veritas/article/view/290',
    fuente: 'Revista Veritas',
    fecha: '2024',
    resumen:
      'Desarrolla el concepto de “escansión tempodifusa” en el marco del psicoanálisis cannábico, integrando el término de Lacan y su aplicación clínica en procesos guiados.',
    tags: ['psicoanálisis', 'cannabis medicinal', 'teoría clínica'],
  },
  {
    slug: 'metodo-dos-estadias-consumo-responsable',
    titulo: 'Método de las 2 Estadías de Casa CORA para un Consumo Responsable de Cannabis Medicinal',
    url: 'https://revistaveritas.org/index.php/veritas/article/view/289',
    fuente: 'Revista Veritas',
    fecha: '2024',  
    resumen:
      'Presenta un método en dos etapas para optimizar los efectos terapéuticos del cannabis medicinal y reducir riesgos, estructurando pautas claras de acompañamiento y uso.',
    tags: ['método', 'cannabis medicinal', 'reducción de riesgos'],
  },
  {
    slug: 'sistema-clasificacion-nomenclatura-pcme',
    titulo: 'Sistema de Clasificación y Nomenclatura P.C.M.E. de Casa CORA para el Cannabis Medicinal',
    url: 'https://revistaveritas.org/index.php/veritas/article/view/291',
    fuente: 'Revista Veritas',
    fecha: '2024',
    resumen:
      'Propone un sistema estandarizado para evaluar y clasificar el cannabis medicinal (P.C.M.E.), con criterios que facilitan la comunicación clínica y su aplicación terapéutica.',
    tags: ['clasificación', 'cannabis medicinal', 'estandarización'],
  },
]