import PracticeTest from "@/components/features/practice-test"

export default function PracticeTestsPage() {
  return (
    <div className="pt-40 pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">SAT Practice Tests</h1>
            <div className="w-24 h-1 bg-indigo-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Test your knowledge and track your progress with our comprehensive practice tests designed to simulate the
              real SAT experience.
            </p>
          </div>

          <PracticeTest />
        </div>
      </div>
    </div>
  )
}

