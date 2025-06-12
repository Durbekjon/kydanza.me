"use client"
import { useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function ContactCTA({ dict, lang }: { dict: any; lang: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl"
        >
          <div className="absolute inset-0 animated-gradient" />

          {/* Simplified decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          </div>

          <div className="relative p-8 md:p-12 lg:p-16 text-center space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
              Let's Connect
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">{dict.title}</h2>

            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">{dict.subtitle}</p>

            <div className="pt-4">
              <Link href={`/${lang}/contact`}>
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 group rounded-full px-8 h-14">
                  {dict.send}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
