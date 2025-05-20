import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">Het Prajapati</h1>
            <p className="text-xl md:text-2xl">Computer Science Engineering Student</p>
            <p className="text-lg opacity-90">
              Passionate about building innovative solutions with AI, ML, and web technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="outline" className="bg-white/10 hover:bg-white/20 border-white/20">
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </a>
              </Button>
              <Button asChild variant="outline" className="bg-white/10 hover:bg-white/20 border-white/20">
                <a href="https://github.com/hetpr" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button asChild variant="outline" className="bg-white/10 hover:bg-white/20 border-white/20">
                <a href="https://linkedin.com/in/hetpr" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white/20">
              <Image src="/images/het-profile.png" alt="Het Prajapati" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  )
}
