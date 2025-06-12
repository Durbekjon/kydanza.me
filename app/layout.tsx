import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'KYDANZA - Durbek Saydaliyev',
  description: 'Durbek Saydaliyev\'s portfolio',
  generator: 'kydanza',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
