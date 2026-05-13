"use client"

import { useEffect, useState, useCallback } from "react"

const chars = "!<>-_\\/[]{}—=+*^?#________"

export default function TextScramble({ text, autostart = true }) {
  const [displayText, setDisplayText] = useState(text)
  const [isScrambling, setIsScrambling] = useState(false)

  const scramble = useCallback(() => {
    if (isScrambling) return
    setIsScrambling(true)
    
    let frame = 0
    const totalFrames = 30
    const interval = 30
    
    const timer = setInterval(() => {
      setDisplayText((prev) => 
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " "
            if (frame / totalFrames > i / text.length) return text[i]
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join("")
      )

      frame++
      if (frame >= totalFrames) {
        clearInterval(timer)
        setDisplayText(text)
        setIsScrambling(false)
      }
    }, interval)
  }, [text, isScrambling])

  useEffect(() => {
    if (autostart) {
      const timeout = setTimeout(scramble, 500)
      return () => clearTimeout(timeout)
    }
  }, [autostart, scramble])

  return (
    <span 
      onMouseEnter={scramble}
      className="cursor-default"
    >
      {displayText}
    </span>
  )
}
