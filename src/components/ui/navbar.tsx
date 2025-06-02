"use client";

import { motion } from "framer-motion";
import { Button } from "./button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const titleElement = document.querySelector('#home h1');
      if (titleElement) {
        const rect = titleElement.getBoundingClientRect();
        setShowTitle(rect.bottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="w-full">
        <div className="relative flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-md border-b border-white/10" />
          
          <div className="relative flex flex-1 items-center justify-between">
            <div className="flex items-center gap-4">
              <motion.a
                href="#home"
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src="/logo.svg"
                  alt="Kre0lidge Logo"
                  width={90}
                  height={48}
                  className="text-primary"
                />
              </motion.a>
              <motion.h1 
                className="text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-[#c74a4b] to-[#74264d] animate-gradient"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: showTitle ? 1 : 0, x: showTitle ? 0 : -20 }}
                transition={{ duration: 0.3 }}
              >
                Kre0lidge
              </motion.h1>
            </div>

            <div className="hidden md:flex md:items-center md:space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            <div className="relative md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="text-muted-foreground hover:text-primary"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 },
        }}
        className="md:hidden overflow-hidden"
      >
        <div className="bg-background/80 backdrop-blur-md border-b border-white/10 px-4 py-4 space-y-4">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ x: 10 }}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
} 