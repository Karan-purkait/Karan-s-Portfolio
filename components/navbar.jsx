"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

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
    
    // Unlock body overflow synchronously so that the window can scroll on mobile
    document.body.style.overflow = "unset"

    const element = document.getElementById(sectionId)

    if (element) {
      ignoresScroll.current = true;
      setActiveSection(sectionId);
      
      // Get cross-browser current scroll position
      const currentScroll = window.scrollY || window.pageYOffset || document.documentElement.scrollTop
      const offsetTop = element.getBoundingClientRect().top + currentScroll - 80
      
      // Close the menu to trigger state transition
      setMobileMenuOpen(false)

      // Delay scroll slightly to allow the browser to register overflow: unset and flush layout updates
      setTimeout(() => {
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }, 150)

      setTimeout(() => {
        ignoresScroll.current = false;
      }, 1000)
    } else {
      setMobileMenuOpen(false)
    }
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || mobileMenuOpen
          ? "py-3 bg-white/80 backdrop-blur-md border-b border-black/[0.06] shadow-[0_4px_20px_rgba(0,0,0,0.03)] text-slate-900"
          : "py-6 bg-transparent text-white"
        }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link
            href="#home"
            onClick={(e) => scrollToSection(e, "home")}
            className="group flex items-center gap-2 font-display text-lg sm:text-2xl font-bold tracking-tight"
          >
            <div className={`flex h-10 w-10 items-center justify-center rounded-xl font-extrabold shadow-md transition-all duration-500 group-hover:rotate-12 ${
              isScrolled || mobileMenuOpen
                ? "bg-[#4F73D9] text-white" 
                : "bg-white text-[#4F73D9]"
            }`}>
              K
            </div>
            <span>Karan Purkait</span>
          </Link>

          <nav className={`hidden md:flex items-center gap-1 p-1 rounded-full border transition-colors ${
            isScrolled 
              ? "border-black/[0.06] bg-slate-100/50 backdrop-blur-md" 
              : "border-white/10 bg-white/5 backdrop-blur-md"
          }`}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href.substring(1))}
                className={`relative px-5 py-2 text-sm font-semibold transition-all duration-300 rounded-full ${
                  activeSection === item.href.substring(1)
                    ? isScrolled ? "text-slate-900" : "text-[#D4F700]"
                    : isScrolled ? "text-slate-500 hover:text-slate-900" : "text-blue-100 hover:text-white"
                }`}
              >
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    layoutId="navbar-pill"
                    className={`absolute inset-0 rounded-full shadow-sm border ${
                      isScrolled 
                        ? "bg-white border-black/[0.03] shadow-[0_2px_8px_rgba(0,0,0,0.08)]" 
                        : "bg-white/10 border-white/5"
                    }`}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              className={`hidden sm:flex rounded-full px-6 font-semibold shadow-sm transition-all duration-350 ${
                isScrolled || mobileMenuOpen
                  ? "bg-[#4F73D9] text-white hover:bg-[#3D5DB3]" 
                  : "bg-[#D4F700] text-slate-950 hover:bg-[#c2e300]"
              }`}
              onClick={(e) => scrollToSection(e, "contact")}
            >
              Hire Me
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className={`md:hidden rounded-full ${
                isScrolled || mobileMenuOpen
                  ? "text-slate-900 hover:bg-slate-100" 
                  : "text-white hover:bg-white/10"
              }`}
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
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute top-full left-4 right-4 mt-2 border border-slate-100 bg-white/95 backdrop-blur-2xl md:hidden overflow-hidden rounded-3xl shadow-xl z-50 text-slate-900"
          >
            <div className="flex flex-col p-5 gap-1.5">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                >
                  <Link
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href.substring(1))}
                    className={`flex items-center justify-between px-5 py-3.5 rounded-2xl border transition-all duration-300 ${
                      activeSection === item.href.substring(1)
                        ? "bg-blue-50/80 border-blue-100/50 text-[#4F73D9] shadow-sm"
                        : "border-transparent text-slate-600 hover:bg-slate-50/80 hover:text-slate-900"
                    }`}
                  >
                    <span className="text-base font-semibold">{item.name}</span>
                    <ChevronRight className={`h-4 w-4 transition-all duration-300 ${activeSection === item.href.substring(1) ? "translate-x-0 opacity-100 text-[#4F73D9]" : "-translate-x-2 opacity-0 text-slate-400"}`} />
                  </Link>
                </motion.div>
              ))}
              
              {/* Mobile Hire Me Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.04 }}
                className="pt-2"
              >
                <Button
                  className="w-full rounded-2xl py-6 font-semibold shadow-sm bg-[#4F73D9] text-white hover:bg-[#3D5DB3]"
                  onClick={(e) => scrollToSection(e, "contact")}
                >
                  Hire Me
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
