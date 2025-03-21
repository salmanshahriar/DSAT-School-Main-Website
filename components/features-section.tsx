"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { BookOpen, BarChart2, Clock, Users, BookMarked, Award, ArrowRight } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function FeaturesSection() {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px 0px",
  })

  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px 0px",
  })

  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-indigo-500" />,
      title: "Comprehensive Curriculum",
      description:
        "Our curriculum covers all SAT sections with detailed lessons and strategies tailored to different learning styles.",
      image: "/placeholder.svg?height=200&width=300&text=Curriculum",
    },
    {
      icon: <BarChart2 className="h-8 w-8 text-indigo-500" />,
      title: "Performance Analytics",
      description:
        "Track your progress with detailed analytics and personalized insights that identify your strengths and areas for improvement.",
      image: "/placeholder.svg?height=200&width=300&text=Analytics",
    },
    {
      icon: <Clock className="h-8 w-8 text-indigo-500" />,
      title: "Timed Practice Tests",
      description:
        "Simulate the real test environment with full-length, timed practice exams that build your stamina and confidence.",
      image: "/placeholder.svg?height=200&width=300&text=Practice",
    },
    {
      icon: <Users className="h-8 w-8 text-indigo-500" />,
      title: "Expert Instructors",
      description:
        "Learn from experienced instructors who know the SAT inside and out, with advanced degrees from top universities.",
      image: "/placeholder.svg?height=200&width=300&text=Instructors",
    },
    {
      icon: <BookMarked className="h-8 w-8 text-indigo-500" />,
      title: "Study Materials",
      description:
        "Access a vast library of study materials, practice questions, and resources designed by education experts.",
      image: "/placeholder.svg?height=200&width=300&text=Materials",
    },
    {
      icon: <Award className="h-8 w-8 text-indigo-500" />,
      title: "Score Guarantee",
      description:
        "We guarantee a minimum score improvement or your money back, because we're confident in our proven methods.",
      image: "/placeholder.svg?height=200&width=300&text=Guarantee",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={titleRef}
          variants={titleVariants}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Why Choose Our SAT Prep Program?
          </h2>
          <div className="w-32 h-1 bg-indigo-500 mx-auto mb-8"></div>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive approach to SAT preparation ensures you have everything you need to succeed. We've helped
            thousands of students achieve their dream scores.
          </p>
        </motion.div>

        <motion.div
          ref={contentRef}
          variants={containerVariants}
          initial="hidden"
          animate={contentInView ? "visible" : "hidden"}
          className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-xl transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="mb-6">
                <div className="relative w-full h-48 rounded-lg overflow-hidden mb-6">
                  <Image src={feature.image || "/placeholder.svg"} alt={feature.title} fill className="object-cover" />
                </div>
                <div className="p-4 bg-indigo-50 rounded-full inline-block mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <a
                  href="#"
                  className="text-indigo-500 font-medium flex items-center hover:text-indigo-600 transition-colors"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="text-center mt-16">
          <Button className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium text-base px-8 py-6 h-auto">
            Explore Our Programs
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

