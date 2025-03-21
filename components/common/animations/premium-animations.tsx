"use client"

import type { ReactNode } from "react"
import { motion, type Variants, type MotionProps, useScroll, useTransform } from "framer-motion"

// Premium animation types
type PremiumAnimationType =
  | "fade"
  | "slide"
  | "scale"
  | "reveal"
  | "float"
  | "glow"
  | "typewriter"
  | "parallax"
  | "spotlight"
  | "shimmer"

interface PremiumAnimationProps extends Omit<MotionProps, "initial" | "animate" | "exit"> {
  children: ReactNode
  type?: PremiumAnimationType
  className?: string
  delay?: number
  duration?: number
  x?: number
  y?: number
  from?: number
  to?: number
  staggerChildren?: number
  staggerDirection?: 1 | -1
  repeat?: number | boolean
  repeatType?: "loop" | "reverse" | "mirror"
  viewport?: boolean
  viewportThreshold?: number
  viewportMargin?: string
  once?: boolean
}

// Stagger container for coordinated animations
export function StaggerContainer({
  children,
  className = "",
  delay = 0,
  staggerChildren = 0.05,
  staggerDirection = 1,
  viewport = false,
  viewportThreshold = 0.1,
  viewportMargin = "-50px 0px",
  once = true,
  ...props
}: Omit<PremiumAnimationProps, "type">) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren,
        staggerDirection,
      },
    },
  }

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={viewport ? undefined : "visible"}
      whileInView={viewport ? "visible" : undefined}
      viewport={
        viewport
          ? {
              once,
              threshold: viewportThreshold,
              margin: viewportMargin,
            }
          : undefined
      }
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Premium animation component
export function PremiumAnimation({
  children,
  type = "fade",
  className = "",
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 20,
  from = 0.9,
  to = 1,
  repeat = 0,
  repeatType = "loop",
  viewport = false,
  viewportThreshold = 0.1,
  viewportMargin = "-50px 0px",
  once = true,
  ...props
}: PremiumAnimationProps) {
  // Premium animation variants
  const getAnimationVariants = (): Variants => {
    switch (type) {
      case "slide":
        return {
          hidden: { opacity: 0, x, y },
          visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
              duration,
              ease: [0.22, 1, 0.36, 1],
              delay,
            },
          },
        }
      case "scale":
        return {
          hidden: { opacity: 0, scale: from },
          visible: {
            opacity: 1,
            scale: to,
            transition: {
              duration,
              ease: [0.22, 1, 0.36, 1],
              delay,
            },
          },
        }
      case "reveal":
        return {
          hidden: {
            opacity: 0,
            clipPath: "inset(0 100% 0 0)",
          },
          visible: {
            opacity: 1,
            clipPath: "inset(0 0% 0 0)",
            transition: {
              duration,
              ease: [0.22, 1, 0.36, 1],
              delay,
            },
          },
        }
      case "float":
        return {
          hidden: { y: 10 },
          visible: {
            y: [10, -10, 10],
            transition: {
              duration: 4,
              ease: "easeInOut",
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "mirror",
              delay,
            },
          },
        }
      case "glow":
        return {
          hidden: {
            opacity: 0.8,
            textShadow: "0 0 0px rgba(255,255,255,0)",
          },
          visible: {
            opacity: 1,
            textShadow: [
              "0 0 0px rgba(255,255,255,0)",
              "0 0 10px rgba(255,255,255,0.5)",
              "0 0 0px rgba(255,255,255,0)",
            ],
            transition: {
              duration: 2,
              ease: "easeInOut",
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "mirror",
              delay,
            },
          },
        }
      case "typewriter":
        return {
          hidden: { width: "0%" },
          visible: {
            width: "100%",
            transition: {
              duration: duration * 2,
              ease: "easeInOut",
              delay,
            },
          },
        }
      case "parallax":
        return {
          hidden: { y: 100, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              duration: duration * 1.5,
              ease: [0.22, 1, 0.36, 1],
              delay,
            },
          },
        }
      case "spotlight":
        return {
          hidden: {
            opacity: 0,
            filter: "brightness(0.5) contrast(0.8)",
          },
          visible: {
            opacity: 1,
            filter: "brightness(1) contrast(1)",
            transition: {
              duration,
              ease: [0.22, 1, 0.36, 1],
              delay,
            },
          },
        }
      case "shimmer":
        return {
          hidden: {
            opacity: 0,
            backgroundPosition: "200% 0",
          },
          visible: {
            opacity: 1,
            backgroundPosition: ["-100% 0", "200% 0"],
            transition: {
              backgroundPosition: {
                duration: 2,
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              },
              opacity: {
                duration: 0.5,
                delay,
              },
            },
          },
        }
      case "fade":
      default:
        return {
          hidden: { opacity: 0, y },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration,
              ease: [0.22, 1, 0.36, 1],
              delay,
            },
          },
        }
    }
  }

  const shimmerStyle =
    type === "shimmer"
      ? {
          backgroundImage:
            "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)",
          backgroundSize: "200% 100%",
          backgroundRepeat: "no-repeat",
        }
      : {}

  return (
    <motion.div
      className={className}
      variants={getAnimationVariants()}
      initial="hidden"
      animate={viewport ? undefined : "visible"}
      whileInView={viewport ? "visible" : undefined}
      viewport={
        viewport
          ? {
              once,
              threshold: viewportThreshold,
              margin: viewportMargin,
            }
          : undefined
      }
      style={shimmerStyle}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Premium text animation component
export function AnimatedText({
  text,
  className = "",
  wordClassName = "",
  charClassName = "",
  type = "fade",
  staggerChildren = 0.02,
  delay = 0,
  duration = 0.5,
  ...props
}: {
  text: string
  className?: string
  wordClassName?: string
  charClassName?: string
} & Omit<PremiumAnimationProps, "children">) {
  // Split text into words and characters for animation
  const words = text.split(" ")

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: delay,
        staggerChildren: 0.06,
      },
    },
  }

  const wordVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0,
        staggerChildren,
      },
    },
  }

  const getCharVariants = (): Variants => {
    switch (type) {
      case "typewriter":
        return {
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }
      case "reveal":
        return {
          hidden: {
            opacity: 0,
            y: 20,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }
      case "fade":
      default:
        return {
          hidden: { opacity: 0, y: 10 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }
    }
  }

  return (
    <motion.div className={className} variants={containerVariants} initial="hidden" animate="visible" {...props}>
      {words.map((word, wordIndex) => (
        <motion.span key={wordIndex} className={`inline-block ${wordClassName}`} variants={wordVariants}>
          {Array.from(word).map((char, charIndex) => (
            <motion.span key={charIndex} className={`inline-block ${charClassName}`} variants={getCharVariants()}>
              {char}
            </motion.span>
          ))}
          {wordIndex !== words.length - 1 && <span>&nbsp;</span>}
        </motion.span>
      ))}
    </motion.div>
  )
}

// Premium UI components
export function GlowingCard({
  children,
  className = "",
  glowColor = "rgba(99, 102, 241, 0.4)",
  ...props
}: {
  children: ReactNode
  className?: string
  glowColor?: string
} & Omit<PremiumAnimationProps, "type" | "children">) {
  return (
    <motion.div
      className={`relative rounded-xl overflow-hidden ${className}`}
      initial={{ boxShadow: `0 0 0px ${glowColor}` }}
      whileHover={{
        boxShadow: `0 0 30px ${glowColor}`,
        transform: "translateY(-5px)",
      }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
        initial={{ opacity: 0, backgroundPosition: "-100% 0" }}
        whileHover={{
          opacity: 0.1,
          backgroundPosition: "200% 0",
          transition: { duration: 1.5, ease: "linear" },
        }}
      />
      {children}
    </motion.div>
  )
}

export function FloatingElement({
  children,
  className = "",
  amplitude = 10,
  duration = 4,
  ...props
}: {
  children: ReactNode
  className?: string
  amplitude?: number
  duration?: number
} & Omit<PremiumAnimationProps, "type" | "children">) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [amplitude * -1, amplitude, amplitude * -1],
      }}
      transition={{
        duration,
        ease: "easeInOut",
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function ParallaxLayer({
  children,
  className = "",
  speed = 0.5,
  ...props
}: {
  children: ReactNode
  className?: string
  speed?: number
} & Omit<PremiumAnimationProps, "type" | "children">) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, 1000 * speed * -1])

  return (
    <motion.div className={`${className}`} initial={{ y: 0 }} style={{ y }} {...props}>
      {children}
    </motion.div>
  )
}

