'use server'

import { z } from 'zod'
import nodemailer from 'nodemailer'

const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters long" }),
})

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.mailersend.net", // SMTP server
  port: 587,
  secure: false, // Use TLS
  auth: {
    user: "MS_muKC6T@trial-vywj2lpmzypl7oqz.mlsender.net", 
    pass: "vsHlGLuksBrhZn1n" 
  },
})

export async function sendEmail(prevState: any,formData: FormData) {

  const validatedFields = schema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  })

  if (!validatedFields.success) {
    return { error: "Invalid form data. Please check your inputs." }
  }

  const { name, email, message } = validatedFields.data

  try {
    // Send email
    await transporter.sendMail({
      from: '"Your Website" <your-email@example.com>', // sender address
      to: "andreferraria20@gmail.com", // your personal email where you want to receive messages
      replyTo: email, // set reply-to as the sender's email
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    })

    return { success: "Email sent successfully!" }
  } catch (error) {
    console.error('Error sending email:', error)
    return { error: "Failed to send email. Please try again later." }
  }
}