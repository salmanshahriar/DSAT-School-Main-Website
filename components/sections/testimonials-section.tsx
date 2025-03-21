"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import Image from "next/image"

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px 0px",
  })

  const testimonials = [
    {
      name: "Jonathan Hira, PhD",
      role: "University of Tromso",
      image: "/placeholder.svg?height=100&width=100&text=JH",
      quote:
        "Overcome your fears about the SAT exam and embrace the exciting opportunities waiting for you. The future is bright for SAT Prep Academy students! Now is the moment to showcase your talent and potential.",
      rating: 5,
      improvement: "320 points",
      college: "Harvard University",
    },
    {
      name: "Sarah Johnson",
      role: "Harvard University",
      image: "/placeholder.svg?height=100&width=100&text=SJ",
      quote:
        "The SAT Prep Academy program transformed my approach to standardized testing. Their methodical curriculum and personalized coaching helped me achieve a score I never thought possible. The instructors were incredibly knowledgeable and supportive throughout my journey.",
      rating: 5,
      improvement: "280 points",
      college: "Stanford University",
    },
    {
      name: "Michael Chen",
      role: "Princeton University",
      image: "/placeholder.svg?height=100&width=100&text=MC",
      quote:
        "What sets SAT Prep Academy apart is their focus on understanding concepts rather than just memorizing answers. Their practice tests accurately simulated the real exam, which helped me feel confident and prepared on test day. I'm grateful for their guidance and support.",
      rating: 5,
      improvement: "310 points",
      college: "MIT",
    },
  ]

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
      }, 8000)
      return () => clearInterval(interval)
    }
  }, [inView, testimonials.length])

  const handlePrevious = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
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

  const testimonialVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section ref={ref} className="py-32 bg-gray-50 relative">
      {/* Decorative elements */}
      <div
        className="absolute top-0 left-0 w-full h-24 bg-white"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0)" }}
      ></div>
      <div
        className="absolute bottom-0 left-0 w-full h-24 bg-white"
        style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Words of Recommendation</h2>
          <div className="w-32 h-1 bg-indigo-500 mx-auto mb-8"></div>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear what our students and educators have to say about our program and the results they've achieved.
          </p>
        </motion.div>

        <motion.div
          variants={testimonialVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto relative"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Card className="border border-gray-100 shadow-2xl bg-white overflow-hidden">
                <div className="grid md:grid-cols-5">
                  <div className="md:col-span-2 bg-indigo-50 p-8 md:p-10 flex items-center justify-center">
                    <div className="text-center">
                      <div className="mx-auto relative mb-6">
                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto">
                          <Image
                            src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                            alt={testimonials[currentTestimonial].name}
                            width={128}
                            height={128}
                            className="object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-indigo-500 text-white rounded-full p-2 shadow-md">
                          <Quote className="h-5 w-5" />
                        </div>
                      </div>
                      <h3 className="font-serif font-bold text-2xl text-gray-900 mb-2">
                        {testimonials[currentTestimonial].name}
                      </h3>
                      <p className="text-indigo-500 font-medium mb-4">{testimonials[currentTestimonial].role}</p>

                      <div className="flex justify-center mb-4">
                        {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>

                      <div className="space-y-2 text-left bg-white rounded-lg p-4 shadow-md">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Score Improvement:</span>
                          <span className="text-sm font-bold text-indigo-500">
                            {testimonials[currentTestimonial].improvement}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">College Admission:</span>
                          <span className="text-sm font-bold text-indigo-500">
                            {testimonials[currentTestimonial].college}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-3 p-8 md:p-10 flex items-center">
                    <div>
                      <Quote className="h-12 w-12 text-indigo-200 mb-6" />
                      <p className="text-gray-700 italic mb-8 text-xl leading-relaxed">
                        "{testimonials[currentTestimonial].quote}"
                      </p>

                      <div className="flex justify-between items-center">
                        <div className="flex space-x-3">
                          {testimonials.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentTestimonial(index)}
                              className={`w-3 h-3 rounded-full transition-colors ${
                                index === currentTestimonial ? "bg-indigo-500" : "bg-indigo-200"
                              }`}
                              aria-label={`Go to testimonial ${index + 1}`}
                            />
                          ))}
                        </div>

                        <div className="flex space-x-2">
                          <button
                            onClick={handlePrevious}
                            className="bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
                            aria-label="Previous testimonial"
                          >
                            <ChevronLeft className="h-5 w-5 text-indigo-500" />
                          </button>
                          <button
                            onClick={handleNext}
                            className="bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
                            aria-label="Next testimonial"
                          >
                            <ChevronRight className="h-5 w-5 text-indigo-500" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

