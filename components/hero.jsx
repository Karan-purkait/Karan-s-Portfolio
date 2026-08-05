"use client"

import { motion, useMotionValue, useTransform, useSpring, useScroll } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Star, Briefcase, Rocket } from "lucide-react"
import Image from "next/image"
import Magnetic from "@/components/magnetic"

export default function Hero() {
  const { scrollY } = useScroll()
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 30 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

  const handleMouseMove = (e) => {
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)

    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-[#4F73D9] text-white">
      {/* Decorative Blob */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[5%] top-[15%] h-[350px] w-[350px] rounded-full bg-white/[0.04] blur-[100px] animate-pulse" />
        <div className="absolute right-[5%] bottom-[15%] h-[350px] w-[350px] rounded-full bg-white/[0.03] blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-8 text-left"
          >
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-[#D4F700] backdrop-blur-md shadow-sm">
                <Sparkles className="h-4 w-4 text-[#D4F700] animate-spin" style={{ animationDuration: "3s" }} />
                Open for high-impact roles
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="font-display text-4xl xs:text-5xl leading-[1.1] text-white md:text-6xl lg:text-7xl font-extrabold tracking-tight">
                Accelerating Business <span className="text-[#D4F700] italic font-serif">Growth</span> through Marketing & Tech.
              </h1>
              <p className="max-w-xl text-lg md:text-xl leading-relaxed text-blue-100 font-medium">
                I'm <span className="text-white font-bold">Karan Purkait</span>, a dual-engine catalyst working as a <span className="text-[#D4F700] font-bold">Business Development Associate</span>, <span className="text-[#D4F700] font-bold">Marketing Lead</span>, and <span className="text-[#D4F700] font-bold">Developer</span>. I bridge the gap between engineering systems and revenue growth.
              </p>
            </motion.div>

            {/* Dual CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <Magnetic strength={0.2} className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto group rounded-full bg-[#D4F700] text-slate-950 hover:bg-[#c2e300] px-8 py-7 text-base font-bold shadow-[0_10px_25px_-5px_rgba(212,247,0,0.3)] hover:shadow-[0_15px_30px_-5px_rgba(212,247,0,0.4)] transition-all duration-300 border border-transparent"
                  onClick={(e) => scrollToSection(e, "projects")}
                >
                  View Work
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Magnetic>

              <Magnetic strength={0.2} className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto rounded-full border-white/20 bg-white/10 px-8 py-7 text-base font-semibold text-white hover:bg-white/20 shadow-sm transition-all duration-300"
                  onClick={(e) => scrollToSection(e, "contact")}
                >
                  Let's Talk
                </Button>
              </Magnetic>
            </motion.div>


          </motion.div>

          {/* Interactive 3D Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative flex items-center justify-center p-0 xs:p-8"
            style={{ perspective: "2000px" }}
          >
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative p-3 xs:p-8"
            >
              {/* Background gradient aura */}
              <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-tr from-white/10 to-transparent blur-3xl" />
              
              {/* Center Portrait */}
              <motion.div 
                className="relative z-10"
                style={{ 
                  z: 40,
                  y: useTransform(scrollY, [0, 1000], [0, -30])
                }}
              >
                {/* Pulsing Back Glow */}
                <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-[#4F73D9] via-indigo-500 to-[#D4F700] opacity-25 blur-2xl group-hover:opacity-40 transition-opacity duration-700 animate-pulse" />
                
                {/* Rotating Neon Ring */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#4F73D9] via-[#D4F700] to-[#4F73D9] opacity-80 blur-[1.5px] animate-[spin_8s_linear_infinite]" />

                <div className="relative h-64 w-64 xs:h-80 xs:w-80 sm:h-96 sm:w-96 md:h-[450px] md:w-[450px] rounded-full overflow-hidden border-4 border-white/30 shadow-[0_30px_100px_rgba(0,0,0,0.3)] bg-slate-950">
                  <Image
                    src="/mypic.jpeg"
                    alt="Karan Purkait"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent z-10" />
                </div>
              </motion.div>


            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        style={{ opacity: useTransform(scrollY, [0, 100], [1, 0]) }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-blue-200">Scroll</div>
        <div className="h-10 w-5 rounded-full border border-white/20 p-1 flex justify-center">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-1.5 w-1.5 rounded-full bg-[#D4F700]"
          />
        </div>
      </motion.div>
    </section>
  )
}
