"use client"

import { useState, useEffect } from "react"

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    return () => clearInterval(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-primary transition-opacity duration-500"
      style={{ opacity: progress >= 100 ? 0 : 1 }}
    >
      <div className="text-center">
        <div className="mb-8 animate-fade-in">
          <img
            src="/images/design-mode/logo.png"
            alt="ehabgm Logo"
            className="w-24 h-24 mx-auto mb-4 rounded-full shadow-2xl"
          />
          <h1 className="text-4xl font-bold text-white mb-2">ehabgm</h1>
          <p className="text-white/80 text-lg">وكالة التسويق الرقمي</p>
        </div>

        <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden">
          <div className="h-full bg-white rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
        </div>
        <p className="text-white/80 mt-4">{Math.round(progress)}%</p>
      </div>
    </div>
  )
}
