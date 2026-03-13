"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Sparkles, Star } from "lucide-react"

export default function Hero() {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)

    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[8%] top-[18%] h-40 w-40 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute right-[10%] top-[12%] h-56 w-56 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-[540px] w-[540px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(96,165,250,0.18),_transparent_64%)] blur-3xl" />
      </div>

      <div className="grid items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 backdrop-blur-md"
            >
              <Sparkles className="h-4 w-4 text-cyan-300" />
              Full-Stack Developer / React / Node / Java
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-2xl font-display text-5xl leading-[0.95] text-white md:text-6xl lg:text-7xl"
            >
              Building digital experiences that look sharp and feel reliable.
              <span className="mt-3 block bg-gradient-to-r from-cyan-300 via-sky-200 to-amber-200 bg-clip-text text-transparent">
                Karan Purkait
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 max-w-xl text-lg leading-8 text-slate-300 md:text-xl"
            >
              I design and build modern web products with a strong focus on clean UI, responsive engineering, and
              practical user experience.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3"
          >
            {[
              { label: "Experience", value: "1+ Years" },
              { label: "Projects", value: "3 Featured" },
              { label: "Focus", value: "Full-Stack UI" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-md"
              >
                <div className="text-xs uppercase tracking-[0.28em] text-slate-400">{stat.label}</div>
                <div className="mt-2 text-xl font-semibold text-white">{stat.value}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              className="group rounded-full border border-cyan-300/30 bg-gradient-to-r from-cyan-400 to-sky-500 px-7 text-slate-950 shadow-[0_20px_60px_-20px_rgba(56,189,248,0.65)] transition-all duration-300 hover:-translate-y-0.5 hover:from-cyan-300 hover:to-sky-400"
              onClick={(e) => scrollToSection(e, "contact")}
            >
              Get in touch
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>

            <a href="/KaranPurkaitResume.pdf" download="Karan_Purkait_Resume.pdf" className="inline-block">
              <Button
                variant="outline"
                size="lg"
                className="group rounded-full border-white/15 bg-white/5 px-7 text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:text-white"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative mx-auto w-full max-w-[520px]"
        >
          <div className="relative mx-auto aspect-square w-[300px] sm:w-[370px] md:w-[430px]">
            <div className="absolute inset-0 rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-xl" />
            <div className="absolute inset-6 rounded-[2rem] border border-cyan-300/20 bg-[linear-gradient(145deg,rgba(8,15,32,0.95),rgba(17,24,39,0.75))] shadow-[0_40px_100px_-40px_rgba(15,23,42,0.95)]" />
            <div className="absolute inset-10 overflow-hidden rounded-[1.75rem] border border-white/10">
              <img
                src="/mypic.jpg?height=400&width=400"
                alt="Karan Purkait portrait"
                width={400}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>

            <motion.div
              className="absolute -left-5 top-8 rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white shadow-xl backdrop-blur-md"
              initial={{ opacity: 0, y: 20, rotate: -10 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-slate-400">
                <Star className="h-3.5 w-3.5 text-amber-300" />
                Product Focus
              </div>
              <div className="mt-2 text-lg font-semibold">Clean UI + practical engineering</div>
            </motion.div>

            <motion.div
              className="absolute -bottom-5 right-0 rounded-2xl border border-cyan-300/20 bg-cyan-400/10 px-5 py-4 text-white shadow-xl backdrop-blur-md"
              initial={{ opacity: 0, y: 20, rotate: 8 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="text-xs uppercase tracking-[0.28em] text-cyan-200">Experience</div>
              <div className="mt-1 text-3xl font-semibold">1+</div>
              <div className="text-sm text-slate-300">Years building web apps</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
