"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "@/components/theme-context"

export default function AnimatedBackground() {
  const canvasRef = useRef(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    let animationFrameId
    let particles = []
    const mousePosition = { x: null, y: null }
    let hue = 0

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      particles = []
      const numberOfParticles = Math.min(Math.floor((canvas.width * canvas.height) / 9000), 150)

      for (let i = 0; i < numberOfParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          color: getParticleColor(Math.random() * 360),
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25,
          opacity: Math.random() * 0.5 + 0.5,
        })
      }
    }

    const getParticleColor = (hue) => {
      const baseColor = theme === "dark" ? `hsla(${hue}, 80%, 70%, 0.6)` : `hsla(${hue}, 80%, 60%, 0.4)`
      return baseColor
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      hue = (hue + 0.1) % 360

      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX = -particle.speedX
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY = -particle.speedY
        }

        // Mouse interaction
        if (mousePosition.x !== null && mousePosition.y !== null) {
          const dx = mousePosition.x - particle.x
          const dy = mousePosition.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const maxDistance = 150

          if (distance < maxDistance) {
            const force = (maxDistance - distance) / maxDistance
            const angle = Math.atan2(dy, dx)
            particle.speedX -= Math.cos(angle) * force * 0.02
            particle.speedY -= Math.sin(angle) * force * 0.02
          }
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        // Draw connections
        particles.forEach((otherParticle, j) => {
          if (i !== j) {
            const dx = particle.x - otherParticle.x
            const dy = particle.y - otherParticle.y
            const distance = Math.sqrt(dx * dx + dy * dy)
            const maxDistance = 150

            if (distance < maxDistance) {
              ctx.beginPath()
              const gradient = ctx.createLinearGradient(particle.x, particle.y, otherParticle.x, otherParticle.y)

              const startColor =
                theme === "dark"
                  ? `hsla(${(hue + i) % 360}, 80%, 70%, ${0.2 * (1 - distance / maxDistance)})`
                  : `hsla(${(hue + i) % 360}, 80%, 60%, ${0.15 * (1 - distance / maxDistance)})`

              const endColor =
                theme === "dark"
                  ? `hsla(${(hue + j) % 360}, 80%, 70%, ${0.2 * (1 - distance / maxDistance)})`
                  : `hsla(${(hue + j) % 360}, 80%, 60%, ${0.15 * (1 - distance / maxDistance)})`

              gradient.addColorStop(0, startColor)
              gradient.addColorStop(1, endColor)

              ctx.strokeStyle = gradient
              ctx.lineWidth = 0.5
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(otherParticle.x, otherParticle.y)
              ctx.stroke()
            }
          }
        })
      })

      animationFrameId = requestAnimationFrame(drawParticles)
    }

    const handleMouseMove = (e) => {
      mousePosition.x = e.clientX
      mousePosition.y = e.clientY
    }

    const handleMouseLeave = () => {
      mousePosition.x = null
      mousePosition.y = null
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)
    drawParticles()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
      cancelAnimationFrame(animationFrameId)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="absolute inset-0 -z-10" style={{ pointerEvents: "none" }} />
}

