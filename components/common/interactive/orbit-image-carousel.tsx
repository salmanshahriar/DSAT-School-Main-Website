"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"

interface OrbitImageCarouselProps {
  centerImage?: string
  orbitImages?: string[]
  speed?: number
  autoRotate?: boolean
  orbitRadius?: number
  imageSize?: number
  imageCount?: number
}

export default function OrbitImageCarousel({
  centerImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E2%80%94Pngtree%E2%80%943d%20minimal%20blank%20screen%20laptop_14528361-J1HxN7OOJiqyI6LapC1y3aW2QFc88U.png",
  orbitImages,
  speed = 20,
  autoRotate = true,
  orbitRadius = 280,
  imageSize = 150,
  imageCount = 5,
}: OrbitImageCarouselProps) {
  // State for rotation angle
  const [rotation, setRotation] = useState(0)
  const [isRotating, setIsRotating] = useState(autoRotate)

  // Refs for animation
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>(0)
  const prevTimeRef = useRef<number>(0)

  // Default orbit images if none provided
  const defaultOrbitImages = [
    "/placeholder.svg?height=150&width=150",
    "/placeholder.svg?height=150&width=150",
    "/placeholder.svg?height=150&width=150",
    "/placeholder.svg?height=150&width=150",
    "/placeholder.svg?height=150&width=150",
  ]

  // Use provided images or defaults
  const imagesToDisplay =
    orbitImages && orbitImages.length > 0 ? orbitImages.slice(0, imageCount) : defaultOrbitImages.slice(0, imageCount)

  // If we don't have enough images, duplicate them
  const displayImages =
    imagesToDisplay.length >= imageCount
      ? imagesToDisplay
      : [...imagesToDisplay, ...imagesToDisplay, ...imagesToDisplay].slice(0, imageCount)

  // Animation function using requestAnimationFrame for smooth animation
  const animateCarousel = (time: number) => {
    if (!prevTimeRef.current) {
      prevTimeRef.current = time
    }

    const deltaTime = time - prevTimeRef.current
    prevTimeRef.current = time

    if (isRotating) {
      // Calculate rotation speed based on the speed prop
      const rotationSpeed = (360 / (speed * 1000)) * deltaTime

      // Update rotation angle
      setRotation((prev) => (prev + rotationSpeed) % 360)
    }

    animationRef.current = requestAnimationFrame(animateCarousel)
  }

  // Set up and clean up animation
  useEffect(() => {
    animationRef.current = requestAnimationFrame(animateCarousel)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isRotating, speed])

  // Toggle rotation on click
  const toggleRotation = () => {
    setIsRotating(!isRotating)
  }

  // Calculate if an image is behind the center image
  const isImageBehind = (imageAngle: number) => {
    const normalizedAngle = (((imageAngle + rotation) % 360) + 360) % 360
    return normalizedAngle > 90 && normalizedAngle < 270
  }

  // Calculate position adjustments
  const halfSize = imageSize / 2

  return (
    <div
      className="relative w-full h-[600px] mx-auto"
      onClick={toggleRotation}
      ref={containerRef}
      role="region"
      aria-label="Interactive 3D image carousel"
    >
      {/* 3D Scene Container */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          perspective: "1200px",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        {/* Center Image - Stable in the center */}
        <div className="relative w-[60%] h-[60%] z-20">
          <Image
            src={centerImage || "/placeholder.svg"}
            alt="Center display"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Orbiting Images Container */}
        <div
          className="absolute inset-0"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateY(${rotation}deg)`,
            transition: isRotating ? "none" : "transform 0.5s ease-out",
            willChange: "transform",
          }}
        >
          {displayImages.map((imageSrc, index) => {
            // Calculate position on the circle
            const angle = (index / displayImages.length) * 360

            // Determine if this image is behind the center image
            const behind = isImageBehind(angle)

            // Calculate z-index - higher for images in front
            const zIndex = behind ? 10 : 30

            // Calculate scale and opacity based on position
            const scale = behind ? 0.5 : 1
            const opacity = behind ? 0.6 : 1

            return (
              <div
                key={index}
                className="absolute top-1/2 left-1/2 transition-all duration-300"
                style={{
                  width: `${imageSize}px`,
                  height: `${imageSize}px`,
                  marginLeft: `-${halfSize}px`,
                  marginTop: `-${halfSize}px`,
                  transform: `rotateY(${angle}deg) translateZ(${orbitRadius}px)`,
                  zIndex,
                  transformStyle: "preserve-3d",
                  willChange: "transform, opacity",
                }}
              >
                {/* Image container */}
                <div
                  className="w-full h-full"
                  style={{
                    opacity: opacity,
                    transform: `scale(${scale})`,
                    filter: behind ? "brightness(0.6) blur(1px)" : "brightness(1) blur(0px)",
                    transition: "opacity 0.3s ease-out, transform 0.3s ease-out, filter 0.3s ease-out",
                  }}
                >
                  <Image
                    src={imageSrc || "/placeholder.svg"}
                    alt={`Orbit image ${index + 1}`}
                    fill
                    className="object-contain rounded-lg shadow-lg"
                    sizes={`${imageSize}px`}
                    loading="eager"
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Accessibility controls */}
      <div className="sr-only">
        <button onClick={() => setIsRotating(!isRotating)}>{isRotating ? "Pause rotation" : "Start rotation"}</button>
      </div>
    </div>
  )
}

