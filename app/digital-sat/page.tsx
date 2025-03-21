import DigitalSATBenefits from "@/components/sections/digital-sat-benefits"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function DigitalSATPage() {
  return (
    <div className="pt-40 pb-32">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-indigo-50 rounded-full text-indigo-600 font-medium text-sm mb-6">
              The Next Generation of Testing
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight mb-6">
              Master the Digital SAT
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              The Digital SAT (Scholastic Assessment Test) is a standardized exam used for college/university admissions
              in several countries across different continents, including the USA, Europe, Asia, and Africa. It assesses
              a student's skills in reading, writing, and math, helping universities evaluate academic capability in an
              online format.
            </p>
            <Button className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium text-base px-8 py-6 h-auto">
              Start Preparing Today
            </Button>
          </div>
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/placeholder.svg?height=500&width=600&text=Digital+SAT+Preparation"
              alt="Digital SAT Preparation"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-indigo-900/20"></div>
          </div>
        </div>
      </div>

      {/* Key Differences Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Key Differences from the Paper SAT
          </h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The Digital SAT introduces several important changes that make it more accessible and relevant for today's
            students.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-xl">
            <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-indigo-500">1</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">Shorter Duration</h3>
            <p className="text-gray-600">
              The Digital SAT takes approximately 2 hours to complete, compared to the 3+ hours required for the paper
              version, reducing test fatigue.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-xl">
            <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-indigo-500">2</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">Adaptive Testing</h3>
            <p className="text-gray-600">
              The Digital SAT uses adaptive testing technology that adjusts question difficulty based on your
              performance, providing a more personalized assessment.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-xl">
            <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-indigo-500">3</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">Digital Tools</h3>
            <p className="text-gray-600">
              The Digital SAT provides built-in tools like a calculator for all math questions, highlighting for reading
              passages, and flagging for questions to review later.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <DigitalSATBenefits />

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-indigo-50 rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
            Ready to Excel on the Digital SAT?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Our specialized Digital SAT preparation programs are designed to help you navigate the new format with
            confidence and achieve your best possible score.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium text-base px-8 py-6 h-auto">
              Explore Digital SAT Programs
            </Button>
            <Button
              variant="outline"
              className="border-indigo-500 text-indigo-500 hover:bg-indigo-50 font-medium text-base px-8 py-6 h-auto group"
            >
              Take a Practice Test{" "}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

