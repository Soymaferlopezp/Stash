import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Stash - Ahorra en Stellar, sin intermediarios",
  description: "Tu herramienta para crear y gestionar estrategias de DCA de forma segura y descentralizada",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} font-inter antialiased`}>{children}</body>
    </html>
  )
}
