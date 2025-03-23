"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import Image from "next/image"

interface CourseDetailModalProps {
  isOpen: boolean
  onClose: () => void
  course: {
    title: string
    image: string
    price: string
    originalPrice: string
    currency: string
    instructor: string
    instructorTitle: string
    details: string[]
    fullDescription?: string
  }
}

export function CourseDetailModal({ isOpen, onClose, course }: CourseDetailModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto bg-white">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle className="text-2xl font-serif font-bold text-gray-900">{course.title}</DialogTitle>
          <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8 rounded-full">
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>

        <div className="mt-4">
          {/* Course Image - Full size */}
          <div className="w-full mb-6">
            <Image
              src={course.image || "/placeholder.svg"}
              alt={course.title}
              width={1200}
              height={600}
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>

          {/* Price and Instructor */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold text-primary">{course.price}/-</span>
                <span className="text-sm text-gray-500 line-through ml-2">{course.originalPrice}/-</span>
                <span className="text-sm text-gray-600 ml-1">{course.currency}</span>
              </div>
            </div>

            
          </div>

        {/* Course Features */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Program Features</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {course.details.map((detail, i) => (
              <li key={i} className="flex items-start text-gray-700">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-2 mt-0.5 flex-shrink-0">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>

          {/* Course Description */}
          {course.fullDescription && (
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Course Description</h3>
              <div className="prose max-w-none text-gray-700 whitespace-pre-line">{course.fullDescription}</div>
            </div>
          )}

          {/* Action Button */}
          <div className="mt-6">
            <Button className="w-full bg-primary hover:bg-primary/90 text-white py-6 h-auto">Enroll Now</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

