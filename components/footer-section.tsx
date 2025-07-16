import Link from "next/link"
import Image from "next/image"
import { Twitter, Github } from "lucide-react"

export function FooterSection() {
  return (
    <footer className="w-full py-12 md:py-16 lg:py-20 relative z-10 bg-black/50 border-t border-neon-blue/20">
      <div className="container px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center md:text-left">
        <div className="space-y-4">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <Image src="/placeholder.svg?height=48&width=48" alt="Dogimus Logo" width={48} height={48} />
            <div className="text-3xl font-bold text-neon-blue text-glow">DOGIMUS</div>
          </div>
          <p className="text-gray-400 text-sm max-w-xs mx-auto md:mx-0">
            Revolutionary Tesla Dog Robot token on Ethereum blockchain, the future of home security is here.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <Link href="#" className="text-neon-blue hover:text-white transition-colors" prefetch={false}>
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-neon-blue hover:text-white transition-colors" prefetch={false}>
              <Github className="h-6 w-6" />
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-neon-blue text-glow">QUICK ACCESS</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="#" className="hover:text-white transition-colors" prefetch={false}>
                HOME
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors" prefetch={false}>
                TOKENOMICS
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors" prefetch={false}>
                ROADMAP
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors" prefetch={false}>
                ABOUT
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-neon-blue text-glow">RESOURCES</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link
                href="#"
                className="hover:text-white transition-colors flex items-center gap-2 justify-center md:justify-start"
                prefetch={false}
              >
                <Image src="/placeholder.svg?height=20&width=20" alt="Whitepaper Icon" width={20} height={20} />
                Whitepaper
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-white transition-colors flex items-center gap-2 justify-center md:justify-start"
                prefetch={false}
              >
                <Image src="/placeholder.svg?height=20&width=20" alt="Smart Contract Icon" width={20} height={20} />
                Smart Contract
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-white transition-colors flex items-center gap-2 justify-center md:justify-start"
                prefetch={false}
              >
                <Image src="/placeholder.svg?height=20&width=20" alt="Documentation Icon" width={20} height={20} />
                Documentation
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-white transition-colors flex items-center gap-2 justify-center md:justify-start"
                prefetch={false}
              >
                <Github className="h-5 w-5" />
                Github
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4 col-span-full md:col-span-1 lg:col-span-1 flex flex-col items-center md:items-start">
          <h3 className="text-xl font-bold text-neon-blue text-glow">MADE IN AMERICA</h3>
          <Image
            src="/placeholder.svg?height=64&width=96"
            alt="US Flag"
            width={96}
            height={64}
            className="border border-neon-blue/50"
          />
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-neon-blue/20 text-center text-gray-500 text-sm">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>SYSTEM ONLINE - TESLA DOG ROBOT DEVELOPMENT ACTIVE</span>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors" prefetch={false}>
              PRIVACY POLICY
            </Link>
            <Link href="#" className="hover:text-white transition-colors" prefetch={false}>
              TERMS OF SERVICE
            </Link>
            <span>Email: dogimusai@dogimus.ai</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
