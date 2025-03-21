import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "DSAT School | Digital SAT Preparation",
  description:
    "Comprehensive Digital SAT preparation with practice tests, interactive quizzes, and personalized study plans",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans bg-white text-gray-900 overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}