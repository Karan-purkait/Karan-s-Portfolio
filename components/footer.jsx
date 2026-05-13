"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Heart } from "lucide-react"
import Magnetic from "@/components/magnetic"

export default function Footer() {
  // Smooth scroll function
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
    <footer className="py-8 border-t border-purple-500/20 relative z-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left mb-4 md:mb-0"
          >
            <Magnetic strength={0.2}>
              <Link
                href="#home"
                onClick={(e) => scrollToSection(e, "home")}
                className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400"
              >
                Karan's Portfolio
              </Link>
            </Magnetic>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center md:text-right text-sm text-gray-300"
          >
            <p className="flex items-center justify-center md:justify-end gap-1">
              Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> by Karan Purkait ©{" "}
              {new Date().getFullYear()}
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

