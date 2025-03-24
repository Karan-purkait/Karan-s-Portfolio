"use client"

import { createContext, useContext, useEffect, useState } from "react"

// Create context
const ThemeContext = createContext({
  theme: "dark",
  setTheme: () => null,
})

// Theme provider component
export function CustomThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark")

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    // Check if there's a theme in localStorage
    const storedTheme = localStorage.getItem("theme")

    if (storedTheme) {
      setTheme(storedTheme)
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
      // If no stored theme, check system preference
      setTheme("light")
    }
  }, [])

  // Update document class and localStorage when theme changes
  useEffect(() => {
    const root = window.document.documentElement

    // Remove previous theme class
    root.classList.remove("light", "dark")

    // Add current theme class
    root.classList.add(theme)

    // Store theme in localStorage
    localStorage.setItem("theme", theme)
  }, [theme])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

// Custom hook to use the theme context
export function useTheme() {
  const context = useContext(ThemeContext)

  if (context === undefined) {
    throw new Error("useTheme must be used within a CustomThemeProvider")
  }

  return context
}

