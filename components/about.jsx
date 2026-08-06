"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Sparkles, Code, Users, Award, BookOpen } from "lucide-react"
import Image from "next/image"
import SpotlightCard from "@/components/spotlight-card"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // 3D Tilt for Image
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"])

  const handleMouseMove = (e) => {
    // Disable 3D tilt interaction on touch devices (coarse pointers)
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return
    const rect = e.currentTarget.getBoundingClientRect()
    x.set(e.clientX / rect.width - 0.5)
    y.set(e.clientY / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const metrics = [
    { 
      icon: <Code className="h-4 w-4 sm:h-5 sm:w-5 text-[#4F73D9]" />, 
      value: "15+", 
      label: "Projects Built", 
      desc: "Web apps, tools, and platforms.",
      color: "rgba(79, 115, 217, 0.04)" 
    },
    { 
      icon: <Users className="h-4 w-4 sm:h-5 sm:w-5 text-[#4F73D9]" />, 
      value: "20+", 
      label: "Clients Acquired", 
      desc: "BD pipelines and campaigns.",
      color: "rgba(79, 115, 217, 0.04)" 
    },
    { 
      icon: <Award className="h-4 w-4 sm:h-5 sm:w-5 text-[#4F73D9]" />, 
      value: "25+", 
      label: "Skills Mastered", 
      desc: "Tech and growth capabilities.",
      color: "rgba(79, 115, 217, 0.04)" 
    },
    { 
      icon: <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-[#4F73D9]" />, 
      value: "1+", 
      label: "Year Exp", 
      desc: "In full-stack dev and business.",
      color: "rgba(79, 115, 217, 0.04)" 
    },
  ]

  return (
    <section id="about" className="py-16 md:py-32 relative overflow-hidden bg-white border-y border-slate-100">
      {/* Decorative Blob */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-500/[0.02] rounded-full blur-[100px] -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative group cursor-none"
          >
            <div className="relative aspect-square sm:aspect-[4/5] md:aspect-square w-full max-w-[440px] lg:max-w-[480px] mx-auto rounded-3xl sm:rounded-[2.5rem] overflow-hidden border border-black/[0.06] shadow-xl bg-slate-50">
              <Image
                src="/abt.jpg"
                alt="About Karan Purkait"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10" />
              
              {/* Floating glassmorphic counter on the image */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 rounded-xl sm:rounded-2xl bg-white/95 border border-black/[0.06] p-3 sm:p-4 shadow-lg backdrop-blur-md"
                style={{ transform: "translateZ(30px)" }}
              >
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#4F73D9]">100%</div>
                  <div className="text-[8px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-500">Dedication</div>
                </div>
              </motion.div>
            </div>
            
            {/* Background Glow */}
            <div className="absolute inset-0 bg-blue-500/10 blur-[60px] md:blur-[80px] -z-10 opacity-60 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

          {/* Text & Metrics Column */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/50 px-4 py-2 text-sm font-semibold text-[#4F73D9] backdrop-blur-md shadow-sm">
                <Sparkles className="h-4 w-4" />
                The Mindset
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-display leading-tight">
                Bridging Business <span className="text-[#4F73D9]">Strategy</span> with Technical Execution.
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
                I help startups and businesses scale. As a developer, I understand the building blocks of technology. As a Business Development Associate and Marketing Lead, I know how to sell it, scale it, and establish strong market-fit.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Whether deploying code structures or running marketing campaigns, I strive for high performance and concrete results. I turn technical platforms into active revenue channels.
              </p>
            </div>

            {/* Metrics Grid */}
            <motion.div 
              className="grid grid-cols-2 gap-3 sm:gap-4"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.08, delayChildren: 0.2 }
                }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {metrics.map((metric, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                  }}
                >
                  <SpotlightCard 
                    className="rounded-2xl h-full border border-black/[0.05] bg-slate-50 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md" 
                    spotlightColor={metric.color}
                  >
                    <div className="p-3.5 sm:p-5 flex flex-col justify-between h-full">
                      <div>
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white flex items-center justify-center border border-black/[0.05] mb-2 sm:mb-3 group-hover:scale-105 transition-transform duration-300">
                          {metric.icon}
                        </div>
                        <h4 className="text-xl sm:text-2xl font-black text-slate-900 leading-none mb-1">{metric.value}</h4>
                        <div className="text-xs sm:text-sm font-bold text-slate-800 mb-1">{metric.label}</div>
                      </div>
                      <p className="text-[10px] sm:text-xs text-slate-500 leading-normal">{metric.desc}</p>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
