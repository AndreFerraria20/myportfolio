'use client'

import * as React from 'react'
import { Book, Briefcase, Github, Linkedin, Mail, Phone } from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

interface Project {
  name: string
  icon: React.ElementType
}

interface ContactLink {
  name: string
  icon: React.ElementType
  href: string
}

interface VerticalTextSidebarProps {
  educationProjects: Project[]
  contactLinks: ContactLink[]
  className?: string
}

function VerticalText({ text }: { text: string }) {
  return (
    <div className="flex justify-center my-4">
      <div className="transform -rotate-90 whitespace-nowrap text-sm font-medium text-gray-500">
        {text}
      </div>
    </div>
  )
}

export function VerticalTextSidebar({
  educationProjects,
  contactLinks,
  className = '',
}: VerticalTextSidebarProps) {
  return (
    <Sidebar className={`w-16 border-r ${className}`}>
      <SidebarHeader className="p-2">
        <SidebarTrigger />
      </SidebarHeader>
      <SidebarContent className="flex flex-col justify-between h-full">
        <div>
          <VerticalText text="Education" />
          <SidebarMenu>
            {educationProjects.map((project) => (
              <SidebarMenuItem key={project.name}>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <SidebarMenuButton className="w-full flex justify-center">
                        <project.icon className="h-5 w-5" />
                        <span className="sr-only">{project.name}</span>
                      </SidebarMenuButton>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                      <p>{project.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </div>
        <div>
          <VerticalText text="Contact" />
          <SidebarMenu>
            {contactLinks.map((link) => (
              <SidebarMenuItem key={link.name}>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <SidebarMenuButton asChild className="w-full flex justify-center">
                        <a href={link.href} target="_blank" rel="noopener noreferrer">
                          <link.icon className="h-5 w-5" />
                          <span className="sr-only">{link.name}</span>
                        </a>
                      </SidebarMenuButton>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                      <p>{link.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </div>
      </SidebarContent>
      <SidebarFooter className="p-2">
        {/* Add any footer content here */}
      </SidebarFooter>
    </Sidebar>
  )
}

export function VerticalTextSidebarComponent() {
  const educationProjects: Project[] = [
    { name: 'Machine Learning Course', icon: Book },
    { name: 'Web Development Bootcamp', icon: Briefcase },
    { name: 'Data Science Project', icon: Book },
  ]

  const contactLinks: ContactLink[] = [
    { name: 'Email', icon: Mail, href: 'mailto:example@email.com' },
    { name: 'Phone', icon: Phone, href: 'tel:+1234567890' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/yourusername' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/yourusername' },
  ]

  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <VerticalTextSidebar educationProjects={educationProjects} contactLinks={contactLinks} />
        <main className="flex-1 p-4">
          <h1 className="text-2xl font-bold mb-4">Main Content</h1>
          <p>Your main content goes here.</p>
        </main>
      </div>
    </SidebarProvider>
  )
}