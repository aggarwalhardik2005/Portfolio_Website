import { Github, Linkedin, Mail, Heart } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/aggarwalhardik2005", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/hardik-aggarwal-039648284/", label: "LinkedIn" },
    { icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=hardikaggarwal01@gmail.com", label: "Email" },
  ]

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Hardik Aggarwal</h3>
            <p className="text-gray-400">Computer Engineering Student</p>
          </div>

          <div className="flex space-x-4 mb-4 md:mb-0">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> by Hardik Aggarwal
          </p>
          <p className="text-gray-500 text-sm mt-2">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
