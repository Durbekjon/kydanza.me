import { getDictionary } from "../dictionaries"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export default async function AboutPage({
  params: { lang },
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary(lang)

  return (
    <div className="container max-w-4xl py-12 space-y-16">
      <section className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">{dict.about.title}</h1>

        <div className="grid md:grid-cols-[2fr_1fr] gap-8 items-start">
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">{dict.about.intro}</p>
            <p className="text-lg leading-relaxed">
              I'm passionate about creating elegant solutions to complex problems. With a background in both frontend
              and backend development, I bring a holistic approach to every project I work on.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not coding, you can find me exploring nature, reading books on design and philosophy, or
              experimenting with new technologies.
            </p>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=300"
                width={300}
                height={400}
                alt="Portrait"
                className="rounded-lg object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold">{dict.about.skills.title}</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">{dict.about.skills.frontend}</h3>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-primary hover:bg-primary/80">React</Badge>
              <Badge className="bg-primary hover:bg-primary/80">Next.js</Badge>
              <Badge className="bg-primary hover:bg-primary/80">TypeScript</Badge>
              <Badge className="bg-primary hover:bg-primary/80">Tailwind CSS</Badge>
              <Badge className="bg-primary hover:bg-primary/80">Framer Motion</Badge>
            </div>
            <p className="text-muted-foreground">
              I build responsive, accessible, and performant user interfaces that provide exceptional user experiences.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">{dict.about.skills.backend}</h3>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-secondary hover:bg-secondary/80">Node.js</Badge>
              <Badge className="bg-secondary hover:bg-secondary/80">Express</Badge>
              <Badge className="bg-secondary hover:bg-secondary/80">PostgreSQL</Badge>
              <Badge className="bg-secondary hover:bg-secondary/80">MongoDB</Badge>
              <Badge className="bg-secondary hover:bg-secondary/80">GraphQL</Badge>
            </div>
            <p className="text-muted-foreground">
              I design and implement robust APIs and database architectures that power modern web applications.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">{dict.about.skills.tools}</h3>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-accent hover:bg-accent/80 text-accent-foreground">Git</Badge>
              <Badge className="bg-accent hover:bg-accent/80 text-accent-foreground">Docker</Badge>
              <Badge className="bg-accent hover:bg-accent/80 text-accent-foreground">CI/CD</Badge>
              <Badge className="bg-accent hover:bg-accent/80 text-accent-foreground">Jest</Badge>
              <Badge className="bg-accent hover:bg-accent/80 text-accent-foreground">Figma</Badge>
            </div>
            <p className="text-muted-foreground">
              I leverage modern tools and workflows to ensure efficient development and deployment processes.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold">My Journey</h2>
        <div className="space-y-8">
          <div className="space-y-2">
            <h3 className="text-xl font-bold">How I Started</h3>
            <p className="leading-relaxed">
              My journey in software development began with a curiosity about how websites work. What started as a hobby
              quickly evolved into a passion as I discovered the creative and problem-solving aspects of coding.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-bold">What Drives Me</h3>
            <p className="leading-relaxed">
              I'm driven by the opportunity to create solutions that make a positive impact. Whether it's improving user
              experiences, optimizing processes, or solving complex technical challenges, I find fulfillment in using
              technology to make things better.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-bold">My Approach</h3>
            <p className="leading-relaxed">
              I approach each project with a blend of technical expertise and human-centered design thinking. I believe
              that the best software solutions are those that not only work flawlessly but also feel intuitive and
              delightful to use.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
