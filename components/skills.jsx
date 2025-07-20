"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Database, Layout, Server, Smartphone, Figma, Cpu ,ChevronsLeftRight } from "lucide-react"

const skills = [
   {
    category: "Programming Language",
    icon: <ChevronsLeftRight className="w-6 h-6" />,
    items: [
      { name: "Java", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "Python", level: 85 },
  
    ],
    color: "from-red-500 to-red-400",
  },
  {
    category: "Frontend",
    icon: <Layout className="w-6 h-6" />,
    items: [
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "React", level: 85 },
      { name: "Tailwind CSS", level: 90 },
    ],
    color: "from-blue-500 to-cyan-400",
  },
  {
    category: "Backend",
    icon: <Server className="w-6 h-6" />,
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "Python", level: 75 },
    ],
    color: "from-green-500 to-teal-400",
  },
  {
    category: "Database",
    icon: <Database className="w-6 h-6" />,
    items: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "Firebase", level: 80 },
    ],
    color: "from-yellow-500 to-amber-400",
  },
 
  {
    category: "Design",
    icon: <Figma className="w-6 h-6" />,
    items: [
      { name: "Figma", level: 85 },
      { name: "UI/UX", level: 80 },
    ],
    color: "from-pink-500 to-rose-400",
  },
  {
    category: "Other",
    icon: <Cpu className="w-6 h-6" />,
    items: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 70 },
      { name: "VScode", level: 75 },
      
    ],
    color: "from-red-500 to-orange-400",
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
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full blur-[120px]" />
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
            My Skills
          </motion.h2>
          <motion.div
            variants={fadeIn}
            className="w-20 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-6 rounded-full"
          />
          <motion.p variants={fadeIn} className="text-gray-300 max-w-2xl mx-auto">
            A showcase of my technical skills and expertise
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -10, transition: { type: "spring", stiffness: 400, damping: 10 } }}
              className="bg-indigo-900/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center text-white shadow-md`}
                >
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{skill.category}</h3>
              </div>

              <div className="space-y-4">
                {skill.items.map((item, itemIndex) => (
                  <div key={item.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-white">{item.name}</span>
                      <span className="text-gray-300">{item.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-indigo-950/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${item.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.2 + 0.1 * itemIndex }}
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
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

