"use client"

import { useState } from "react"
import { Menu, X, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  const handleResumeDownload = () => {
    // Create a link element and trigger download of local resume
    const link = document.createElement("a")
    link.href = "/resume.pdf" // Make sure you have resume.pdf in your public folder
    link.download = "Hardik_Aggarwal_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-900">Hardik Aggarwal</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <Button onClick={handleResumeDownload} className="bg-blue-600 hover:bg-blue-700 rounded-[8px] text-white">
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-gray-900">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-600 hover:text-blue-600 block px-3 py-2 text-base font-medium w-full text-left"
              >
                {item.name}
              </button>
            ))}
            <Button onClick={handleResumeDownload} className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
