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
  metadataBase: new URL('https://kydanza.me'),
  title: {
    default: 'Durbek Saydaliyev | Software Engineer & Developer',
    template: '%s | Durbek Saydaliyev'
  },
  description: 'Professional portfolio of Durbek Saydaliyev, showcasing software engineering projects, web development expertise, and technical blog posts.',
  keywords: ['Durbek Saydaliyev', 'software engineer', 'web developer', 'portfolio', 'projects', 'blog', 'kydanza'],
  authors: [{ name: 'Durbek Saydaliyev' }],
  creator: 'Durbek Saydaliyev',
  publisher: 'Durbek Saydaliyev',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kydanza.me',
    title: 'Durbek Saydaliyev | Software Engineer & Developer',
    description: 'Professional portfolio of Durbek Saydaliyev, showcasing software engineering projects, web development expertise, and technical blog posts.',
    siteName: 'Durbek Saydaliyev Portfolio',
    images: [
      {
        url: 'https://kydanza.me/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Durbek Saydaliyev - Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Durbek Saydaliyev | Software Engineer & Developer',
    description: 'Professional portfolio of Durbek Saydaliyev, showcasing software engineering projects, web development expertise, and technical blog posts.',
    images: ['https://kydanza.me/images/twitter-image.jpg'],
    creator: '@kydanza',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: 'your-google-site-verification',
    yandex: 'your-yandex-verification',
    yahoo: 'your-yahoo-verification',
  },
  alternates: {
    canonical: 'https://kydanza.me',
    languages: {
      'en-US': 'https://kydanza.me/en',
      'uz-UZ': 'https://kydanza.me/uz',
    },
  },
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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
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
