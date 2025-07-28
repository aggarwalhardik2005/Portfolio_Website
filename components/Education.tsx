import { GraduationCap, Heart, BookOpen } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Engineering",
      institution: "Thapar University",
      duration: "2022 - 2026",
      gpa: "8.29/10.0",
      description:
        "Relevant coursework: Data Structures & Algorithms, Database Management Systems, Software Engineering, Machine Learning, Computer Networks, Operating Systems",
    },
    {
      degree: "Higher Secondary Certificate (Science)",
      institution: "Sanawar An Institute For Children",
      duration: "2020 - 2022",
      gpa: "91.8%",
      description:
        "Specialized in Physics, Chemistry, and Mathematics with Physical Education as an additional subject",
    },
    {
      degree: "Secondary Certificate (CBSE)",
      institution: " St. Xavier’s Senior Secondary School",
      duration: "2020",
      gpa: "92.8%",
      description:
        "Strong foundation in core subjects including Mathematics, Science, English, and Social Studies. Actively participated in extracurricular activities, sports competitions, and academic olympiads. Developed leadership skills through student council participation and maintained consistent academic excellence throughout.",
    },
  ]

  const hobbies = ["Coding", "Singing", "Playing Sports like Cricket and Football", "Gaming"]

  const certifications = [
    "C/C++course (BCE, 2022)",
    "Data structure and algorithms with C++ (BCE, 2023)",
    "Full Stack Web Development (BCE, 2023)",
    "MERN Stack Web Development (BCE, 2023)",
    "JAVA Development (BCE, 2024)",
  ]

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education & Achievements</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My academic journey and professional certifications that have shaped my technical expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <GraduationCap className="w-6 h-6 mr-2 text-blue-600" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-900">{edu.degree}</CardTitle>
                    <div className="flex justify-between items-center text-sm text-gray-600">
                      <span>{edu.institution}</span>
                      <span>{edu.duration}</span>
                    </div>
                    <div className="text-sm font-semibold text-blue-600">GPA: {edu.gpa}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications & Hobbies */}

          {/* Certifications */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
              Certifications
            </h3>
            <Card>
              <CardContent className="p-4">
                <ul className="space-y-2">
                  {certifications.map((cert, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-start">
                      <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {cert}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            {/* Hobbies */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Heart className="w-5 h-5 mr-2 text-blue-600" />
                Hobbies
              </h3>
              <Card>
                <CardContent className="p-4">
                  <ul className="space-y-2">
                    {hobbies.map((hobbie, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {hobbie}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
