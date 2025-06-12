"use client"
import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CalendarIcon } from "lucide-react"
import { motion, useInView } from "framer-motion"

// Sample blog posts
const featuredPosts = [
  {
    id: 1,
    title: "Why I Love TypeScript",
    excerpt:
      "TypeScript has transformed how I write JavaScript. Here are the key benefits I've experienced and why you might want to consider it for your next project.",
    date: "2023-10-15",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["TypeScript", "JavaScript"],
    slug: "why-i-love-typescript",
  },
  {
    id: 2,
    title: "The Quiet Power of Clean Architecture",
    excerpt:
      "Clean architecture isn't just about code organization—it's about creating systems that can evolve and adapt over time. Let's explore the principles and benefits.",
    date: "2023-09-22",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Architecture", "Best Practices"],
    slug: "power-of-clean-architecture",
  },
]

export default function BlogPreview({ dict, lang }: { dict: any; lang: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-3xl -z-10" />

      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl space-y-4"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
            Latest Insights
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">{dict.title}</h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl">{dict.subtitle}</p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {featuredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800">
                <Link href={`/${lang}/blog/${post.slug}`} className="block">
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-2 text-white/90">
                        <CalendarIcon className="h-4 w-4" />
                        <time dateTime={post.date} className="text-sm">
                          {new Date(post.date).toLocaleDateString(lang === "en" ? "en-US" : "uz-UZ", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="rounded-full border-secondary/20 bg-secondary/5">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="pt-2">
                      <span className="inline-flex items-center text-primary font-medium hover:underline">
                        {dict.readMore}
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-16"
        >
          <Link href={`/${lang}/blog`}>
            <Button
              variant="outline"
              size="lg"
              className="group rounded-full border-secondary/20 hover:bg-secondary/5 px-8 h-14"
            >
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
