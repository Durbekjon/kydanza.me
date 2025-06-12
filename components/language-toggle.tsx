"use client"
import { Globe } from "lucide-react"
import { useRouter } from "next/navigation"
import { locales } from "@/middleware"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const languageNames: Record<string, string> = {
  en: "English",
  uz: "O'zbekcha",
}

const languageFlags: Record<string, string> = {
  en: "🇬🇧",
  uz: "🇺🇿",
}

export function LanguageToggle({
  currentLang,
  pathname,
}: {
  currentLang: string
  pathname: string
}) {
  const router = useRouter()

  const handleLanguageChange = (locale: string) => {
    // Construct the new path with the selected language
    const newPath = `/${locale}${pathname}`
    router.push(newPath)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 bg-primary/10 text-primary">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="rounded-xl">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => handleLanguageChange(locale)}
            className={`cursor-pointer ${locale === currentLang ? "bg-primary/10" : ""}`}
          >
            <span className="mr-2">{languageFlags[locale]}</span>
            {languageNames[locale]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
