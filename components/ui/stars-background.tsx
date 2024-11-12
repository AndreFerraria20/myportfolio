"use client";
import { motion, useScroll, useTransform, MotionValue, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import React, {
  useState,
  useEffect,
  useRef,
  RefObject,
  useCallback,
} from "react";

interface StarProps {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  twinkleSpeed: number | null;
  layer: number;
}

interface StarBackgroundProps {
  starDensity?: number;
  allStarsTwinkle?: boolean;
  twinkleProbability?: number;
  minTwinkleSpeed?: number;
  maxTwinkleSpeed?: number;
  className?: string;
  numLayers?: number;
}



export const StarsBackground: React.FC<StarBackgroundProps> = ({
  starDensity = 0.00015,
  allStarsTwinkle = true,
  twinkleProbability = 0.7,
  minTwinkleSpeed = 0.2,
  maxTwinkleSpeed = 1,
  className,
  numLayers = 3,
}) => {
  const [stars, setStars] = useState<StarProps[]>([]);
  const canvasRef: RefObject<HTMLCanvasElement> =
    useRef<HTMLCanvasElement>(null);
  const scrollRef = useRef(0);

  const { scrollY } = useScroll(); // Track scroll position
const scrollMotionValue = useMotionValue(0); // Smooth scroll motion value
const smoothScrollY = useSpring(scrollMotionValue, {
  stiffness: 50, // Adjust these values to control the smoothness and inertia
  damping: 10,
});
useEffect(() => {
  return scrollY.onChange((latest) => {
    scrollMotionValue.set(latest); // Set the scroll value to motionValue
  });
}, [scrollY, scrollMotionValue]);

const generateStars = useCallback(
  (width: number, height: number): StarProps[] => {
    const area = width * height;
    const numStars = Math.floor(area * starDensity);

    return Array.from({ length: numStars }, () => {
      const layer = Math.floor(Math.random() * numLayers);
      const shouldTwinkle = allStarsTwinkle || Math.random() < twinkleProbability;

      // Adjust size range based on the layer
      const minRadius = 0.3 + layer * 0.1; // Minimum size increases with layer
      const maxRadius = 0.6 + layer * 0.2; // Maximum size increases with layer

      return {
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * (maxRadius - minRadius) + minRadius,
        opacity: Math.random() * 0.5 + 0.5,
        twinkleSpeed: shouldTwinkle
          ? minTwinkleSpeed + Math.random() * (maxTwinkleSpeed - minTwinkleSpeed)
          : null,
        layer,
      };
    });
  },
  [starDensity, allStarsTwinkle, twinkleProbability, minTwinkleSpeed, maxTwinkleSpeed, numLayers]
);

  useEffect(() => {
    const updateStars = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const { width, height } = canvas.getBoundingClientRect();
        canvas.width = width;
        canvas.height = height;
        setStars(generateStars(width, height));
      }
    };

    updateStars();

    const resizeObserver = new ResizeObserver(updateStars);
    if (canvasRef.current) {
      resizeObserver.observe(canvasRef.current);
    }

    return () => {
      if (canvasRef.current) {
        resizeObserver.unobserve(canvasRef.current);
      }
    };
  }, [
    starDensity,
    allStarsTwinkle,
    twinkleProbability,
    minTwinkleSpeed,
    maxTwinkleSpeed,
    generateStars,
  ]);

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        const layerSpeed = (star.layer + 1) / numLayers;
        const yOffset = (smoothScrollY.get() * layerSpeed) % canvas.height;

        let y = (star.y + yOffset) % canvas.height;
        if (y < 0) y += canvas.height;

        ctx.beginPath();
        ctx.arc(star.x, y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();

        if (star.twinkleSpeed !== null) {
          star.opacity =
            0.5 +
            Math.abs(Math.sin((Date.now() * 0.001) / star.twinkleSpeed) * 0.5);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [stars, numLayers]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("fixed h-screen w-full top-0 left-0 -z-10", className)}
    />
  );
};