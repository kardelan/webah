import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-blue-950/95 backdrop-blur-sm border-b border-blue-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-yellow-400 font-bold text-2xl">$MONKO</div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-gray-300 hover:text-yellow-400 transition-colors">
            About
          </a>
          <a href="#story" className="text-gray-300 hover:text-yellow-400 transition-colors">
            Story
          </a>
          <a href="#tokenomics" className="text-gray-300 hover:text-yellow-400 transition-colors">
            Tokenomics
          </a>
          <a href="#roadmap" className="text-gray-300 hover:text-yellow-400 transition-colors">
            Roadmap
          </a>
          <a href="#community" className="text-gray-300 hover:text-yellow-400 transition-colors">
            Community
          </a>
        </nav>

        <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold">Buy $MONKO</Button>
      </div>
    </header>
  )
}
