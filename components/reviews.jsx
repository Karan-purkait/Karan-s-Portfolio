"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Quote, Sparkles, Star, Users, ArrowLeft, ArrowRight } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import SpotlightCard from "@/components/spotlight-card"

const reviews = [
  {
    name: "Abhishek Dhar",
    role: "Product Engineer @ TCS | Developer @ MaaV.ai",
    relation: "SDE Teammate on TitanoOS",
    text: "I had the pleasure of working with Karan on TitanoOS, where he contributed as an SDE. He is a highly skilled developer with strong full-stack capabilities, consistently delivering reliable, scalable, and well-structured systems. His technical depth and ownership make him a valuable contributor.",
    avatarText: "AD"
  },
  {
    name: "Biswadeep Banerjee",
    role: "Founder & CEO @ BECS | Partner @ KRIT",
    relation: "CEO & Director at BECS",
    text: "Karan's technical consultancy and execution at BECS and KRIT have been outstanding. He bridges technology with business strategy seamlessly, delivering high-impact web architectures and leading client integrations successfully. He is an exceptional developer and a strategic thinker.",
    avatarText: "BB"
  },
  {
    name: "Charles Oluigbo",
    role: "Owner @ Xadir–Talia Systems",
    relation: "Client for Xadir–Talia Utility Platform",
    text: "Karan successfully built and delivered our utility vending platform, integrating complex payment gateways and automating distribution logic. His technical expertise, clear communication, and deep commitment to quality ensured a smooth project launch.",
    avatarText: "CO"
  },
  {
    name: "Rahul Sen",
    role: "Lead Technical Architect @ MaaV.ai",
    relation: "Project Lead at MaaV.ai",
    text: "Karan is a stellar full-stack engineer who brings energy and technical precision to the table. His work on AI-powered mobility coordination dashboards was top-notch, combining fast rendering with highly optimized state management.",
    avatarText: "RS"
  },
  {
    name: "Sarah Jenkins",
    role: "Product & SaaS Consultant",
    relation: "Client for Custom E-Commerce Integration",
    text: "Working with Karan was an absolute breeze. He restructured our educational platform ecosystem, speeding up transaction processing times and improving our telemetry dashboard significantly. His execution is flawless.",
    avatarText: "SJ"
  }
]

export default function Reviews() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [api, setApi] = useState(null)
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  // Configure Embla Api
  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  // Autoplay Logic
  useEffect(() => {
    if (!api) return

    const autoplay = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext()
      } else {
        api.scrollTo(0)
      }
    }, 5000) // Slide every 5 seconds

    return () => clearInterval(autoplay)
  }, [api])

  return (
    <section id="reviews" className="py-24 md:py-32 relative bg-white text-[#0F172A] border-y border-slate-100 overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-500/[0.01] rounded-full blur-[100px] -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/50 px-4 py-2 text-sm font-semibold text-[#4F73D9] backdrop-blur-md shadow-sm mb-6"
          >
            <Sparkles className="h-4 w-4 text-[#4F73D9]" />
            Endorsements
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-display mb-4"
          >
            Client Reviews & Recommendations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 font-medium max-w-2xl"
          >
            Feedback and professional recommendations from industry colleagues and clients.
          </motion.p>
        </div>

        {/* Carousel Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative max-w-4xl mx-auto px-4"
        >
          <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
            <CarouselContent>
              {reviews.map((review) => (
                <CarouselItem key={review.name} className="p-2 flex items-stretch">
                  <SpotlightCard
                    className="rounded-3xl border border-black/[0.05] bg-slate-50 hover:bg-white transition-all duration-500 shadow-md hover:shadow-lg p-6 sm:p-8 flex flex-col justify-between gap-4 w-full h-full min-h-[360px] sm:min-h-[300px]"
                    spotlightColor="rgba(79, 115, 217, 0.04)"
                  >
                    <div className="space-y-4">
                      {/* Quote & Stars Header */}
                      <div className="flex justify-between items-center">
                        <div className="h-10 w-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#4F73D9]">
                          <Quote className="h-5 w-5 fill-current rotate-180" />
                        </div>
                        <div className="flex gap-0.5 text-amber-400">
                          {[...Array(5)].map((_, idx) => (
                            <Star key={idx} className="h-4.5 w-4.5 fill-current" />
                          ))}
                        </div>
                      </div>

                      {/* Recommendation Text */}
                      <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed font-sans italic font-medium">
                        "{review.text}"
                      </p>
                    </div>

                    {/* Reviewer Details */}
                    <div className="pt-4 border-t border-slate-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4 flex-shrink-0">
                      <div className="flex items-center gap-3">
                        {/* Avatar */}
                        <div className="h-12 w-12 rounded-full bg-[#4F73D9] flex items-center justify-center text-white font-extrabold text-sm tracking-wide shadow-md flex-shrink-0">
                          {review.avatarText}
                        </div>

                        {/* Name and Role */}
                        <div className="space-y-0.5">
                          <h4 className="font-extrabold text-slate-900 leading-tight text-base">
                            {review.name}
                          </h4>
                          <p className="text-xs text-slate-500 font-semibold leading-normal">
                            {review.role}
                          </p>
                        </div>
                      </div>

                      {/* Relationship Badge */}
                      <div className="self-start sm:self-center flex-shrink-0 inline-flex items-center gap-1 text-[11px] font-bold text-[#4F73D9] uppercase tracking-wide bg-blue-50 px-3 py-1 rounded-full border border-blue-100 shadow-sm">
                        <Users className="h-3 w-3" />
                        {review.relation}
                      </div>
                    </div>
                  </SpotlightCard>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Left/Right Arrow Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-16">
            <button
              onClick={() => api?.scrollPrev()}
              className="h-12 w-12 rounded-full border border-slate-200 bg-white text-slate-600 shadow-md hover:bg-slate-50 hover:text-[#4F73D9] hover:border-[#4F73D9]/30 transition-all flex items-center justify-center"
              aria-label="Previous Slide"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-16">
            <button
              onClick={() => api?.scrollNext()}
              className="h-12 w-12 rounded-full border border-slate-200 bg-white text-slate-600 shadow-md hover:bg-slate-50 hover:text-[#4F73D9] hover:border-[#4F73D9]/30 transition-all flex items-center justify-center"
              aria-label="Next Slide"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>

        {/* Carousel Indicators / Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index + 1 === current
                  ? "w-8 bg-[#4F73D9] shadow-sm shadow-[#4F73D9]/30"
                  : "w-2 bg-slate-200 hover:bg-slate-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
