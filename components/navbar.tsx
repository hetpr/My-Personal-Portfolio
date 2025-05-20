"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className={`text-2xl font-bold ${
              isScrolled ? "text-blue-800" : "text-white"
            } transition-colors duration-300 bg-transparent hover:bg-transparent`}
          >
            Het<span className={isScrolled ? "text-blue-600" : "text-blue-300"}>Prajapati</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Button
                key={link.name}
                variant="ghost"
                asChild
                className={`${
                  isScrolled
                    ? "text-gray-800 hover:bg-blue-100 hover:text-blue-800"
                    : "text-white hover:bg-white/10 hover:text-white"
                }`}
              >
                <Link href={link.href}>{link.name}</Link>
              </Button>
            ))}
            <Button asChild className="ml-2">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  alert("Resume download functionality would be implemented here")
                }}
              >
                Resume
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? "text-gray-800" : "text-white"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? "text-gray-800" : "text-white"}`} />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className={`md:hidden pt-4 pb-2 ${isScrolled ? "bg-white" : "bg-blue-800"}`}>
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="ghost"
                  asChild
                  className={`justify-start ${isScrolled ? "text-gray-800" : "text-white"}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link href={link.href}>{link.name}</Link>
                </Button>
              ))}
              <Button asChild className="justify-start">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    setIsMenuOpen(false)
                    alert("Resume download functionality would be implemented here")
                  }}
                >
                  Resume
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
