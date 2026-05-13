"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronRight } from "lucide-react"
import { useTheme } from "@/components/theme-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const { theme } = useTheme()

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const ignoresScroll = useRef(false)

  const handleIntersection = useCallback((entries) => {
    if (ignoresScroll.current) return;
    
    let mostVisibleSection = null;
    let highestRatio = 0;

    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio > highestRatio) {
        highestRatio = entry.intersectionRatio;
        mostVisibleSection = entry.target.id;
      }
    });

    if (mostVisibleSection) {
      setActiveSection(mostVisibleSection);
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "-80px 0px -50% 0px",
      threshold: Array.from({ length: 11 }, (_, i) => i * 0.1),
    })

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observer.observe(section))

    return () => sections.forEach((section) => observer.unobserve(section))
  }, [handleIntersection])

  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)

    if (element) {
      ignoresScroll.current = true;
      setActiveSection(sectionId);
      
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })

      // Re-enable observer after scroll animation finishes
      setTimeout(() => {
        ignoresScroll.current = false;
      }, 1000)
    }

    setMobileMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "py-3 bg-slate-950/40 backdrop-blur-xl border-b border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "py-6 bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link
            href="#home"
            onClick={(e) => scrollToSection(e, "home")}
            className="group flex items-center gap-2 font-display text-2xl font-bold tracking-tight text-white"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500 text-slate-950 transition-transform duration-500 group-hover:rotate-12">
              K
            </div>
            <span className="hidden sm:block">Karan Purkait</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1 p-1 rounded-full border border-white/5 bg-white/5 backdrop-blur-md">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href.substring(1))}
                className={`relative px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full ${activeSection === item.href.substring(1)
                    ? "text-slate-950"
                    : "text-slate-400 hover:text-white"
                  }`}
              >
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    layoutId="navbar-pill"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-amber-200 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              className="hidden sm:flex rounded-full bg-white text-slate-950 hover:bg-slate-200 px-6 font-semibold"
              onClick={(e) => scrollToSection(e, "contact")}
            >
              Hire Me
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:bg-white/10 rounded-full"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "circOut" }}
            className="absolute top-full left-0 right-0 border-t border-white/5 bg-slate-950/95 backdrop-blur-2xl md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-2">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href.substring(1))}
                    className={`flex items-center justify-between p-4 rounded-2xl transition-all duration-300 ${activeSection === item.href.substring(1)
                        ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-white"
                        : "text-slate-400 hover:bg-white/5 hover:text-white"
                      }`}
                  >
                    <span className="text-lg font-medium">{item.name}</span>
                    <ChevronRight className={`h-5 w-5 transition-transform ${activeSection === item.href.substring(1) ? "translate-x-0" : "-translate-x-2 opacity-0"}`} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
