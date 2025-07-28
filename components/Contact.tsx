"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "idle" | "success" | "error"
    message: string
  }>({ type: "idle", message: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: "idle", message: "" })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        })
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hardikaggarwal01@gmail.com",
      link: "mailto:hardikaggarwal01@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 79868 28885",
      link: "tel:+917986828885",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Bathinda, Punjab, India",
      link: "#",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about
            technology. Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <info.icon className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <p className="font-semibold text-gray-900">{info.title}</p>
                      <a href={info.link} className="text-gray-600 hover:text-blue-600 transition-colors">
                        {info.value}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Send me a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div>
                    <Input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
                    disabled={isSubmitting}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>

                {/* Status Messages */}
                {submitStatus.type === "success" && (
                  <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-green-800 font-medium">Success!</p>
                      <p className="text-green-700 text-sm">{submitStatus.message}</p>
                    </div>
                  </div>
                )}

                {submitStatus.type === "error" && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-red-800 font-medium">Error</p>
                      <p className="text-red-700 text-sm">{submitStatus.message}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
