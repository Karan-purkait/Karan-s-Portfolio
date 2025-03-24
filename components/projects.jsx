"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const projects = [
  {
    title: "The CodeBird Platform",
    description:
      "A full-featured e-commerce platform with payment integration, user authentication, and admin dashboard.",
    image: "/codebird.png?height=600&width=800",
    tags: ["React", "Node.js", "MongoDB", "Express js","Tailwind CSS"],
    liveLink: "https://thecodebirdofficial.vercel.app/",
    githubLink: "https://github.com/Karan-purkait/The-CodeBird",
  },
  // {
  //   title: "Social Media Dashboard",
  //   description: "A comprehensive dashboard for social media management with analytics and scheduling features.",
  //   image: "/placeholder.svg?height=600&width=800",
  //   tags: ["Next.js", "Tailwind CSS", "Firebase", "Chart.js"],
  //   liveLink: "#",
  //   githubLink: "#",
  // },
  // {
  //   title: "Task Management App",
  //   description: "A collaborative task management application with real-time updates and team collaboration features.",
  //   image: "/placeholder.svg?height=600&width=800",
  //   tags: ["React", "Redux", "Express", "Socket.io"],
  //   liveLink: "#",
  //   githubLink: "#",
  // },
  // {
  //   title: "Fitness Tracking App",
  //   description:
  //     "A mobile-first fitness tracking application with workout plans, progress tracking, and nutrition logging.",
  //   image: "/placeholder.svg?height=600&width=800",
  //   tags: ["React Native", "GraphQL", "MongoDB", "AWS"],
  //   liveLink: "#",
  //   githubLink: "#",
  // },
  // {
  //   title: "Real Estate Platform",
  //   description: "A real estate listing platform with advanced search, filtering, and virtual tours.",
  //   image: "/placeholder.svg?height=600&width=800",
  //   tags: ["Vue.js", "Node.js", "PostgreSQL", "Google Maps API"],
  //   liveLink: "#",
  //   githubLink: "#",
  // },
  // {
  //   title: "Weather Application",
  //   description: "A weather forecasting application with location-based services and interactive maps.",
  //   image: "/placeholder.svg?height=600&width=800",
  //   tags: ["React", "OpenWeather API", "Leaflet", "Tailwind CSS"],
  //   liveLink: "#",
  //   githubLink: "#",
  // },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const visibleProjects = projects.slice(activeIndex, activeIndex + 3)
  const canScrollLeft = activeIndex > 0
  const canScrollRight = activeIndex + 3 < projects.length

  const handlePrev = () => {
    if (canScrollLeft) {
      setDirection(-1)
      setActiveIndex(activeIndex - 1)
    }
  }

  const handleNext = () => {
    if (canScrollRight) {
      setDirection(1)
      setActiveIndex(activeIndex + 1)
    }
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.1 }}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-4 text-white">
            My Projects
          </motion.h2>
          <motion.div
            variants={fadeIn}
            className="w-20 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-6 rounded-full"
          />
          <motion.p variants={fadeIn} className="text-gray-300 max-w-2xl mx-auto">
            Explore some of my recent work and personal projects
          </motion.p>
        </motion.div>

        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={`${project.title}-${activeIndex + index}`}
                initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="group bg-indigo-900/30 backdrop-blur-sm border border-purple-500/20 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex gap-2">
                      {project.githubLink && (
                        <Button
                          size="icon"
                          variant="secondary"
                          asChild
                          className="rounded-full bg-purple-500/80 hover:bg-purple-500 text-white border-none"
                        >
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {project.liveLink && (
                        <Button
                          size="icon"
                          variant="secondary"
                          asChild
                          className="rounded-full bg-cyan-500/80 hover:bg-cyan-500 text-white border-none"
                        >
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-10 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              disabled={!canScrollLeft}
              className="rounded-full border-purple-500/30 text-white hover:bg-purple-500/20 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              disabled={!canScrollRight}
              className="rounded-full border-purple-500/30 text-white hover:bg-purple-500/20 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

