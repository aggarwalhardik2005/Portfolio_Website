import { Code, Lightbulb, Users, Target } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Developer",
      description: "Proficient in MERN stack with experience in building scalable web applications",
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Strong analytical skills with a passion for solving complex engineering challenges",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Excellent collaboration skills developed through various group projects and internships",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on delivering high-quality solutions and continuous learning",
    },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I'm a dedicated final year Computer Engineering student with a passion for technology and innovation. My
            journey in engineering has equipped me with strong technical skills and a problem-solving mindset.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <item.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">My Story</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            As a final year Computer Engineering student at Thapar University, I've developed a strong foundation in
            software development, algorithms, and system design. My academic journey has been complemented by hands-on
            experience through internships and personal projects.
          </p>
          <p className="text-gray-700 leading-relaxed">
            I'm particularly interested in full-stack web development and MERN stack applications. My goal is to
            contribute to innovative projects that make a positive impact on society while continuously growing as a
            software engineer.
          </p>
        </div>
      </div>
    </section>
  )
}
