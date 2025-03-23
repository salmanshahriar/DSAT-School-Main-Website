"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, useInView, useScroll, useTransform, useMotionValue } from "framer-motion"
import {
  BarChart2,
  Clock,
  ArrowRight,
  Zap,
  Trophy,
  Bot,
  MessageCircle,
  CheckCircle,
  Sparkles,
  BookOpen,
  Users,
  DiscIcon as Discord,
  X,
  Plus,
  Star,
} from "lucide-react"

// Feature type definition
type Feature = {
  icon: React.ReactNode
  title: string
  description: string
  color: string
  highlights: string[]
}

export default function FeaturesSection() {
  // Scroll-based parallax effect
  const { scrollYProgress } = useScroll()
  const sectionRef = useRef<HTMLElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Mouse move handler for subtle parallax effects
  const handleMouseMove = (e: React.MouseEvent) => {
    if (sectionRef.current) {
      const { left, top, width, height } = sectionRef.current.getBoundingClientRect()
      const x = (e.clientX - left) / width - 0.5
      const y = (e.clientY - top) / height - 0.5
      setMousePosition({ x, y })
    }
  }

  // Features data
  const features: Feature[] = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Personalized Learning Pathways",
      description:
        "Our adaptive AI system creates a custom study plan tailored to your unique strengths and weaknesses. Students who follow our personalized approach see an average score improvement of 140+ points, with 87% reaching or exceeding their target scores.",
      color: "indigo",
      highlights: [
        "Custom study plans based on diagnostic assessment",
        "AI-powered content recommendations",
        "Real-time progress tracking with adaptive adjustments",
        "Focus on your specific improvement areas",
      ],
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "College-Ready Confidence Builder",
      description:
        "Beyond test prep, we build the critical thinking and problem-solving skills that prepare you for college success. Our students report 94% higher confidence levels and consistently outperform their peers in freshman-year college courses.",
      color: "rose",
      highlights: [
        "Develop lasting academic skills beyond the test",
        "Build test-taking confidence with proven techniques",
        "Master time management strategies for academic success",
        "Eliminate test anxiety with our proven methods",
      ],
    },
    {
      icon: <BarChart2 className="h-8 w-8" />,
      title: "Proven Score Improvement System",
      description:
        "Our methodology has helped 10,000+ students achieve their dream scores. With our comprehensive approach, students average 120-200 point improvements, unlocking over $50 million in scholarships and admission to top-tier universities.",
      color: "amber",
      highlights: [
        "Guaranteed score improvement or your money back",
        "Data-driven teaching methods with proven results",
        "Targeted practice on weak areas for maximum gains",
        "Strategic test-taking techniques from top scorers",
      ],
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Elite Instructor Advantage",
      description:
        "Learn from instructors in the top 1% of SAT scorers with advanced degrees from prestigious universities. Our rigorous selection process ensures you learn from experts who have mastered both the content and the art of teaching it effectively.",
      color: "emerald",
      highlights: [
        "Instructors with 99th percentile SAT scores",
        "Experienced educators with proven student results",
        "Subject matter experts in all test areas",
        "Mentors who are invested in your personal success",
      ],
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "AI-Powered Tools and Features",
      description:
        "Access our cutting-edge AI assistant, AI MAMA, that provides instant explanations, step-by-step solutions, and personalized feedback. Our AI tools help you understand complex concepts, identify knowledge gaps, and accelerate your learning process.",
      color: "blue",
      highlights: [
        "AI MAMA explanations for any SAT concept or question",
        "Instant feedback on practice questions and essays",
        "Personalized study recommendations based on your performance",
        "24/7 AI-powered tutoring support whenever you need help",
      ],
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Supportive Learning Community",
      description:
        "Join a community of motivated peers and supportive instructors. Our collaborative environment includes 24/7 question support, study groups, and personalized feedback, creating an accountability system that keeps you on track to achieve your goals.",
      color: "purple",
      highlights: [
        "24/7 question support via our dedicated platform",
        "Weekly group study sessions with peer collaboration",
        "Motivational coaching and accountability check-ins",
        "Parent progress reports and involvement opportunities",
      ],
    },
  ]

  // Section header ref for animation
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 })

  // CTA ref for animation
  const ctaRef = useRef(null)
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.5 })

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 lg:py-32 relative overflow-hidden "
      id="features"
      onMouseMove={handleMouseMove}
    >
      {/* Premium background elements */}
      <PremiumBackground mousePosition={mousePosition} scrollProgress={scrollYProgress} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header with premium animations */}
        <motion.div
          ref={headerRef}
          className="text-center mb-12 md:mb-20 lg:mb-28 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="inline-block mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={headerInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="px-5 py-2.5 bg-primary/10 backdrop-blur-sm rounded-full text-primary font-medium text-sm shadow-lg border border-primary/10 flex items-center">
              <div className="mr-2 p-1 bg-primary/20 rounded-full">
                <Sparkles className="h-4 w-4" />
              </div>
              <span className="tracking-wide">Proven Results Since 2010</span>
            </div>
          </motion.div>

          <div className="relative mb-6">
            <AnimatedTextReveal
              text="Why Choose Our SAT Prep Program?"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-gray-900"
              visible={headerInView}
              delay={0.3}
            />

            {/* Decorative stars */}
            <motion.div
              className="absolute -top-10 -left-4 text-primary/30"
              initial={{ opacity: 0, scale: 0, rotate: -30 }}
              animate={headerInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -30 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <Star className="h-8 w-8" />
            </motion.div>
            <motion.div
              className="absolute -bottom-6 -right-4 text-primary/20"
              initial={{ opacity: 0, scale: 0, rotate: 30 }}
              animate={headerInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: 30 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <Star className="h-6 w-6" />
            </motion.div>
          </div>

          <motion.div
            initial={{ width: 0 }}
            animate={headerInView ? { width: "6rem" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="h-1 bg-gradient-to-r from-primary/80 to-primary mx-auto mb-8 rounded-full"
          />

          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-48 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            Our comprehensive program doesn't just prepare you for a test—it transforms your academic future. With a
            proven track record of 140+ point average score improvements, we've helped thousands of students gain
            admission to their dream colleges with substantial scholarships.
          </motion.p>
        </motion.div>

        {/* Premium features display */}
        <div className="space-y-20 sm:space-y-24 md:space-y-32 lg:space-y-40">
          {features.map((feature, index) => (
            <PremiumFeatureItem key={index} feature={feature} index={index} mousePosition={mousePosition} />
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          ref={ctaRef}
          className="mt-20 md:mt-32 lg:mt-40 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <PremiumCTAButton />
        </motion.div>
      </div>
    </section>
  )
}

// Premium animated background with parallax effects
function PremiumBackground({ mousePosition, scrollProgress }) {
  // Transform values for parallax effects
  const bgY = useTransform(scrollProgress, [0, 1], ["0%", "30%"])
  const opacityGradient = useTransform(scrollProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  // Create motion values for mouse position effects
  const mouseX = useMotionValue(mousePosition.x || 0)
  const mouseY = useMotionValue(mousePosition.y || 0)

  // Update mouse position motion values when props change
  useEffect(() => {
    if (mousePosition.x !== undefined) mouseX.set(mousePosition.x)
    if (mousePosition.y !== undefined) mouseY.set(mousePosition.y)
  }, [mousePosition.x, mousePosition.y, mouseX, mouseY])

  // Create transforms for the blobs with safe default values
  const blob1X = useTransform(mouseX, [-0.5, 0.5], ["5%", "-5%"])
  const blob1Y = useTransform(mouseY, [-0.5, 0.5], ["5%", "-5%"])
  const blob1Scale = useTransform(mouseY, [-0.5, 0.5], [0.95, 1.05])

  const blob2X = useTransform(mouseX, [-0.5, 0.5], ["-5%", "5%"])
  const blob2Y = useTransform(mouseY, [-0.5, 0.5], ["-5%", "5%"])
  const blob2Scale = useTransform(mouseY, [-0.5, 0.5], [1.05, 0.95])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Premium gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white"
        style={{ opacity: opacityGradient }}
      />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      {/* Glass morphism blobs with parallax effect */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-3xl"
        style={{
          y: bgY,
          x: blob1X,
          scale: blob1Scale,
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/4 w-[350px] md:w-[500px] h-[350px] md:h-[500px] rounded-full bg-gradient-to-r from-blue-500/10 to-emerald-500/10 blur-3xl"
        style={{
          y: useTransform(scrollProgress, [0, 1], ["0%", "20%"]),
          x: blob2X,
          scale: blob2Scale,
        }}
      />

      {/* Premium floating particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/20"
          style={{
            width: 2 + Math.random() * 8,
            height: 2 + Math.random() * 8,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: "blur(1px)",
          }}
          animate={{
            x: [(-10 - (i % 20)) * (mousePosition.x || 0) * 2, (10 + (i % 20)) * (mousePosition.x || 0) * 2],
            y: [(-10 - (i % 15)) * (mousePosition.y || 0) * 2, (10 + (i % 15)) * (mousePosition.y || 0) * 2],
            opacity: [0, 0.7, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 20 + Math.random() * 40,
            delay: Math.random() * 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

// Animated text reveal component
function AnimatedTextReveal({ text, className, visible, delay = 0 }) {
  // Ensure text is a string
  const safeText = text || ""

  return (
    <div className={className}>
      {safeText.split(" ").map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block overflow-hidden mr-2 relative">
          <motion.span
            className="inline-block"
            initial={{ y: "100%" }}
            animate={visible ? { y: 0 } : { y: "100%" }}
            transition={{
              duration: 0.8,
              delay: delay + wordIndex * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </div>
  )
}

// Premium feature item with enhanced animations
function PremiumFeatureItem({
  feature,
  index,
  mousePosition,
}: { feature: Feature; index: number; mousePosition: { x: number; y: number } }) {
  const isEven = index % 2 === 0
  const featureRef = useRef(null)
  const featureInView = useInView(featureRef, { once: true, amount: 0.2 })
  const [isHovered, setIsHovered] = useState(false)

  // Get the appropriate visualization component based on feature title
  const getVisualization = () => {
    const title = feature.title
    if (title.includes("Personalized Learning Pathways"))
      return <AdaptivePracticeVisualization color={feature.color} mousePosition={mousePosition} />
    if (title.includes("College-Ready Confidence Builder"))
      return <MockTestVisualization color={feature.color} mousePosition={mousePosition} />
    if (title.includes("Proven Score Improvement System"))
      return <DashboardVisualization color={feature.color} mousePosition={mousePosition} />
    if (title.includes("Elite Instructor Advantage"))
      return <LeaderboardVisualization color={feature.color} mousePosition={mousePosition} />
    if (title.includes("AI-Powered Tools and Features"))
      return <AIToolsVisualization color={feature.color} mousePosition={mousePosition} />
    if (title.includes("Supportive Learning Community"))
      return <InstructorSupportVisualization color={feature.color} mousePosition={mousePosition} />
    return null
  }

  return (
    <div
      ref={featureRef}
      className={` h-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 lg:gap-16 items-center px-4 sm:px-6`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Feature visualization with premium effects */}
      <div
        className={`${isEven ? "md:order-1" : "md:order-2"} w-full h-full mb-6 md:mb-0`}
      >
        <motion.div
          initial={{ opacity: 0, x: isEven ? -30 : 30, y: 20 }}
          animate={
            featureInView
              ? {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.2,
                  },
                }
              : { opacity: 0, x: isEven ? -30 : 30, y: 20 }
          }
          className="w-full h-full"
          style={{
            filter: isHovered ? "brightness(1.05)" : "brightness(1)",
            transition: "filter 0.5s ease",
          }}
        >
          {getVisualization()}
        </motion.div>
      </div>

      {/* Feature description with premium styling */}
      <div className={`${isEven ? "md:order-2" : "md:order-1"} flex flex-col`}>
        <motion.div
          initial={{ opacity: 0, x: isEven ? 30 : -30 }}
          animate={
            featureInView
              ? {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }
              : { opacity: 0, x: isEven ? 30 : -30 }
          }
        >
          <div className="mb-6">
            {/* Premium icon display */}
            <motion.div
              className={`inline-block p-3 sm:p-4 rounded-2xl bg-${feature.color}-50 mb-4 sm:mb-6 shadow-lg border border-${feature.color}-100`}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              transition={{ duration: 0.3 }}
            >
              {feature.icon}
            </motion.div>

            {/* Animated title reveal */}
            <div className="overflow-hidden mb-3 sm:mb-4">
              <motion.h3
                className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-gray-900"
                initial={{ y: 50, opacity: 0 }}
                animate={featureInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {feature.title}
              </motion.h3>
            </div>

            {/* Description with staggered reveal */}
            <motion.p
              className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={featureInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {feature.description}
            </motion.p>
          </div>

          {/* Premium highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-6">
            {feature.highlights.map((highlight, i) => (
              <motion.div
                key={i}
                className={`flex items-center gap-2 p-2 sm:p-3 rounded-lg bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1`}
                initial={{ opacity: 0, y: 20 }}
                animate={featureInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                whileHover={{
                  backgroundColor: `var(--${feature.color}-50)`,
                  borderColor: `var(--${feature.color}-100)`,
                }}
              >
                <div
                  className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-${feature.color}-100 flex items-center justify-center shadow-sm`}
                >
                  <CheckCircle className={`h-3 w-3 sm:h-4 sm:w-4 text-${feature.color}-500`} />
                </div>
                <span className="text-xs sm:text-sm text-gray-700 font-medium">{highlight}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// Premium CTA Button with enhanced effects
function PremiumCTAButton() {
  const discordLink = "https://discord.gg/hBGFDBzA6g"
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative inline-block">
      {/* Premium glow effect */}
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-primary rounded-lg blur-xl opacity-70"
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [0.98, 1.01, 0.98],
        }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
      />

      {/* Premium button with glass morphism */}
      <motion.a
        href={discordLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative bg-gradient-to-r from-primary to-indigo-600 hover:from-indigo-600 hover:to-primary text-white font-medium text-xs sm:text-sm md:text-base px-4 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 rounded-lg shadow-xl flex items-center gap-2 sm:gap-3 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 backdrop-blur-sm border border-white/10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-indigo-600/80 to-primary/80"
          initial={{ x: "100%" }}
          animate={isHovered ? { x: "0%" } : { x: "100%" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />

        <span className="relative z-10 font-semibold tracking-wide">Join Our Discord for Free Resources</span>
        <Discord className="h-4 w-4 sm:h-5 sm:w-5 relative z-10" />

        {/* Reduce particle effects on mobile */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none hidden sm:flex"
          initial={{ opacity: 0 }}
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-white rounded-full"
              initial={{
                x: 0,
                y: 0,
                opacity: 0,
              }}
              animate={{
                x: (Math.random() - 0.5) * 200,
                y: (Math.random() - 0.5) * 200,
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 1 + Math.random(),
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.div>
      </motion.a>
    </div>
  )
}

// Enhanced visualization components with premium effects

// Adaptive Practice Visualization with premium styling
function AdaptivePracticeVisualization({
  color,
  mousePosition,
}: { color: string; mousePosition: { x: number; y: number } }) {
  const containerRef = useRef(null)
  const inView = useInView(containerRef, { once: true, amount: 0.5 })

  // Ensure mousePosition has default values
  const safeMouseX = mousePosition?.x || 0
  const safeMouseY = mousePosition?.y || 0

  return (
    <div ref={containerRef} className="relative w-full h-full flex items-center justify-center">
      {/* Glass morphism background effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className={`absolute w-64 h-64 rounded-full bg-${color}-200/30 blur-3xl`}
          animate={{
            x: safeMouseX * 10,
            y: safeMouseY * 10,
          }}
          transition={{ type: "spring", damping: 15 }}
        />
      </div>

      <motion.div
        className={`w-full max-w-md mx-auto bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200/50 p-5 shadow-2xl overflow-hidden `}
        initial={{ opacity: 0, scale: 0.9, rotateX: 10, rotateY: -10 }}
        animate={
          inView
            ? {
                opacity: 1,
                scale: 1,
                rotateX: 0,
                rotateY: 0,
                transition: {
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                },
              }
            : { opacity: 0, scale: 0.9, rotateX: 10, rotateY: -10 }
        }
        style={{
          transformStyle: "preserve-3d",
          transform: "perspective(1000px)",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1), 0 -10px 50px -12px rgba(0, 0, 0, 0.05)",
        }}
      >
        {/* Difficulty filters with premium styling */}
        <motion.div
          className="mb-4 p-3 bg-gray-50/80 backdrop-blur-sm rounded-lg border border-gray-100 shadow-sm"
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center gap-3">
            <span className="text-gray-600 text-sm font-medium">Difficulty:</span>
            <div className="flex gap-2">
              <button className={`px-4 py-1 rounded-full text-sm text-white bg-${color}-500 shadow-md`}>All</button>
              <button className="px-4 py-1 rounded-full text-sm text-gray-600 bg-white border border-gray-200 hover:border-gray-300 transition-colors">
                Easy
              </button>
              <button className="px-4 py-1 rounded-full text-sm text-gray-600 bg-white border border-gray-200 hover:border-gray-300 transition-colors">
                Medium
              </button>
              <button className="hidden md:block px-4 py-1 rounded-full text-sm text-gray-600 bg-white border border-gray-200 hover:border-gray-300 transition-colors">
                Hard
              </button>
            </div>
          </div>
        </motion.div>

        {/* Question breakdown title with premium animation */}
        <motion.h4
          className="text-lg font-bold text-gray-800 mb-3"
          initial={{ opacity: 0, x: -10 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Question Breakdown
        </motion.h4>

        {/* Craft and Structure section with premium styling */}
        <motion.div
          className="mb-4 p-3 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ y: -2 }}
        >
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-sm shadow-md">
                430
              </div>
              <span className="font-semibold text-gray-800">Craft and Structure</span>
            </div>
            <div className="px-2 py-1 bg-gray-100 rounded-md text-xs text-gray-600">CAS</div>
          </div>

          <div className="space-y-2 pl-12">
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 text-xs shadow-sm">
                270
              </div>
              <span className="text-sm text-gray-700">Words in Context</span>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 text-xs shadow-sm">
                109
              </div>
              <span className="text-sm text-gray-700">Text Structure and Purpose</span>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 text-xs shadow-sm">
                51
              </div>
              <span className="text-sm text-gray-700">Cross-Text Connections</span>
            </div>
          </div>
        </motion.div>

        {/* Information and Ideas section with premium styling */}
        <motion.div
          className="p-3 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileHover={{ y: -2 }}
        >
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold text-sm shadow-md">
                699
              </div>
              <span className="font-semibold text-gray-800">Information and Ideas</span>
            </div>
            <div className="px-2 py-1 bg-gray-100 rounded-md text-xs text-gray-600">INI</div>
          </div>

          <div className="space-y-2 pl-12">
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 text-xs shadow-sm">
                359
              </div>
              <span className="text-sm text-gray-700">Command of Evidence</span>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 text-xs shadow-sm">
                232
              </div>
              <span className="text-sm text-gray-700">Central Ideas and Details</span>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 text-xs shadow-sm">
                108
              </div>
              <span className="text-sm text-gray-700">Inferences</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

// Mock Test Visualization with premium styling
function MockTestVisualization({ color, mousePosition }: { color: string; mousePosition: { x: number; y: number } }) {
  const containerRef = useRef(null)
  const inView = useInView(containerRef, { once: true, amount: 0.5 })

  // Ensure mousePosition has default values
  const safeMouseX = mousePosition?.x || 0
  const safeMouseY = mousePosition?.y || 0

  return (
    <div ref={containerRef} className="relative w-full h-full flex items-center justify-center">
      {/* Glass morphism background effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className={`absolute w-64 h-64 rounded-full bg-${color}-200/30 blur-3xl`}
          animate={{
            x: safeMouseX * 10,
            y: safeMouseY * 10,
          }}
          transition={{ type: "spring", damping: 15 }}
        />
      </div>

      <motion.div
        className="w-full max-w-md bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl border border-gray-200/50 overflow-hidden"
        initial={{ opacity: 0, scale: 0.9, rotateX: 10, rotateY: -10 }}
        animate={
          inView
            ? {
                opacity: 1,
                scale: 1,
                rotateX: 0,
                rotateY: 0,
                transition: {
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                },
              }
            : { opacity: 0, scale: 0.9, rotateX: 10, rotateY: -10 }
        }
        style={{
          transformStyle: "preserve-3d",
          transform: "perspective(1000px)",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1), 0 -10px 50px -12px rgba(0, 0, 0, 0.05)",
        }}
      >
        {/* Test header with premium styling */}
        <motion.div
          className={`p-4 bg-gradient-to-r from-${color}-500 to-${color}-600 text-white flex justify-between items-center`}
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="font-bold flex items-center gap-2">
            <Clock className="h-5 w-5" />
            <span>Digital SAT Practice Test</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <motion.div
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              34:12 remaining
            </motion.div>
          </div>
        </motion.div>

        {/* Test content with premium styling */}
        <motion.div
          className="p-5"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex justify-between mb-4">
            <div className="text-sm text-gray-500">Reading • Question 12 of 27</div>
            <div className={`text-sm text-${color}-500 font-medium`}>Module 1</div>
          </div>

          {/* Reading passage with premium styling */}
          <div className="mb-4 p-4 bg-gray-50/80 backdrop-blur-sm rounded-lg text-sm text-gray-700 max-h-24 overflow-y-auto border border-gray-200 shadow-inner">
            <motion.div
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            >
              The author argues that the rapid advancement of technology has fundamentally altered how we perceive time
              and space. According to the passage, "The digital revolution has compressed distances and accelerated
              interactions, creating a new paradigm where physical proximity is no longer a prerequisite for meaningful
              connection."
            </motion.div>
          </div>

          <div className="mb-4 p-4 bg-gray-50/80 backdrop-blur-sm rounded-lg text-sm text-gray-700 font-medium border border-gray-200 shadow-sm">
            According to the passage, the author believes that the primary benefit of the digital revolution is its
            ability to...
          </div>

          {/* Answer choices with premium styling */}
          <div className="space-y-3">
            {["A", "B", "C", "D"].map((option, i) => (
              <motion.div
                key={i}
                className={`p-3 border rounded-lg cursor-pointer ${
                  i === 1
                    ? `border-${color}-500 bg-${color}-50/70 backdrop-blur-sm shadow-md`
                    : "border-gray-200 hover:border-gray-300 bg-white"
                }`}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                  backgroundColor: i === 1 ? "" : `var(--${color}-50)`,
                  borderColor: i === 1 ? "" : `var(--${color}-200)`,
                }}
                whileTap={{ scale: 0.98 }}
                animate={
                  i === 1
                    ? {
                        boxShadow: ["0 0 0 rgba(0,0,0,0)", "0 4px 12px rgba(0,0,0,0.1)", "0 0 0 rgba(0,0,0,0)"],
                      }
                    : {}
                }
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              >
                <div className="flex items-start gap-2">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      i === 1 ? `bg-${color}-500 shadow-md` : "bg-gray-200"
                    } ${i === 1 ? "text-white" : "text-gray-700"} text-sm`}
                  >
                    {option}
                  </div>
                  <div className="text-sm text-gray-700">
                    {i === 0 && "reduce the importance of physical location."}
                    {i === 1 && "transform our perception of time and space."}
                    {i === 2 && "accelerate technological innovation."}
                    {i === 3 && "create more meaningful social connections."}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Test navigation with premium styling */}
        <motion.div
          className="p-3 border-t border-gray-200 flex justify-between items-center"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium flex items-center gap-1 hover:bg-gray-50 transition-colors">
            <ArrowRight className="h-4 w-4 rotate-180" />
            Previous
          </button>

          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className={`w-2 h-2 rounded-full ${i <= 2 ? `bg-${color}-500` : "bg-gray-300"}`}
                animate={i === 2 ? { scale: [1, 1.5, 1] } : {}}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
            ))}
          </div>

          <button
            className={`px-4 py-2 bg-gradient-to-r from-${color}-500 to-${color}-600 text-white rounded-lg text-sm font-medium flex items-center gap-1 shadow-md hover:shadow-lg transition-shadow`}
          >
            Next
            <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>
      </motion.div>
    </div>
  )
}

// Dashboard Visualization with premium styling
function DashboardVisualization({ color, mousePosition }: { color: string; mousePosition: { x: number; y: number } }) {
  const containerRef = useRef(null)
  const inView = useInView(containerRef, { once: true, amount: 0.5 })

  // Ensure mousePosition has default values
  const safeMouseX = mousePosition?.x || 0
  const safeMouseY = mousePosition?.y || 0

  return (
    <div ref={containerRef} className="relative w-full h-full flex items-center justify-center">
      {/* Glass morphism background effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className={`absolute w-64 h-64 rounded-full bg-${color}-200/30 blur-3xl`}
          animate={{
            x: safeMouseX * 10,
            y: safeMouseY * 10,
          }}
          transition={{ type: "spring", damping: 15 }}
        />
      </div>

      <motion.div
        className="w-full max-w-md bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl border border-gray-200/50 p-5"
        initial={{ opacity: 0, scale: 0.9, rotateX: 10, rotateY: -10 }}
        animate={
          inView
            ? {
                opacity: 1,
                scale: 1,
                rotateX: 0,
                rotateY: 0,
                transition: {
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                },
              }
            : { opacity: 0, scale: 0.9, rotateX: 10, rotateY: -10 }
        }
        style={{
          transformStyle: "preserve-3d",
          transform: "perspective(1000px)",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1), 0 -10px 50px -12px rgba(0, 0, 0, 0.05)",
        }}
      >
        {/* Metrics Grid with premium styling */}
        <motion.div
          className="grid grid-cols-2 gap-3 mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Questions Solved Card with premium styling */}
          <motion.div
            className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            whileHover={{
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              borderColor: "rgba(99, 102, 241, 0.2)",
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="text-indigo-500">
                <BookOpen className="h-5 w-5" />
              </div>
              <span className="text-gray-600 text-sm font-medium">Questions Solved</span>
            </div>
            <div className="flex flex-col">
              <motion.span
                className="text-3xl font-bold text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                1,248
              </motion.span>
            </div>
          </motion.div>

          {/* Success Rate Card with premium styling */}
          <motion.div
            className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            whileHover={{
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              borderColor: "rgba(16, 185, 129, 0.2)",
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="text-emerald-500">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
                    <circle cx="12" cy="12" r="2" fill="currentColor" />
                  </svg>
                </motion.div>
              </div>
              <span className="text-gray-600 text-sm font-medium">Success Rate</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline">
                <motion.span
                  className="text-3xl font-bold text-gray-900"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  87%
                </motion.span>
                <span className="text-gray-400 ml-1">/100%</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full mt-2 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full"
                  initial={{ width: "0%" }}
                  animate={inView ? { width: "87%" } : { width: "0%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
            </div>
          </motion.div>

          {/* Average Time Card with premium styling */}
          <motion.div
            className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            whileHover={{
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              borderColor: "rgba(245, 158, 11, 0.2)",
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="text-amber-500">
                <Clock className="h-5 w-5" />
              </div>
              <span className="text-gray-600 text-sm font-medium">Avg. Time</span>
            </div>
            <div className="flex flex-col">
              <motion.span
                className="text-3xl font-bold text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                1:42
              </motion.span>
            </div>
          </motion.div>

          {/* Total Attempts Card with premium styling */}
          <motion.div
            className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            whileHover={{
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              borderColor: "rgba(168, 85, 247, 0.2)",
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="text-purple-500">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M17 10C17 13.866 14.866 17 11 17C7.13401 17 5 13.866 5 10C5 6.13401 7.13401 3 11 3C14.866 3 17 6.13401 17 10Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M14 14C14 16.2091 12.2091 18 10 18C7.79086 18 6 16.2091 6 14C6 11.7909 7.79086 10 10 10C12.2091 10 14 11.7909 14 14Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <span className="text-gray-600 text-sm font-medium">Total Attempts</span>
            </div>
            <div className="flex flex-col">
              <motion.span
                className="text-3xl font-bold text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                1,437
              </motion.span>
            </div>
          </motion.div>
        </motion.div>

        {/* Tabs Navigation with premium styling */}
        <motion.div
          className="flex border-b border-gray-200 mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="text-indigo-600 font-medium border-b-2 border-indigo-600 px-4 py-2 text-sm">Overall</div>
          <div className="text-gray-500 px-4 py-2 text-sm hover:text-gray-700 transition-colors cursor-pointer">
            Skills
          </div>
          <div className="text-gray-500 px-4 py-2 text-sm hover:text-gray-700 transition-colors cursor-pointer">
            Difficulty
          </div>
          <div className="text-gray-500 px-4 py-2 text-sm hover:text-gray-700 transition-colors cursor-pointer">
            Time
          </div>
          <div className="hidden md:block text-gray-500 px-4 py-2 text-sm hover:text-gray-700 transition-colors cursor-pointer">
            Categories
          </div>
        </motion.div>

        {/* Content Section - Progress Chart with premium styling */}
        <motion.div
          className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 hover:shadow-md transition-all duration-300"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            borderColor: "rgba(99, 102, 241, 0.2)",
          }}
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">Progress Over Time</h3>

          {/* Premium chart visualization */}
          <div className="h-32 flex items-end justify-between gap-1 relative">
            {/* Chart grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-full h-px bg-gray-100" />
              ))}
            </div>

            {/* Chart bars with premium animation */}
            {[35, 42, 58, 49, 62, 75, 68, 80, 95].map((height, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-t from-indigo-500 to-indigo-400 rounded-t-sm w-full relative group"
                initial={{ height: 0 }}
                animate={inView ? { height: `${height}%` } : { height: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.05 }}
                whileHover={{ filter: "brightness(1.1)" }}
              >
                {/* Tooltip on hover */}
                <motion.div
                  className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                >
                  {height}%
                </motion.div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>Week 1</span>
            <span>Week 3</span>
            <span>Week 5</span>
            <span>Week 7</span>
            <span>Week 9</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

// Leaderboard Visualization with premium styling
function LeaderboardVisualization({
  color,
  mousePosition,
}: { color: string; mousePosition: { x: number; y: number } }) {
  const containerRef = useRef(null)
  const inView = useInView(containerRef, { once: true, amount: 0.5 })

  // Ensure mousePosition has default values
  const safeMouseX = mousePosition?.x || 0
  const safeMouseY = mousePosition?.y || 0

  // Top performers data
  const topPerformers = [
    { id: 2, name: "Anas", score: 482, position: "1st", color: "bg-yellow-400" },
    { id: 1, name: "Sanjida", score: 317, position: "2nd", color: "bg-gray-300" },
    { id: 3, name: "Halimatus", score: 302, position: "3rd", color: "bg-amber-600" },
  ]

  return (
    <div ref={containerRef} className="relative w-full h-full flex items-center justify-center">
      {/* Glass morphism background effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className={`absolute w-64 h-64 rounded-full bg-${color}-200/30 blur-3xl`}
          animate={{
            x: safeMouseX * 10,
            y: safeMouseY * 10,
          }}
          transition={{ type: "spring", damping: 15 }}
        />
      </div>

      <motion.div
        className="w-full max-w-md bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl border border-gray-200/50 overflow-hidden p-6"
        initial={{ opacity: 0, scale: 0.9, rotateX: 10, rotateY: -10 }}
        animate={
          inView
            ? {
                opacity: 1,
                scale: 1,
                rotateX: 0,
                rotateY: 0,
                transition: {
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                },
              }
            : { opacity: 0, scale: 0.9, rotateX: 10, rotateY: -10 }
        }
        style={{
          transformStyle: "preserve-3d",
          transform: "perspective(1000px)",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1), 0 -10px 50px -12px rgba(0, 0, 0, 0.05)",
        }}
      >
        {/* Header with premium styling */}
        <div className="flex items-start mb-8">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 flex items-center justify-center mr-4 shadow-lg">
            <Trophy className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Top Performers</h3>
            <p className="text-gray-500">The best students on the leaderboard</p>
          </div>
        </div>

        {/* Top 3 performers with premium styling */}
        <div className="flex justify-center items-end mb-10 relative">
          {topPerformers.map((performer) => {
            // Determine the order and styling based on position
            const order =
              performer.position === "1st" ? "order-2" : performer.position === "2nd" ? "order-1" : "order-3"
            const size = performer.position === "1st" ? "w-24 h-24" : "w-20 h-20"

            return (
              <motion.div
                key={performer.id}
                className={`${order} mx-2 flex flex-col items-center`}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{
                  duration: 0.5,
                  delay: performer.position === "1st" ? 0.2 : performer.position === "2nd" ? 0.3 : 0.4,
                }}
              >
                <div
                  className={`${size} rounded-full ${performer.color} mb-2 flex items-center justify-center relative shadow-lg border-2 border-white`}
                >
                  <Trophy className="h-8 w-8 text-white" />

                  {/* Premium particle effects */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    animate={{
                      opacity: [0.3, 0.7, 0.3],
                      scale: [0.9, 1.1, 0.9],
                    }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  >
                    {performer.position === "1st" && (
                      <div className="absolute inset-0 rounded-full border-4 border-yellow-300 opacity-50"></div>
                    )}
                  </motion.div>
                </div>
                <div className="bg-white rounded-lg shadow-md px-4 py-2 text-center">
                  <p className="font-bold text-gray-900">{performer.name}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Podium visualization with premium styling */}
        <div className="flex items-end justify-center h-32 mb-20 relative">
          {topPerformers.map((performer) => {
            // Determine height and styling based on position
            const height = performer.position === "1st" ? "h-32" : performer.position === "2nd" ? "h-24" : "h-20"
            const width = performer.position === "1/3" ? "w-1/3" : "w-1/3"
            const order =
              performer.position === "1st" ? "order-2" : performer.position === "2nd" ? "order-1" : "order-3"

            return (
              <motion.div
                key={performer.id}
                className={`${width} ${height} ${performer.color} ${order} rounded-t-lg flex flex-col items-center justify-center relative shadow-lg`}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{
                  duration: 0.5,
                  delay: performer.position === "1st" ? 0.5 : performer.position === "2nd" ? 0.6 : 0.7,
                }}
                whileHover={{
                  filter: "brightness(1.1)",
                  y: -5,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="text-4xl font-bold text-white mb-1 drop-shadow-md">{performer.score}</div>
                <div className="text-xl font-bold text-white drop-shadow-md">{performer.position}</div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom rounded shape with premium styling */}
        <div className="h-12 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full -mx-6 -mb-2 shadow-inner"></div>
      </motion.div>
    </div>
  )
}

// AI Tools Visualization with premium styling
function AIToolsVisualization({ color, mousePosition }: { color: string; mousePosition: { x: number; y: number } }) {
  const containerRef = useRef(null)
  const inView = useInView(containerRef, { once: true, amount: 0.5 })

  // Simplify state management - remove unused states
  const [isThinking, setIsThinking] = useState(true)

  // Ensure mousePosition has default values
  const safeMouseX = mousePosition?.x || 0
  const safeMouseY = mousePosition?.y || 0

  // Toggle thinking state when component comes into view
  useEffect(() => {
    if (inView) {
      // Set a timeout to simulate AI thinking and then showing results
      const timer = setTimeout(() => {
        setIsThinking(false)
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [inView])

  return (
    <div ref={containerRef} className="relative w-full h-full flex items-center justify-center">
      {/* Glass morphism background effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className={`absolute w-40 sm:w-64 h-40 sm:h-64 rounded-full bg-${color}-200/30 blur-3xl`}
          animate={{
            x: safeMouseX * 10,
            y: safeMouseY * 10,
          }}
          transition={{ type: "spring", damping: 15 }}
        />
      </div>

      <motion.div
        className="w-full max-w-md bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl border border-gray-200/50 overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={
          inView
            ? {
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                },
              }
            : { opacity: 0, scale: 0.9 }
        }
        style={{
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1), 0 -10px 50px -12px rgba(0, 0, 0, 0.05)",
        }}
      >
        {/* AI MAMA Header with premium styling */}
        <motion.div
          className="p-3 sm:p-6 border-b border-gray-200 flex justify-between items-center bg-gradient-to-r from-gray-50 to-white"
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <div
              className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-${color}-500 flex items-center justify-center text-white shadow-md`}
            >
              <Bot className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <h3 className="text-lg sm:text-2xl font-bold text-gray-900">AI MAMA</h3>
          </div>
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer">
            <X className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
          </div>
        </motion.div>

        {/* AI MAMA Content with premium styling */}
        <motion.div
          className="p-3 sm:p-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {isThinking ? (
            <div className="flex flex-col items-center justify-center h-32 sm:h-40">
              <motion.div
                className={`w-10 h-10 sm:w-16 sm:h-16 border-4 border-${color}-500 border-t-transparent rounded-full mb-4`}
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
              <p className="text-base sm:text-xl text-gray-700 font-medium">Thinking...</p>
            </div>
          ) : (
            <div className="text-gray-800 text-sm sm:text-base md:text-lg">
              {/* Premium formula display */}
              <motion.div
                className="p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200 my-3 sm:my-4 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-xl sm:text-2xl font-serif">a² + b² = c²</span>
              </motion.div>

              {/* AI response */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <p className="mb-3 sm:mb-4">
                  The Pythagorean theorem states that in a right-angled triangle, the square of the length of the
                  hypotenuse equals the sum of squares of the other two sides.
                </p>

                <p className="mb-3 sm:mb-4">For example, if a = 3 and b = 4, then:</p>

                <div className="p-2 sm:p-3 bg-blue-50 rounded-lg mb-3 sm:mb-4">
                  <p className="font-mono text-xs sm:text-sm">c² = 3² + 4²</p>
                  <p className="font-mono text-xs sm:text-sm">c² = 9 + 16</p>
                  <p className="font-mono text-xs sm:text-sm">c² = 25</p>
                  <p className="font-mono text-xs sm:text-sm">c = 5</p>
                </div>

                <p>Would you like me to explain how to apply this to your SAT problem?</p>
              </motion.div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  )
}

// Fix the Instructor Support Visualization component
function InstructorSupportVisualization({
  color,
  mousePosition,
}: { color: string; mousePosition: { x: number; y: number } }) {
  const containerRef = useRef(null)
  const inView = useInView(containerRef, { once: true, amount: 0.5 })

  // Ensure mousePosition has default values
  const safeMouseX = mousePosition?.x || 0
  const safeMouseY = mousePosition?.y || 0

  // Sample messages for the Discord chat
  const messages = [
    { user: "SAT Mentor", content: "Hi there! How can I help with your SAT prep today?", time: "Today at 2:14 PM" },
    { user: "Student", content: "I'm struggling with the quadratic formula questions", time: "Today at 2:15 PM" },
    {
      user: "SAT Mentor",
      content: "Let's break it down step by step. The formula is x = (-b ± √(b² - 4ac)) / 2a",
      time: "Today at 2:16 PM",
    },
  ]

  return (
    <div ref={containerRef} className="relative w-full h-full flex items-center justify-center">
      {/* Glass morphism background effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className={`absolute w-40 sm:w-64 h-40 sm:h-64 rounded-full bg-${color}-200/30 blur-3xl`}
          animate={{
            x: safeMouseX * 10,
            y: safeMouseY * 10,
          }}
          transition={{ type: "spring", damping: 15 }}
        />
      </div>

      <motion.div
        className="w-full max-w-md bg-[#36393f] rounded-xl shadow-2xl overflow-hidden border border-[#202225]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={
          inView
            ? {
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                },
              }
            : { opacity: 0, scale: 0.9 }
        }
        style={{
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 -10px 50px -12px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Discord Header with premium styling */}
        <motion.div
          className="p-3 sm:p-4 bg-gradient-to-r from-[#2f3136] to-[#36393f] text-white flex justify-between items-center border-b border-[#202225]"
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="font-bold flex items-center gap-2">
            <span className="text-gray-400 text-lg sm:text-xl">#</span>
            <span className="text-sm sm:text-base">free-problem-solving-adda</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#4f545c] flex items-center justify-center hover:bg-[#5d6269] transition-colors cursor-pointer">
              <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4 text-gray-300" />
            </div>
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#4f545c] flex items-center justify-center hover:bg-[#5d6269] transition-colors cursor-pointer">
              <Users className="h-3 w-3 sm:h-4 sm:w-4 text-gray-300" />
            </div>
          </div>
        </motion.div>

        <div className="flex h-[calc(100%-48px)] sm:h-[calc(100%-56px)]">
          {/* Discord Sidebar with premium styling - hidden on mobile */}
          <motion.div
            className="w-12 sm:w-16 bg-[#2f3136] flex-col items-center py-4 gap-4 hidden md:flex"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Server icon with premium animation */}
            <motion.div
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white font-bold text-lg hover:rounded-xl transition-all duration-200 cursor-pointer shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              S
            </motion.div>

            {/* Divider */}
            <div className="w-6 sm:w-8 h-0.5 bg-[#36393f] rounded-full"></div>

            {/* Other server icons with premium styling */}
            <motion.div
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#4f545c] flex items-center justify-center text-white font-bold hover:rounded-xl transition-all duration-200 cursor-pointer"
              whileHover={{ scale: 1.1 }}
            >
              <BookOpen className="h-4 w-4 sm:h-5 sm:w-5" />
            </motion.div>
          </motion.div>

          {/* Main Chat Area */}
          <div className="flex-1 flex flex-col">
            {/* Chat Messages with premium styling */}
            <motion.div
              className="flex-1 p-3 sm:p-4 overflow-y-auto"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {/* Date divider */}
              <div className="flex items-center justify-center my-2 sm:my-4">
                <div className="h-px bg-[#42464D] flex-grow"></div>
                <div className="px-2 text-xs text-[#72767d]">Today</div>
                <div className="h-px bg-[#42464D] flex-grow"></div>
              </div>

              {/* Messages */}
              <div className="space-y-3 sm:space-y-4">
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.2 }}
                    className="flex items-start group"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#5865f2] flex items-center justify-center text-white font-bold mr-2 sm:mr-3 flex-shrink-0">
                      {message.user.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center flex-wrap">
                        <span
                          className={`font-medium text-xs sm:text-sm ${message.user === "SAT Mentor" ? "text-[#5865f2]" : "text-white"}`}
                        >
                          {message.user}
                        </span>
                        <span className="text-[10px] sm:text-xs text-[#72767d] ml-1 sm:ml-2">{message.time}</span>
                      </div>
                      <p className="text-[#dcddde] text-xs sm:text-sm mt-1 break-words">{message.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Typing indicator */}
              <motion.div
                className="flex items-center mt-3 sm:mt-4 text-[#72767d] text-[10px] sm:text-xs"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#5865f2] flex items-center justify-center text-white font-bold mr-2 flex-shrink-0">
                  S
                </div>
                SAT Mentor is typing...
              </motion.div>
            </motion.div>

            {/* Input Area with premium styling */}
            <motion.div
              className="p-2 sm:p-4"
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="bg-[#40444b] rounded-lg p-2 flex items-center shadow-inner">
                <motion.div
                  className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#4f545c] flex items-center justify-center mr-2 cursor-pointer flex-shrink-0"
                  whileHover={{ backgroundColor: "#5d6269" }}
                >
                  <Plus className="h-3 w-3 sm:h-4 sm:w-4 text-gray-300" />
                </motion.div>
                <input
                  type="text"
                  placeholder="Message #free-problem-solving-adda"
                  className="bg-transparent border-none outline-none text-gray-300 text-xs sm:text-sm flex-1 min-w-0"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

