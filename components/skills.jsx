"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Braces, Cpu, Database, Figma, Layout, Server, Sparkles } from "lucide-react"

const skills = [
  {
    category: "Programming",
    icon: <Braces className="h-6 w-6" />,
    items: [
      { name: "Java", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "Python", level: 85 },
    ],
    color: "from-cyan-400 via-sky-400 to-blue-500",
    accent: "text-cyan-200",
  },
  {
    category: "Frontend",
    icon: <Layout className="h-6 w-6" />,
    items: [
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "React", level: 85 },
      { name: "Tailwind CSS", level: 90 },
    ],
    color: "from-sky-400 via-cyan-400 to-teal-400",
    accent: "text-sky-200",
  },
  {
    category: "Backend",
    icon: <Server className="h-6 w-6" />,
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "Python", level: 75 },
    ],
    color: "from-emerald-400 via-teal-400 to-cyan-400",
    accent: "text-emerald-200",
  },
  {
    category: "Database",
    icon: <Database className="h-6 w-6" />,
    items: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "Firebase", level: 80 },
    ],
    color: "from-amber-300 via-orange-300 to-yellow-400",
    accent: "text-amber-200",
  },
  {
    category: "Design",
    icon: <Figma className="h-6 w-6" />,
    items: [
      { name: "Figma", level: 85 },
      { name: "UI/UX", level: 80 },
    ],
    color: "from-fuchsia-400 via-pink-400 to-rose-400",
    accent: "text-pink-200",
  },
  {
    category: "Workflow",
    icon: <Cpu className="h-6 w-6" />,
    items: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 70 },
      { name: "VS Code", level: 75 },
    ],
    color: "from-violet-400 via-indigo-400 to-sky-400",
    accent: "text-violet-200",
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="relative py-20 md:py-32">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[8%] top-1/3 h-[380px] w-[380px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute right-[10%] top-1/4 h-[320px] w-[320px] rounded-full bg-amber-400/10 blur-[120px]" />
      </div>

      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.1 }}
          className="mb-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end"
        >
          <div>
            <motion.div
              variants={fadeIn}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur-md"
            >
              <Sparkles className="h-4 w-4 text-cyan-300" />
              Craft, systems, and product execution
            </motion.div>

            <motion.h2 variants={fadeIn} className="font-display text-4xl text-white md:text-5xl">
              Skills that support production-ready, polished interfaces.
            </motion.h2>

            <motion.p variants={fadeIn} className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              I focus on the stack that matters for fast delivery: thoughtful frontend work, dependable backend
              structure, and a workflow that keeps projects maintainable.
            </motion.p>
          </div>

          <motion.div
            variants={fadeIn}
            className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:grid-cols-3"
          >
            {[
              { value: "6", label: "Core areas" },
              { value: "90%+", label: "Top strengths" },
              { value: "UI + Logic", label: "Build range" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl bg-slate-950/40 p-4">
                <div className="text-2xl font-semibold text-white">{item.value}</div>
                <div className="mt-1 text-sm text-slate-400">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -10, transition: { type: "spring", stiffness: 400, damping: 10 } }}
              className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:shadow-[0_30px_80px_-35px_rgba(56,189,248,0.45)]"
            >
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${skill.color}`} />
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div
                  className={`absolute -right-12 top-6 h-28 w-28 rounded-full bg-gradient-to-br ${skill.color} opacity-20 blur-3xl`}
                />
              </div>

              <div className="mb-6 flex items-center gap-3">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${skill.color} text-slate-950 shadow-lg`}
                >
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{skill.category}</h3>
                  <p className={`text-sm ${skill.accent}`}>Focused capability area</p>
                </div>
              </div>

              <div className="space-y-4">
                {skill.items.map((item, itemIndex) => (
                  <div key={item.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-100">{item.name}</span>
                      <span className="text-slate-400">{item.level}%</span>
                    </div>
                    <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-900/80">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${item.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.2 + 0.1 * itemIndex }}
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color} shadow-[0_0_20px_rgba(125,211,252,0.35)]`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
