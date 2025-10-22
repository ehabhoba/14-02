"use client"

import { useEffect, useRef, useState } from "react"

interface AdSenseAdProps {
  slot: string
  format?: "auto" | "horizontal" | "vertical" | "rectangle"
  responsive?: boolean
  className?: string
}

export default function AdSenseAd({ slot, format = "auto", responsive = true, className = "" }: AdSenseAdProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark")
    setIsDarkMode(isDark)

    // Wait for container to have proper dimensions before initializing
    const timer = setTimeout(() => {
      try {
        if (typeof window !== "undefined" && (window as any).adsbygoogle) {
          ;(window as any).adsbygoogle.push({})
        }
      } catch (error) {
        // Silently handle AdSense errors - they're not critical
      }
      setIsReady(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [slot])

  useEffect(() => {
    const handleThemeChange = () => {
      const isDark = document.documentElement.classList.contains("dark")
      setIsDarkMode(isDark)

      // Reload ads when theme changes
      try {
        if (typeof window !== "undefined" && (window as any).adsbygoogle) {
          ;(window as any).adsbygoogle.push({})
        }
      } catch (error) {
        // Silently handle errors
      }
    }

    const observer = new MutationObserver(() => {
      handleThemeChange()
    })

    if (document.documentElement) {
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      })
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      className={`adsense-container ${isDarkMode ? "dark-mode" : "light-mode"} ${className}`}
      ref={containerRef}
      style={{ minHeight: "100px", width: "100%" }}
    >
      {isReady && (
        <ins
          className="adsbygoogle"
          style={{
            display: "block",
            textAlign: "center",
            backgroundColor: isDarkMode ? "#1e293b" : "#ffffff",
            minHeight: "100px",
          }}
          data-ad-client="ca-pub-4442626272315276"
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive={responsive}
          data-ad-layout-key="-gw-1+2a-cb+5c"
        />
      )}
    </div>
  )
}
