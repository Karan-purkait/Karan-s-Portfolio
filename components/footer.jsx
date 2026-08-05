"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUp, Heart } from "lucide-react"

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
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

  return (
    <footer className="py-12 bg-slate-50 border-t border-slate-200/60 relative z-10 text-slate-500 text-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Info */}
          <div className="flex items-center gap-2 font-display text-lg font-bold text-slate-900">
            <Link
              href="#home"
              onClick={(e) => scrollToSection(e, "home")}
              className="hover:text-[#4F73D9] transition-colors"
            >
              Karan Purkait
            </Link>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {["home", "about", "skills", "projects", "experience", "reviews", "contact"].map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                onClick={(e) => scrollToSection(e, item)}
                className="capitalize hover:text-[#4F73D9] transition-colors font-semibold text-slate-600"
              >
                {item === "reviews" ? "Recommendations" : item}
              </Link>
            ))}
          </div>

          {/* Back to Top */}
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="h-9 w-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:text-[#4F73D9] hover:bg-slate-100 transition-all shadow-sm"
              title="Back to Top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-200/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-semibold text-slate-400">
          <p className="flex items-center gap-1 justify-center">
            Made with <Heart className="h-3.5 w-3.5 text-rose-400 fill-rose-400" /> by Karan Purkait
          </p>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
