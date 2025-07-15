import { Button } from "@/components/ui/button"

export function HeroSection() {
  const contractAddress = "2494786278"

  return (
    <section className="pt-24 pb-16 px-4 flex flex-col items-center justify-center min-h-screen">
      <div className="text-center space-y-8">
        {/* Monkey Avatar without yellow circle background */}
        <div className="relative">
          <div className="w-48 h-48 flex items-center justify-center mx-auto mb-8 overflow-hidden">
            <img src="/monko-hero-circle.png" alt="Monko Character" className="w-40 h-40 object-contain" />
          </div>
        </div>

        {/* Contract Address */}
        <div className="flex items-center justify-center space-x-2 bg-blue-800 border border-yellow-400/30 rounded-lg px-4 py-2 max-w-md mx-auto">
          <span className="text-yellow-400 font-mono text-sm">$MONKO</span>
          <span className="text-gray-400 font-mono text-sm">{contractAddress}</span>
          <button className="text-gray-400 hover:text-yellow-400 transition-colors">
            <span className="text-sm">Copy</span>
          </button>
          <button className="text-gray-400 hover:text-yellow-400 transition-colors">
            <span className="text-sm">Link</span>
          </button>
        </div>

        {/* Main Title */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold text-orange-500 flex items-center justify-center">
            BE M
            <span className="inline-block w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center overflow-hidden">
              <img src="/monko-yell.png" alt="Monko" className="w-12 h-12 object-contain" />{" "}
              {/* Updated to monko-yell.png for hype */}
            </span>
            NKO
          </h1>
          <p className="text-yellow-400 text-xl font-semibold tracking-wider">The Memecoin with Many Faces</p>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            From samurai warrior to couch potato, Monko lives every meme and embodies the spirit of crypto culture
          </p>
        </div>

        {/* Buy Button */}
        <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-3 text-lg">
          Join the Monko Army
        </Button>
      </div>
    </section>
  )
}
