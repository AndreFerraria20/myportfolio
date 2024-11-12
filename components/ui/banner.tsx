"use client"
import React, { ReactNode } from 'react';
import Title from './title';
import { motion } from "framer-motion";

interface BannerProps {
    content: string;
}
const slideUpVariants = {
    hidden: { y: 3000, opacity: 0 }, // Starts from below with opacity 0
    visible: {
        y: 0,

        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 70,
            damping: 15,
            duration: 0.5,
            delay: 0.5,
        },
    },
};
const Banner: React.FC<BannerProps> = ({ content }) => {


    return (
        <main>
            <div className='h-screen  '>
                <div className="flex  flex-grow w-full h-3/4 md:h-[90vh] items-end bg-secondary text-primary pb-10 overflow-hidden">
                    <div className="w-full  mb-20  ml-auto align-bottom ">
                        <motion.div initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={slideUpVariants}>
                            <Title title={content} href='' classes='items-center'></Title>
                        </motion.div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Banner;