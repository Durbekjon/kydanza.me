"use client"
import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink, Github } from "lucide-react"
import { motion, useInView } from "framer-motion"

// Sample featured projects
const featuredProjects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A responsive task management application with drag-and-drop functionality and real-time updates.",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&h=400&fit=crop",
    tags: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: 3,
    title: "API Gateway Service",
    description: "A microservice-based API gateway that handles authentication, rate limiting, and request routing.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
    tags: ["Node.js", "Express", "Redis", "Docker"],
    demoUrl: "#",
    repoUrl: "#",
  },
]

function ProjectCard({ project, index, isInView }: { project: any; index: number; isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800">
        <div className="relative h-60 w-full overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex gap-3">
              <Link
                href={project.demoUrl}
                className="flex items-center gap-1 bg-white/90 dark:bg-gray-800/90 text-sm font-medium px-3 py-1.5 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Demo
              </Link>
              <Link
                href={project.repoUrl}
                className="flex items-center gap-1 bg-white/90 dark:bg-gray-800/90 text-sm font-medium px-3 py-1.5 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors"
              >
                <Github className="h-3.5 w-3.5" />
                Code
              </Link>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <h3 className="text-2xl font-bold">{project.title}</h3>
          <p className="text-muted-foreground line-clamp-2">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag: string) => (
              <Badge key={tag} variant="outline" className="rounded-full border-primary/20 bg-primary/5">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function ProjectsPreview({ dict, lang }: { dict: any; lang: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Simplified marquee - removed for performance
  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-3xl -z-10" />

      <div className="container relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl space-y-4"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Featured Work
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">{dict.title}</h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl">{dict.subtitle}</p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {isMounted &&
            featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} isInView={isInView} />
            ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-16"
        >
          <Link href={`/${lang}/projects`}>
            <Button
              variant="outline"
              size="lg"
              className="group rounded-full border-primary/20 hover:bg-primary/5 px-8 h-14"
            >
              {dict.filters.all}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
