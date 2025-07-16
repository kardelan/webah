import { GlowingCard } from "./ui/glowing-card"
import { ProgressBar } from "./ui/progress-bar"
import { ShieldCheck, Lightbulb, Home, DollarSign } from "lucide-react"

export function FeaturesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 relative z-0">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-4xl font-bold text-neon-blue mb-12 text-glow">TESLA DOG FEATURES</h2>
        <div className="flex items-center justify-center mb-8">
          <span className="text-sm text-gray-400 mr-2">ADVANCED SECURITY</span>
          <div className="w-4 h-4 rounded-full bg-neon-blue animate-pulse" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <GlowingCard className="flex flex-col items-center justify-center p-6 text-center space-y-4">
            <ShieldCheck className="h-12 w-12 text-neon-blue text-glow" />
            <span className="text-4xl font-bold text-white text-glow">6</span>
            <p className="text-gray-300 text-lg">Security Features</p>
            <p className="text-gray-400 text-sm">AI-powered protection</p>
          </GlowingCard>
          <GlowingCard className="flex flex-col items-center justify-center p-6 text-center space-y-4">
            <Lightbulb className="h-12 w-12 text-neon-blue text-glow" />
            <span className="text-4xl font-bold text-white text-glow">AI</span>
            <p className="text-gray-300 text-lg">Powered</p>
            <p className="text-gray-400 text-sm">Tesla neural network</p>
          </GlowingCard>
          <GlowingCard className="flex flex-col items-center justify-center p-6 text-center space-y-4">
            <Home className="h-12 w-12 text-neon-blue text-glow" />
            <span className="text-4xl font-bold text-white text-glow">24/7</span>
            <p className="text-gray-300 text-lg">Protection</p>
            <p className="text-gray-400 text-sm">Home security guard</p>
          </GlowingCard>
          <GlowingCard className="flex flex-col items-center justify-center p-6 text-center space-y-4">
            <DollarSign className="h-12 w-12 text-neon-blue text-glow" />
            <span className="text-4xl font-bold text-white text-glow">$5K</span>
            <p className="text-gray-300 text-lg">Estimated Price</p>
            <p className="text-gray-400 text-sm">Affordable security</p>
          </GlowingCard>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-neon-blue mb-4 text-glow">DEVELOPMENT PROGRESS</h3>
          <div className="flex justify-between text-gray-400 text-sm mb-2">
            <span>PROTOTYPE</span>
            <span>GDA TEXAS TESTING</span>
          </div>
          <ProgressBar progress={75} className="mb-4" />
          <div className="flex justify-between text-gray-400 text-sm">
            <span>LAUNCH (2026)</span>
          </div>
        </div>
      </div>
    </section>
  )
}
