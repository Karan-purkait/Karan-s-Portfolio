"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, GraduationCap, Award } from "lucide-react"

const experiences = [
  {
    type: "work",
    title: "Frontend Developer",
    company: "Shadow Fox",
    date: "2025 - Present",
    description:
      "Led the frontend development team in building responsive web applications using React and Next.js. Implemented modern UI/UX designs and improved performance by 40%.",
    icon: <Briefcase className="h-5 w-5" />,
  },
  // {
  //   type: "education",
  //   title: "Master's in Computer Science",
  //   company: "University of Technology",
  //   date: "2019 - 2021",
  //   description:
  //     "Specialized in web technologies and artificial intelligence. Graduated with honors and completed a thesis on optimizing React applications.",
  //   icon: <GraduationCap className="h-5 w-5" />,
  // },
  // {
  //   type: "work",
  //   title: "Frontend Developer",
  //   company: "Digital Creations",
  //   date: "2018 - 2021",
  //   description:
  //     "Developed and maintained multiple client websites using React, Vue.js, and vanilla JavaScript. Collaborated with designers to implement pixel-perfect UIs.",
  //   icon: <Briefcase className="h-5 w-5" />,
  // },
  // {
  //   type: "certification",
  //   title: "AWS Certified Developer",
  //   company: "Amazon Web Services",
  //   date: "2020",
  //   description:
  //     "Earned certification demonstrating proficiency in developing, deploying, and debugging cloud-based applications using AWS.",
  //   icon: <Award className="h-5 w-5" />,
  // },
  {
    type: "education",
    title: "Bachelor's in Computer Science Engineering",
    company: "University Institute of Technology,The University of Burdwan",
    date: "2022 - 2026",
    description:
      "Studied software development principles, data structures, algorithms, and web development.",
    icon: <GraduationCap className="h-5 w-5" />,
  },
  // {
  //   type: "certification",
  //   title: "Google Cloud Professional",
  //   company: "Google",
  //   date: "2019",
  //   description:
  //     "Certified in designing, developing, and managing applications on Google Cloud Platform with a focus on scalability and security.",
  //   icon: <Award className="h-5 w-5" />,
  // },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="experience" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full blur-[120px]" />
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
            Experience & Education
          </motion.h2>
          <motion.div
            variants={fadeIn}
            className="w-20 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-6 rounded-full"
          />
          <motion.p variants={fadeIn} className="text-gray-300 max-w-2xl mx-auto">
            My professional journey and educational background
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-cyan-500/50 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 border-4 border-indigo-950 flex items-center justify-center transform -translate-x-1/2 z-10 shadow-lg shadow-purple-500/20">
                  {experience.type === "work" ? (
                    <Briefcase className="h-3 w-3 text-white" />
                  ) : experience.type === "education" ? (
                    <GraduationCap className="h-3 w-3 text-white" />
                  ) : (
                    <Award className="h-3 w-3 text-white" />
                  )}
                </div>

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <motion.div
                    className="bg-indigo-900/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          experience.type === "work"
                            ? "bg-gradient-to-br from-blue-500/50 to-cyan-500/50 text-white"
                            : experience.type === "education"
                              ? "bg-gradient-to-br from-green-500/50 to-teal-500/50 text-white"
                              : "bg-gradient-to-br from-amber-500/50 to-yellow-500/50 text-white"
                        }`}
                      >
                        {experience.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-white">{experience.title}</h3>
                        <p className="text-sm text-gray-300">{experience.company}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-3">{experience.description}</p>
                    <div className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white">
                      {experience.date}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

