"use client"

import { useState, useRef } from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"

export default function SpotlightCard({ children, className = "", spotlightColor = "rgba(34, 211, 238, 0.15)" }) {
  const containerRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (e) => {
    if (!containerRef.current) return
    const { left, top } = containerRef.current.getBoundingClientRect()
    mouseX.set(e.clientX - left)
    mouseY.set(e.clientY - top)
  }

  const background = useTransform(
    [mouseX, mouseY],
    ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, ${spotlightColor}, transparent 40%)`
  )

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl transition duration-300 z-30"
        style={{
          background,
          opacity: isHovered ? 1 : 0,
        }}
      />
      {children}
    </div>
  )
}
