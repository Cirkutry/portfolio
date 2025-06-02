"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-16 bg-background/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            About me (&gt;.&lt;)
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="relative order-2 md:order-1">
              <Image
                src="/profile.png"
                alt="Profile"
                width={150}
                height={150}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6 text-muted-foreground flex-1 order-1 md:order-2">
              <p> I&apos;m a passionate developer with a love for building and exploring new technologies. My journey began with a deep curiosity about how things work on the internet, taking websites and apps apart just to see what makes them tick. One of my very first projects was a small Minecraft plugin, and from that moment, I was hooked!
              </p>
              <p> Since then, I&apos;ve been diving into code, experimenting, breaking things, and constantly learning. When I&apos;m not coding, you&apos;ll find me exploring the latest tech trends, contributing to open-source projects, or picking up new skills to push my development game even further.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 