"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { CreditCard, DollarSign, Globe, BookOpen } from "lucide-react"
import Image from "next/image"
import { PremiumAnimation, StaggerContainer } from "@/components/common/animations/premium-animations"

export default function CollegePaySection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px 0px",
  })

  const services = [
    { name: "SAT", icon: <BookOpen className="h-4 w-4 text-white" /> },
    { name: "DUOLINGO", icon: <Globe className="h-4 w-4 text-white" /> },
    { name: "INTERNATIONAL PAYMENT", icon: <DollarSign className="h-4 w-4 text-white" /> },
  ]

  return (
    <section ref={ref} className="py-32 relative overflow-hidden bg-[#1e4e4e]">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-grid-pattern-light"></div>

        {/* Decorative dots pattern - bottom left */}
        <div className="absolute bottom-10 left-10">
          {[...Array(6)].map((_, rowIndex) => (
            <div key={`row-${rowIndex}`} className="flex">
              {[...Array(6)].map((_, colIndex) => (
                <div key={`dot-${rowIndex}-${colIndex}`} className="w-2 h-2 m-1 bg-white rounded-full opacity-30"></div>
              ))}
            </div>
          ))}
        </div>

        {/* Decorative X pattern - top right */}
        <div className="absolute top-20 right-20">
          {[...Array(6)].map((_, rowIndex) => (
            <div key={`xrow-${rowIndex}`} className="flex">
              {[...Array(6)].map((_, colIndex) => (
                <div
                  key={`x-${rowIndex}-${colIndex}`}
                  className="w-4 h-4 m-1 flex items-center justify-center opacity-30"
                >
                  <span className="text-white text-xs">×</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* Yellow banner */}
            <PremiumAnimation type="slide" x={-20} viewport={true}>
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full py-3 px-6 inline-flex items-center mb-8 shadow-lg">
                <CreditCard className="h-6 w-6 text-gray-900 mr-3" />
                <span className="text-xl font-bold text-gray-900 tracking-wide">COLLEGE PAY</span>
              </div>
            </PremiumAnimation>

            {/* Services list */}
            <StaggerContainer className="flex flex-wrap gap-4 mb-10" staggerChildren={0.1} viewport={true}>
              {services.map((service, index) => (
                <PremiumAnimation key={index} type="fade" delay={0.2 + index * 0.1} viewport={true}>
                  <div className="flex items-center">
                    <div className="w-1 h-1 bg-white rounded-full mr-2"></div>
                    <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full py-1.5 px-3">
                      <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center mr-2">
                        {service.icon}
                      </div>
                      <span className="text-white text-sm font-medium">{service.name}</span>
                    </div>
                  </div>
                </PremiumAnimation>
              ))}
            </StaggerContainer>

            {/* Main content */}
            <PremiumAnimation type="fade" delay={0.3} className="mb-10" viewport={true}>
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">College Pay</h2>
              <p className="text-xl text-white/90 leading-relaxed mb-10">
                We offer services to students to pay their different application and registration fees in USD. Simplify
                your international payments for college applications, tests, and more.
              </p>
              <a href="https://wa.link/1cbhtw" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-primary hover:bg-white/90 font-medium text-base px-8 py-6 h-auto rounded-full shadow-lg group">
                  <span className="relative z-10">Pay with us</span>
                  <motion.div
                    className="absolute inset-0 bg-white/90 opacity-0 rounded-full"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%", opacity: 1 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />
                </Button>
              </a>
            </PremiumAnimation>
          </div>

          {/* Image side */}
          <PremiumAnimation type="slide" x={30} viewport={true} className="relative">
            <div className="relative h-[500px] w-full flex items-center justify-center">
              {/* Credit card image with floating animation */}
              <motion.div
                className="relative w-full max-w-lg mx-auto"
                animate={{ y: [0, -15, 0], rotate: [0, 2, 0, -2, 0] }}
                transition={{
                  y: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  rotate: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                }}
              >
                <Image
                  src="/images/credit-card.png"
                  alt="Credit card"
                  width={600}
                  height={400}
                  className="object-contain drop-shadow-2xl"
                />
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/30 blur-xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-yellow-400/20 blur-xl"></div>

              {/* Decorative card icons */}
              <motion.div
                className="absolute top-20 left-10 bg-white/10 backdrop-blur-sm p-4 rounded-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <CreditCard className="h-8 w-8 text-white" />
              </motion.div>

              <motion.div
                className="absolute bottom-20 left-20 bg-white/10 backdrop-blur-sm p-4 rounded-xl"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <DollarSign className="h-8 w-8 text-white" />
              </motion.div>

              <motion.div
                className="absolute top-1/2 left-0 bg-primary/20 backdrop-blur-sm p-3 rounded-xl"
                animate={{ x: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <Globe className="h-6 w-6 text-white" />
              </motion.div>
            </div>
          </PremiumAnimation>
        </div>
      </div>
    </section>
  )
}

