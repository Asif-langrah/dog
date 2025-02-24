import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import { Facebook, MessageCircle, Github } from "lucide-react"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AI Engineer Portfolio",
  description: "Portfolio website of a Generative AI Engineer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-gray-100 min-h-screen`}>
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-gray-900/80 border-b border-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="text-xl font-bold">
                AI Engineer
              </Link>

              <div className="hidden md:flex items-center space-x-8">
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  Home
                </Link>
                <Link href="/about" className="hover:text-blue-400 transition-colors">
                  About
                </Link>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </div>

              <div className="flex items-center space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a
                  href="https://wa.me/your-number"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-500 transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span className="sr-only">WhatsApp</span>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-500 transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </nav>

        <main className="container mx-auto px-4 py-8">{children}</main>

        <footer className="border-t border-gray-800">
          <div className="container mx-auto px-4 py-6 text-center">
            <p>&copy; {new Date().getFullYear()} AI Engineer Portfolio. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}

