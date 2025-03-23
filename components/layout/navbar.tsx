"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { PremiumAnimation, StaggerContainer } from "@/components/common/animations/premium-animations"
import SimpleSpringTitle from "@/components/common/interactive/simple-spring-title"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Programs", href: "/programs" },
    { name: "Practice Site", href: "https://qb.dsatschool.com/" },
    { name: "Resources", href: "/resources" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <motion.header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-gray-100" : "bg-white py-5",
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <PremiumAnimation type="fade" delay={0.1}>
            <Link href="/" className="flex items-center group">
              <span className="text-xl font-serif font-bold text-primary tracking-tight relative">
                <SimpleSpringTitle text="DSAT School" as="span" className="tracking-wide" />
              </span>
            </Link>
          </PremiumAnimation>

          {/* Desktop Navigation */}
          <StaggerContainer className="hidden md:flex items-center space-x-10" staggerChildren={0.05}>
            {navLinks.map((link, index) => (
              <PremiumAnimation key={link.name} type="fade" delay={0.1 + index * 0.05}>
                <Link
                  href={link.href}
                  className="text-gray-700 hover:text-primary transition-colors text-sm font-medium tracking-wide relative group py-2"
                >
                  {link.name}
                  <motion.span
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/70 rounded-full"
                    initial={{ scaleX: 0, originX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </PremiumAnimation>
            ))}
          </StaggerContainer>

          <StaggerContainer className="hidden md:flex items-center space-x-5" staggerChildren={0.1}>
            <PremiumAnimation type="slide" x={20}>
              <Button
                variant="outline"
                className="border-primary/80  bg-white text-primary font-medium relative overflow-hidden group px-6 py-2 h-10 rounded-md"
              >
                <span className="relative z-10 ">Login</span>
                <motion.div
                  className="absolute inset-0 bg-primary/10 opacity-0"
                  initial={{ y: "100%" }}
                  whileHover={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </PremiumAnimation>

            <PremiumAnimation type="slide" x={20}>
              <Link  href="https://discord.gg/hBGFDBzA6g">
              <Button className="bg-primary text-white hover:bg-primary/90 font-medium relative overflow-hidden group shadow-md px-6 py-2 h-10 rounded-md">
              <span className="relative z-10 tracking-wide">Join Discord</span>
                    </Button>
                 
                <motion.div
                  className="absolute inset-0 bg-primary/90 opacity-0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%", opacity: 1 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
              </Link>
            </PremiumAnimation>
          </StaggerContainer>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-primary relative z-20"
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, height: "auto", backdropFilter: "blur(10px)" }}
            exit={{ opacity: 0, height: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-white border-t border-gray-100 backdrop-blur-md"
          >
            <StaggerContainer className="px-4 pt-4 pb-6 space-y-2" staggerChildren={0.05}>
              {navLinks.map((link) => (
                <PremiumAnimation key={link.name} type="slide" x={20}>
                  <Link
                    href={link.href}
                    className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md text-base font-medium transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </PremiumAnimation>
              ))}
              <div className="pt-4 flex flex-col space-y-3">
                <PremiumAnimation type="slide" x={20}>
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/5 w-full justify-start h-12 text-base"
                  >
                    Login
                  </Button>
                </PremiumAnimation>
                <PremiumAnimation type="slide" x={20}>
                  <Link href="https://discord.gg/hBGFDBzA6g">
                    <Button className="bg-primary text-white hover:bg-primary/90 w-full justify-start h-12 text-base">
                      Join Discord
                    </Button>
                  </Link>
                </PremiumAnimation>
              </div>
            </StaggerContainer>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

