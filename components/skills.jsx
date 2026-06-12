"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Braces, Cpu, Database, Figma, Layout, Server, Sparkles, Terminal, Zap } from "lucide-react"
import SpotlightCard from "@/components/spotlight-card"

const skills = [
  {
    category: "Frontend Development",
    icon: <Layout className="h-6 w-6" />,
    color: "from-cyan-400 to-sky-500",
    glow: "rgba(34, 211, 238, 0.2)",
    items: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
  },
  {
    category: "Backend & Cloud",
    icon: <Server className="h-6 w-6" />,
    color: "from-purple-500 to-indigo-600",
    glow: "rgba(168, 85, 247, 0.2)",
    items: ["Node.js", "Express.js", "MongoDB", "AWS S3", "REST APIs"],
  },
  {
    category: "Languages & Core",
    icon: <Braces className="h-6 w-6" />,
    color: "from-amber-400 to-orange-500",
    glow: "rgba(251, 191, 36, 0.2)",
    items: ["JavaScript", "C / C++", "Python", "Data Structures", "Algorithms"],
  },
  {
    category: "DevOps & Tools",
    icon: <Terminal className="h-6 w-6" />,
    color: "from-emerald-400 to-teal-500",
    glow: "rgba(16, 185, 129, 0.2)",
    items: ["Git / GitHub", "Docker", "CI/CD", "Postman", "Vercel / Netlify"],
  },
  {
    category: "UI/UX Design",
    icon: <Figma className="h-6 w-6" />,
    color: "from-pink-500 to-rose-500",
    glow: "rgba(244, 63, 94, 0.2)",
    items: ["Figma", "Responsive Design", "Typography", "Prototyping", "Design Systems"],
  },
  {
    category: "Soft Skills",
    icon: <Zap className="h-6 w-6" />,
    color: "from-blue-500 to-cyan-500",
    glow: "rgba(59, 130, 246, 0.2)",
    items: ["Team Leadership", "Agile / Scrum", "Communication", "Problem Solving", "Adaptability"],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24 md:py-40 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 text-sm font-medium text-cyan-300 backdrop-blur-md mb-6">
              <Sparkles className="h-4 w-4" />
              Technical Prowess
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white font-display mb-6">Skills & Technologies</h2>
            <p className="text-xl text-slate-400">
              A comprehensive stack designed for building scalable, high-performance digital products.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.2 }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.category}
              variants={{
                hidden: { opacity: 0, y: 40, rotate: -1 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  rotate: 0,
                  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
                }
              }}
            >
              <SpotlightCard className="h-full rounded-[2.5rem]" spotlightColor={skill.glow}>
                <div className="group h-full bg-slate-900/40 backdrop-blur-xl border border-white/5 p-8 rounded-[2.5rem] hover:border-white/10 transition-all duration-500">
                  <div className={`mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${skill.color} text-slate-950 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                    {skill.icon}
                  </div>
                  <h3 className="mb-6 text-2xl font-bold text-white">{skill.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg bg-white/5 border border-white/5 px-3 py-1.5 text-sm font-medium text-slate-400 transition-colors group-hover:text-white group-hover:border-white/10"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
