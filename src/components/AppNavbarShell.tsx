'use client'

import { usePathname } from 'next/navigation'
import Navbar from '@/components/Navbar'

export default function AppNavbarShell({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const hideNavbar = ['/protocolos'] // rutas donde NO quieres navbar

  return (
    <>
      {!hideNavbar.includes(pathname) && <Navbar />}
      {children}
    </>
  )
}
