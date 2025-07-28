import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C","C++","Java", "JavaScript", "SQL", "Python"],
    },
    {
      title: "Frontend Development",
      skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "MongoDB","REST APIs","jQuery","AJAX",],
    },
    {
      title: "Tools & Technologies",
      skills: ["Git","Github","IntelliJ","MongoDB","MySQL","Postman","JavaFX","VS Code"],
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and competencies developed through academic projects,
            internships, and personal learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
