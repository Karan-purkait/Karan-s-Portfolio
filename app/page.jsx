"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import { CustomThemeProvider } from "@/components/theme-context"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"
import CustomCursor from "@/components/custom-cursor"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <CustomThemeProvider>
      <div className="relative min-h-screen bg-[#060b16] text-white selection:bg-cyan-500/30">
        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-sky-500 to-purple-500 origin-left z-[100]"
          style={{ scaleX }}
        />
        {/* Fixed Background Layer */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.15),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(139,92,246,0.1),_transparent_25%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
          <AnimatedBackground />
        </div>

        {mounted && <CustomCursor />}
        <Navbar />
        
        <main className="relative z-10 w-full overflow-x-hidden">
          <Hero />
          <div className="space-y-0">
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </div>
        </main>
        
        <Footer />
      </div>
    </CustomThemeProvider>
  )
}
