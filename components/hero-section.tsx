"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown, Code, Layers, Zap } from "lucide-react"
import Link from "next/link"

export default function HeroSection({ dict }: { dict: any }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | null>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  // Simplified particle animation with fewer particles and optimized rendering
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()

    // Reduce number of particles based on screen size
    const getParticleCount = () => {
      const width = window.innerWidth
      if (width < 768) return 30 // Mobile
      if (width < 1280) return 50 // Tablet
      return 80 // Desktop
    }

    const particles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
    }[] = []

    const createParticles = () => {
      const particleCount = getParticleCount()
      particles.length = 0

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          speedX: Math.random() * 0.3 - 0.15,
          speedY: Math.random() * 0.3 - 0.15,
          color: `hsla(${Math.random() * 60 + 220}, 70%, 70%, ${Math.random() * 0.3 + 0.2})`,
        })
      }
    }

    // Optimize animation with throttled rendering
    let lastTime = 0
    const fps = 30
    const interval = 1000 / fps

    const animate = (timestamp: number) => {
      const deltaTime = timestamp - lastTime

      if (deltaTime > interval) {
        lastTime = timestamp - (deltaTime % interval)

        ctx.clearRect(0, 0, canvas.width, canvas.height)

        particles.forEach((particle, index) => {
          particle.x += particle.speedX
          particle.y += particle.speedY

          if (particle.x < 0 || particle.x > canvas.width) {
            particle.speedX = -particle.speedX
          }

          if (particle.y < 0 || particle.y > canvas.height) {
            particle.speedY = -particle.speedY
          }

          ctx.fillStyle = particle.color
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
          ctx.fill()

          // Draw fewer connections - only connect to nearby particles
          if (index % 3 === 0) {
            // Only check every third particle
            for (let i = index + 1; i < Math.min(index + 5, particles.length); i++) {
              const otherParticle = particles[i]
              const dx = particle.x - otherParticle.x
              const dy = particle.y - otherParticle.y
              const distance = Math.sqrt(dx * dx + dy * dy)

              if (distance < 80) {
                ctx.beginPath()
                ctx.strokeStyle = `rgba(100, 100, 255, ${0.05 * (1 - distance / 80)})`
                ctx.lineWidth = 0.5
                ctx.moveTo(particle.x, particle.y)
                ctx.lineTo(otherParticle.x, otherParticle.y)
                ctx.stroke()
              }
            }
          }
        })
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    const handleResize = () => {
      resizeCanvas()
      createParticles()
    }

    createParticles()
    animationRef.current = requestAnimationFrame(animate)

    window.addEventListener("resize", handleResize)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Simplified animation variants
  const staggeredAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay },
    }),
  }

  const features = [
    {
      icon: <Code className="h-5 w-5" />,
      title: "Clean Code",
      description: "Writing elegant, maintainable solutions",
    },
    {
      icon: <Layers className="h-5 w-5" />,
      title: "Modern Stack",
      description: "Using cutting-edge technologies",
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Performance",
      description: "Building fast, optimized applications",
    },
  ]

  return (
    <section ref={containerRef} className="relative min-h-[100vh] overflow-hidden">
      {/* Canvas background - optimized */}
      <canvas ref={canvasRef} className="absolute inset-0 -z-10" />

      {/* Background elements - simplified */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="container relative z-10 flex flex-col items-center justify-center min-h-[100vh] py-20"
      >
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <motion.div initial="hidden" animate="visible" variants={staggeredAnimation} custom={0} className="space-y-4">
            <div className="inline-block mb-4 px-6 py-2 rounded-full border border-primary/20 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
              <span className="text-sm font-medium text-primary">Software Engineer & Designer</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
              <span className="block">{dict.title}</span>
              <span className="mt-2 block text-gradient">{dict.subtitle}</span>
            </h1>
          </motion.div>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={staggeredAnimation}
            custom={0.1}
            className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl mt-6"
          >
            {dict.tagline}
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggeredAnimation}
            custom={0.2}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          >
            <Button
              size="lg"
              className="group rounded-full text-base h-14 px-8 bg-primary hover:bg-primary/90 text-white"
            >
              {dict.cta}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full text-base h-14 px-8 border-primary/20 hover:bg-primary/5"
            >
              View Resume
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial="hidden"
                animate="visible"
                variants={staggeredAnimation}
                custom={0.3 + i * 0.1}
                className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-primary/10 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-lg">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator - simplified */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="flex flex-col items-center"
        >
          <Link
            href="#projects"
            className="rounded-full border border-primary/30 p-2 hover:bg-primary/10 transition-colors"
          >
            <ChevronDown className="h-5 w-5 text-primary" />
          </Link>
        </motion.div>
      </div>

      {/* Floating badges - simplified and only on larger screens */}
      <div className="absolute bottom-20 left-10 hidden xl:block">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="animate-float"
        >
          <div className="bg-white dark:bg-gray-900 shadow-lg rounded-full px-4 py-2 flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            <span className="text-sm font-medium">Available for hire</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
