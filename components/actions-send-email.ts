'use server'

import { z } from 'zod'
import nodemailer from 'nodemailer'
import { env } from 'process'

const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters long" }),
})

// Create a transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: env.MY_EMAIL, // Your Gmail address
    pass: env.MY_PASSWORD, // Your app-specific password
  },
})

export async function sendEmail(prevState: any, formData: FormData) {
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
      from: process.env.MY_EMAIL, // sender address (your Gmail)
      to: process.env.MY_EMAIL, // your personal email where you want to receive messages
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