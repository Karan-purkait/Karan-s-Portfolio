"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Briefcase, GraduationCap, Heart } from "lucide-react"
import Image from "next/image"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.1 }}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-4 text-white">
            About Me
          </motion.h2>
          <motion.div
            variants={fadeIn}
            className="w-20 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-6 rounded-full"
          />
          <motion.p variants={fadeIn} className="text-gray-300 max-w-2xl mx-auto">
            Get to know more about me, my background, and what drives me.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="w-full h-[400px] relative rounded-xl overflow-hidden border border-purple-500/20 shadow-xl shadow-purple-500/10">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/30 to-transparent opacity-60" />
              <Image
                src="/abt.jpg?height=400&width=600"
                alt="About Me"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-cyan-500/80 to-purple-500/80 backdrop-blur-md rounded-lg border border-purple-500/20 flex flex-col items-center justify-center text-white shadow-lg shadow-purple-500/20"
              initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.8, rotate: 10 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="text-4xl font-bold">1+</div>
              <div className="text-sm">Years Experience</div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white">A passionate developer with a creative mindset</h3>
            <p className="text-gray-300">
              I'm a full-stack developer with a passion for creating beautiful, functional, and user-centered digital
              experiences. With 1+ years of experience in the field, I am always looking for new and innovative ways to
              bring my clients' visions to life.
            </p>
            <p className="text-gray-300">
              I believe that design is about more than just making things look pretty – it's about solving problems and
              creating intuitive, enjoyable experiences for users.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <motion.div
                className="flex items-center gap-3 p-4 rounded-lg bg-indigo-900/30 backdrop-blur-sm border border-purple-500/20 hover:bg-indigo-800/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 group"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/50 to-purple-500/50 flex items-center justify-center text-white group-hover:from-cyan-500/80 group-hover:to-purple-500/80 transition-all duration-300">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Development</h4>
                  <p className="text-sm text-gray-300">Full-stack</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-3 p-4 rounded-lg bg-indigo-900/30 backdrop-blur-sm border border-purple-500/20 hover:bg-indigo-800/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 group"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/50 to-purple-500/50 flex items-center justify-center text-white group-hover:from-cyan-500/80 group-hover:to-purple-500/80 transition-all duration-300">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Experience</h4>
                  <p className="text-sm text-gray-300">1+ years</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-3 p-4 rounded-lg bg-indigo-900/30 backdrop-blur-sm border border-purple-500/20 hover:bg-indigo-800/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 group"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/50 to-purple-500/50 flex items-center justify-center text-white group-hover:from-cyan-500/80 group-hover:to-purple-500/80 transition-all duration-300">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Education</h4>
                  {/* <p className="text-sm text-gray-300">Master's Degree</p> */}
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-3 p-4 rounded-lg bg-indigo-900/30 backdrop-blur-sm border border-purple-500/20 hover:bg-indigo-800/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 group"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/50 to-purple-500/50 flex items-center justify-center text-white group-hover:from-cyan-500/80 group-hover:to-purple-500/80 transition-all duration-300">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Passion</h4>
                  <p className="text-sm text-gray-300">Photography</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

