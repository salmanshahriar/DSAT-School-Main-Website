"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"

interface VariableProximityV2Props {
  text: string
  className?: string
  radius?: number
}

export default function VariableProximityV2({ text, className = "", radius = 150 }: VariableProximityV2Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  // Initialize letters array once
  const letters = text.split("").map((char) => ({ char }))

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div
      ref={containerRef}
      className={`inline-block ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
    >
      {letters.map((letter, index) => (
        <LetterWithProximity
          key={index}
          char={letter.char}
          index={index}
          isHovering={isHovering}
          mousePos={mousePos}
          containerRef={containerRef}
          radius={radius}
        />
      ))}
    </div>
  )
}

interface LetterWithProximityProps {
  char: string
  index: number
  isHovering: boolean
  mousePos: { x: number; y: number }
  containerRef: React.RefObject<HTMLDivElement>
  radius: number
}

function LetterWithProximity({ char, index, isHovering, mousePos, containerRef, radius }: LetterWithProximityProps) {
  const letterRef = useRef<HTMLSpanElement>(null)
  const [weight, setWeight] = useState(400)

  useEffect(() => {
    if (!isHovering || !letterRef.current || !containerRef.current) {
      setWeight(400)
      return
    }

    const updateWeight = () => {
      const letterRect = letterRef.current?.getBoundingClientRect()
      const containerRect = containerRef.current?.getBoundingClientRect()

      if (!letterRect || !containerRect) return

      const letterCenterX = letterRect.left - containerRect.left + letterRect.width / 2
      const letterCenterY = letterRect.top - containerRect.top + letterRect.height / 2

      const distance = Math.sqrt(Math.pow(mousePos.x - letterCenterX, 2) + Math.pow(mousePos.y - letterCenterY, 2))

      const maxDistance = radius
      const minWeight = 400
      const maxWeight = 800

      if (distance < maxDistance) {
        const weightDelta = maxWeight - minWeight
        const distanceRatio = 1 - Math.min(distance / maxDistance, 1)
        const newWeight = Math.round(minWeight + weightDelta * distanceRatio)
        setWeight(newWeight)
      } else {
        setWeight(minWeight)
      }
    }

    // Use requestAnimationFrame for smoother updates
    const frameId = requestAnimationFrame(updateWeight)
    return () => cancelAnimationFrame(frameId)
  }, [isHovering, mousePos.x, mousePos.y, radius])

  return (
    <motion.span
      ref={letterRef}
      className="letter inline-block transition-all duration-200"
      animate={{
        fontWeight: weight,
        fontVariationSettings: `"wght" ${weight}`,
      }}
      transition={{ duration: 0.2 }}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  )
}

