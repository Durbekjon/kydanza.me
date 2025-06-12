import type React from "react"
import "./globals.css"
import { Syne, Outfit } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { locales } from "@/middleware"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { getDictionary } from "./dictionaries"
import type { Metadata } from "next"

// Fonts with optimized loading
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  preload: true,
})

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  preload: true,
})

export const metadata: Metadata = {
  viewport: "width=device-width, initial-scale=1",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  const dictionary = await getDictionary(params.lang)

  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body className={`${outfit.variable} ${syne.variable} font-sans min-h-screen flex flex-col antialiased`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header lang={params.lang} dictionary={dictionary} />
          <main className="flex-grow">{children}</main>
          <Footer lang={params.lang} dictionary={dictionary} />
        </ThemeProvider>
      </body>
    </html>
  )
}
