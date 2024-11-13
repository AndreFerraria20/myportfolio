'use client'
import { useState } from 'react'
import { useFormState } from 'react-dom'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { sendEmail } from '@/components/actions-send-email'

import MainLayout from '../layouts/mainLayout'

 function MyContact() {
  const [state, formAction] = useFormState(sendEmail, null)
  const [isSubmitting] = useState(false)



  const content = (
    <div className="max-w-4xl mx-auto p-4 space-y-8">
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg text-muted-foreground mb-4">
          I'm always excited to connect with fellow developers, potential clients, or anyone interested in web development. Whether you have a project in mind, a question about my work, or just want to say hello, I'd love to hear from you!
        </p>
        <Image 
          src="/profile.jpg?height=300&width=400" 
          alt="Profile picture" 
          width={400} 
          height={300} 
          className="rounded-lg shadow-md"
        />
      </div>
      <Card>
      <CardContent className="p-6">
            <form action={formAction} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <Input id="name" name="name" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <Textarea id="message" name="message" rows={4} required />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>

            {state?.error && (
              <p className="mt-4 text-red-600">{state.error}</p>
            )}
            {state?.success && (
              <p className="mt-4 text-green-600">{state.success}</p>
            )}
          </CardContent>
        </Card>
    </div>

    <div className="border-t pt-8">
      <h2 className="text-2xl font-semibold mb-4">Connect with me</h2>
      <div className="flex space-x-6">
        <a href="https://github.com/AndreFerraria20" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-muted-foreground hover:text-primary">
          <Github size={24} />
          <span>GitHub</span>
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-muted-foreground hover:text-primary">
          <Linkedin size={24} />
          <span>LinkedIn</span>
        </a>
        <a href="https://www.upwork.com/freelancers/~016283c2afa8167fbb" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-muted-foreground hover:text-primary">
          <ExternalLink size={24} />
          <span>Upwork</span>
        </a>
      </div>
    </div>
  </div>
  )
  return (
   <MainLayout title="Contact" divContent={content}></MainLayout>
  )
}
export default MyContact;
/*

export default function MyContact() {
  return <>

          <section id="contact" className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <div className="flex space-x-4">
            <Link href="mailto:john@example.com">
              <Button variant="outline" size="icon">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
            <Link href="https://github.com/johndoe">
              <Button variant="outline" size="icon">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/johndoe">
              <Button variant="outline" size="icon">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
          </div>
        </section>
  </>
}*/