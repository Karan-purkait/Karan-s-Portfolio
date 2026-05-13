"use client"

import { motion, useScroll, useSpring, useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, GraduationCap, Calendar, MapPin, Sparkles, Code2, Layers, Cpu } from "lucide-react"
import SpotlightCard from "@/components/spotlight-card"

const experiences = [
  {
    type: "work",
    title: "Software Developer",
    company: "Banerjee Electronics and Consultancy",
    location: "Kolkata, IN",
    date: "April 2026 - Present",
    description: "Architecting scalable backend solutions and leading high-performance software projects. Focus on consultancy and technical leadership.",
    skills: ["Next.js", "Node.js", "Consultancy", "System Design"],
    icon: <Briefcase className="h-6 w-6" />,
    color: "rgba(34, 211, 238, 0.2)"
  },
  {
    type: "work",
    title: "Frontend Developer",
    company: "Shadow Fox",
    location: "Remote",
    date: "2025 - 2026",
    description: "Spearheaded frontend transformation initiatives, resulting in a 40% performance boost. Specialized in Framer Motion and complex React architectures.",
    skills: ["React", "Framer Motion", "UI Optimization", "Tailwind"],
    icon: <Layers className="h-6 w-6" />,
    color: "rgba(139, 92, 246, 0.2)"
  },
  {
    type: "work",
    title: "Web Developer",
    company: "Apexplannet Pvt. Ltd.",
    location: "Hybrid",
    date: "2024 - 2025",
    description: "Developed enterprise-grade web applications with a focus on cross-platform responsiveness and robust API integrations.",
    skills: ["JavaScript", "APIs", "Responsiveness", "Web Performance"],
    icon: <Cpu className="h-6 w-6" />,
    color: "rgba(16, 185, 129, 0.2)"
  },
  {
    type: "education",
    title: "Bachelor's in CSE",
    company: "University Institute of Technology, BU",
    location: "Burdwan, WB",
    date: "2022 - 2026",
    description: "Deep-diving into core Computer Science principles, algorithms, and advanced software engineering methodologies.",
    skills: ["Algorithms", "Data Structures", "Engineering", "CS Fundamentals"],
    icon: <GraduationCap className="h-6 w-6" />,
    color: "rgba(245, 158, 11, 0.2)"
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
    <section id="experience" className="py-24 md:py-40 relative overflow-hidden" ref={containerRef}>
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 text-sm font-medium text-cyan-300 backdrop-blur-md mb-6"
          >
            <Sparkles className="h-4 w-4" />
            Milestones & Growth
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-white font-display mb-6 tracking-tight">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Journey</span>
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed">
            A chronicle of my technical evolution, from academic foundations to leading complex digital transformations.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Animated Scroll Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 transform md:-translate-x-1/2 overflow-hidden">
            <motion.div 
              style={{ scaleY }}
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-cyan-400 via-purple-500 to-transparent origin-top"
            />
          </div>

          <div className="space-y-24">
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
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`relative flex flex-col md:flex-row items-center ${
        index % 2 === 0 ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Timeline Node */}
      <div className="absolute left-4 md:left-1/2 w-10 h-10 rounded-xl bg-slate-950 border border-white/20 z-10 transform -translate-x-1/2 flex items-center justify-center shadow-2xl transition-colors group-hover:border-cyan-400/50">
        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 animate-pulse" />
      </div>

      {/* Date Desktop (Opposite Side) */}
      <div className={`hidden md:flex w-full md:w-1/2 px-12 items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
        <div className="flex items-center gap-3 text-slate-500 font-medium">
          <Calendar className="h-5 w-5" />
          <span className="text-lg">{exp.date}</span>
        </div>
      </div>

      {/* Card Side */}
      <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
        <SpotlightCard className="rounded-[2rem]" spotlightColor={exp.color}>
          <div className="group relative bg-slate-900/40 backdrop-blur-xl border border-white/5 p-8 rounded-[2rem] hover:border-white/20 transition-all duration-500">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-cyan-400 text-sm font-bold uppercase tracking-wider mb-1">
                  <MapPin className="h-3 w-3" />
                  {exp.location}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {exp.title}
                </h3>
                <p className="text-lg text-slate-400 font-medium">{exp.company}</p>
              </div>
              <div className="h-14 w-14 rounded-2xl bg-white/5 flex items-center justify-center text-white border border-white/10 group-hover:scale-110 group-hover:bg-cyan-500/10 group-hover:text-cyan-400 transition-all duration-500">
                {exp.icon}
              </div>
            </div>

            {/* Content */}
            <p className="text-slate-500 leading-relaxed mb-8 text-lg">
              {exp.description}
            </p>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-slate-400 group-hover:text-cyan-300 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Mobile Date */}
            <div className="mt-6 flex md:hidden items-center gap-2 text-slate-500 text-sm font-medium">
              <Calendar className="h-4 w-4" />
              {exp.date}
            </div>
          </div>
        </SpotlightCard>
      </div>
    </motion.div>
  )
}
