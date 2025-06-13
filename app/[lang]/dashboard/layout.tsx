import { redirect } from "next/navigation"
import { getDictionary } from "../dictionaries"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// This would be replaced with actual authentication in production
const isAuthenticated = true

export default async function DashboardLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  const dict = await getDictionary(lang)

  if (!isAuthenticated) {
    redirect(`/${lang}/login`)
  }

  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col">
      <div className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href={`/${lang}/dashboard`} className="font-semibold">
              Dashboard
            </Link>
            <nav className="flex items-center gap-4">
              <Link href={`/${lang}/dashboard`}>
                <Button variant="ghost">Analytics</Button>
              </Link>
              <Link href={`/${lang}/dashboard/settings`}>
                <Button variant="ghost">Settings</Button>
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" asChild>
              <Link href={`/${lang}`}>View Site</Link>
            </Button>
            <Button variant="ghost">Logout</Button>
          </div>
        </div>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  )
} 