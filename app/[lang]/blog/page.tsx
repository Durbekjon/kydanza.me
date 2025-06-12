import { getDictionary } from "../dictionaries"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon } from "lucide-react"

// Sample blog posts data
const posts = [
  {
    id: 1,
    title: "Why I Love TypeScript",
    excerpt:
      "TypeScript has transformed how I write JavaScript. Here are the key benefits I've experienced and why you might want to consider it for your next project.",
    date: "2023-10-15",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["TypeScript", "JavaScript", "Development"],
    slug: "why-i-love-typescript",
  },
  {
    id: 2,
    title: "The Quiet Power of Clean Architecture",
    excerpt:
      "Clean architecture isn't just about code organization—it's about creating systems that can evolve and adapt over time. Let's explore the principles and benefits.",
    date: "2023-09-22",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Architecture", "Best Practices", "Software Design"],
    slug: "power-of-clean-architecture",
  },
  {
    id: 3,
    title: "Lessons from Building My First Multilingual App",
    excerpt:
      "Building a multilingual application taught me valuable lessons about internationalization, localization, and creating inclusive user experiences.",
    date: "2023-08-10",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["i18n", "Next.js", "UX"],
    slug: "lessons-from-multilingual-app",
  },
  {
    id: 4,
    title: "Optimizing React Performance",
    excerpt:
      "Practical strategies for improving the performance of your React applications, from component optimization to bundle size reduction.",
    date: "2023-07-05",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["React", "Performance", "Optimization"],
    slug: "optimizing-react-performance",
  },
]

export default async function BlogPage({
  params: { lang },
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary(lang)

  return (
    <div className="container py-12 space-y-8">
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold">{dict.blog.title}</h1>
        <p className="text-lg text-muted-foreground">{dict.blog.subtitle}</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <article
            key={post.id}
            className="group rounded-lg border bg-card overflow-hidden transition-all hover:shadow-md"
          >
            <Link href={`/${lang}/blog/${post.slug}`}>
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarIcon className="h-4 w-4" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString(lang === "en" ? "en-US" : "uz-UZ", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
                <h2 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="pt-2">
                  <span className="text-primary font-medium hover:underline">{dict.blog.readMore} →</span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
