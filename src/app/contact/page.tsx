"use client"

import { Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react"
import { sendEmail } from "../actions/email"



export default function Contact() {
  const [status, setStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const handleSubmit = async (formData: FormData) => {
    setStatus({ type: null, message: "" })

    const result = await sendEmail(formData)

    if (result.error) {
      setStatus({ type: "error", message: result.error })
    } else if (result.success) {
      setStatus({ type: "success", message: result.success })
      // Reset form
      const form = document.getElementById("contact-form") as HTMLFormElement
      form.reset()
    }
  }

  return (
    <div className="space-y-12">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold">Get in Touch</h1>
        <p className="text-xl text-gray-300">
          Have a project in mind? Let's discuss how we can create innovative AI solutions together.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-12">
        <section className="space-y-6">
          <form id="contact-form" action={handleSubmit} className="space-y-6">
            {status.message && (
              <div
                className={`p-4 rounded-lg ${
                  status.type === "success"
                    ? "bg-green-900/50 text-green-300 border border-green-800"
                    : "bg-red-900/50 text-red-300 border border-red-800"
                }`}
              >
                {status.message}
              </div>
            )}

            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </section>

        <section className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-blue-400" />
                <a href="mailto:contact@aiengineer.com" className="hover:text-blue-400 transition-colors">
                  contact@aiengineer.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Availability</h3>
            <div className="space-y-2">
              <p>Response Time: Within 24 hours</p>
              <p>Available for:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>AI Consulting</li>
                <li>Project Collaboration</li>
                <li>Technical Workshops</li>
                <li>Speaking Engagements</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

