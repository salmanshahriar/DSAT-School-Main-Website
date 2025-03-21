"use client"

import VariableProximityV2 from "./variable-proximity-v2"

interface InteractiveTitleV2Props {
  text: string
  className?: string
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
  radius?: number
}

export default function InteractiveTitle({
  text,
  className = "",
  as: Component = "h2",
  radius = 150,
}: InteractiveTitleV2Props) {
  return (
    <Component className={`font-serif ${className}`}>
      <VariableProximityV2 text={text} radius={radius} />
    </Component>
  )
}

