import { Award, BookOpen, Briefcase } from "lucide-react"

export default function About() {
  return (
    <div className="space-y-12">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold">About Me</h1>
        <p className="text-xl text-gray-300">
          I'm a Generative AI Engineer with a passion for building intelligent systems that push the boundaries of
          what's possible with artificial intelligence.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Briefcase className="h-6 w-6" />
          Experience
        </h2>
        <div className="space-y-4">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold">Senior AI Engineer</h3>
            <p className="text-gray-400">2022 - Present</p>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li>• Developed large language models for various applications</li>
              <li>• Led AI integration projects for enterprise clients</li>
              <li>• Implemented state-of-the-art generative AI solutions</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold">Machine Learning Engineer</h3>
            <p className="text-gray-400">2020 - 2022</p>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li>• Built and deployed ML models at scale</li>
              <li>• Optimized model performance and efficiency</li>
              <li>• Collaborated with cross-functional teams</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <BookOpen className="h-6 w-6" />
          Education
        </h2>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold">M.S. in Artificial Intelligence</h3>
          <p className="text-gray-400">Top Technical University</p>
          <p className="text-gray-300 mt-2">Specialized in deep learning and natural language processing</p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Award className="h-6 w-6" />
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "PyTorch",
            "TensorFlow",
            "Transformers",
            "GPT Models",
            "DALL-E",
            "Stable Diffusion",
            "Python",
            "JavaScript",
            "React/Next.js",
            "AWS/GCP/Azure",
            "Docker",
            "Git",
          ].map((skill) => (
            <div key={skill} className="bg-gray-800 p-4 rounded-lg text-center">
              {skill}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

