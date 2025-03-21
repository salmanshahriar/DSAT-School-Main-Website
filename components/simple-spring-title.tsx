"use client"

import { useState } from "react"
import { useSpring, animated, config } from "@react-spring/web"

interface SimpleSpringTitleProps {
  text: string
  className?: string
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
}

export default function SimpleSpringTitle({ text, className = "", as: Component = "h2" }: SimpleSpringTitleProps) {
  const [isHovered, setIsHovered] = useState(false)

  const props = useSpring({
    fontWeight: isHovered ? 700 : 400,
    scale: isHovered ? 1.05 : 1,
    config: config.gentle,
  })

  return (
    <Component className={`${className} inline-block`}>
      <animated.span
        style={{
          fontWeight: props.fontWeight,
          scale: props.scale,
          display: "inline-block",
          transformOrigin: "center",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {text}
      </animated.span>
    </Component>
  )
}

