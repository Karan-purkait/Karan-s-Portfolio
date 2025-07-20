"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter, X } from "lucide-react" // Added X for close icon
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
  // State for managing form submission status and message display
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

    // IMPORTANT: Replace 'YOUR_FORMSPREE_ENDPOINT_HERE' with your actual Formspree endpoint.
    // You can get this by signing up at formspree.io and creating a new form.
    const formspreeEndpoint = "https://formspree.io/f/mnnzjdkp"; // Example: https://formspree.io/f/your_unique_id

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
      // Hide the message after a few seconds
      setTimeout(() => {
        setSubmitStatus({ type: 'idle', message: null });
      }, 5000); // Message visible for 5 seconds
    }
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full blur-[120px]" />
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
            Get In Touch
          </motion.h2>
          <motion.div
            variants={fadeIn}
            className="w-20 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-6 rounded-full"
          />
          <motion.p variants={fadeIn} className="text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-white">Let's discuss your project</h3>
            <p className="text-gray-300">
              I'm interested in freelance opportunities – especially ambitious or large projects. However, if you have
              other requests or questions, don't hesitate to contact me.
            </p>

            <div className="space-y-6">
              <motion.div
                className="flex items-center gap-4"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/30 to-purple-500/30 flex items-center justify-center text-white">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Location</h4>
                  <p className="text-gray-300">Hooghly,712403,West Bengal</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/30 to-purple-500/30 flex items-center justify-center text-white">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Email</h4>
                  <p className="text-gray-300">purkaitkaran2003@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/30 to-purple-500/30 flex items-center justify-center text-white">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Phone</h4>
                  <p className="text-gray-300">+91 8972209802</p>
                </div>
              </motion.div>
            </div>

            <div className="pt-4">
              <h4 className="font-medium mb-4 text-white">Connect with me</h4>
              <div className="flex gap-4">
                <motion.a
                  href="https://www.linkedin.com/in/karan-purkait"
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/30 to-purple-500/30 flex items-center justify-center text-white hover:from-cyan-500/50 hover:to-purple-500/50 transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://github.com/Karan-purkait"
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/30 to-purple-500/30 flex items-center justify-center text-white hover:from-cyan-500/50 hover:to-purple-500/50 transition-colors duration-300"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                {/* <motion.a
                  href="#"
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/30 to-purple-500/30 flex items-center justify-center text-white hover:from-cyan-500/50 hover:to-purple-500/50 transition-colors duration-300"
                >
                  <Twitter className="w-5 h-5" />
                </motion.a> */}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="bg-indigo-900/30 backdrop-blur-sm border border-purple-500/20 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
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
                    className="bg-indigo-900/30 backdrop-blur-sm border border-purple-500/20 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500/20"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-white">
                  Subject
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Project Inquiry"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="bg-indigo-900/30 backdrop-blur-sm border border-purple-500/20 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500/20"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Hello, I'd like to talk about..."
                  value={formState.message}
                  onChange={handleChange}
                  required
                  className="min-h-[150px] bg-indigo-900/30 backdrop-blur-sm border border-purple-500/20 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500/20"
                />
              </div>
              <Button
                type="submit"
                className="w-full group bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-none shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300"
                disabled={submitStatus.type === 'loading'} // Disable button during submission
              >
                {submitStatus.type === 'loading' ? 'Sending...' : 'Send Message'}
                <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>

            {/* Custom Status Message Box */}
            {submitStatus.type !== 'idle' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`mt-6 p-4 rounded-lg shadow-md flex items-center justify-between ${
                  submitStatus.type === 'success'
                    ? 'bg-green-500/20 border border-green-500/30 text-green-300'
                    : 'bg-red-500/20 border border-red-500/30 text-red-300'
                }`}
              >
                <p className="flex-grow">{submitStatus.message}</p>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSubmitStatus({ type: 'idle', message: null })}
                  className="text-white hover:bg-white/10"
                >
                  <X className="h-5 w-5" />
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
