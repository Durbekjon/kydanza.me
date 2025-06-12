import { getDictionary } from "../dictionaries"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default async function ContactPage({
  params: { lang },
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary(lang)

  return (
    <div className="container py-12">
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">{dict.contact.title}</h1>
            <p className="text-lg text-muted-foreground">{dict.contact.subtitle}</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Email</div>
                <div className="font-medium">hello@example.com</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Phone</div>
                <div className="font-medium">+1 (555) 123-4567</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Location</div>
                <div className="font-medium">San Francisco, CA</div>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <div className="aspect-video rounded-lg overflow-hidden bg-muted">
              {/* Placeholder for a map */}
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                Interactive Map
              </div>
            </div>
          </div>
        </div>

        <div>
          <form className="space-y-6 p-6 border rounded-lg bg-card">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                {dict.contact.name}
              </label>
              <Input id="name" placeholder="John Doe" />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                {dict.contact.email}
              </label>
              <Input id="email" type="email" placeholder="john@example.com" />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                {dict.contact.message}
              </label>
              <Textarea id="message" placeholder="How can I help you?" className="min-h-[150px] resize-none" />
            </div>

            <Button type="submit" className="w-full">
              <Send className="mr-2 h-4 w-4" />
              {dict.contact.send}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
