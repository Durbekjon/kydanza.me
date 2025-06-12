import { getDictionary } from "../dictionaries"
import { Button } from "@/components/ui/button"
import { FileDown } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default async function ResumePage({
  params: { lang },
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary(lang)

  return (
    <div className="container max-w-4xl py-12 space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-4xl md:text-5xl font-bold">{dict.resume.title}</h1>
        <Button className="flex items-center gap-2">
          <FileDown className="h-4 w-4" />
          {dict.resume.download}
        </Button>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2">{dict.resume.experience}</h2>

        <div className="space-y-8">
          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row justify-between">
              <h3 className="text-xl font-bold">Senior Software Engineer</h3>
              <span className="text-muted-foreground">2021 - Present</span>
            </div>
            <div className="text-primary font-medium">TechCorp Inc.</div>
            <p className="text-muted-foreground">
              Led the development of a microservices-based e-commerce platform, improving performance by 40% and
              reducing deployment time by 60%. Mentored junior developers and implemented best practices for code
              quality and testing.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <Badge variant="outline">React</Badge>
              <Badge variant="outline">Node.js</Badge>
              <Badge variant="outline">TypeScript</Badge>
              <Badge variant="outline">Microservices</Badge>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row justify-between">
              <h3 className="text-xl font-bold">Full Stack Developer</h3>
              <span className="text-muted-foreground">2018 - 2021</span>
            </div>
            <div className="text-primary font-medium">WebSolutions Ltd.</div>
            <p className="text-muted-foreground">
              Developed and maintained multiple client websites and web applications. Implemented responsive designs and
              improved accessibility. Collaborated with design and product teams to deliver high-quality user
              experiences.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <Badge variant="outline">JavaScript</Badge>
              <Badge variant="outline">React</Badge>
              <Badge variant="outline">Express</Badge>
              <Badge variant="outline">MongoDB</Badge>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row justify-between">
              <h3 className="text-xl font-bold">Frontend Developer</h3>
              <span className="text-muted-foreground">2016 - 2018</span>
            </div>
            <div className="text-primary font-medium">CreativeTech Studio</div>
            <p className="text-muted-foreground">
              Built interactive user interfaces for web applications. Collaborated with designers to implement
              pixel-perfect designs. Optimized frontend performance and improved user experience.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <Badge variant="outline">HTML/CSS</Badge>
              <Badge variant="outline">JavaScript</Badge>
              <Badge variant="outline">jQuery</Badge>
              <Badge variant="outline">Sass</Badge>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2">{dict.resume.education}</h2>

        <div className="space-y-8">
          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row justify-between">
              <h3 className="text-xl font-bold">Master of Computer Science</h3>
              <span className="text-muted-foreground">2014 - 2016</span>
            </div>
            <div className="text-primary font-medium">University of Technology</div>
            <p className="text-muted-foreground">
              Specialized in Software Engineering with focus on distributed systems and cloud computing.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row justify-between">
              <h3 className="text-xl font-bold">Bachelor of Computer Science</h3>
              <span className="text-muted-foreground">2010 - 2014</span>
            </div>
            <div className="text-primary font-medium">State University</div>
            <p className="text-muted-foreground">
              Graduated with honors. Participated in multiple hackathons and coding competitions.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2">{dict.resume.skills}</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Technical Skills</h3>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Frontend Development</span>
                  <span>90%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "90%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Backend Development</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Database Design</span>
                  <span>80%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "80%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">DevOps</span>
                  <span>75%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "75%" }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Languages & Frameworks</h3>
            <div className="flex flex-wrap gap-2">
              <Badge>JavaScript</Badge>
              <Badge>TypeScript</Badge>
              <Badge>Python</Badge>
              <Badge>React</Badge>
              <Badge>Next.js</Badge>
              <Badge>Node.js</Badge>
              <Badge>Express</Badge>
              <Badge>MongoDB</Badge>
              <Badge>PostgreSQL</Badge>
              <Badge>GraphQL</Badge>
              <Badge>Docker</Badge>
              <Badge>AWS</Badge>
              <Badge>Git</Badge>
              <Badge>CI/CD</Badge>
            </div>

            <h3 className="text-xl font-bold pt-4">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Team Leadership</Badge>
              <Badge variant="secondary">Problem Solving</Badge>
              <Badge variant="secondary">Communication</Badge>
              <Badge variant="secondary">Project Management</Badge>
              <Badge variant="secondary">Mentoring</Badge>
              <Badge variant="secondary">Agile Methodologies</Badge>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
