"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"
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
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQHQdF1_zrBvwA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1699385217826?e=1748476800&v=beta&t=t664DbdjoN2-nJ7pIplWH-Y0DYpRy1yTvsGz3ZDsis0",
      quote:
        "Overcome your fears about the SAT exam and embrace the exciting opportunities waiting for you. The future is bright for SAT Prep Academy students! Now is the moment to showcase your talent and potential.",
      linkedin: "https://www.linkedin.com/in/jonathan-h-60592427/",
    },
  ]

  // Remove the useEffect for auto-rotating testimonials since we only have one
  // Remove or comment out this useEffect block:
  /*
  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
      }, 8000)
      return () => clearInterval(interval)
    }
  }, [inView, testimonials.length])
  */

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
    <section ref={ref} className="py-24 xs:py-28 sm:py-32 bg-gray-50 relative">
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
          className="text-center mb-16 xs:mb-20 sm:mb-24"
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
                  <div className="md:col-span-2 bg-indigo-50 p-8 md:p-12 flex items-center justify-center">
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

                      <a
                        href={testimonials[currentTestimonial].linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-indigo-500 hover:underline inline-flex items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4 mr-1"
                        >
                          <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                        </svg>
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>

                  <div className="md:col-span-3 p-8 md:p-12 flex items-center">
                    <div>
                      <Quote className="h-12 w-12 text-indigo-200 mb-8" />
                      <p className="text-gray-700 italic mb-10 text-xl leading-relaxed">
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

