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
import Reviews from "@/components/reviews"
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
      <div className="relative min-h-screen bg-[#F8FAFC] text-[#0F172A] selection:bg-indigo-500/10">
        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-sky-400 origin-left z-[100]"
          style={{ scaleX }}
        />
        {/* Fixed Background Layer */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.05),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(37,99,235,0.03),_transparent_35%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.015)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_90%)]" />
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
            <Reviews />
            <Contact />
          </div>
        </main>
        
        <Footer />
      </div>
    </CustomThemeProvider>
  )
}
