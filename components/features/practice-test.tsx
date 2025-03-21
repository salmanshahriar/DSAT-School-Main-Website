"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ChevronLeft, Clock, CheckCircle, XCircle, AlertTriangle } from "lucide-react"

// Sample questions for demonstration
const sampleQuestions = [
  {
    id: 1,
    question: "The author's primary purpose in the passage is to",
    options: [
      "explain why a particular phenomenon occurs in nature",
      "challenge a widely accepted scientific theory",
      "describe the evolution of scientific understanding about a topic",
      "compare competing explanations for a natural process",
    ],
    correctAnswer: 2,
    explanation:
      "The author spends most of the passage tracing how scientific understanding of the topic has changed over time, focusing on key developments and shifts in perspective.",
  },
  {
    id: 2,
    question: "Based on the passage, the author would most likely agree with which of the following statements?",
    options: [
      "Scientific consensus is rarely achieved through empirical evidence",
      "The scientific method is fundamentally flawed",
      "Scientific understanding evolves as new evidence emerges",
      "Most scientific theories are eventually proven incorrect",
    ],
    correctAnswer: 2,
    explanation:
      "Throughout the passage, the author emphasizes how scientific understanding has changed in response to new evidence, suggesting this is a natural and positive aspect of scientific progress.",
  },
  {
    id: 3,
    question: "In the context of the passage, the word 'paradigm' most nearly means",
    options: ["example", "framework", "paradox", "anomaly"],
    correctAnswer: 1,
    explanation:
      "The word 'paradigm' is used to describe the overarching theoretical framework that guides scientific inquiry in a particular field.",
  },
  {
    id: 4,
    question: "Which choice provides the best evidence for the answer to the previous question?",
    options: [
      "Lines 12-15, 'The concept... understanding'",
      "Lines 23-25, 'Researchers have long...'",
      "Lines 31-34, 'This framework... scientific inquiry'",
      "Lines 45-48, 'Critics argue... insufficient'",
    ],
    correctAnswer: 2,
    explanation:
      "Lines 31-34 directly describe the 'framework' aspect of the paradigm, explaining how it guides scientific inquiry.",
  },
  {
    id: 5,
    question: "The author mentions the work of Dr. Johnson primarily to",
    options: [
      "provide an example of flawed research methodology",
      "introduce a competing theory to the main topic",
      "support the central claim of the passage",
      "demonstrate how scientific theories evolve over time",
    ],
    correctAnswer: 2,
    explanation:
      "Dr. Johnson's work is presented as evidence that supports the author's central argument about scientific understanding.",
  },
]

export default function PracticeTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(Array(sampleQuestions.length).fill(null))
  const [timeRemaining, setTimeRemaining] = useState(600) // 10 minutes in seconds
  const [testSubmitted, setTestSubmitted] = useState(false)
  const [score, setScore] = useState(0)
  const [showWarning, setShowWarning] = useState(false)

  useEffect(() => {
    if (timeRemaining > 0 && !testSubmitted) {
      const timer = setTimeout(() => {
        setTimeRemaining(timeRemaining - 1)
        if (timeRemaining <= 60 && !showWarning) {
          setShowWarning(true)
        }
      }, 1000)
      return () => clearTimeout(timer)
    } else if (timeRemaining === 0 && !testSubmitted) {
      handleSubmit()
    }
  }, [timeRemaining, testSubmitted, showWarning])

  const handleAnswerSelect = (answerIndex: number) => {
    const newSelectedAnswers = [...selectedAnswers]
    newSelectedAnswers[currentQuestion] = answerIndex
    setSelectedAnswers(newSelectedAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < sampleQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmit = () => {
    let correctAnswers = 0
    selectedAnswers.forEach((selected, index) => {
      if (selected === sampleQuestions[index].correctAnswer) {
        correctAnswers++
      }
    })
    setScore(correctAnswers)
    setTestSubmitted(true)
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`
  }

  const progressPercentage = ((currentQuestion + 1) / sampleQuestions.length) * 100

  return (
    <div className="max-w-3xl mx-auto">
      {!testSubmitted ? (
        <>
          <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">Reading Comprehension Practice</h2>
              <p className="text-gray-600">Answer all questions based on the passage provided.</p>
            </div>
            <div
              className={`mt-4 md:mt-0 flex items-center ${
                timeRemaining <= 60 ? "bg-red-50 text-red-600" : "bg-orange-50 text-orange-700"
              } px-4 py-2 rounded-full text-sm font-medium`}
            >
              <Clock className="h-5 w-5 mr-2" />
              <span>{formatTime(timeRemaining)}</span>
            </div>
          </div>

          {showWarning && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-50 border border-red-100 rounded-lg p-4 mb-6 flex items-start"
            >
              <AlertTriangle className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
              <div>
                <p className="font-medium text-red-600">Time is running out!</p>
                <p className="text-sm text-red-500">You have less than a minute remaining to complete this test.</p>
              </div>
            </motion.div>
          )}

          <div className="mb-10">
            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span className="font-medium">
                Question {currentQuestion + 1} of {sampleQuestions.length}
              </span>
              <span>{Math.round(progressPercentage)}% Complete</span>
            </div>
            <Progress value={progressPercentage} className="h-2 bg-gray-100" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Card className="mb-10 border border-gray-100 shadow-xl">
                <CardContent className="p-8 md:p-10">
                  <h3 className="text-xl font-serif font-medium text-gray-900 mb-8">
                    {sampleQuestions[currentQuestion].question}
                  </h3>

                  <RadioGroup
                    value={selectedAnswers[currentQuestion]?.toString() || ""}
                    onValueChange={(value) => handleAnswerSelect(Number.parseInt(value))}
                    className="space-y-4"
                  >
                    {sampleQuestions[currentQuestion].options.map((option, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
                      >
                        <RadioGroupItem value={index.toString()} id={`option-${index}`} className="mt-1" />
                        <Label htmlFor={`option-${index}`} className="font-medium cursor-pointer">
                          {option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </CardContent>
              </Card>

              <div className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  className="flex items-center font-medium text-base px-6 py-5 h-auto"
                >
                  <ChevronLeft className="h-5 w-5 mr-2" /> Previous
                </Button>

                {currentQuestion === sampleQuestions.length - 1 ? (
                  <Button
                    onClick={handleSubmit}
                    className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium text-base px-8 py-5 h-auto"
                  >
                    Submit Test
                  </Button>
                ) : (
                  <Button
                    onClick={handleNext}
                    className="flex items-center bg-indigo-500 hover:bg-indigo-600 text-white font-medium text-base px-6 py-5 h-auto"
                  >
                    Next <ChevronRight className="h-5 w-5 ml-2" />
                  </Button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Card className="border border-gray-100 shadow-2xl mb-10">
            <CardContent className="p-10">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Test Results</h2>
                <div className="w-20 h-1 bg-indigo-500 mx-auto mb-6"></div>
                <div className="text-5xl font-serif font-bold mb-4 text-indigo-500">
                  {score} / {sampleQuestions.length}
                </div>
                <p className="text-xl text-gray-600">
                  You answered {score} out of {sampleQuestions.length} questions correctly.
                </p>

                <div className="mt-6 inline-block bg-gray-50 px-6 py-3 rounded-lg">
                  <div className="flex items-center justify-center">
                    <div className="flex items-center mr-6">
                      <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-sm text-gray-600">Correct</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                      <span className="text-sm text-gray-600">Incorrect</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                {sampleQuestions.map((question, index) => (
                  <div key={index} className="border-b border-gray-100 pb-8 last:border-b-0 last:pb-0">
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">
                        {selectedAnswers[index] === question.correctAnswer ? (
                          <div className="bg-green-100 p-1 rounded-full">
                            <CheckCircle className="h-6 w-6 text-green-500" />
                          </div>
                        ) : (
                          <div className="bg-red-100 p-1 rounded-full">
                            <XCircle className="h-6 w-6 text-red-500" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-serif font-medium text-xl mb-4">
                          Question {index + 1}: {question.question}
                        </h3>
                        <div className="grid gap-3 mb-6">
                          {question.options.map((option, optIndex) => (
                            <div
                              key={optIndex}
                              className={`p-4 rounded-lg ${
                                optIndex === question.correctAnswer
                                  ? "bg-green-50 border border-green-100"
                                  : optIndex === selectedAnswers[index] && optIndex !== question.correctAnswer
                                    ? "bg-red-50 border border-red-100"
                                    : "bg-gray-50"
                              }`}
                            >
                              {option}
                              {optIndex === question.correctAnswer && (
                                <span className="ml-2 text-green-600 text-sm font-medium">Correct Answer</span>
                              )}
                            </div>
                          ))}
                        </div>

                        <div className="bg-indigo-50 p-4 rounded-lg">
                          <p className="text-sm font-medium text-indigo-900 mb-1">Explanation:</p>
                          <p className="text-sm text-indigo-700">{question.explanation}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 text-center">
                <Button
                  onClick={() => {
                    setCurrentQuestion(0)
                    setSelectedAnswers(Array(sampleQuestions.length).fill(null))
                    setTimeRemaining(600)
                    setTestSubmitted(false)
                    setShowWarning(false)
                  }}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium text-base px-8 py-5 h-auto"
                >
                  Try Again
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  )
}

