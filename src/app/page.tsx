import Image from "next/image"
import { ArrowRight, Brain, Code, BotIcon as Robot } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        <div className="space-y-6 flex-1">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Generative AI Engineer
          </h1>
          <p className="text-xl text-gray-300">
            Specializing in building intelligent systems and AI-powered solutions that transform ideas into reality.
          </p>
          <div className="flex gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Get in Touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="AI Visualization"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
      </section>

      {/* Skills Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Expertise</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-800 rounded-lg space-y-4">
            <Brain className="h-8 w-8 text-blue-400" />
            <h3 className="text-xl font-semibold">Machine Learning</h3>
            <p className="text-gray-300">Deep expertise in neural networks, NLP, and computer vision applications.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg space-y-4">
            <Code className="h-8 w-8 text-purple-400" />
            <h3 className="text-xl font-semibold">AI Development</h3>
            <p className="text-gray-300">
              Building scalable AI solutions using cutting-edge frameworks and technologies.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg space-y-4">
            <Robot className="h-8 w-8 text-green-400" />
            <h3 className="text-xl font-semibold">Generative AI</h3>
            <p className="text-gray-300">
              Creating innovative solutions using GPT, DALL-E, and other generative models.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

