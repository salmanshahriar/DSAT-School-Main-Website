"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function CTASection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px 0px",
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
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

  const benefits = [
    "Personalized study plans tailored to your needs",
    "Expert instructors with proven track records",
    "Comprehensive practice tests with detailed analytics",
    "Score improvement guarantee or your money back",
  ]

  return (
    <section className="py-32 bg-indigo-500 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-400 rounded-full opacity-30 -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400 rounded-full opacity-30 translate-y-1/3 -translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
              Ready to Achieve Your Dream SAT Score?
            </motion.h2>

            <motion.p variants={itemVariants} className="text-xl text-indigo-100 mb-8 leading-relaxed">
              Join thousands of students who have improved their scores and gained admission to top universities. Our
              proven methods and expert instructors are ready to help you succeed.
            </motion.p>

            <motion.div variants={itemVariants} className="mb-10">
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-3 mt-1 bg-indigo-400 p-1 rounded-full">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-indigo-100">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5">
              <Button
                size="lg"
                className="bg-white text-indigo-600 hover:bg-indigo-50 font-medium text-base px-8 py-6 h-auto"
              >
                Start Free Trial
              </Button>
              <Button
                size="lg"
               className="bg-white text-indigo-600 hover:bg-indigo-50 font-medium text-base px-8 py-6 h-auto"
              >
                Explore Programs <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={inView ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.95, x: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:block"
          >
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=500&width=600&text=Success+Stories"
                alt="Student success stories"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-indigo-900/20"></div>

              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-bold text-gray-900">Step 1</p>
                    <p className="text-xs text-gray-600">Sign up for a free trial</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-bold text-gray-900">Step 2</p>
                    <p className="text-xs text-gray-600">Take a diagnostic test</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-bold text-gray-900">Step 3</p>
                    <p className="text-xs text-gray-600">Get your personalized plan</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

