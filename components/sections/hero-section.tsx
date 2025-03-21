"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  PremiumAnimation,
  StaggerContainer,
  GlowingCard,
  FloatingElement,
} from "@/components/common/animations/premium-animations"
import SimpleSpringTitle from "@/components/common/interactive/simple-spring-title"
import OrbitImageCarousel from "@/components/common/interactive/orbit-image-carousel"

export default function HeroSection() {
  // Parallax effect for background elements
  const { scrollY } = useScroll()
  const contentY = useTransform(scrollY, [0, 500], [0, -50])

  return (
    <div className="bg-gradient-to-br from-primary via-primary to-primary/90 pt-36 pb-32 relative overflow-hidden">
      {/* Premium background pattern */}
      <div className="absolute inset-0 bg-grid-pattern-light opacity-30"></div>

      {/* Enhanced animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <FloatingElement
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-white/30 to-white/10 opacity-20 blur-sm"
            style={{
              width: `${10 + (i % 5) * 5}px`,
              height: `${10 + (i % 5) * 5}px`,
              left: `${(i * 5) % 100}%`,
              top: `${(i * 7) % 100}%`,
            }}
            amplitude={5 + (i % 10)}
            duration={4 + (i % 4)}
          />
        ))}
      </div>

      <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" style={{ y: contentY }}>
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center">
            <PremiumAnimation type="reveal" delay={0.1} className="overflow-hidden">
              <div className="inline-block px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full text-white font-medium text-sm mb-8 border border-white/20 shadow-lg">
                <span className="mr-2 inline-block w-2 h-2 bg-white rounded-full animate-pulse"></span>
                <span className="tracking-wide">Digital SAT Preparation</span>
              </div>
            </PremiumAnimation>

            <div className="overflow-hidden mb-8">
              <SimpleSpringTitle
                text="DSAT School"
                as="h1"
                className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-white leading-tight drop-shadow-md"
              />
              <motion.div
                className="h-1 w-32 bg-white/50 rounded-full mt-6"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "8rem", opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              />
            </div>

            <PremiumAnimation type="fade" delay={0.5} className="mb-12">
              <p className="text-xl text-white/95 leading-relaxed font-bengali">
                আমরা চাই বাংলাদেশের সকল মেধাবী শিক্ষার্থীদের কাছে DSAT সহজলভ্য হোক। শহরের এলিট কলেজের ছেলে/মেয়েটি যেমন DSAT এর সকল
                রিসোর্স হাতের নাগালে পেয়ে US তে ১০০% স্কলারশিপ নিয়ে ব্যাচেলর পড়ার সুযোগ পাচ্ছে, তেমনি বাংলাদেশের প্রত্যন্ত অঞ্চলে বেড়ে উঠা
                Underprivileged শিক্ষার্থীরাও যেন ঘরে বসে তার কনভেনিয়েন্ট মেথডে DSAT প্রিপারেশন নিয়ে US তে স্কলারশিপ পাওয়ার যোগ্য
                হিসেবে নিজেকে গড়ে তুলতে পারে, এটাই আমাদের স্বপ্ন।
              </p>
            </PremiumAnimation>

            <StaggerContainer className="mt-5 flex flex-col sm:flex-row gap-6" delay={0.7} staggerChildren={0.1}>
              <PremiumAnimation type="slide" x={-20}>
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 font-medium text-base px-10 py-4 h-auto relative overflow-hidden group shadow-lg rounded-md tracking-wide"
                >
                  <span className="relative z-10">Start Free Trial</span>
                  <motion.div
                    className="absolute inset-0 bg-white/90 opacity-0"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%", opacity: 1 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />
                </Button>
              </PremiumAnimation>

              <PremiumAnimation type="slide" x={20}>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-white/50 text-white hover:bg-white hover:text-primary hover:border-white font-medium text-base px-10 py-4 h-auto group relative overflow-hidden shadow-lg transition-all duration-300 rounded-md tracking-wide"
                >
                  <span className="relative z-10">Explore Programs</span>
                  <ArrowRight className="ml-2 h-4 w-4 relative z-10 transition-transform group-hover:translate-x-1" />
                </Button>
              </PremiumAnimation>
            </StaggerContainer>
          </div>

          <PremiumAnimation
            type="scale"
            from={0.8}
            delay={0.5}
            duration={0.8}
            className="mt-20 lg:mt-0 lg:col-span-6 xl:col-span-7"
          >
            <GlowingCard
              className="relative h-[500px] md:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/20"
              glowColor="rgba(255, 255, 255, 0.4)"
            >
              {/* Enhanced background with gradient and pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/10 to-white/15"></div>

              {/* Decorative patterns */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern-light"></div>
              </div>

              {/* Enhanced animated circles */}
              <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-white/30 to-white/10 blur-xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-gradient-to-r from-white/30 to-white/10 blur-xl"></div>

              <motion.div
                className="absolute top-1/3 right-1/3 w-24 h-24 rounded-full bg-gradient-to-r from-white/30 to-white/10 blur-lg"
                animate={{
                  x: [0, 20, 0, -20, 0],
                  y: [0, -20, 0, 20, 0],
                }}
                transition={{
                  duration: 15,
                  ease: "easeInOut",
                  repeat: Number.POSITIVE_INFINITY,
                }}
              />

              {/* Orbit Image Carousel */}
              <OrbitImageCarousel
                centerImage="/images/hero-section-images/white-laptop.png"
                orbitImages={[
                  "/images/hero-section-images/pfp-1.png",
                  "/images/hero-section-images/pfp-2.png",
                  "/images/hero-section-images/pfp-3.png",
                  "/images/hero-section-images/pfp-4.png",
                  "/images/hero-section-images/pfp-5.png",
                  "/images/hero-section-images/pfp-6.png",
                ]}
                speed={20}
                autoRotate={true}
                orbitRadius={250}
                imageSize={120}
              />

              {/* Decorative elements */}
              <FloatingElement className="absolute top-6 right-6 z-30" amplitude={8} duration={5}>
                <Card className="bg-white/90 backdrop-blur-sm shadow-lg border border-white ">
                  <CardContent className="p-4">
                    <div className="flex items-center ">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                        US
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-bold text-gray-900 ">Study in USA</p>
                        <p className="text-xs text-gray-600">100% Scholarship</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FloatingElement>

              <FloatingElement className="absolute bottom-6 left-6 z-30" amplitude={10} duration={6}>
                <Card className="bg-white/90 backdrop-blur-sm shadow-lg max-w-xs border border-white ">
                  <CardContent className="p-4">
                    <div className="flex items-start">
                      <div className="mt-1">
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-bold text-gray-900">For all talented students</p>
                        <p className="text-xs text-gray-600 mt-1">Urban and rural areas of Bangladesh</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FloatingElement>

              {/* Enhanced animated gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0"
                initial={{ backgroundPosition: "-100% 0" }}
                animate={{ backgroundPosition: "200% 0" }}
                transition={{ duration: 15, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
              />
            </GlowingCard>
          </PremiumAnimation>
        </div>
      </motion.div>
    </div>
  )
}

