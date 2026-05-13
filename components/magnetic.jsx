"use client"

import { useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function Magnetic({ children, strength = 0.5 }) {
  const ref = useRef(null)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 }
  const quickX = useSpring(x, springConfig)
  const quickY = useSpring(y, springConfig)

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e
    if (!ref.current) return
    const { width, height, left, top } = ref.current.getBoundingClientRect()
    const targetX = (clientX - (left + width / 2)) * strength
    const targetY = (clientY - (top + height / 2)) * strength
    x.set(targetX)
    y.set(targetY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: quickX, y: quickY }}
    >
      {children}
    </motion.div>
  )
}
