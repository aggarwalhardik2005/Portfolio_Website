import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hardik Aggarwal - Portfolio",
  description:
    " Final-year Computer Engineering student with an 8.29 CGPA and demonstrated expertise in full-stack development using the MERN stack and Java. Seeking to apply proven skills in building and optimizing real-world applications like FarmFresh and Stitch-Sevi to a dynamic software development role.",
  keywords: "computer engineering, software developer, full-stack, React, Node.js, portfolio",
  authors: [{ name: "Hardik Aggarwal" }],
  openGraph: {
    title: "Hardik Aggarwal - Computer Engineering Student Portfolio",
    description:
      "Final-year Computer Engineering student with an 8.29 CGPA and demonstrated expertise in full-stack development using the MERN stack and Java. Seeking to apply proven skills in building and optimizing real-world applications like FarmFresh and Stitch-Sevi to a dynamic software development role.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
