"use server"

import { transporter } from "../lib/nodemailer"

export async function sendEmail(formData: FormData) {
  try {
    const name = formData.get("name")
    const email = formData.get("email")
    const message = formData.get("message")

    // Validate form data
    if (!name || !email || !message) {
      return { error: "All fields are required" }
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.toString())) {
      return { error: "Invalid email address" }
    }

    // Verify environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
      console.error("Missing email configuration")
      return { error: "Server configuration error" }
    }

    // Send email using NodeMailer
    try {
      await transporter.sendMail({
        from: {
          name: name.toString(),
          address: process.env.EMAIL_USER,
        },
        to: process.env.EMAIL_USER,
        replyTo: email.toString(),
        subject: `New Contact Form Message from ${name}`,
        text: `
          Name: ${name}
          Email: ${email}
          Message: ${message}
        `,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2563eb;">New Contact Form Message</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: #f3f4f6; padding: 15px; border-radius: 5px;">
              ${message}
            </div>
          </div>
        `,
      })

      return { success: "Message sent successfully!" }
    } catch (emailError) {
      console.error("Email sending error:", emailError)
      return { error: "Failed to send email. Please try again later." }
    }
  } catch (error) {
    console.error("Error in sendEmail:", error)
    return { error: "An unexpected error occurred" }
  }
}

