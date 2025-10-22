"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const theme = localStorage.getItem("theme")
    if (theme === "dark" || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)

    if (newIsDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }

    try {
      if (typeof window !== "undefined" && (window as any).adsbygoogle) {
        ;(window as any).adsbygoogle.push({})
      }
    } catch (error) {
      console.log("[v0] AdSense reload on theme toggle:", error)
    }
  }

  if (!mounted) return null

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 left-4 z-50 p-3 bg-white/10 dark:bg-slate-800/50 backdrop-blur-md border border-white/20 dark:border-slate-700/50 rounded-full shadow-lg hover:bg-white/20 dark:hover:bg-slate-700/50 transition-all duration-300 group"
      aria-label="تبديل الوضع المظلم"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-yellow-400 group-hover:rotate-180 transition-transform duration-500" />
      ) : (
        <Moon className="w-5 h-5 text-blue-600 group-hover:rotate-12 transition-transform duration-300" />
      )}
    </button>
  )
}
