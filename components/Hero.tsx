"use client"

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <Image
              src="/MyPic.jpg"
              alt="Hardik Aggarwal"
              width={200}
              height={200}
              className="rounded-full mx-auto border-4 border-white shadow-lg "
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">Hardik Aggarwal</h1>

          <h2 className="text-xl md:text-2xl text-gray-600 mb-6">Final Year Computer Engineering Student</h2>

          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Passionate about full-stack development, machine learning, and creating innovative solutions. Currently
            seeking opportunities to apply my skills in a dynamic engineering environment.
          </p>

          <div className="flex justify-center space-x-4 mb-8">
            <Button variant="outline" size="lg" className="border-gray-300 bg-transparent" asChild>
              <a href="https://github.com/aggarwalhardik2005" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-gray-300 bg-transparent" asChild>
              <a href="https://linkedin.com/in/hardik-aggarwal" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-gray-300 bg-transparent" asChild>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hardikaggarwal01@gmail.com" target="_blank" rel="noopener noreferrer">
                <Mail className="w-5 h-5 mr-2" />
                Email
              </a>
            </Button>
          </div>

          <Button onClick={scrollToAbout} variant="ghost" className="animate-bounce">
            <ArrowDown className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}
