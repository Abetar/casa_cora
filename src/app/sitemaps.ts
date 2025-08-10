import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://casacora.org'
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/#pilares`, lastModified: new Date() },
    { url: `${base}/#servicios`, lastModified: new Date() },
    { url: `${base}/#testimonios`, lastModified: new Date() },
    { url: `${base}/#comunidad`, lastModified: new Date() },
    { url: `${base}/#donativos`, lastModified: new Date() }, // si tienes ruta
  ]
}
