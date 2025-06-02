"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export function Hero() {
  const [showTitle, setShowTitle] = useState(true);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (titleRef.current) {
        const rect = titleRef.current.getBoundingClientRect();
        setShowTitle(rect.bottom > 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="/bg.jpg" alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="absolute inset-0" />
      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="relative inline-block">
            <motion.h1 
              ref={titleRef}
              className="text-5xl md:text-8xl tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-[#c74a4b] to-[#74264d] animate-gradient leading-[1.2]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: showTitle ? 1 : 0, scale: showTitle ? 1 : 0.8 }}
              transition={{ delay: 0.3 }}
            >
              Kre0lidge
            </motion.h1>
            <motion.h2 
              className="absolute -top-8 left-0 text-xl md:text-2xl text-muted-foreground"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hi, I'm
            </motion.h2>
          </div>
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            A passionate developer crafting beautiful and functional experiences
          </motion.p>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToAbout}
        whileHover={{ y: 5 }}
      >
        <ArrowDown className="w-6 h-6 animate-bounce text-primary/60" />
      </motion.div>
    </div>
  );
}