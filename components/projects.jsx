"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import SpotlightCard from "@/components/spotlight-card"

const projects = [
  {
    title: "BECS Store",
    category: "development",
    description: "Developed an e-commerce platform for BECS to enable customers to browse and purchase electronics components, IoT devices, automation hardware, development boards, and smart kits with an integrated secure checkout flow.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Tailwind CSS"],
    liveLink: "https://store.becsofficial.com/",
    githubLink: "#",
  },
  {
    title: "Lumière Restaurant",
    category: "development",
    description: "Designed and developed a premium restaurant website featuring an elegant user interface, interactive menu, online reservation system, gallery, promotional events, and responsive layouts to provide a seamless digital dining experience across all devices.",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800",
    tags: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"],
    liveLink: "https://lumiere-resturent.vercel.app",
    githubLink: "#",
  },
  {
    title: "Xadir–Talia Systems",
    category: "development",
    description: "Developed a fintech utility vending platform for Xadir–Talia Systems by integrating the VTPass payment gateway to enable real-time electricity token vending, airtime recharge, mobile data purchases, cable TV subscriptions, and other digital payment services through a secure, scalable administration dashboard.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=800",
    tags: ["React.js", "Node.js", "Express.js", "VTPass API", "MongoDB"],
    liveLink: "https://xadir-talia.com",
    githubLink: "#",
  },
  {
    title: "BECS Corporate Website",
    category: "development",
    description: "Developed the official corporate website for BECS to showcase the company's capabilities in electronics engineering, industrial automation, IoT, embedded systems, consultancy, and technical training.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    liveLink: "https://www.becsofficial.com/",
    githubLink: "#",
  },
  {
    title: "The CodeBird Platform",
    category: "development",
    description: "A dynamic platform showcasing CodeBird’s events, projects, and member achievements with a user-friendly and responsive design.",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    liveLink: "https://thecodebirdofficial.vercel.app/",
    githubLink: "https://github.com/Karan-purkait/The-CodeBird",
  },
  {
    title: "BECS Training Institute (EduVerse)",
    category: "development",
    description: "Developed a modern, responsive EdTech and learning management platform for BECS EduVerse to showcase courses, manage professional training programs, and enable online student enrollments.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Tailwind CSS"],
    liveLink: "https://eduverse.becsofficial.com/",
    githubLink: "#",
  },
  {
    title: "TitanoOS Telemetry",
    category: "development",
    description: "A comprehensive fleet management and robotics telemetry platform with real-time tracking, historical playback, and automated ingestion jobs.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js", "Node.js", "AWS S3", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Happy Care AI Platform",
    category: "development",
    description: "An AI-enabled disease and medicine prediction platform integrated with a comprehensive hospital management system for patient care.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    tags: ["AI/ML", "React", "Node.js", "Healthcare Tech"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "SaaS Lead Gen Campaign",
    category: "marketing",
    description: "Designed and executed a cold outbound email prospecting campaign that delivered a 28% reply rate and generated 85+ sales-qualified leads.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tags: ["Lead Gen", "Cold Email", "CRM", "Sales Funnel"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Martensite Brand Strategy & SEO",
    category: "marketing",
    description: "Formulated and executed the search presence strategy, restructuring product pages and designing keyword clusters to grow traffic by 150%.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800",
    tags: ["SEO Strategy", "Content Plan", "Brand Mapping"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "B2B Client Acquisition Engine",
    category: "marketing",
    description: "Built complete outbound sales pipeline utilizing LinkedIn automation and target profile mapping, closing $15k+ in accounts.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800",
    tags: ["Prospecting", "LinkedIn Sales", "Client Relations"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "BrightNova Launch Campaign",
    category: "marketing",
    description: "Orchestrated launch strategy and paid acquisition funnels for BrightNova online portal, resulting in 500+ student signups in 2 weeks.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
    tags: ["Paid Ads", "CRO", "Funnel Automation"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "KRIT Consultancy",
    category: "development",
    description: "Developed a modern, responsive corporate website for KRIT Consultancy, showcasing AI, Cloud, Data Analytics, Robotics & IoT solutions with an intuitive user experience and optimized performance.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Tailwind CSS", "UI/UX", "SEO Optimization"],
    liveLink: "https://kritconsultancy.com",
    githubLink: "#",
  }
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeTab, setActiveTab] = useState("all")
  const [isExpanded, setIsExpanded] = useState(false)

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(p => p.category === activeTab)

  const displayProjects = [
    ...filteredProjects,
    {
      title: "More Projects Coming Soon",
      category: activeTab,
      isPlaceholder: true,
      description: "Several technical platforms, automated growth pipelines, and client SaaS solutions are currently in active development or launching phases. Updates and case studies will be posted regularly.",
      image: "",
      tags: ["Future Launch", "Active Dev", "Case Studies", "SaaS Systems"],
      liveLink: "#",
      githubLink: "#",
    }
  ]

  const visibleProjects = isExpanded 
    ? displayProjects 
    : displayProjects.slice(0, 3)

  const handleTabChange = (tab) => {
    setActiveTab(tab)
    setIsExpanded(false)
  }

  return (
    <section id="projects" className="py-24 md:py-32 relative bg-white text-[#0F172A] border-y border-slate-100">
      {/* Decorative Blob */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-500/[0.01] rounded-full blur-[100px] -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/50 px-4 py-2 text-sm font-semibold text-[#4F73D9] backdrop-blur-md shadow-sm mb-6">
              <Sparkles className="h-4 w-4 text-[#4F73D9]" />
              Selected Works
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-display mb-4">
              Featured Projects & Services
            </h2>
            <p className="text-lg text-slate-500 font-medium">
              Explore a gallery of products and marketing campaigns executed for businesses and platforms.
            </p>
          </motion.div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-slate-100 border border-slate-200/50">
            <button
              onClick={() => handleTabChange("all")}
              className={`px-5 py-2 text-xs xs:text-sm font-semibold rounded-xl transition-all duration-300 ${
                activeTab === "all"
                  ? "bg-[#4F73D9] text-white shadow-sm"
                  : "text-slate-650 hover:text-slate-900 hover:bg-black/[0.03]"
              }`}
            >
              All Works
            </button>
            <button
              onClick={() => handleTabChange("development")}
              className={`px-5 py-2 text-xs xs:text-sm font-semibold rounded-xl transition-all duration-300 ${
                activeTab === "development"
                  ? "bg-[#4F73D9] text-white shadow-sm"
                  : "text-slate-650 hover:text-slate-900 hover:bg-black/[0.03]"
              }`}
            >
              Software Dev
            </button>
            <button
              onClick={() => handleTabChange("marketing")}
              className={`px-5 py-2 text-xs xs:text-sm font-semibold rounded-xl transition-all duration-300 ${
                activeTab === "marketing"
                  ? "bg-[#4F73D9] text-white shadow-sm"
                  : "text-slate-650 hover:text-slate-900 hover:bg-black/[0.03]"
              }`}
            >
              Marketing & Growth
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="wait">
            {visibleProjects.map((project) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                className="h-full"
              >
                {project.isPlaceholder ? (
                  <SpotlightCard className="h-full rounded-2xl border-2 border-dashed border-[#4F73D9]/25 bg-blue-50/20 hover:bg-blue-50/40 transition-all duration-300 shadow-sm hover:shadow-md p-6 flex flex-col justify-between gap-6 min-h-[380px] group" spotlightColor="rgba(79, 115, 217, 0.08)">
                    <div className="space-y-4">
                      <div className="h-12 w-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#4F73D9] group-hover:scale-110 transition-transform duration-300">
                        <Sparkles className="h-6 w-6 text-[#4F73D9] animate-pulse" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-[#4F73D9] transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-2.5 py-1 rounded-lg bg-blue-50 border border-blue-100 text-[10px] font-bold text-[#4F73D9]">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    {/* No button needed */}
                  </SpotlightCard>
                ) : (
                  <SpotlightCard className="h-full rounded-2xl border border-black/[0.05] bg-slate-50 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden flex flex-col group" spotlightColor="rgba(79, 115, 217, 0.04)">
                    {/* Project Image */}
                    <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-100/50 via-transparent to-transparent opacity-60" />
                    </div>

                    {/* Content details */}
                    <div className="p-6 flex flex-col flex-grow justify-between gap-6">
                      <div className="space-y-3">
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.map((tag) => (
                            <span key={tag} className="px-2.5 py-1 rounded-lg bg-blue-50 border border-blue-100 text-[10px] font-bold text-[#4F73D9]">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#4F73D9] transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Action buttons */}
                      <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                        {project.liveLink !== "#" ? (
                          <Button size="sm" className="rounded-full bg-[#4F73D9] hover:bg-[#3D5DB3] text-white font-bold text-xs" asChild>
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                              Live Demo <ExternalLink className="ml-1 h-3.5 w-3.5" />
                            </a>
                          </Button>
                        ) : (
                          <span className="text-[11px] font-bold text-slate-400">Live Demo Private</span>
                        )}

                        {project.githubLink !== "#" ? (
                          <Button size="sm" variant="outline" className="rounded-full border-slate-200 bg-white text-slate-700 hover:bg-slate-50 text-xs font-bold" asChild>
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                              GitHub <Github className="ml-1 h-3.5 w-3.5" />
                            </a>
                          </Button>
                        ) : (
                          project.category === "development" && (
                            <span className="text-[11px] font-bold text-slate-400 ml-auto">Codebase Private</span>
                          )
                        )}
                      </div>
                    </div>
                  </SpotlightCard>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        {displayProjects.length > 3 && (
          <div className="flex justify-center mt-16">
            <Button
              onClick={() => setIsExpanded(!isExpanded)}
              className="rounded-full bg-[#4F73D9] hover:bg-[#3D5DB3] text-white font-bold px-8 py-6 text-sm shadow-md hover:shadow-lg transition-all duration-300"
            >
              {isExpanded ? "Show Less" : "Show More Projects"}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
