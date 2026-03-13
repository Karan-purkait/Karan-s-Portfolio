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
      <div className="min-h-screen overflow-hidden relative bg-[#060b16]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.12),_transparent_26%),radial-gradient(circle_at_80%_20%,_rgba(251,191,36,0.08),_transparent_22%),linear-gradient(180deg,_rgba(8,15,32,0.96),_rgba(6,11,22,1))]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:110px_110px] opacity-[0.06]" />
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

