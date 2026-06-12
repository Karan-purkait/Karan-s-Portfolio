"use client"

import { motion, useMotionValue, useTransform, useSpring, useScroll } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Sparkles, Star, Github, Linkedin, MousePointer2 } from "lucide-react"
import Image from "next/image"
import TextScramble from "@/components/text-scramble"
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
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Dynamic Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[5%] top-[15%] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px] animate-pulse" />
        <div className="absolute right-[5%] bottom-[15%] h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 xs:px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-8 text-left"
          >
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 text-sm font-medium text-cyan-300 backdrop-blur-md">
                <Sparkles className="h-4 w-4" />
                Available for new opportunities
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="font-display text-4xl xs:text-5xl leading-[1.1] text-white md:text-7xl lg:text-8xl font-bold tracking-tight">
                Crafting <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 bg-clip-text text-transparent italic">
                  Digital
                </span> <br />
                Experiences.
              </h1>
              <p className="max-w-xl text-lg md:text-xl leading-relaxed text-slate-400">
                I'm <span className="text-white font-medium">Karan Purkait</span>, a Full-Stack Developer specializing in building high-performance, polished web products that balance aesthetic beauty with engineering excellence.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <Magnetic strength={0.2} className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto group rounded-full bg-white text-slate-950 hover:bg-slate-200 px-6 py-5 text-base sm:px-8 sm:py-7 sm:text-lg font-bold shadow-[0_20px_50px_-15px_rgba(255,255,255,0.2)]"
                  onClick={(e) => scrollToSection(e, "contact")}
                >
                  Let's Talk
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Magnetic>

              <Magnetic strength={0.2} className="w-full sm:w-auto">
                <a href="/KaranPurkaitResume.pdf" download="Karan_Purkait_Resume.pdf" className="block w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto rounded-full border-white/10 bg-white/5 px-6 py-5 text-base sm:px-8 sm:py-7 sm:text-lg font-semibold text-white backdrop-blur-md hover:bg-white/10"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Resume
                  </Button>
                </a>
              </Magnetic>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col xs:flex-row items-start xs:items-center gap-4 xs:gap-8 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center overflow-hidden">
                     <Image src={`https://i.pravatar.cc/100?u=${i}`} alt="Client" width={40} height={40} />
                  </div>
                ))}
                <div className="h-10 w-10 rounded-full border-2 border-slate-950 bg-cyan-500 flex items-center justify-center text-xs font-bold text-slate-950">
                  +12
                </div>
              </div>
              <div className="text-sm">
                <div className="flex gap-1 text-amber-400 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="h-3 w-3 fill-current" />)}
                </div>
                <div className="text-slate-400">Trusted by startups worldwide</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative flex items-center justify-center p-0 xs:p-10 md:p-20"
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
              className="relative p-3 xs:p-10 md:p-20"
            >
              <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 blur-3xl animate-pulse" />
              
              {/* MAIN CONTAINER: Lower Layer (Image) */}
              <motion.div 
                className="relative z-10"
                style={{ 
                  transform: "translateZ(50px)",
                  y: useTransform(scrollY, [0, 1000], [0, -50])
                }}
              >
                <div className="relative h-48 w-48 xs:h-64 xs:w-64 sm:h-80 sm:w-80 md:h-[450px] md:w-[450px]">
                  <Image
                    src="/mypic.jpeg"
                    alt="Karan Purkait portrait"
                    fill
                    className="object-cover rounded-[3rem] border border-white/10 shadow-2xl"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent rounded-[3rem]" />
                </div>
              </motion.div>

              {/* UPPER MAIN CONTAINER: Housing the two badge containers with ultra-premium design */}
              <motion.div 
                className="absolute inset-0 z-50 pointer-events-none"
                style={{ 
                  transform: "translateZ(180px)", 
                  transformStyle: "preserve-3d",
                  y: useTransform(scrollY, [0, 1000], [0, -50])
                }}
              >
                {/* Badge 1: Experience - Sleek horizontal design */}
                <motion.div 
                  whileHover={{ scale: 1.05, translateZ: "30px" }}
                  className="absolute -left-4 xs:-left-8 md:-left-16 top-[8%] pointer-events-auto group"
                >
                  <div className="relative overflow-hidden rounded-[1rem] xs:rounded-[1.5rem] md:rounded-[2rem] border border-white/20 bg-slate-900/90 py-2 px-3 xs:py-3 xs:px-5 md:py-5 md:px-9 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] backdrop-blur-3xl transition-all duration-500 group-hover:border-cyan-500/50">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    
                    <div className="flex items-center gap-2 xs:gap-3 md:gap-6 relative z-10">
                      <div className="h-8 w-8 xs:h-10 xs:w-10 md:h-16 md:w-16 rounded-[0.8rem] xs:rounded-[1.2rem] bg-gradient-to-br from-cyan-500/20 to-sky-500/20 flex items-center justify-center text-cyan-400 shadow-[inset_0_0_15px_rgba(34,211,238,0.2)] border border-cyan-500/30">
                        <MousePointer2 className="h-4 w-4 xs:h-5 xs:w-5 md:h-8 md:w-8" />
                      </div>
                      <div>
                        <div className="text-[7px] xs:text-[9px] md:text-[11px] text-cyan-300 uppercase tracking-[0.2em] xs:tracking-[0.4em] font-black mb-0.5 xs:mb-1 opacity-80">Experience</div>
                        <div className="text-sm xs:text-xl md:text-3xl font-black text-white whitespace-nowrap tracking-tighter">1+ <span className="text-[10px] xs:text-sm md:text-lg font-bold text-slate-400 ml-0.5 xs:ml-1">Year</span></div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Badge 2: Projects - Sleek horizontal design */}
                <motion.div 
                  whileHover={{ scale: 1.05, translateZ: "30px" }}
                  className="absolute -right-4 xs:-right-8 md:-right-16 bottom-[8%] pointer-events-auto group"
                >
                  <div className="relative overflow-hidden rounded-[1rem] xs:rounded-[1.5rem] md:rounded-[2rem] border border-white/20 bg-slate-900/90 py-2 px-3 xs:py-3 xs:px-5 md:py-5 md:px-9 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] backdrop-blur-3xl transition-all duration-500 group-hover:border-purple-500/50">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                    <div className="flex items-center gap-2 xs:gap-3 md:gap-6 relative z-10">
                      <div className="h-8 w-8 xs:h-10 xs:w-10 md:h-16 md:w-16 rounded-[0.8rem] xs:rounded-[1.2rem] bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 flex items-center justify-center text-purple-400 shadow-[inset_0_0_15px_rgba(168,85,247,0.2)] border border-purple-500/30">
                        <Star className="h-4 w-4 xs:h-5 xs:w-5 md:h-8 md:w-8" />
                      </div>
                      <div>
                        <div className="text-[7px] xs:text-[9px] md:text-[11px] text-purple-300 uppercase tracking-[0.2em] xs:tracking-[0.4em] font-black mb-0.5 xs:mb-1 opacity-80">Featured</div>
                        <div className="text-sm xs:text-xl md:text-3xl font-black text-white whitespace-nowrap tracking-tighter">8+ <span className="text-[10px] xs:text-sm md:text-lg font-bold text-slate-400 ml-0.5 xs:ml-1">Projects</span></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
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
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="text-[10px] uppercase tracking-[0.3em] text-slate-500">Scroll</div>
        <div className="h-12 w-6 rounded-full border border-white/10 p-1">
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-2 w-full rounded-full bg-gradient-to-b from-cyan-400 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  )
}
