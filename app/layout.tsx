import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const bigPixels = localFont({
  src: '../public/fonts/bigPixels.ttf',
  variable: '--font-big-pixels',
})

const orbit = localFont({
  src: '../public/fonts/orbit.ttf',
  variable: '--font-orbit',
})

export const metadata: Metadata = {
  title: 'ellipse',
  description: 'a generative art ysws',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${bigPixels.variable} ${orbit.variable}`}>
      <body>{children}</body>
    </html>
  )
}
