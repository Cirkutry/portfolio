"use client";

import { motion } from "framer-motion";
import { Button } from "./button";
import { Mail } from "lucide-react";
import { SiGithub, SiDiscord } from "react-icons/si";

const socialLinks = [
  {
    name: "GitHub",
    icon: SiGithub,
    href: "https://github.com/Cirkutry",
  },
  {
    name: "Discord",
    icon: SiDiscord,
    href: "https://discordapp.com/users/787898769467375677",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:kre0lidge71@gmail.com",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-16 bg-background/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Get in touch!
          </h2>
          <div className="w-full">
            <div className="flex flex-col md:flex-row md:items-center gap-6 w-full">
              <p className="text-muted-foreground md:w-1/2">
                I&apos;m always open to new opportunities and collaborations. Feel free to reach out! (っ&apos;ヮ&apos;c)
              </p>
              <div className="flex flex-wrap md:w-1/2 md:justify-end gap-4">
                {socialLinks.map((link) => (
                  <Button
                    key={link.name}
                    variant="outline"
                    size="lg"
                    className="flex items-center gap-2 border-primary/20 hover:bg-primary/10"
                    onClick={() => window.open(link.href, "_blank")}
                  >
                    <link.icon />
                    {link.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 