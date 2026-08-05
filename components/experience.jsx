"use client"

import { motion, useScroll, useSpring, useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, GraduationCap, Calendar, MapPin, Sparkles, Layers, Cpu } from "lucide-react"
import SpotlightCard from "@/components/spotlight-card"

const experiences = [
  {
    type: "work",
    title: "AI Software Developer",
    company: "Accenditore Software Private Limited",
    location: "Kolkata, India (On-site)",
    date: "July 2026 - Present",
    description: "Design and develop production-ready AI applications integrating LLMs with full-stack systems. Build Retrieval-Augmented Generation (RAG) pipelines, intelligent agents, and multi-agent workflows using LangChain.",
    skills: ["Gen AI", "RAG", "LangChain", "LLMs", "Python", "TypeScript", "Node.js"],
    icon: <Sparkles className="h-5 w-5 text-[#D4F700]" />,
    color: "rgba(255, 255, 255, 0.05)"
  },
  {
    type: "work",
    title: "Software Developer & Consultant",
    company: "Banerjee Electronics and Consultancy",
    location: "Kolkata, IN",
    date: "Dec 2025 - July 2026",
    description: "Architecting web platforms, handling backend solutions, and leading technical client consultancy. Managing and executing delivery pipelines.",
    skills: ["Next.js", "Node.js", "System Architecture", "Client Relations"],
    icon: <Briefcase className="h-5 w-5 text-[#D4F700]" />,
    color: "rgba(255, 255, 255, 0.05)"
  },
  {
    type: "work",
    title: "Frontend Developer",
    company: "Shadow Fox",
    location: "Remote",
    date: "2025 - 2026",
    description: "Built polished landing pages, optimized dashboard telemetry components, and implemented micro-interactions for dynamic user retention.",
    skills: ["React", "Framer Motion", "UI Tuning", "Tailwind CSS"],
    icon: <Layers className="h-5 w-5 text-[#D4F700]" />,
    color: "rgba(255, 255, 255, 0.05)"
  },
  {
    type: "work",
    title: "Web Developer",
    company: "Apexplannet Pvt. Ltd.",
    location: "Hybrid",
    date: "2024 - 2025",
    description: "Developed and structured cross-platform websites, worked on API services integration, and refined codebases for optimal SEO and client audits.",
    skills: ["JavaScript", "APIs Integration", "SEO Basics", "Web Performance"],
    icon: <Cpu className="h-5 w-5 text-[#D4F700]" />,
    color: "rgba(255, 255, 255, 0.05)"
  },
  {
    type: "education",
    title: "Bachelor's in CSE",
    company: "University Institute of Technology, BU",
    location: "Burdwan, WB",
    date: "2022 - 2026",
    description: "Acquired core academic foundations in computer engineering, database structures, algorithms design, and networks programming.",
    skills: ["Data Structures", "Algorithms", "Database Systems", "Software Eng."],
    icon: <GraduationCap className="h-5 w-5 text-[#D4F700]" />,
    color: "rgba(255, 255, 255, 0.05)"
  },
]

export default function Experience() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <section id="experience" className="py-24 md:py-32 relative overflow-hidden bg-[#4F73D9] text-white border-y border-white/10" ref={containerRef}>
      {/* Decorative Blob */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-[#D4F700] backdrop-blur-md shadow-sm mb-6"
          >
            <Sparkles className="h-4 w-4" />
            Growth Milestones
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display mb-4">
            Professional Journey
          </h2>
          <p className="text-lg text-blue-100 font-medium">
            Chronological log of academic studies, web development experience, and technical leadership.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/20 transform md:-translate-x-1/2 overflow-hidden">
            <motion.div 
              style={{ scaleY }}
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#D4F700] to-white origin-top"
            />
          </div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ExperienceItem({ exp, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className={`relative flex flex-col md:flex-row items-stretch ${
        index % 2 === 0 ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Timeline Node */}
      <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-lg bg-white border border-white/20 z-10 transform -translate-x-1/2 flex items-center justify-center shadow-lg top-6">
        <div className="w-2.5 h-2.5 rounded-full bg-[#D4F700]" />
      </div>

      {/* Date Desktop (Opposite Side) */}
      <div className={`hidden md:flex w-full md:w-1/2 px-12 items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
        <div className="flex items-center gap-2 text-blue-100 font-semibold">
          <Calendar className="h-4.5 w-4.5" />
          <span className="text-base">{exp.date}</span>
        </div>
      </div>

      {/* Card Side */}
      <div className={`w-full md:w-1/2 pl-12 ${index % 2 === 0 ? "md:pl-0 md:pr-12" : "md:pl-12 md:pr-0"}`}>
        <SpotlightCard className="rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 shadow-lg backdrop-blur-sm" spotlightColor={exp.color}>
          <div className="p-6 relative">
            {/* Header */}
            <div className="flex justify-between items-start gap-4 mb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-1 text-[#D4F700] text-xs font-bold uppercase tracking-wider">
                  <MapPin className="h-3 w-3" />
                  {exp.location}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {exp.title}
                </h3>
                <p className="text-sm text-blue-150 font-semibold">{exp.company}</p>
              </div>
              <div className="h-10 w-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shadow-sm">
                {exp.icon}
              </div>
            </div>

            {/* Description */}
            <p className="text-blue-100 leading-relaxed mb-6 text-sm">
              {exp.description}
            </p>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-1.5">
              {exp.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/10 text-[10px] font-bold text-white"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Mobile Date */}
            <div className="mt-4 flex md:hidden items-center gap-1.5 text-blue-100 text-xs font-semibold">
              <Calendar className="h-4 w-4" />
              {exp.date}
            </div>
          </div>
        </SpotlightCard>
      </div>
    </motion.div>
  )
}
