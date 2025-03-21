import Link from "next/link"
import { Facebook, Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          <div>
            <h3 className="font-serif font-bold text-2xl text-gray-900 mb-6">DSAT School</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We're dedicated to helping students achieve their dream scores on the Digital SAT and gain admission to
              top universities worldwide.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="bg-gray-100 hover:bg-indigo-50 hover:text-indigo-500 transition-colors p-2 rounded-full"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="bg-gray-100 hover:bg-indigo-50 hover:text-indigo-500 transition-colors p-2 rounded-full"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="bg-gray-100 hover:bg-indigo-50 hover:text-indigo-500 transition-colors p-2 rounded-full"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link
                href="#"
                className="bg-gray-100 hover:bg-indigo-50 hover:text-indigo-500 transition-colors p-2 rounded-full"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-serif font-bold text-xl text-gray-900 mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-gray-600 hover:text-indigo-500 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                  Programs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-indigo-500 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                  Practice Tests
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-indigo-500 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                  Resources
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-indigo-500 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-indigo-500 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-indigo-500 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-bold text-xl text-gray-900 mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-indigo-500 mr-3 mt-0.5" />
                <span className="text-gray-600">
                  House 123, Road 4, Block B
                  <br />
                  Mirpur DOHS, Dhaka 1216
                  <br />
                  Bangladesh
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-indigo-500 mr-3" />
                <span className="text-gray-600">+880 1766-966772</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-indigo-500 mr-3" />
                <span className="text-gray-600">info@dsatschool.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-bold text-xl text-gray-900 mb-6">Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Subscribe to our newsletter for the latest updates, tips, and exclusive offers.
            </p>
            <div className="flex flex-col space-y-3">
              <Input
                type="email"
                placeholder="Your email address"
                className=" focus:border-indigo-500 bg-white"
              />
              <Button className="bg-indigo-500 hover:bg-indigo-600 text-white w-full">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} DSAT School. All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-500 hover:text-indigo-500 transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-500 hover:text-indigo-500 transition-colors text-sm">
              Terms & Conditions
            </Link>
            <Link href="#" className="text-gray-500 hover:text-indigo-500 transition-colors text-sm">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

