"use client" // Make this a client component

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react" // Import icons for mobile menu

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const headerOffset = 80 // Approximate height of the fixed header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
      setIsMobileMenuOpen(false) // Close mobile menu after clicking a link
    }
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-blue-950/95 backdrop-blur-sm border-b border-blue-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault()
              handleScroll("about")
            }}
            className="text-gray-300 hover:text-yellow-400 transition-colors text-lg"
          >
            About
          </a>
          <a
            href="#story"
            onClick={(e) => {
              e.preventDefault()
              handleScroll("story")
            }}
            className="text-gray-300 hover:text-yellow-400 transition-colors text-lg"
          >
            Story
          </a>
          <a
            href="#tokenomics"
            onClick={(e) => {
              e.preventDefault()
              handleScroll("tokenomics")
            }}
            className="text-gray-300 hover:text-yellow-400 transition-colors text-lg"
          >
            Tokenomics
          </a>
          <a
            href="#roadmap"
            onClick={(e) => {
              e.preventDefault()
              handleScroll("roadmap")
            }}
            className="text-gray-300 hover:text-yellow-400 transition-colors text-lg"
          >
            Roadmap
          </a>
          <a
            href="#community"
            onClick={(e) => {
              e.preventDefault()
              handleScroll("community")
            }}
            className="text-gray-300 hover:text-yellow-400 transition-colors text-lg"
          >
            Community
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-300 hover:text-yellow-400"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </Button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-blue-950/90 backdrop-blur-md z-40 flex flex-col items-center justify-center space-y-8 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-4 right-4 text-gray-300 hover:text-yellow-400"
              aria-label="Close mobile menu"
            >
              <X className="h-8 w-8" />
            </Button>
            <nav className="flex flex-col items-center space-y-6">
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault()
                  handleScroll("about")
                }}
                className="text-gray-300 hover:text-yellow-400 transition-colors text-3xl font-bold"
              >
                About
              </a>
              <a
                href="#story"
                onClick={(e) => {
                  e.preventDefault()
                  handleScroll("story")
                }}
                className="text-gray-300 hover:text-yellow-400 transition-colors text-3xl font-bold"
              >
                Story
              </a>
              <a
                href="#tokenomics"
                onClick={(e) => {
                  e.preventDefault()
                  handleScroll("tokenomics")
                }}
                className="text-gray-300 hover:text-yellow-400 transition-colors text-3xl font-bold"
              >
                Tokenomics
              </a>
              <a
                href="#roadmap"
                onClick={(e) => {
                  e.preventDefault()
                  handleScroll("roadmap")
                }}
                className="text-gray-300 hover:text-yellow-400 transition-colors text-3xl font-bold"
              >
                Roadmap
              </a>
              <a
                href="#community"
                onClick={(e) => {
                  e.preventDefault()
                  handleScroll("community")
                }}
                className="text-gray-300 hover:text-yellow-400 transition-colors text-3xl font-bold"
              >
                Community
              </a>
            </nav>
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-3 text-xl">
              Buy $MONK
            </Button>
          </div>
        )}

        {/* Buy $MONK Button (Desktop) */}
        <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold hidden md:block">Buy $MONK</Button>
      </div>
    </header>
  )
}
