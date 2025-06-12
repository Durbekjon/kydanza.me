"use client"
import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function AboutPreview({ dict, lang }: { dict: any; lang: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const skills = [
    "Frontend Development",
    "Backend Engineering",
    "UI/UX Design",
    "Database Architecture",
    "API Development",
    "Cloud Services",
  ]

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-secondary/5 clip-path-slant" />

      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -inset-4 md:-inset-8 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl opacity-70 dark:opacity-30" />
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="https://media.licdn.com/dms/image/v2/D4D03AQHslwGcEHLLaQ/profile-displayphoto-shrink_200_200/B4DZS2iCTfH0Ac-/0/1738229163768?e=2147483647&v=beta&t=c3A4S8kDf0P_EJmqMidf0S2-ymPxS0He6cA4UBxO47Y"
                width={600}
                height={600}
                alt="About Me"
                className="object-cover w-full h-full"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="h-1 w-10 bg-primary" />
                    <span className="text-white text-sm font-medium">Software Engineer</span>
                  </div>
                  <h3 className="text-white text-2xl md:text-3xl font-bold">Creative Problem Solver</h3>
                </div>
              </div>
            </div>

            {/* Floating badge - only on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-900 shadow-lg rounded-full px-4 py-2 border border-primary/20 hidden md:block"
            >
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">2+ Years Experience</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              {dict.title}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">Passionate about creating elegant solutions</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{dict.intro}</p>

            <div className="grid grid-cols-2 gap-3 pt-4">
              {skills.map((skill, index) => (
                <div key={skill} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Link href={`/${lang}/about`}>
                <Button size="lg" className="group rounded-full px-8 h-14">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
