import { Mail, Phone, MapPin, Clock, Facebook, Twitter, LinkedinIcon as LinkedIn } from 'lucide-react'
import React from 'react'
export default function ContactUs() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 border-b-2 border-gray-900 pb-2 inline-block mb-12">
        CONTACT US
      </h1>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="text-blue-600 w-6 h-6" />
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="text-gray-900">contact@factshield.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-blue-600 w-6 h-6" />
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="text-gray-900">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-blue-600 w-6 h-6" />
                <div>
                  <p className="text-sm text-gray-600">Address</p>
                  <p className="text-gray-900">123 Truth Street, Integrity City, FC 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Clock className="text-blue-600 w-6 h-6" />
                <div>
                  <p className="text-sm text-gray-600">Business Hours</p>
                  <p className="text-gray-900">Monday - Friday: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                <Facebook className="w-6 h-6 text-blue-600" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                <Twitter className="w-6 h-6 text-blue-600" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                <LinkedIn className="w-6 h-6 text-blue-600" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}