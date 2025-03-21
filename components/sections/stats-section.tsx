"use client"

import { useRef, useState, useEffect } from "react"
import { TrendingUp, Users, Award, Clock, ArrowRight } from "lucide-react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"
import { Button } from "@/components/ui/button"
import { PremiumAnimation } from "@/components/common/animations/premium-animations"
import InteractiveTitle from "@/components/common/interactive/interactive-title-v2"

// Custom hook for animated counter
function useCounter(end: number, duration = 2, start = 0, inView = false) {
  const [count, setCount] = useState(start)
  const countRef = useRef(start)
  const startTimeRef = useRef<number | null>(null)

  useEffect(() => {
    if (!inView) return

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp
      }

      const progress = Math.min((timestamp - startTimeRef.current) / (duration * 1000), 1)
      const currentCount = Math.floor(progress * (end - start) + start)

      if (countRef.current !== currentCount) {
        countRef.current = currentCount
        setCount(currentCount)
      }

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    const frameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameId)
  }, [end, duration, start, inView])

  return count
}

// Animated number component
function AnimatedNumber({
  value,
  suffix = "",
  inView = false,
  className = "",
}: {
  value: number
  suffix?: string
  inView: boolean
  className?: string
}) {
  const count = useCounter(value, 2.5, 0, inView)

  return (
    <span className={className}>
      {count}
      {suffix}
    </span>
  )
}

export default function StatsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: "-50px 0px",
  })

  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [inView, controls])

  const stats = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      value: 94,
      suffix: "%",
      label: "Score Improvement",
      description: "Average improvement in student scores after completing our program",
    },
    {
      icon: <Users className="h-8 w-8" />,
      value: 10000,
      suffix: "+",
      label: "Students",
      description: "Students have trusted us with their SAT preparation journey",
    },
    {
      icon: <Award className="h-8 w-8" />,
      value: 98,
      suffix: "%",
      label: "Success Rate",
      description: "Students who achieved their target score or higher",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      value: 500,
      suffix: "+",
      label: "Practice Tests",
      description: "Comprehensive practice tests with detailed analytics",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section className="py-32 relative overflow-hidden bg-gray-50" ref={ref}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-grid-pattern opacity-30"></div>

        {/* Animated background shapes */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/5"
            style={{
              width: `${150 + (i % 3) * 100}px`,
              height: `${150 + (i % 3) * 100}px`,
              left: `${(i * 20) % 100}%`,
              top: `${(i * 15) % 100}%`,
              zIndex: 0,
            }}
            animate={{
              x: [0, 10, 0, -10, 0],
              y: [0, -10, 0, 10, 0],
              scale: [1, 1.02, 1, 0.98, 1],
            }}
            transition={{
              duration: 20 + i * 5,
              ease: "easeInOut",
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "mirror",
            }}
          />
        ))}

        {/* Only keep the bottom decorative element */}
        <div
          className="absolute bottom-0 left-0 w-full h-24 bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <PremiumAnimation type="slide" y={30} className="text-center mb-20" viewport={true}>
          <div className="inline-block px-5 py-2.5 bg-primary/10 rounded-full text-primary font-medium text-sm mb-8 shadow-sm">
            <span className="tracking-wide">Our Success Metrics</span>
          </div>

          <InteractiveTitle
            text="Our Impact in Numbers"
            className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6"
            radius={120}
          />

          <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're proud of the results our students achieve through dedication and our proven methods. These numbers
            reflect our commitment to excellence in education.
          </p>
        </PremiumAnimation>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants} className="relative group">
              <div className="absolute inset-0 bg-white rounded-xl transform transition-all duration-300 group-hover:scale-[1.03] shadow-xl"></div>

              {/* Subtle glow effect on hover */}
              <div className="absolute -inset-0.5 bg-primary/30 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-300"></div>

              <div className="relative bg-white p-8 rounded-xl border border-gray-100 h-full z-10">
                {/* Icon with primary background */}
                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-sm opacity-20"></div>
                  <div className="relative flex items-center justify-center w-16 h-16 bg-primary rounded-full text-white shadow-lg">
                    {stat.icon}
                  </div>
                </div>

                {/* Animated number */}
                <h3 className="text-5xl font-bold mb-4 text-gray-900">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} inView={inView} />
                </h3>

                <h4 className="text-xl font-semibold mb-3 text-primary">{stat.label}</h4>

                <p className="text-gray-600 leading-relaxed">{stat.description}</p>

                {/* Decorative element */}
                <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-primary/5 opacity-50"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <Button className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-6 h-auto rounded-md group relative overflow-hidden shadow-md">
            <span className="relative z-10 tracking-wide">See More Success Stories</span>
            <ArrowRight className="ml-2 h-4 w-4 relative z-10 transition-transform group-hover:translate-x-1" />
            <motion.div
              className="absolute inset-0 bg-primary/90 opacity-0"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%", opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

