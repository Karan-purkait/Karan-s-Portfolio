"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
// Removed: import Image from "next/image" // This import was causing the error

export default function Hero() {
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
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 relative">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
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
              className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-purple-500/20 text-white"
            >
              Full-Stack Developer
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white"
            >
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Karan Purkait
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-4 text-xl text-gray-300"
            >
              I build exceptional digital experiences that make an impact. Passionate about creating elegant solutions
              to complex problems.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              className="group bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-none shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300"
              onClick={(e) => scrollToSection(e, "contact")}
            >
              Get in touch
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>

            {/* Corrected Download CV button */}
            {/* The <a> tag is used to handle file downloads directly. */}
            {/* The 'href' should point to the resume file in your 'public' folder. */}
            {/* The 'download' attribute suggests a filename for the browser to use. */}
            <a
              href="/karan_purkait_Resume.pdf" // IMPORTANT: Replace with the exact filename of your resume in the 'public' folder
              download="Karan_Purkait_Resume.pdf" // This is the suggested filename when the user downloads it
              className="inline-block" // Ensures the link wrapper doesn't break button layout
            >
              <Button
                variant="outline"
                size="lg"
                className="group border-purple-500/30 text-white hover:bg-purple-500/20 hover:text-white transition-all duration-300"
              >
                <Download className="mr-2 h-4 w-20" /> {/* Icon for download */}
                Download CV
              </Button>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative mx-auto"
        >
          <div className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/30 to-purple-500/30 animate-pulse" />
            <div className="absolute inset-2 rounded-full overflow-hidden bg-indigo-950/50 backdrop-blur-sm border border-purple-500/20">
              {/* Replaced Next.js Image component with standard <img> tag */}
              <img
                src="/mypic.jpg?height=400&width=400"
                alt="Your Name"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg"
              initial={{ opacity: 0, y: 20, rotate: -10 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              1+ YRS
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
