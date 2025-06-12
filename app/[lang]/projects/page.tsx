import { getDictionary } from "../dictionaries"
import ProjectCard from "@/components/project-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample project data
const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "fullstack",
    demoUrl: "#",
    repoUrl: "#",
    blogUrl: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A responsive task management application with drag-and-drop functionality and real-time updates.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    category: "frontend",
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: 3,
    title: "API Gateway Service",
    description: "A microservice-based API gateway that handles authentication, rate limiting, and request routing.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Node.js", "Express", "Redis", "Docker"],
    category: "backend",
    demoUrl: "#",
    repoUrl: "#",
    blogUrl: "#",
  },
  {
    id: 4,
    title: "Mobile Fitness Tracker",
    description: "A cross-platform mobile app for tracking workouts, nutrition, and fitness progress.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["React Native", "Redux", "Firebase", "HealthKit"],
    category: "mobile",
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A multilingual portfolio website built with Next.js and Framer Motion.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "frontend",
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: 6,
    title: "Real-time Chat Application",
    description: "A real-time chat application with private messaging, group chats, and file sharing.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["React", "Socket.io", "Express", "MongoDB"],
    category: "fullstack",
    demoUrl: "#",
    repoUrl: "#",
  },
]

export default async function ProjectsPage({
  params: { lang },
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary(lang)

  return (
    <div className="container py-12 space-y-8">
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold">{dict.projects.title}</h1>
        <p className="text-lg text-muted-foreground">{dict.projects.subtitle}</p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList>
            <TabsTrigger value="all">{dict.projects.filters.all}</TabsTrigger>
            <TabsTrigger value="frontend">{dict.projects.filters.frontend}</TabsTrigger>
            <TabsTrigger value="backend">{dict.projects.filters.backend}</TabsTrigger>
            <TabsTrigger value="fullstack">{dict.projects.filters.fullstack}</TabsTrigger>
            <TabsTrigger value="mobile">{dict.projects.filters.mobile}</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-0">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>

        {["frontend", "backend", "fullstack", "mobile"].map((category) => (
          <TabsContent key={category} value={category} className="mt-0">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter((project) => project.category === category)
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
