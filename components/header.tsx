import Link from "next/link"
import { DogIcon } from "lucide-react" // Using a generic dog icon for placeholder

export function Header() {
  return (
    <header className="w-full py-4 px-6 flex items-center justify-between relative z-10">
      <div className="flex items-center gap-2">
        <DogIcon className="h-8 w-8 text-neon-blue animate-pulse" />
        <div className="text-2xl font-bold text-neon-blue text-glow">DOGIMUS</div>
        <span className="text-sm text-gray-400 ml-2">TESLA DOG ROBOT</span>
      </div>
      <nav className="hidden md:flex items-center gap-6">
        <Link
          href="#"
          className="text-lg font-medium text-neon-blue hover:text-white transition-colors text-glow"
          prefetch={false}
        >
          HOME
        </Link>
        <Link
          href="#"
          className="text-lg font-medium text-neon-blue hover:text-white transition-colors text-glow"
          prefetch={false}
        >
          FEATURES
        </Link>
        <Link
          href="#"
          className="text-lg font-medium text-neon-blue hover:text-white transition-colors text-glow"
          prefetch={false}
        >
          DEXTOOLS
        </Link>
        <Link
          href="#"
          className="text-lg font-medium text-neon-blue hover:text-white transition-colors text-glow"
          prefetch={false}
        >
          ROADMAP
        </Link>
        <Link
          href="#"
          className="text-lg font-medium text-neon-blue hover:text-white transition-colors text-glow"
          prefetch={false}
        >
          ABOUT
        </Link>
      </nav>
    </header>
  )
}
