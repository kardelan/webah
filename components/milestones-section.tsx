export function MilestonesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 relative z-0">
      <div className="container px-4 md:px-6 text-center">
        <div className="flex items-center justify-center mb-8">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500 ml-2" />
          <div className="w-3 h-3 rounded-full bg-green-500 ml-2" />
          <span className="text-sm text-gray-400 ml-4">FUTURE MILESTONES</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="flex flex-col items-center space-y-4">
            <div className="text-6xl font-bold text-neon-blue text-glow">2025</div>
            <h3 className="text-3xl font-bold text-white text-glow">PRODUCTION</h3>
            <p className="text-gray-300 max-w-xs">Mass production of Tesla Dog Robot begins at Giga Texas.</p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="text-6xl font-bold text-neon-blue text-glow">2026</div>
            <h3 className="text-3xl font-bold text-white text-glow">LAUNCH</h3>
            <p className="text-gray-300 max-w-xs">Official Tesla Dog Robot launch with 6 advanced security features.</p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="text-6xl font-bold text-neon-blue text-glow">2027</div>
            <h3 className="text-3xl font-bold text-white text-glow">EXPANSION</h3>
            <p className="text-gray-300 max-w-xs">Global distribution and advanced AI features implementation.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
