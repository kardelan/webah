import { GlowingCard } from "./ui/glowing-card"
import { Rocket, Wrench, FlaskConical } from "lucide-react"

export function RoadmapSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 relative z-0">
      <div className="container px-4 md:px-6 text-center">
        <div className="max-w-6xl mx-auto mb-12">
          <div className="flex justify-center items-center gap-4 mb-8">
            <GlowingCard className="px-6 py-3 text-lg font-bold text-neon-blue">
              CONTRACT: 0x0000000000000000000000000000000000000000
            </GlowingCard>
            <GlowingCard className="px-6 py-3 text-lg font-bold text-neon-blue">NETWORK: Ethereum</GlowingCard>
            <GlowingCard className="px-6 py-3 text-lg font-bold text-neon-blue">DEX: Uniswap V3</GlowingCard>
          </div>
        </div>

        <h2 className="text-4xl font-bold text-neon-blue mb-12 text-glow">ROADMAP</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <GlowingCard className="p-6 space-y-4 text-left">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <h3 className="text-xl font-bold text-neon-blue ml-4">PHASE 1 - Q1 2025</h3>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <Rocket className="h-12 w-12 text-neon-blue text-glow" />
              <h4 className="text-2xl font-bold text-white text-glow">LAUNCH</h4>
            </div>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Website and Whitepaper</li>
              <li>Community building</li>
              <li>Smart contract audit</li>
            </ul>
          </GlowingCard>

          <GlowingCard className="p-6 space-y-4 text-left">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <h3 className="text-xl font-bold text-neon-blue ml-4">PHASE 2 - Q2 2025</h3>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <Wrench className="h-12 w-12 text-neon-blue text-glow" />
              <h4 className="text-2xl font-bold text-white text-glow">DEVELOPMENT</h4>
            </div>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>DEX listing</li>
              <li>Marketing campaigns</li>
              <li>Partnership announcements</li>
              <li>Tesla Dog Robot research</li>
            </ul>
          </GlowingCard>

          <GlowingCard className="p-6 space-y-4 text-left">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <h3 className="text-xl font-bold text-neon-blue ml-4">PHASE 3 - Q3 2025</h3>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <FlaskConical className="h-12 w-12 text-neon-blue text-glow" />
              <h4 className="text-2xl font-bold text-white text-glow">PROTOTYPE</h4>
            </div>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Tesla Dog Robot prototype</li>
              <li>AI integration testing</li>
              <li>Security feature development</li>
              <li>Beta testing program</li>
            </ul>
          </GlowingCard>
        </div>
      </div>
    </section>
  )
}
