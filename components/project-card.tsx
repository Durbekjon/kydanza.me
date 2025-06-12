"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, FileText } from "lucide-react"
import { motion } from "framer-motion"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  category: string
  demoUrl: string
  repoUrl: string
  blogUrl?: string
}

export default function ProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-60 w-full overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
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
            {project.blogUrl && (
              <Link
                href={project.blogUrl}
                className="flex items-center gap-1 bg-white/90 dark:bg-gray-800/90 text-sm font-medium px-3 py-1.5 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors"
              >
                <FileText className="h-3.5 w-3.5" />
                Blog
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold">{project.title}</h3>
        <p className="text-muted-foreground line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="rounded-full border-primary/20 bg-primary/5">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <div
        className={`absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 transition-opacity duration-300 pointer-events-none ${
          isHovered ? "opacity-100" : ""
        }`}
      />
    </motion.div>
  )
}
