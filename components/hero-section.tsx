import { GlowingCard } from "./ui/glowing-card"
import Image from "next/image"
import { Shield, Brain, Clock, DollarSign } from "lucide-react"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 relative z-0">
      <div className="container px-4 md:px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <Image
                src="/placeholder.svg?height=64&width=64"
                alt="Dogimus Logo"
                width={64}
                height={64}
                className="animate-pulse"
              />
              <div className="text-4xl font-bold text-neon-blue text-glow">DOGIMUS</div>
            </div>
            <h2 className="text-xl text-gray-400">TESLA DOG ROBOT TOKEN</h2>
            <span className="inline-block px-4 py-1 text-sm font-medium text-neon-blue border border-neon-blue rounded-full bg-neon-blue/10 backdrop-blur-sm animate-pulse">
              BETA V1.0
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-none text-white text-glow">
            ELON MUSK&apos;S <br /> TESLA DOG ROBOT 2026
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            The revolutionary Tesla Dog Robot token on Ethereum blockchain. 6 advanced features, including home security
            and vandal protection.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <GlowingCard className="flex flex-col items-center justify-center p-4 text-center space-y-2">
            <Shield className="h-10 w-10 text-neon-blue text-glow" />
            <span className="text-3xl font-bold text-white text-glow">6</span>
            <p className="text-gray-300 text-sm">SECURITY FEATURES</p>
          </GlowingCard>
          <GlowingCard className="flex flex-col items-center justify-center p-4 text-center space-y-2">
            <Brain className="h-10 w-10 text-neon-blue text-glow" />
            <span className="text-3xl font-bold text-white text-glow">AI</span>
            <p className="text-gray-300 text-sm">POWERED</p>
          </GlowingCard>
          <GlowingCard className="flex flex-col items-center justify-center p-4 text-center space-y-2">
            <Clock className="h-10 w-10 text-neon-blue text-glow" />
            <span className="text-3xl font-bold text-white text-glow">24/7</span>
            <p className="text-gray-300 text-sm">PROTECTION</p>
          </GlowingCard>
          <GlowingCard className="flex flex-col items-center justify-center p-4 text-center space-y-2">
            <DollarSign className="h-10 w-10 text-neon-blue text-glow" />
            <span className="text-3xl font-bold text-white text-glow">$5K</span>
            <p className="text-gray-300 text-sm">ESTIMATED PRICE</p>
          </GlowingCard>
        </div>
      </div>
    </section>
  )
}
