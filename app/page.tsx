import HeroSection from "@/components/sections/hero-section"
import FeaturesSection from "@/components/sections/features-section"
import CoursesSection from "@/components/sections/courses-section" // Changed this line
import TestimonialsSection from "@/components/sections/testimonials-section"
import CollegePaySection from "@/components/sections/college-pay-section"
import CTASection from "@/components/sections/cta-section"
import StatsSection from "@/components/sections/stats-section"
import DigitalSATBenefits from "@/components/sections/digital-sat-benefits"

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <DigitalSATBenefits />
      <CoursesSection />
      <CollegePaySection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}

