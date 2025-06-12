import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react"

// Removed client-side animations for better performance
export default function Footer({
  lang,
  dictionary,
}: {
  lang: string
  dictionary: any
}) {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900/30 border-t border-gray-200 dark:border-gray-800 relative overflow-hidden">
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5 space-y-6">
            <Link href={`/${lang}`} className="font-syne text-3xl font-bold">
              <span className="text-gradient">KYDANZA</span>
            </Link>
            <p className="text-muted-foreground max-w-xs text-lg">
              Building thoughtful software that serves quietly but powerfully.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h3 className="font-syne font-bold text-xl">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link href={`/${lang}`} className="text-muted-foreground hover:text-primary transition-colors">
                  {dictionary.navigation.home}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/about`} className="text-muted-foreground hover:text-primary transition-colors">
                  {dictionary.navigation.about}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/projects`} className="text-muted-foreground hover:text-primary transition-colors">
                  {dictionary.navigation.projects}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/blog`} className="text-muted-foreground hover:text-primary transition-colors">
                  {dictionary.navigation.blog}
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-4">
            <h3 className="font-syne font-bold text-xl">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:hello@example.com" className="hover:text-primary transition-colors">
                    hello@example.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a href="tel:+11234567890" className="hover:text-primary transition-colors">
                    +1 (123) 456-7890
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p>San Francisco, CA</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground">
            &copy; {new Date().getFullYear()} {dictionary.footer.rights}
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
