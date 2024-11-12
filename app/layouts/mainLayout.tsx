"use client"
import React, { ReactNode } from 'react';


import { motion } from 'framer-motion';
import { StarsBackground } from '@/components/ui/stars-background';
import { ShootingStars } from '@/components/ui/shooting-stars';
import Banner from '@/components/ui/banner';
import { b } from 'framer-motion/client';
import { VerticalTextSidebarComponent } from '@/components/vertical-text-sidebar';
import { ResponsiveSidebar } from '@/components/components-vertical-sidebar';
import Footer from '@/components/ui/footer';




interface MainLayoutProps {
    title: string;
    divContent: ReactNode;
    darkBg?: Boolean
}

const MainLayout: React.FC<MainLayoutProps> = ({ title, divContent, darkBg }) => {

    let bg = darkBg ? "" : "bg-primary "

    const slideDownVariants = {
        hidden: { y: -1000, opacity: 1 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
        exit: { y: 100, opacity: 0, transition: { duration: 0.5 } },
    };


    return (

        <div className={"flex grow flex-col  h-full "+bg}>
            <ResponsiveSidebar></ResponsiveSidebar>
            {darkBg && <><StarsBackground className={`fixed z-[-10] bg-neutral-900 `}></StarsBackground><ShootingStars className="fixed z-[-10]" /></>}
            <div className="flex grow flex-col  lg:ml-20 lg:mr-20  ">

                <motion.div initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={slideDownVariants}>
                    <Banner content={title}></Banner>
                </motion.div>
                <div className='min-h-screen px-4  '>
                    {divContent}
                </div>
            </div>
            <Footer isDarkMode={darkBg?true:false}></Footer>
        </div>

    );
};

export default MainLayout;