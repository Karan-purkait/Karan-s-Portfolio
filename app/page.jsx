"use client"

import { useState, useEffect } from "react"
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

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <CustomThemeProvider>
      <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-900 to-indigo-950 dark:from-indigo-950 dark:via-purple-900 dark:to-indigo-950 overflow-hidden relative">
        <AnimatedBackground />
        <Navbar />
        <main className="container mx-auto px-4 sm:px-6 relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </CustomThemeProvider>
  )
}

