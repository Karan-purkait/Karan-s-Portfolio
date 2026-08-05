"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Sparkles, Terminal, Code2, TrendingUp, Users2, Figma, Compass } from "lucide-react"
import SpotlightCard from "@/components/spotlight-card"

const skills = [
  {
    category: "Technical Development",
    icon: <Code2 className="h-5 w-5 text-[#D4F700]" />,
    color: "bg-white/10 border-white/20",
    items: ["React.js", "Next.js", "Java", "Node.js", "Express.js", "REST APIs", "Tailwind CSS", "TypeScript"],
  },
  {
    category: "DevOps & Tools",
    icon: <Terminal className="h-5 w-5 text-[#D4F700]" />,
    color: "bg-white/10 border-white/20",
    items: ["Git / GitHub", "Docker", "DevOps basics", "AWS S3", "CI/CD", "Postman", "Vercel / Netlify"],
  },
  {
    category: "Business Development",
    icon: <Users2 className="h-5 w-5 text-[#D4F700]" />,
    color: "bg-white/10 border-white/20",
    items: ["Lead Generation", "Client Acquisition", "Sales Strategy", "CRM Management", "Deal Closing", "Negotiation"],
  },
  {
    category: "Marketing & Growth",
    icon: <TrendingUp className="h-5 w-5 text-[#D4F700]" />,
    color: "bg-white/10 border-white/20",
    items: ["Digital Marketing", "SEO Strategy", "Social Media Ads", "Lead Nurturing", "Email Marketing", "Brand Growth"],
  },
  {
    category: "Design & UX",
    icon: <Figma className="h-5 w-5 text-[#D4F700]" />,
    color: "bg-white/10 border-white/20",
    items: ["Figma", "Responsive Web Design", "Typography", "Interactive Prototyping", "Design Systems"],
  },
  {
    category: "Core Languages & Data",
    icon: <Compass className="h-5 w-5 text-[#D4F700]" />,
    color: "bg-white/10 border-white/20",
    items: ["Java Core", "C / C++", "Python", "Data Structures", "Algorithms", "SQL / MongoDB"],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24 md:py-32 relative bg-[#4F73D9] text-white border-y border-white/10">
      {/* Decorative Blob */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-white/[0.02] rounded-full blur-[90px]" />
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-[#D4F700] backdrop-blur-md shadow-sm mb-6">
              <Sparkles className="h-4 w-4 text-[#D4F700]" />
              Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display mb-4">
              Skills & Tech Stack
            </h2>
            <p className="text-lg text-blue-100 font-medium">
              Bridging engineering capabilities and marketing tools to form a comprehensive growth stack.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08, delayChildren: 0.1 }
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
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
                }
              }}
              className="h-full"
            >
              <SpotlightCard className="h-full rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 shadow-md backdrop-blur-sm" spotlightColor="rgba(255, 255, 255, 0.05)">
                <div className="p-6 flex flex-col h-full justify-between">
                  <div>
                    <div className={`mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl ${skill.color} border shadow-sm bg-white/10`}>
                      {skill.icon}
                    </div>
                    <h3 className="mb-4 text-xl font-bold text-white">{skill.category}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg bg-white/10 border border-white/10 px-3 py-1.5 text-xs font-semibold text-[#D4F700]"
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
