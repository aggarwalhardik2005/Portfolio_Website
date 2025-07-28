import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Create transporter using Gmail (you can use other email services)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Your Gmail app password
      },
    })

    // Email to you (the portfolio owner)
    const mailToYou = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Your email where you want to receive messages
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #2563eb; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #4b5563;">${message.replace(/\n/g, "<br>")}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #ecfdf5; border-radius: 8px;">
            <p style="margin: 0; color: #065f46; font-size: 14px;">
              <strong>Reply to:</strong> ${email}
            </p>
          </div>
        </div>
      `,
    }

    // Auto-reply email to the sender
    const autoReply = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for contacting me!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            Thank You for Your Message!
          </h2>
          
          <p style="color: #374151; line-height: 1.6;">Hi ${name},</p>
          
          <p style="color: #374151; line-height: 1.6;">
            Thank you for reaching out through my portfolio website. I have received your message and will get back to you as soon as possible.
          </p>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Your Message Summary:</h3>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong> ${message.substring(0, 100)}${message.length > 100 ? "..." : ""}</p>
          </div>
          
          <p style="color: #374151; line-height: 1.6;">
            I typically respond within 24-48 hours. If your inquiry is urgent, feel free to reach out to me directly at 
            <a href="mailto:${process.env.EMAIL_USER}" style="color: #2563eb;">${process.env.EMAIL_USER}</a>.
          </p>
          
          <p style="color: #374151; line-height: 1.6;">
            Best regards,<br>
            <strong>Hardik Aggarwal</strong><br>
            Computer Engineering Student
          </p>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #fef3c7; border-radius: 8px;">
            <p style="margin: 0; color: #92400e; font-size: 12px;">
              This is an automated response. Please do not reply to this email.
            </p>
          </div>
        </div>
      `,
    }

    // Send both emails
    await transporter.sendMail(mailToYou)
    await transporter.sendMail(autoReply)

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email. Please try again later." }, { status: 500 })
  }
}
