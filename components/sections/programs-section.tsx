"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function ProgramsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px 0px",
  })

  const programs = [
    {
      title: "Self-Paced Program",
      price: "$199",
      description:
        "Study at your own pace with our comprehensive self-guided program, perfect for independent learners.",
      image: "/placeholder.svg?height=200&width=400&text=Self-Paced",
      features: [
        "60+ hours of recorded lessons with expert instructors",
        "Full access to practice question bank with 3,000+ questions",
        "Topic-wise quizzes and assessments with detailed explanations",
        "Performance analytics dashboard with progress tracking",
        "Study schedule generator customized to your test date",
        "Mobile app access for learning on the go",
      ],
      color: "indigo",
    },
    {
      title: "Premium Live Program",
      price: "$499",
      description: "Get the full experience with live classes and personalized support from our expert instructors.",
      image: "/placeholder.svg?height=200&width=400&text=Premium",
      features: [
        "24+ live interactive classes with real-time Q&A",
        "24+ recorded sessions for review and reinforcement",
        "Small batch size (max 15 students) for personalized attention",
        "1-on-1 support sessions with dedicated instructors",
        "Personalized study plan based on diagnostic assessment",
        "Weekly progress reports and performance analysis",
        "Priority support via chat, email, and video calls",
      ],
      color: "purple",
      popular: true,
    },
    {
      title: "Intensive Bootcamp",
      price: "$799",
      description:
        "Accelerated program for students with upcoming test dates, designed for maximum improvement in minimum time.",
      image: "/placeholder.svg?height=200&width=400&text=Intensive",
      features: [
        "2-week intensive preparation with daily schedules",
        "Daily live sessions (4 hours/day) with top instructors",
        "Comprehensive content review of all test sections",
        "Advanced test-taking strategies and time management",
        "Daily homework and personalized feedback",
        "Mock tests with detailed analysis and improvement plans",
        "Extended support until test day with emergency hotline",
      ],
      color: "rose",
    },
    {
      title: "1-on-1 Tutoring",
      price: "$999",
      description:
        "Personalized one-on-one tutoring tailored to your specific needs, learning style, and target score.",
      image: "/placeholder.svg?height=200&width=400&text=1-on-1+Tutoring",
      features: [
        "Customized curriculum designed specifically for you",
        "Flexible scheduling to fit your availability",
        "Dedicated expert tutor matched to your learning style",
        "Personalized homework and practice assignments",
        "Bi-weekly progress assessments and score predictions",
        "Direct access to your tutor via text, email, and phone",
        "College application guidance and essay review",
      ],
      color: "blue",
    },
  ]

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

  const getColorClasses = (color) => {
    switch (color) {
      case "purple":
        return {
          bg: "bg-purple-500",
          text: "text-purple-500",
          border: "border-purple-500",
          hover: "hover:bg-purple-600",
          light: "bg-purple-50",
        }
      case "rose":
        return {
          bg: "bg-rose-500",
          text: "text-rose-500",
          border: "border-rose-500",
          hover: "hover:bg-rose-600",
          light: "bg-rose-50",
        }
      case "blue":
        return {
          bg: "bg-blue-500",
          text: "text-blue-500",
          border: "border-blue-500",
          hover: "hover:bg-blue-600",
          light: "bg-blue-50",
        }
      default:
        return {
          bg: "bg-indigo-500",
          text: "text-indigo-500",
          border: "border-indigo-500",
          hover: "hover:bg-indigo-600",
          light: "bg-indigo-50",
        }
    }
  }

  return (
    <section className="py-32 bg-gray-50 relative">
      {/* Decorative elements */}
      <div
        className="absolute top-0 left-0 w-full h-24 bg-white"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0)" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={titleVariants}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Our SAT Preparation Programs</h2>
          <div className="w-32 h-1 bg-indigo-500 mx-auto mb-8"></div>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose the program that fits your learning style, schedule, and goals. All programs are designed to maximize
            your score improvement.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {programs.map((program, index) => {
            const colorClasses = getColorClasses(program.color)

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`bg-white rounded-xl border ${program.popular ? `border-${program.color}-200` : "border-gray-100"} shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 relative`}
              >
                {program.popular && (
                  <div
                    className={`absolute top-0 right-0 ${colorClasses.bg} text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10`}
                  >
                    Most Popular
                  </div>
                )}

                <div className="relative h-48 w-full">
                  <Image src={program.image || "/placeholder.svg"} alt={program.title} fill className="object-cover" />
                  <div className={`absolute inset-0 bg-${program.color}-900/10`}></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">{program.title}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className={`text-3xl font-serif font-bold ${colorClasses.text}`}>{program.price}</span>
                    <span className="text-gray-500 ml-1">/program</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-6">{program.description}</p>

                  <div className="space-y-3 mb-6">
                    {program.features.slice(0, 4).map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <div className={`mr-3 mt-0.5 ${colorClasses.light} p-1 rounded-full`}>
                          <Check className={`h-3 w-3 ${colorClasses.text}`} />
                        </div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                    {program.features.length > 4 && (
                      <p className="text-sm text-gray-500 italic">+{program.features.length - 4} more features</p>
                    )}
                  </div>

                  <Button className={`w-full ${colorClasses.bg} ${colorClasses.hover} text-white font-medium`}>
                    Enroll Now
                  </Button>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <div className="text-center mt-16">
          <Button variant="outline" className="border-indigo-500 text-indigo-500 hover:bg-indigo-50 font-medium group">
            Compare All Programs
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}

