import { GlowingCard } from "./ui/glowing-card"

export function TradingPanelSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 relative z-0">
      <div className="container px-4 md:px-6 text-center">
        <GlowingCard className="max-w-6xl mx-auto p-8 space-y-8">
          <h2 className="text-4xl font-bold text-neon-blue text-glow">LIVE TRADING PANEL</h2>
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <div className="w-3 h-3 rounded-full bg-neon-blue animate-pulse" />
            <span>SEXTools INTEGRATION</span>
          </div>
          <GlowingCard className="w-full h-[400px] flex items-center justify-center text-gray-500 text-2xl">
            <div className="absolute top-4 left-4 flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="absolute top-4 right-4 text-neon-blue text-lg font-bold">DOGIMUS TRADING CHART</span>
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-white animate-bounce" style={{ animationDelay: "0s" }} />
              <div className="w-3 h-3 rounded-full bg-white animate-bounce" style={{ animationDelay: "0.2s" }} />
              <div className="w-3 h-3 rounded-full bg-white animate-bounce" style={{ animationDelay: "0.4s" }} />
            </div>
          </GlowingCard>
        </GlowingCard>
      </div>
    </section>
  )
}
