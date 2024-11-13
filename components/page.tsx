'use client'

import { Button } from "@/components/ui/button"
import { Mail,  FileText } from "lucide-react"
import { ShootingStars } from "./ui/shooting-stars"
import { StarsBackground } from "./ui/stars-background"
import { FlipWords } from "./ui/flip-words"
import { ResponsiveSidebar } from "./components-vertical-sidebar"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"


export function Page() {
  const [height, setHeight] = useState(0);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const ref = useRef<HTMLDivElement | null>(null);
  const words = ["FullStack Developer", "Webscrapper", "Wordpress Developer"];

  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a')
    link.href = '/curriculum.pdf' // Assuming the CV is in the public folder
    link.download = 'curriculum.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const slideUpVariants = {
    hidden: { y: -height, transition: { type: 'spring', stiffness: 70, damping: 15, duration: 0.5, delay: 0.2 } },
    visible: { y: 0, opacity: 1 },
  };


  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        setHeight(ref.current.clientHeight); // Set height based on resized window
      }
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    // Check if window is defined
    if (typeof window !== 'undefined') {
      handleResize(); // Call initially
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []); // Empty dependency array ensures this runs once on mount

  
  return (
    <div className="flex min-h-screen ">
      <motion.div
        ref={ref}
        className="z-[50] absolute h-screen w-full bg-primary overflow-hidden "
        initial="visible"
        animate="hidden"
        variants={slideUpVariants}
        key={windowSize.width}
      ></motion.div>

      
      {/* Vertical Menu */}
      <ResponsiveSidebar></ResponsiveSidebar>
      {/* Main Content */}
      <StarsBackground className={`fixed z-[-10] bg-neutral-900 `}>
      </StarsBackground><ShootingStars className="fixed z-[-10]" />
      <main className="flex-1 p-8 z-10 text-white h-screen overflow-y-hidden">
        <div className="h-[40rem] w-full h-full  rounded-md relative flex flex-col items-center justify-center antialiased">
          <div className="max-w-2xl mx-auto p-4">
            <h1 className="relative z-10 text-4xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-primary to-neutral-600  text-center font-sans font-bold">
              André Ferraria
            </h1>

            <p></p>
            <div className="text-xl  md:text-4xl text-center  font-normal text-neutral-400  dark:text-neutral-400">
              <FlipWords words={words} />
            </div>
            <div className="text-neutral-400 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
              <p className="text-xl text-muted-foreground mb-2"></p>
              <br />
              Hi. Nice to meet you. Feel free to take a look around!
              A passionate developer, always learning, with attention to detail, starting freelancing.

              <div className="flex space-x-4 items-center justify-center pt-4">
                <Button asChild>
                  <Link href="/contact">
                    <Mail className="mr-2 h-4 w-4" /> Contact Me
                  </Link>
                </Button>
                <Button variant="link" onClick={handleDownload}>
                  <FileText className="mr-2 h-4 w-4" /> Download CV
                </Button>
              </div>
            </div>

          </div>
        </div>

      </main>
    </div>
  )
}