import { getDictionary } from "./dictionaries"
import HeroSection from "@/components/hero-section"
import ProjectsPreview from "@/components/projects-preview"
import AboutPreview from "@/components/about-preview"
import BlogPreview from "@/components/blog-preview"
import ContactCTA from "@/components/contact-cta"

export default async function Home({
  params: { lang },
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary(lang)

  return (
    <div className="space-y-24 pb-24">
      <HeroSection dict={dict.hero} />
      <AboutPreview dict={dict.about} lang={lang} />
      <ProjectsPreview dict={dict.projects} lang={lang} />
      <BlogPreview dict={dict.blog} lang={lang} />
      <ContactCTA dict={dict.contact} lang={lang} />
    </div>
  )
}
