"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Clock, Globe, TrendingUp, Laptop, Zap, BarChart2, GraduationCap, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function DigitalSATBenefits() {
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

  const featuredBenefits = [
    {
      icon: <Clock className="h-6 w-6 text-indigo-500" />,
      title: "Shorter Test Duration",
      description:
        "The Digital SAT is approximately 2 hours long, nearly an hour shorter than the paper version, reducing test fatigue.",
      image: "/placeholder.svg?height=300&width=500&text=Shorter+Duration",
    },
    {
      icon: <Laptop className="h-6 w-6 text-indigo-500" />,
      title: "Familiar Digital Format",
      description:
        "For today's digital-native students, the online format feels more natural and comfortable than paper-based testing.",
      image: "/placeholder.svg?height=300&width=500&text=Digital+Format",
    },
    {
      icon: <Zap className="h-6 w-6 text-indigo-500" />,
      title: "Faster Results",
      description:
        "Receive your scores in days rather than weeks, giving you more time to make informed decisions about college applications.",
      image: "/placeholder.svg?height=300&width=500&text=Faster+Results",
    },
  ]

  const additionalBenefits = [
    {
      icon: <BarChart2 className="h-5 w-5 text-indigo-500" />,
      title: "Adaptive Testing",
      description: "The Digital SAT adapts to your performance level, providing a more personalized assessment.",
    },
    {
      icon: <Globe className="h-5 w-5 text-indigo-500" />,
      title: "Global Recognition",
      description:
        "The Digital SAT is accepted by universities across multiple continents including the USA, Europe, Asia, and Africa.",
    },
    {
      icon: <TrendingUp className="h-5 w-5 text-indigo-500" />,
      title: "Enhanced Score Reporting",
      description:
        "Receive more detailed feedback about your performance, helping you identify specific strengths and areas for improvement.",
    },
    {
      icon: <GraduationCap className="h-5 w-5 text-indigo-500" />,
      title: "College Readiness Assessment",
      description:
        "The Digital SAT evaluates the skills most essential for college success, providing valuable insights into your academic preparedness.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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
    <section className="py-20 bg-white relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full opacity-50 -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-50 rounded-full opacity-50 translate-y-1/3 -translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={titleRef}
          variants={titleVariants}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Why Take the Digital SAT?</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The Digital SAT offers numerous advantages over traditional paper-based testing, providing a modern approach
            to college admissions assessment.
          </p>
        </motion.div>

        <motion.div
          ref={contentRef}
          variants={containerVariants}
          initial="hidden"
          animate={contentInView ? "visible" : "hidden"}
          className="space-y-10"
        >
          {/* Featured benefits with images */}
          <div className="grid md:grid-cols-3 gap-6">
            {featuredBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl border border-gray-100 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-40 w-full">
                  <Image src={benefit.image || "/placeholder.svg"} alt={benefit.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-indigo-900/10"></div>
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <div className="p-2 bg-indigo-50 rounded-full mr-2">{benefit.icon}</div>
                    <h3 className="text-lg font-serif font-bold text-gray-900">{benefit.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional benefits in a grid */}
          <motion.div variants={itemVariants} className="bg-indigo-50 rounded-xl p-6">
            <h3 className="text-xl font-serif font-bold text-gray-900 mb-4 text-center">Additional Advantages</h3>
            <div className="grid md:grid-cols-4 gap-4">
              {additionalBenefits.map((benefit, index) => (
                <div key={index} className="flex gap-3 bg-white p-4 rounded-lg border border-gray-100 shadow-md">
                  <div className="p-2 bg-indigo-100 rounded-lg h-fit">{benefit.icon}</div>
                  <div>
                    <h4 className="text-base font-serif font-bold text-gray-900 mb-1">{benefit.title}</h4>
                    <p className="text-xs text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <Button className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium text-base px-6 py-2 h-auto group">
              Prepare for the Digital SAT
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

