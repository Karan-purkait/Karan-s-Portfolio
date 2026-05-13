"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, ChevronLeft, ChevronRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import SpotlightCard from "@/components/spotlight-card"

const projects = [
  {
    title: "Happy Care",
    description: "An AI-enabled disease and medicine prediction platform integrated with a comprehensive hospital management system for improved patient care.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    tags: ["AI/ML", "React", "Node.js", "Healthcare"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "TitanoOS",
    description: "A comprehensive fleet management and robotics telemetry platform with real-time tracking, historical playback, and automated ingestion jobs.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js", "AWS S3", "Node.js", "Tailwind"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Martensite Website",
    description: "A professional and industrial website designed for Martensite, focusing on engineering excellence and material science solutions.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Framer Motion", "UI/UX"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Banerjee Electronics",
    description: "The official corporate presence for Banerjee Electronics and Consultancy, showcasing their electronics services and professional consultancy expertise.",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js", "React", "Corporate"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "BECS Stores",
    description: "An integrated e-commerce platform for BECS, featuring electronics inventory management and a seamless shopping experience.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Express", "MongoDB"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "The CodeBird Platform",
    description: "A dynamic platform showcasing CodeBird’s events, projects, and member achievements with a user-friendly and responsive design.",
    image: "/codebird.png",
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    liveLink: "https://thecodebirdofficial.vercel.app/",
    githubLink: "https://github.com/Karan-purkait/The-CodeBird",
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const paginate = (newDirection) => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(newDirection)
    setActiveIndex((prev) => (prev + newDirection + projects.length) % projects.length)
  }

  return (
    <section id="projects" className="py-24 md:py-40 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/5 px-4 py-2 text-sm font-medium text-purple-300 backdrop-blur-md mb-6">
              <Sparkles className="h-4 w-4" />
              Selected Works
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white font-display mb-6">Featured Projects</h2>
            <p className="text-xl text-slate-400">
              A gallery of digital experiences built with precision, performance, and purpose.
            </p>
          </motion.div>

          <div className="flex gap-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-white/10 bg-white/5 hover:bg-white/10 text-white h-14 w-14 backdrop-blur-xl"
              onClick={() => paginate(-1)}
              disabled={isAnimating}
            >
              <ChevronLeft className="h-7 w-7" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-white/10 bg-white/5 hover:bg-white/10 text-white h-14 w-14 backdrop-blur-xl"
              onClick={() => paginate(1)}
              disabled={isAnimating}
            >
              <ChevronRight className="h-7 w-7" />
            </Button>
          </div>
        </div>

        <div className="relative min-h-[500px]">
          <AnimatePresence 
            mode="wait" 
            custom={direction}
            onExitComplete={() => setIsAnimating(false)}
          >
            <motion.div
              key={activeIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 100 : -100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: direction > 0 ? -100 : 100, scale: 0.9 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className="relative group">
                <SpotlightCard className="rounded-[2.5rem]" spotlightColor="rgba(34, 211, 238, 0.3)">
                  <div className="relative aspect-video w-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
                    <Image
                      src={projects[activeIndex].image}
                      alt={projects[activeIndex].title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                  </div>
                </SpotlightCard>
              </div>

              <div className="space-y-8">
                <div className="flex flex-wrap gap-2">
                  {projects[activeIndex].tags.map((tag) => (
                    <span key={tag} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-cyan-300 backdrop-blur-md">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-4xl md:text-5xl font-bold text-white font-display leading-tight">
                    {projects[activeIndex].title}
                  </h3>
                  <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
                    {projects[activeIndex].description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  {projects[activeIndex].liveLink !== "#" && (
                    <Button size="lg" className="rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-8" asChild>
                      <a href={projects[activeIndex].liveLink} target="_blank" rel="noopener noreferrer">
                        View Live Site <ExternalLink className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                  )}
                  {projects[activeIndex].githubLink !== "#" && (
                    <Button size="lg" variant="outline" className="rounded-full border-white/10 bg-white/5 text-white hover:bg-white/10 px-8" asChild>
                      <a href={projects[activeIndex].githubLink} target="_blank" rel="noopener noreferrer">
                        Source Code <Github className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Progress Indicator */}
          <div className="absolute -bottom-16 left-0 right-0 flex justify-center gap-3">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  if (isAnimating) return
                  setDirection(i > activeIndex ? 1 : -1)
                  setActiveIndex(i)
                }}
                className={`h-2 transition-all duration-500 rounded-full ${
                  activeIndex === i ? "w-12 bg-cyan-400" : "w-3 bg-white/10 hover:bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
