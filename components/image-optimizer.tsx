"use client"

import Image from "next/image"
import { useState } from "react"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  fill?: boolean
  objectFit?: "cover" | "contain" | "fill" | "scale-down"
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  fill = false,
  objectFit = "cover",
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  const isExternal = src.startsWith("http")

  if (isExternal) {
    return (
      <img
        src={src || "/placeholder.svg"}
        alt={alt}
        className={`${className} ${isLoading ? "animate-pulse bg-muted" : ""}`}
        loading="lazy"
        onLoad={() => setIsLoading(false)}
      />
    )
  }

  return (
    <Image
      src={src || "/placeholder.svg"}
      alt={alt}
      width={width || 800}
      height={height || 600}
      className={`${className} ${isLoading ? "animate-pulse bg-muted" : ""}`}
      priority={priority}
      fill={fill}
      style={{
        objectFit: fill ? objectFit : undefined,
      }}
      onLoadingComplete={() => setIsLoading(false)}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
    />
  )
}
