"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Briefcase, GraduationCap, Heart, Sparkles } from "lucide-react"
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
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set(e.clientX / rect.width - 0.5)
    y.set(e.clientY / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const features = [
    { icon: <Code />, title: "Development", desc: "Full-Stack Specialist", color: "rgba(34, 211, 238, 0.2)" },
    { icon: <Briefcase />, title: "Experience", desc: "1+ Year in Tech", color: "rgba(139, 92, 246, 0.2)" },
    { icon: <GraduationCap />, title: "Education", desc: "Computer Science", color: "rgba(245, 158, 11, 0.2)" },
    { icon: <Heart />, title: "Passion", desc: "Clean UI & Logic", color: "rgba(239, 68, 68, 0.2)" },
  ]

  return (
    <section id="about" className="py-24 md:py-40 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative group cursor-none"
          >
            <div className="relative aspect-[4/5] md:aspect-square w-full max-w-[500px] mx-auto rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
              <Image
                src="/abt.jpg"
                alt="About Me"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-10 z-20 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-4 shadow-xl"
                style={{ transform: "translateZ(40px)" }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">1+</div>
                  <div className="text-[10px] uppercase tracking-wider text-cyan-300">Year Exp</div>
                </div>
              </motion.div>
            </div>
            
            {/* Background Glow */}
            <div className="absolute inset-0 bg-cyan-500/20 blur-[100px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

          {/* Text Column */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 text-sm font-medium text-cyan-300 backdrop-blur-md">
                <Sparkles className="h-4 w-4" />
                The Story Behind
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white font-display leading-tight">
                Engineering <span className="text-cyan-400">Excellence</span> with a Creative Mindset.
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                I'm a full-stack developer dedicated to building high-performance, polished digital products. I don't just write code; I craft experiences that are intuitive, scalable, and visually compelling.
              </p>
              <p className="text-slate-400 leading-relaxed">
                My approach combines rigorous engineering principles with a deep understanding of modern UI/UX trends. Whether it's a complex backend system or a pixel-perfect frontend, I strive for perfection in every commit.
              </p>
            </div>

            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: 0.3 }
                }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {features.map((item, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                  }}
                >
                  <SpotlightCard 
                    className="rounded-2xl h-full" 
                    spotlightColor={item.color}
                  >
                    <div className="p-6 bg-slate-900/40 border border-white/5 rounded-2xl group-hover:border-white/10 transition-colors h-full">
                      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-500">
                        {item.icon}
                      </div>
                      <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
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
