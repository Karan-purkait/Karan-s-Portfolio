"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Phone, MapPin, Send, Linkedin, Github, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  
  const [submitStatus, setSubmitStatus] = useState({
    type: 'idle', // 'idle', 'loading', 'success', 'error'
    message: null,
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitStatus({ type: 'loading', message: 'Sending your message...' });

    // Preserved user's endpoint
    const formspreeEndpoint = "https://formspree.io/f/mnnzjdkp"; 

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: "Boom! Message sent. My inbox just got a little more interesting. I'll be in touch soon!"
        });
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        const data = await response.json();
        setSubmitStatus({
          type: 'error',
          message: data.errors ? data.errors.map(err => err.message).join(", ") : "Oops! Something went wrong. Please try again later.",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus({
        type: 'error',
        message: "Network error. Please check your internet connection and try again.",
      });
    } finally {
      setTimeout(() => {
        setSubmitStatus({ type: 'idle', message: null });
      }, 5000);
    }
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="contact" className="py-24 md:py-32 relative bg-[#4F73D9] text-white border-t border-white/10">
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.1 }}
          className="text-center mb-20"
        >
          <motion.h2 variants={fadeIn} className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-white font-display">
            Let's Collaborate
          </motion.h2>
          <motion.div
            variants={fadeIn}
            className="w-16 h-1 bg-[#D4F700] mx-auto mb-6 rounded-full"
          />
          <motion.p variants={fadeIn} className="text-blue-100 font-medium max-w-xl mx-auto">
            Ready to scale your product or build robust growth frameworks? Contact me below.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Info Card Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-white">Discuss Your Projects</h3>
            <p className="text-blue-100 text-base leading-relaxed">
              I'm open to full-time technical growth roles, consulting contracts, and custom software integrations. Send an inquiry, and let's structure the pipeline.
            </p>

            <div className="space-y-6 pt-2">
              {/* Location info box */}
              <motion.div
                className="flex items-center gap-4"
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-[#D4F700] shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Location</h4>
                  <p className="text-blue-100 text-sm font-semibold">Hooghly, West Bengal, IN</p>
                </div>
              </motion.div>

              {/* Email info box */}
              <motion.div
                className="flex items-center gap-4"
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-[#D4F700] shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Email</h4>
                  <p className="text-blue-100 text-sm font-semibold">purkaitkaran2003@gmail.com</p>
                </div>
              </motion.div>

              {/* Phone info box */}
              <motion.div
                className="flex items-center gap-4"
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-[#D4F700] shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Phone</h4>
                  <p className="text-blue-100 text-sm font-semibold">+91 8972209802</p>
                </div>
              </motion.div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <h4 className="font-bold text-white mb-4 text-sm">Connect With Me</h4>
              <div className="flex gap-3">
                <motion.a
                  href="https://www.linkedin.com/in/karan-purkait"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.05 }}
                  className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white hover:text-slate-950 hover:bg-[#D4F700] hover:border-[#D4F700] transition-colors shadow-sm"
                >
                  <Linkedin className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="https://github.com/Karan-purkait"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.05 }}
                  className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white hover:text-slate-950 hover:bg-[#D4F700] hover:border-[#D4F700] transition-colors shadow-sm"
                >
                  <Github className="w-4 h-4" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Form Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/5 border border-white/10 p-8 rounded-2xl shadow-lg backdrop-blur-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-blue-100 font-semibold text-xs">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="bg-white/10 border border-white/10 text-white placeholder:text-blue-200 focus:bg-white/20 focus:border-[#D4F700] focus:ring-4 focus:ring-yellow-500/5 focus-visible:ring-yellow-500/5 rounded-xl py-5"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-blue-100 font-semibold text-xs">
                    Your Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="bg-white/10 border border-white/10 text-white placeholder:text-blue-200 focus:bg-white/20 focus:border-[#D4F700] focus:ring-4 focus:ring-yellow-500/5 focus-visible:ring-yellow-500/5 rounded-xl py-5"
                  />
                </div>
              </div>
              
              <div className="space-y-1.5">
                <Label htmlFor="subject" className="text-blue-100 font-semibold text-xs">
                  Subject
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Project Inquiry"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border border-white/10 text-white placeholder:text-blue-200 focus:bg-white/20 focus:border-[#D4F700] focus:ring-4 focus:ring-yellow-500/5 focus-visible:ring-yellow-500/5 rounded-xl py-5"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="message" className="text-blue-100 font-semibold text-xs">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Hello, I'd like to discuss a project..."
                  value={formState.message}
                  onChange={handleChange}
                  required
                  className="min-h-[120px] bg-white/10 border border-white/10 text-white placeholder:text-blue-200 focus:bg-white/20 focus:border-[#D4F700] focus:ring-4 focus:ring-yellow-500/5 focus-visible:ring-yellow-500/5 rounded-xl"
                />
              </div>

              <Button
                type="submit"
                className="w-full group bg-[#D4F700] hover:bg-[#c2e300] text-slate-950 border-none shadow-md shadow-yellow-500/10 hover:shadow-lg transition-all duration-300 rounded-full py-5 font-bold"
                disabled={submitStatus.type === 'loading'}
              >
                {submitStatus.type === 'loading' ? 'Sending...' : 'Send Message'}
                <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>

            {/* Custom Status Message Box */}
            {submitStatus.type !== 'idle' && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className={`mt-4 p-4 rounded-xl shadow-sm flex items-center justify-between border ${
                  submitStatus.type === 'success'
                    ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300'
                    : 'bg-rose-500/10 border-rose-500/20 text-rose-300'
                }`}
              >
                <p className="flex-grow text-xs font-semibold leading-normal">{submitStatus.message}</p>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSubmitStatus({ type: 'idle', message: null })}
                  className="text-blue-200 hover:bg-white/10 rounded-full h-8 w-8 ml-2 flex-shrink-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
