"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ModeToggle } from "./mode-toggle"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { LanguageToggle } from "./language-toggle"
import { motion } from "framer-motion"

export default function Header({
  lang,
  dictionary,
}: {
  lang: string
  dictionary: any
}) {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    // Throttled scroll handler for better performance
    const lastScrollY = window.scrollY
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Get the path without the language prefix
  const pathWithoutLang = pathname.replace(`/${lang}`, "") || "/"

  const navigation = [
    { name: dictionary.navigation.home, href: `/${lang}` },
    { name: dictionary.navigation.about, href: `/${lang}/about` },
    { name: dictionary.navigation.projects, href: `/${lang}/projects` },
    { name: dictionary.navigation.blog, href: `/${lang}/blog` },
    { name: dictionary.navigation.resume, href: `/${lang}/resume` },
    { name: dictionary.navigation.contact, href: `/${lang}/contact` },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm" : "py-6 bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link href={`/${lang}`} className="font-syne text-2xl font-bold">
          <span className="text-gradient">KYDANZA</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-sm font-medium transition-colors hover:text-primary ${
                pathname === item.href ? "text-primary" : "text-foreground/80"
              }`}
            >
              {pathname === item.href && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 top-full block h-0.5 w-full bg-primary"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageToggle currentLang={lang} pathname={pathWithoutLang} />
          <ModeToggle />

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-sm border-l border-primary/10">
              <div className="flex flex-col gap-8 pt-10">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-lg font-medium transition-colors hover:text-primary ${
                      pathname === item.href ? "text-primary" : "text-foreground/80"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
