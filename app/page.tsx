import Hero from "@/components/hero"
import About from "@/components/about"
import Education from "@/components/education"
import WorkExperience from "@/components/work-experience"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Activities from "@/components/activities"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <div className="container mx-auto px-4 py-8 space-y-16">
        <About />
        <Education />
        <WorkExperience />
        <Projects />
        <Skills />
        <Activities />
        <Contact />
      </div>
    </main>
  )
}
