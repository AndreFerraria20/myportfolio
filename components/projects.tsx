'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, ChevronLeft } from "lucide-react"
import { LayoutGrid } from "./ui/layout-grid"
import { ProjectGrid } from "./ui/projectGrid"
import { StarsBackground } from "./ui/stars-background"
import { ShootingStars } from "./ui/shooting-stars"

export function Projects() {

  return (
    <><StarsBackground className="fixed bg-neutral-900 z-[-10] ">
    </StarsBackground><ShootingStars className="fixed z-[-10]" />
      <ProjectGrid /></>
  )



}