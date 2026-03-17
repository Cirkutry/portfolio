"use client";

import { motion } from "framer-motion";
import { 
  SiTypescript, 
  SiJavascript, 
  SiPython,
  SiPhp,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiDocker
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const skills = [
  { name: "Java", icon: FaJava },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Python", icon: SiPython },
  { name: "PHP", icon: SiPhp },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Docker", icon: SiDocker }
];

export function Skills() {
  return (
    <section id="skills" className="py-16 bg-background/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Skills
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col items-center gap-2"
              >
                <div className="relative w-full bg-background/50 rounded-lg p-3 border border-white/10 hover:border-primary/20 transition-colors flex items-center justify-center">
                  <skill.icon className="w-8 h-8 text-primary transition-transform md:group-hover:scale-110" />
                  <div className="absolute inset-0 hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-background/90 rounded-lg">
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                </div>
                <span className="md:hidden text-xs font-medium text-center">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 