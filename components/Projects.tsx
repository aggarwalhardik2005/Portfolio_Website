import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "Stitch-Sevi",
      description:
        "This is a Java-based application created specifically for tailoring businesses. It helps streamline their workflow by allowing them to record customer measurements, manage order details, track delivery deadlines, and generate bills. The application uses JavaFX for its user interface and MySQL for data handling.",
      image: "/placeholder.svg?height=200&width=300&text=E-Commerce",
      technologies: ["Java", "JavaFX", "MySQL"],
      githubUrl: "https://github.com/aggarwalhardik2005/Stitch_Sevi",
      liveUrl: "#",
    },
    {
      title: "FarmFresh",
      description:
        " A web platform built on the MERN stack that enables local farmers and growers to showcase their produce to potential buyers. It features an intuitive user interface, produce listings, an advanced search function, and separate, tailored dashboards for growers and consumers.",
      image: "/placeholder.svg?height=200&width=300&text=Task+Manager",
      technologies: [" ReactJS", "TailwindCSS","JavaScript", "MongoDB"," NodeJS", "Express.js", "Axios"],
      githubUrl: "https://github.com/aggarwalhardik2005/FarmFresh",
      liveUrl: "#",
    },
    {
      title: "HelpRX",
      description:
        " This is a platform developed for medicine donations to assist those in need and foster community support. It provides secure user authentication, customized dashboards, and features that allow users to make contributions and search for available medicines. The technology stack includes NodeJS, Express.js, and MySQL.",
      image: "/placeholder.svg?height=200&width=300&text=Weather+ML",
      technologies: [" HTML", "CSS", "JavaScript", "jQuery", "NodeJS", "Express.js", "AJAX", "MySQL"],
      githubUrl: "https://github.com/aggarwalhardik2005/HelpRx-Full-Stack",
      liveUrl: "#",
    },
   
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent projects demonstrating my skills in full-stack development, machine learning, and
            problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <Button variant="outline" size="sm">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
