import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter, Hind_Siliguri } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import { ThemeProvider } from "@/components/theme-provider"

// Primary font for all titles
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

// Bengali font
const hindSiliguri = Hind_Siliguri({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-hind-siliguri",
  display: "swap",
})

// Variable font for interactive elements
const robotoFlex = localFont({
  src: "../public/fonts/RobotoFlex-VariableFont.ttf",
  variable: "--font-roboto-flex",
  display: "swap",
})

export const metadata: Metadata = {
  title: "DSAT School | Digital SAT Preparation",
  description:
    "Comprehensive Digital SAT preparation with practice tests, interactive quizzes, and personalized study plans",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${inter.variable} ${hindSiliguri.variable} ${robotoFlex.variable} font-sans bg-white text-gray-900 overflow-x-hidden`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'