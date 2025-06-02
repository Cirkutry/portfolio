import { Hero } from "@/components/ui/hero"
import { Navbar } from "@/components/ui/navbar"
import { About } from "@/components/ui/about"
import { Skills } from "@/components/ui/skills"
import { Projects } from "@/components/ui/projects"
import { Contact } from "@/components/ui/contact"
import { Footer } from "@/components/ui/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
} 