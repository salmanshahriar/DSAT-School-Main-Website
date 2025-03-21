"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Calendar, CheckCircle } from "lucide-react"
import Image from "next/image"
import { PremiumAnimation, StaggerContainer } from "@/components/common/animations/premium-animations"
import InteractiveTitle from "@/components/common/interactive/interactive-title-v2"
import { useState } from "react"
import { CourseDetailModal } from "@/components/ui/course-detail-modal"

// Add the course descriptions
const courseDescriptions = {
  mentorship: `আপনার SAT স্কোর 1000-এর নিচে? আপনি কি মনে করেন যে Math এবং English-এর মূল থিওরিটিক্যাল কনসেপ্টগুলোর উপর আরও গভীরভাবে কাজ করা দরকার? তাহলে DSAT Exclusive Mentorship Program আপনার জন্য পারফেক্ট সল্যুশন!
এই প্রোগ্রামটি SAT-এর Core Skill Building & Theoretical Understanding-এর উপর বিশেষভাবে ফোকাস করে। আমাদের লক্ষ্য হল এমন শিক্ষার্থীদের সাহায্য করা, যারা এখনো SAT-এর কনসেপ্ট নিয়ে কনফিডেন্ট নন এবং পরীক্ষায় ভালো স্কোর করার জন্য একটি স্ট্রাকচার্ড প্ল্যান খুঁজছেন।

Course Outline:
Course Duration : 4 months
 🔹 20টি Core Skill Building সেশন – SAT-এর প্রয়োজনীয় দক্ষতা তৈরির জন্য    বিশেষভাবে ডিজাইন করা
 🔹 20টি Theoretical Class – SAT-এর Math এবং English কনসেপ্ট ক্লিয়ার করার জন্য
 🔹 15+ ঘণ্টা Recorded Classes –  যেকোনো সময় ক্লাস দেখার সুযোগ ও  বারবার রিভিশনের সুবিধা।
 🔹 40টি অ্যাসাইনমেন্ট ও গেমিফায়েড কুইজ – শেখার প্রক্রিয়াকে আরও ইন্টারেক্টিভ ও মজার করার জন্য
 🔹 1-on-1 Mentor Support & Focused Group Study Sessions – Preparation এর যেকোনো সমস্যায় personalized support
🔹Assignment and gamified quizzes: 40

📚 Book List for Developing English Reading Habit : 
✔ The Hunger Games – Suzanne Collins
 ✔ Salvation of the Saint – Keigo Higashino
 ✔ Percy Jackson: The Lightning Thief – Rick Riordan
 ✔ The Atlantic & New York Times-এর আর্টিকেলস
 ✔ SAT Power Vocab – Vocabulary উন্নত করার জন্য
 ✔ Erica Meltzer's Reading & Grammar – SAT-এর জন্য সবচেয়ে কার্যকর রিসোর্স
 ✔ Art of Problem Solving: Introduction to Algebra – ম্যাথের কনসেপ্ট গভীরভাবে বুঝতে
 ✔ College Panda's SAT Math – SAT ম্যাথের জন্য অন্যতম সেরা রিসোর্স
 ✔ SAT Suite Question Bank & Khan Academy – পরীক্ষার জন্য নিয়মিত অনুশীলন
📌 গুরুত্বপূর্ণ: মেন্টরদের নির্দেশনা অনুযায়ী এই লিস্ট পরিবর্তিত হতে পারে, যাতে শিক্ষার্থীরা সর্বোচ্চ উপকার পায়।


🎯 এই কোর্স কাদের জন্য?
✅ SAT-এ প্রথম Practice Test-এ 1000-এর নিচে স্কোর করেছেন
 ✅ Core concepts (Math & English) ভালোভাবে শিখতে চান
 ✅ 1-on-1 মেন্টরশিপ ও গাইডেন্স প্রয়োজন
 ✅ Structured Study Plan খুঁজছেন
 ✅ যারা Personalized guidance খুঁজছেন 
আমাদের Exclusive Mentorship Program আপনাকে SAT-এর প্রতিটি অংশে দক্ষ করে তুলবে এবং 1400+ স্কোর অর্জনের পথে এগিয়ে নিয়ে যাবে!`,
  recorded: `আপনার SAT স্কোর 1000-এর নিচে? আপনি কি মনে করেন যে Math এবং English-এর মূল থিওরিটিক্যাল কনসেপ্টগুলোর উপর আরও গভীরভাবে কাজ করা দরকার? তাহলে DSAT Exclusive Mentorship Program আপনার জন্য পারফেক্ট সল্যুশন!
এই প্রোগ্রামটি SAT-এর Core Skill Building & Theoretical Understanding-এর উপর বিশেষভাবে ফোকাস করে। আমাদের লক্ষ্য হল এমন শিক্ষার্থীদের সাহায্য করা, যারা এখনো SAT-এর কনসেপ্ট নিয়ে কনফিডেন্ট নন এবং পরীক্ষায় ভালো স্কোর করার জন্য একটি স্ট্রাকচার্ড প্ল্যান খুঁজছেন।

Course Outline:
Course Duration : 4 months
 🔹 20টি Core Skill Building সেশন – SAT-এর প্রয়োজনীয় দক্ষতা তৈরির জন্য    বিশেষভাবে ডিজাইন করা
 🔹 20টি Theoretical Class – SAT-এর Math এবং English কনসেপ্ট ক্লিয়ার করার জন্য
 🔹 15+ ঘণ্টা Recorded Classes –  যেকোনো সময় ক্লাস দেখার সুযোগ ও  বারবার রিভিশনের সুবিধা।
 🔹 40টি অ্যাসাইনমেন্ট ও গেমিফায়েড কুইজ – শেখার প্রক্রিয়াকে আরও ইন্টারেক্টিভ ও মজার করার জন্য
 🔹 1-on-1 Mentor Support & Focused Group Study Sessions – Preparation এর যেকোনো সমস্যায় personalized support
🔹Assignment and gamified quizzes: 40

📚 Book List for Developing English Reading Habit : 
✔ The Hunger Games – Suzanne Collins
 ✔ Salvation of the Saint – Keigo Higashino
 ✔ Percy Jackson: The Lightning Thief – Rick Riordan
 ✔ The Atlantic & New York Times-এর আর্টিকেলস
 ✔ SAT Power Vocab – Vocabulary উন্নত করার জন্য
 ✔ Erica Meltzer's Reading & Grammar – SAT-এর জন্য সবচেয়ে কার্যকর রিসোর্স
 ✔ Art of Problem Solving: Introduction to Algebra – ম্যাথের কনসেপ্ট গভীরভাবে বুঝতে
 ✔ College Panda's SAT Math – SAT ম্যাথের জন্য অন্যতম সেরা রিসোর্স
 ✔ SAT Suite Question Bank & Khan Academy – পরীক্ষার জন্য নিয়মিত অনুশীলন
📌 গুরুত্বপূর্ণ: মেন্টরদের নির্দেশনা অনুযায়ী এই লিস্ট পরিবর্তিত হতে পারে, যাতে শিক্ষার্থীরা সর্বোচ্চ উপকার পায়।


🎯 এই কোর্স কাদের জন্য?
✅ SAT-এ প্রথম Practice Test-এ 1000-এর নিচে স্কোর করেছেন
 ✅ Core concepts (Math & English) ভালোভাবে শিখতে চান
 ✅ 1-on-1 মেন্টরশিপ ও গাইডেন্স প্রয়োজন
 ✅ Structured Study Plan খুঁজছেন
 ✅ যারা Personalized guidance খুঁজছেন 
আমাদের Exclusive Mentorship Program আপনাকে SAT-এর প্রতিটি অংশে দক্ষ করে তুলবে এবং 1400+ স্কোর অর্জনের পথে এগিয়ে নিয়ে যাবে!`,
  questionBank: `📚 Question Bank Solve with Prokrity: Digital SAT Edition
Course Overview:
আপনি যদি Digital SAT এর এমন একটি কোর্স খুঁজে থাকেন যেখানে Theory থেকে প্র্যাকটিসে বেশি ফোকাস করা হবে, তাহলে এই কোর্সটি আপনার জন্য। আমাদের গত ৯ মাসে প্রায় ৭০০+ স্টুডেন্টদের সাথে ডিল করার অভিজ্ঞতা থেকে আমরা লক্ষ্য করেছি অনেক স্টুডেন্ট পর্যাপ্ত Academic theoretical knowledge থাকা সত্ত্বেও, শুধুমাত্র Organized Practice Platform ( qb.dsatschool.com ভিজিট করুন) & Exam Oriented Guideline এর অভাবে ১৪০০+ স্কোর তুলতে পারে না। বিশেষকরে EBRW তে তারা বেশ মার্কস হারায়। EBRW তে যদি ৭০০ মার্কস তুলতে পারতো, অনেক বাংলাদেশী স্টুডেন্টের পক্ষে হয়তো ১৪০০+ স্কোর তোলা সম্ভব। SAT এ ১৪০০+ স্কোর তুলতে পারলে এবং সঠিকভাবে কলেজ নির্বাচন করতে পারলে হয়তো একটা Mid rank University থেকে প্রায় শতভাগ টিউশন ফিস ওয়েভার পাওয়াও সম্ভব।

বর্তমান Digital SAT এর সিলেবাসে, আপনার SAT স্কোর নির্ভর করছে আপনার হার্ডওয়ার্ক এর নিয়মিত Question Solve এর উপরে। আপনি হয়তো পর্যাপ্ত হার্ডওয়ার্ক করার জন্য রেডি আছেন। আপনার হয়তো শুধু দরকার একটা প্ল্যাটফর্ম যারা আপনার একাডেমিক সমস্যার কথা শুনে, একটা কাস্টোমাইজড সলিউশন দিবে। DSAT School এই একমাত্র প্রতিষ্ঠান, যারা প্রত্যেক স্টুডেন্টকে নিয়মিত আলাদাভাবে কাউন্সেলিং করে তাদের জন্য কাস্টোমাইজড গাইডলাইন দেয়। DSAT School  Artificial Intelligence ব্যবহার করে স্টুডেন্টদের পারফরম্যান্স ট্র্যাক রাখে (বিস্তারিত জানতে পেইজে মেসেজ করুন)।আপনি আপনার ভুলগুলো মনিটর করে একজন মেন্টরের কাছ থেকে যদি সমস্যাগুলো সমাধান করে নিতে পারেন, তাহলে হয়তো আপনিও আপনার কাংখিত স্কোর পেতে পারেন। তাই টাকা একটু বেশি খরচ হলেও, বেস্ট সর্ভিস পাওয়ার জন্য DSAT School এ যোগাযোগ করতে পারেন। SAT এর পেছনে আপনার এই ছোটো ইনভেস্টমেন্ট কোটি টাকার স্কলারশিপ হয়ে আপনার US College এ ব্যাচেলর করার স্বপ্ন বাস্তবায়ন করে দিতে পারে। 

 Master the Digital SAT with Question Bank Solve with Prokrity! This course is tailored to help you excel in the SAT Math and Evidence-Based Reading & Writing (EBRW) sections through focused, strategic practice. Guided by Prokrity's expertise, you'll tackle a variety of SAT-style questions to boost your confidence, accuracy, and speed.
What You'll Get:
 ✅ Satsuite questions covering Math and EBRW
 ✅ Topic-wise practice sets aligned with the SAT structure
 ✅ Real-time doubt-solving sessions and personalized feedback
 ✅ Timed mock tests to simulate the real SAT experience
 ✅ Progress tracking to analyze strengths and areas for improvement
Who Should Join:
 📌 Students preparing for the Digital SAT
 📌 Those seeking focused, high-intensity practice to boost scores
 📌 Learners stuck in between 1000 and 1400
Course Format:
Duration: 6-8 weeks
Mode: Online (Live + Recorded sessions)
Materials: DSAT School Online Practice Portal, Recorded Theory Classes
Assessments: Timed mock tests to track progress
Course Fee 
6500/- Taka 
Join Prokrity and take your SAT prep to the next level! Let's ace it together!`,
  flagship: `Description
দেশের অন্যতম সেরা Digital SAT Program-এ স্বাগতম!
তুমি যদি এই ডকুমেন্ট পর্যন্ত এসে থাকো, তার মানে তুমি SAT প্রস্তুতি শুরু করেছো বা খুব শিগগিরই শুরু করতে যাচ্ছো। প্রোগ্রামের বিস্তারিত জানার আগে কিছু গুরুত্বপূর্ণ বিষয়—
🔹 যদি SAT সম্পর্কে ধারণা কম থাকে, তাহলে প্রথমে আমাদের 'Digital SAT With Zidan' ইউটিউব চ্যানেলের 'A-Z About Digital SAT' প্লেলিস্টটি দেখে নাও। এতে SAT-এর ফরম্যাট ও প্রস্তুতির একটি পরিষ্কার ধারণা পাবে।
🔹 SAT কোনো শেষ মুহূর্তের পরীক্ষা নয়—এটি নির্দিষ্ট কৌশল ও ধারাবাহিক প্রস্তুতির প্রয়োজন করে। যদি তোমার Math ও English বেসিক দুর্বল হয়, তাহলে আমাদের নির্দেশনা মেনে নিয়মিত পরিশ্রম করতে হবে।
🔹 Bluebook Practice Test-এ ৮০০-১২০০ স্কোর পেলে চিন্তার কিছু নেই। এই প্রোগ্রামটি এমনভাবে ডিজাইন করা হয়েছে যাতে ১-অন-১ সাপোর্ট, ক্লাস ও স্ট্রাকচার্ড রিসোর্সের মাধ্যমে তোমার বেসিক মজবুত করা হয়।
🔹 ১০০০+ স্কোর থাকলে তুমি স্পেশাল গাইডলাইন, অতিরিক্ত ক্লাস ও অ্যাডভান্স স্ট্র্যাটেজি পাবে, যা তোমার স্কোর আরও বাড়াতে সাহায্য করবে।
🔹 এখনো Bluebook Practice Test দাওনি? তাহলে শুরু করার আগে এটি দিয়ে ফেলো। এতে SAT-এর প্রশ্নপত্রের ধরণ, সিলেবাস ও টাইম ম্যানেজমেন্ট সম্পর্কে পরিষ্কার ধারণা পাবে, আর আমরা তোমার জন্য একটি পার্সোনালাইজড স্টাডি প্ল্যান তৈরি করতে পারব।
এখনই প্রস্তুতি শুরু করো—SMART WORK + HARD WORK-এর মাধ্যমে তোমার কাঙ্ক্ষিত স্কোর নিশ্চিত করো! 🚀

অনেক প্রতিষ্ঠানের SAT কোর্স থাকার পরেও DSAT School এর SAT কোর্স কেন সবার ফেভারিট?
 
✅ শুধু ক্লাস নয়, রয়েছে আনলিমিটেড রিসোর্স
 SAT-তে ভালো স্কোরের জন্য শুধু লাইভ বা রেকর্ডেড ক্লাস যথেষ্ট নয়। DSAT School শিক্ষার্থীদের পুরো প্রস্তুতির যাত্রায় ব্যক্তিগত গাইডলাইন, রিসোর্স ও সাপোর্ট নিশ্চিত করে।
✅ শুধু ক্লাস করলেই স্কোর বাড়বে না – প্রয়োজন নিয়মিত অনুশীলন ও সাপোর্ট
 SAT-তে 900 থেকে 1400+ স্কোর পেতে প্রয়োজন প্রচুর প্র্যাকটিস। কঠিন প্রশ্ন সমাধানে আমরা 1-on-1 পার্সোনাল সাপোর্ট দিই, যা অন্য কোথাও নেই!
✅ সম্পূর্ণ ডিজিটাল ও ফ্লেক্সিবল ক্লাস সিস্টেম
 Google Meet-এ লাইভ ক্লাস, মিস করলে রেকর্ডেড ভিডিও টেলিগ্রাম ও ওয়েবসাইটে সংরক্ষিত। এছাড়া Discord Server থেকে প্রয়োজনীয় সকল রিসোর্স ও সহায়তা পাওয়া যায়।
✅ বাংলাদেশে প্রথমবারের মতো SAT-এর জন্য Office Hour সুবিধা
 আমরা প্রথম SAT টিউটরিং প্ল্যাটফর্ম যেখানে Discord-এর Office Hour ফিচার আছে। এখানে ইন্সট্রাক্টরদের সঙ্গে সরাসরি লাইভ সাপোর্ট নিয়ে যেকোনো সমস্যা সমাধান করতে পারবেন।
✅ SAT প্রস্তুতির জন্য নিজস্ব Practice Portal
 হাজারো SAT প্রশ্ন নিয়ে আমাদের এক্সক্লুসিভ প্র্যাকটিস পোর্টাল যেখানে টপিকওয়াইজ প্রোগ্রেস রিপোর্ট ও আনলিমিটেড কুইজ জেনারেট করে নিজেকে আরও দক্ষ করা যায়।
✅ Dedicated Problem-Solving Community
 আমাদের সকল প্রোগ্রামের স্টুডেন্টদের জন্য Discord এ থাকছে একটা Dedicated Problem Solving Community, যেখানে আপনার যেকোনো কুয়েশ্চান আপনি শেয়ার করতে পারবেন। একজন ইন্সট্রাক্টর/কোর্সমেট আপনার সেই প্রবলেমটি সলভ করে সুন্দর করে বুঝিয়ে দিবে।`,
}

// Add state for modal

export default function CoursesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px 0px",
  })

  // Add state for modal
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState<any>(null)

  // Function to open modal with course details
  const openCourseDetails = (course: any) => {
    setSelectedCourse(course)
    setIsModalOpen(true)
  }

  // Update the courses array to include fullDescription
  const courses = [
    {
      title: "DSAT SCHOOL MENTORSHIP PROGRAM",
      price: "14,990",
      originalPrice: "18,990",
      currency: "BDT",
      image: "/images/courses-images/mentorship-asif.png",
      details: [
        "Course Duration : 4 months",
        "20টি Core Skill Building সেশন",
        "20টি Theoretical Class",
        "15+ ঘণ্টা Recorded Classes",
        "40টি অ্যাসাইনমেন্ট ও গেমিফায়েড কুইজ",
        "1-on-1 Mentor Support & Focused Group Study Sessions",
        "Exclusive Online Practice Portal",
      ],
      instructor: "Asif Khan",
      instructorTitle: "Tutored 300+ Students | SAT 1470",
      fullDescription: courseDescriptions.mentorship,
    },
    {
      title: "DSAT Recorded Course",
      price: "4,000",
      originalPrice: "5,000",
      currency: "BDT",
      image: "/images/courses-images/recoded-zidan.png",
      details: [
        "80+ ঘন্টা রেকর্ডেড ক্লাস",
        "Topic-wise Theory & Solve Classes",
        "Unlimited Topic-wise Quizzes",
        "24/7 Problem Solving Support",
        " 1-on-1 & Group Sessions ",
        "Exclusive Online Practice Portal",
      ],
      instructor: "Zidan Islam",
      instructorTitle: " ",
      fullDescription: courseDescriptions.recorded,
    },
    {
      title: "Question Bank Solve with Prokrity!",
      price: "6,500",
      originalPrice: "12,500",
      currency: "BDT",
      image: "/images/courses-images/solve-prokrity.png",
      details: [
        "Satsuite questions covering Math and EBRW",
        "Topic-wise practice sets aligned with the SAT structure",
        "Real-time doubt-solving sessions and personalized feedback",
        "Timed mock tests to simulate the real SAT experience",
        "Tips & Tricks",
        "Progress tracking to analyze strengths and areas for improvement",
        "Support Chats",
        "Exclusive Online Practice Portal",
      ],
      instructor: "Lamia Islam Prokrity",
      instructorTitle: "SAT 1530 | IELTS - 8",
      fullDescription: courseDescriptions.questionBank,
    },
  ]

  // Update the flagship course to include fullDescription
  const featuredCourse = {
    title: "FLAGSHIP PREMIUM PROGRAM",
    price: "9,950",
    originalPrice: "12,500",
    currency: "BDT",
    image: "/images/courses-images/flagship-banner.png",
    details: [
      "Exam Strategy",
      "Demos Hacks",
      "24/7 Guidance",
      "Interactive Classes",
      "Tips & Tricks",
      "Question Approach",
      "Support Chats",
      "Premium Services",
    ],
    instructor: "Lamia Islam Prokrity",
    instructorTitle: "SAT 1530 | IELTS - 8",
    fullDescription: courseDescriptions.flagship,
  }


  const instructors = [
    {
      name: "Lamia Islam Prokrity",
      credentials: "SAT 1530 | IELTS - 8",
      details: "EBRW: 770, Math: 760",
      image: "/images/courses-images/flagship-prokrity.png",
    },
    {
      name: "Ayesha A Chowdhury",
      credentials: "Tutored 300+ Students | SAT 1530",
      details: "University of Adelaide, Australia",
      image: "/images/courses-images/flagship-ayesha.png",
    },
    {
      name: "Rajanya Tridha",
      credentials: "SAT 1510 | EBRW: 710, Math: 800",
      details: "Majoring in EEE from RUET",
      image: "/images/courses-images/flagship-tridha.png",
    },
  ]

  const featuredCourseDetails = [
    { icon: <CheckCircle className="h-3 w-3" />, text: "Exam Strategy" },
    { icon: <CheckCircle className="h-3 w-3" />, text: "Demo Hacks" },
    { icon: <CheckCircle className="h-3 w-3" />, text: "24/7 Guidance" },
    { icon: <CheckCircle className="h-3 w-3" />, text: "Interactive Classes" },
    { icon: <CheckCircle className="h-3 w-3" />, text: "Tips & Tricks" },
    { icon: <CheckCircle className="h-3 w-3" />, text: "Question Approach" },
    { icon: <CheckCircle className="h-3 w-3" />, text: "Support Chats" },
    { icon: <CheckCircle className="h-3 w-3" />, text: "Premium Services" },
  ]

  // Update the button click handlers in the JSX

  // For the flagship course "View Program Details" button
  // Find this section in the JSX:
  // <Button
  //   variant="outline"
  //   className="bg-white border-primary text-primary hover:bg-primary/5 flex-1 py-2 h-auto"
  // >
  //   View Program Details
  // </Button>

  // Replace it with:
  // <Button
  //   variant="outline"
  //   className="bg-white border-primary text-primary hover:bg-primary/5 flex-1 py-2 h-auto"
  //   onClick={() => openCourseDetails(featuredCourse)}
  // >
  //   View Program Details
  // </Button>

  // For the regular course "Details" button
  // Find this section in the JSX:
  // <Button variant="outline" className="bg-white border-primary text-primary hover:bg-primary/5 flex-1">
  //   Details
  // </Button>

  // Replace it with:
  // <Button
  //   variant="outline"
  //   className="bg-white border-primary text-primary hover:bg-primary/5 flex-1"
  //   onClick={() => openCourseDetails(course)}
  // >
  //   Details
  // </Button>

  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-grid-pattern opacity-30"></div>

        {/* Animated background shapes */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/5"
            style={{
              width: `${150 + (i % 3) * 100}px`,
              height: `${150 + (i % 3) * 100}px`,
              left: `${(i * 20) % 100}%`,
              top: `${(i * 15) % 100}%`,
              zIndex: 0,
            }}
            animate={{
              x: [0, 10, 0, -10, 0],
              y: [0, -10, 0, 10, 0],
              scale: [1, 1.02, 1, 0.98, 1],
            }}
            transition={{
              duration: 20 + i * 5,
              ease: "easeInOut",
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "mirror",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <PremiumAnimation type="slide" y={30} className="text-center mb-20" viewport={true}>
          <div className="inline-block px-5 py-2.5 bg-primary/10 rounded-full text-primary font-medium text-sm mb-8 shadow-sm">
            <span className="tracking-wide">Elevate Your SAT Preparation</span>
          </div>

          <InteractiveTitle
            text="Our Premium Programs"
            className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6"
            radius={120}
          />

          <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose the program that fits your learning style, schedule, and goals. All programs are designed to maximize
            your score improvement with expert instructors and proven methodologies.
          </p>
        </PremiumAnimation>

        {/* Featured Course Card - Full Width */}
        <PremiumAnimation type="scale" from={0.95} delay={0.2} viewport={true} className="mb-16">
          <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(66,99,235,0.2)] group">
            {/* Subtle glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-purple-500/30 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>

            <div className="relative">
              {/* Main Banner Image */}
              <div className="relative w-full">
                <Image
                  src="/images/Flagship-Course-Banner.png"
                  alt="Flagship Premium Program"
                  width={1200}
                  height={400}
                  className="w-full transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Course Title and Price */}
              <div className="p-6 bg-gradient-to-r from-primary/5 to-purple-500/5">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div>
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">FLAGSHIP PREMIUM PROGRAM</h2>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold text-primary">9,950/-</span>
                      <span className="text-sm text-gray-500 line-through ml-2">12,500/-</span>
                      <span className="text-sm text-gray-600 ml-1">BDT</span>
                    </div>
                  </div>

                  {/* Most Popular Badge */}
                  <div className="mt-4 md:mt-0 bg-primary/10 rounded-lg px-4 py-2 shadow-sm">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                        #1
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-bold text-gray-900">Most Popular</p>
                        <p className="text-xs text-gray-600">Highest Success Rate</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instructor Images */}
              <div className="p-6 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {instructors.map((instructor, index) => (
                    <PremiumAnimation key={index} type="fade" delay={0.1 * index} viewport={true}>
                      <div className="relative rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                        <Image
                          src={instructor.image || "/placeholder.svg"}
                          alt={instructor.name}
                          width={800}
                          height={450}
                          className="w-full"
                        />
                      </div>
                    </PremiumAnimation>
                  ))}
                </div>
              </div>

              {/* Course Details */}
              <div className="p-6 bg-white border-t border-gray-100">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Program Highlights</h3>
                    <p className="text-gray-600">
                      Our flagship program offers comprehensive preparation with expert instructors and proven
                      strategies
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex items-center bg-primary/10 rounded-full px-4 py-2 text-primary">
                      <Phone className="h-5 w-5 mr-2" />
                      <span>+8801766966772</span>
                    </div>
                    <div className="flex items-center bg-primary/10 rounded-full px-4 py-2 text-primary">
                      <Calendar className="h-5 w-5 mr-2" />
                      <span>2 Month Live Classes</span>
                    </div>
                  </div>
                </div>

                {/* Course Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                  {featuredCourseDetails.map((detail, i) => (
                    <div
                      key={i}
                      className="flex items-center bg-gray-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-2">
                        {detail.icon}
                      </div>
                      <span className="text-gray-700 text-sm">{detail.text}</span>
                    </div>
                  ))}
                </div>

                {/* Instructors */}
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Learn from the best instructors</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {instructors.map((instructor, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md"
                      >
                        <div className="flex items-center mb-2">
                          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                            {instructor.name.charAt(0)}
                          </div>
                          <div className="ml-3">
                            <p className="font-bold text-gray-900">{instructor.name}</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-700 mb-1">{instructor.credentials}</p>
                        <p className="text-xs text-gray-500">{instructor.details}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-primary hover:bg-primary/90 text-white flex-1 py-2 h-auto relative z-20">
                    <span>Enroll Now</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-white border-primary text-primary hover:bg-primary/5 flex-1 py-2 h-auto relative z-20"
                    onClick={() => openCourseDetails(featuredCourse)}
                  >
                    View Program Details
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-white border-primary text-primary hover:bg-primary/5 flex-1 py-2 h-auto relative z-20"
                  >
                    Contact an Advisor
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </PremiumAnimation>

        {/* Regular Course Cards */}
        <StaggerContainer className="grid md:grid-cols-1 lg:grid-cols-2 gap-8" staggerChildren={0.15} viewport={true}>
          {courses.map((course, index) => (
            <PremiumAnimation key={index} type="fade" viewport={true}>
              <div className="bg-white rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group relative">
                {/* Subtle glow effect on hover */}
                <div className="absolute -inset-0.5 bg-primary/30 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-300 pointer-events-none"></div>

                {/* Course Image */}
                <div className="relative">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    width={800}
                    height={450}
                    className="w-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Course Details */}
                <div className="p-6">
                  {/* Course Title and Price */}
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <div>
                      <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">{course.title}</h3>
                      <div className="flex items-baseline">
                        <span className="text-2xl font-bold text-primary">{course.price}/-</span>
                        <span className="text-sm text-gray-500 line-through ml-2">{course.originalPrice}/-</span>
                        <span className="text-sm text-gray-600 ml-1">{course.currency}</span>
                      </div>
                    </div>

                    {/* Instructor */}
                    <div className="mt-4 md:mt-0 flex items-center">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                        {course.instructor.charAt(0)}
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">{course.instructor}</p>
                        <p className="text-xs text-gray-500">{course.instructorTitle}</p>
                      </div>
                    </div>
                  </div>

                  {/* Course Details */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Program Features</h4>
                    <ul className="space-y-2">
                      {course.details.slice(0, 4).map((detail, i) => (
                        <li key={i} className="flex items-start text-gray-700">
                          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-2 mt-0.5">
                            <CheckCircle className="h-3 w-3" />
                          </div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                    {course.details.length > 4 && (
                      <p className="text-sm text-primary font-medium mt-2 cursor-pointer hover:underline">
                        + {course.details.length - 4} more features
                      </p>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button className="flex-1 bg-primary hover:bg-primary/90 text-white relative z-20">
                      <span>Enroll Now</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <Button
                      variant="outline"
                      className="bg-white border-primary text-primary hover:bg-primary/5 flex-1 relative z-20"
                      onClick={() => openCourseDetails(course)}
                    >
                      Details
                    </Button>
                  </div>
                </div>
              </div>
            </PremiumAnimation>
          ))}
        </StaggerContainer>

        {/* View All Button */}
        <PremiumAnimation type="fade" delay={0.5} viewport={true} className="text-center mt-16">
          <Button
            variant="outline"
            className="bg-white border-primary text-primary hover:bg-primary/5 flex-1 font-medium group px-8 py-6 h-auto relative z-20"
          >
            <span>View All Programs</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </PremiumAnimation>
      </div>
      {selectedCourse && (
        <CourseDetailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} course={selectedCourse} />
      )}
    </section>
  )
}



