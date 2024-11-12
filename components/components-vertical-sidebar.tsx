"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },

  { href: "/contact", label: "Contact" },
  { href: "/skills", label: "Skills" },
  { href: "/education", label: "Career" },

]

function VerticalSidebar() {
  const pathname = usePathname()

  return (
    <nav className="fixed left-0 top-0 z-50 h-full  bg-background shadow-md transition-all duration-300 ease-in-out sm:w-20 md:w-20 lg:w-20">
      <div className="flex h-full flex-col items-center justify-center space-y-6 sm:space-y-8 sm:py-8">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "group flex h-24 w-full items-center justify-center sm:h-32 md:h-36 lg:h-40",
              pathname === link.href
                ? "bg-secondary-foreground text-primary-foreground"
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            )}
          >
            <span className="inline-block [writing-mode:vertical-lr] [text-orientation:mixed] rotate-180 text-xs font-medium sm:text-sm md:text-base">
              {link.label}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  )
}

function HorizontalSidebar() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 z-10 w-full bg-background shadow-md">
      <div className="flex items-center justify-around py-2 sm:py-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "flex items-center justify-center px-2 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm",
              pathname === link.href
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            )}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export function ResponsiveSidebar() {
  return (
    <>
      <div className="hidden sm:block">
        <VerticalSidebar />
      </div>
      <div className="sm:hidden">
        <HorizontalSidebar />
      </div>
    </>
  )
}