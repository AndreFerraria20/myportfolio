"use client";
import {
  motion
} from "framer-motion";
import React, { useEffect, useState } from "react";

import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import { Separator } from "@radix-ui/react-separator";

interface TimelineEntry {
  title: string;
  date: string;
  description: string;
}

export const Timeline = ({ data, title, className }: { data: TimelineEntry[], title: string, className?: string }) => {
  const mediaQuery = useMediaQuery("(min-width: 768px)");
  const [inViewItems, setInViewItems] = useState<Set<number>>(new Set());

  const handleScroll = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      const index = parseInt(entry.target.getAttribute('data-index') || '0', 10);
      if (entry.isIntersecting && !inViewItems.has(index)) {
        setInViewItems((prev) => new Set(prev.add(index)));
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.1,
    });

    if (typeof window !== 'undefined') {
      const elements = document.querySelectorAll('[data-index]');
      elements.forEach((el) => observer.observe(el));

      return () => {
        elements.forEach((el) => observer.unobserve(el));
      };
    }
  }, [inViewItems]);

  const gridClass = mediaQuery ? "grid-cols-[1fr_0.25rem_1fr]" : "grid-cols-[1fr_0.25rem]";
  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (

    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className={className}>{title}</h1>
      <ul className={`${gridClass} grid w-full max-w-4xl mx-auto gap-x-4 ${className}`}>
        {data.map((item, index) => {
          let itemClass;
          let content;
          let flap;
          let left;

          if (mediaQuery) {
            left = index % 2 !== 0;
            itemClass = left ? 'col-start-3 row-span-2' : 'col-start-1 row-span-2';
            content = left ? "rounded-l-2xl" : "rounded-r-2xl";
            flap = left ? "flapRight" : "flapLeft";
          } else {
            left = index % 2 !== 0;
            itemClass = 'col-start-1 row-span-1';
            content = "rounded-r-2xl";
            flap = "flapLeft";
          }

          return (
            <React.Fragment key={index}>
              {left && <div className={`relative bg-neutral-500 w-1 row-span-1 flex grow col-start-2 col-span-1 justify-center ${className}`}>
                <div className='absolute w-8 h-8 border-8 border-secondary rounded-full bg-primary'></div>
              </div>}
              <motion.li
                className={`col-span-1 ${itemClass} flex flex-col ${className}`}
                initial="hidden"
                animate={inViewItems.has(index) ? "visible" : "hidden"}
                variants={animationVariants}
                data-index={index}
              >
                <div className={`text-primary bg-secondary text-center  text-sm text-muted-foreground content-center ${content} h-8 relative ${className}`}>
                  <div className={`${flap}`}>.</div>
                  {item.date}
                </div>
                <div className={`flex flex-col flex-grow  px-7 ${className}`}>
                  <div className={`  font-bold text-gray-800 ${className}`}>{item.title}</div>
                  <div className={`px-4 py-2 text-sm text-muted-foreground mb-8 ${className}`}>{item.description}</div>
                  <Separator className="my-4" />
                </div>
              </motion.li>
              {(index % 2 === 0 || !mediaQuery) && <div className={`relative bg-neutral-500 w-1 row-span-1 flex grow col-start-2 col-span-1 justify-center ${className}`}>
                <div className='absolute w-8 h-8 border-8 border-secondary rounded-full bg-primary'></div></div>}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};
