import { Button } from "@/components/ui/button"

export function HeroSection() {
  const contractAddress = "2494786278"

  return (
    <section className="pt-24 pb-16 px-4 flex flex-col items-center justify-center min-h-screen text-center">
      <div className="space-y-8 max-w-4xl mx-auto">
        {/* Monkey Avatar without yellow circle background */}
        <div className="relative">
          <div className="w-48 h-48 flex items-center justify-center mx-auto mb-8 overflow-hidden">
            <img src="/monko-hero-circle.png" alt="Monko Character" className="w-40 h-40 object-contain" />
          </div>
        </div>

        {/* Contract Address */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2 bg-blue-800 border border-yellow-400/30 rounded-lg px-4 py-2 max-w-md mx-auto text-sm">
          <span className="text-yellow-400 font-mono">$MONKO</span>
          <span className="text-gray-400 font-mono break-all">{contractAddress}</span>
          <div className="flex space-x-2">
            <button className="text-gray-400 hover:text-yellow-400 transition-colors">Copy</button>
            <button className="text-gray-400 hover:text-yellow-400 transition-colors">Link</button>
          </div>
        </div>

        {/* Main Title */}
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-orange-500 flex flex-col sm:flex-row items-center justify-center leading-tight">
            BE M
            <span className="inline-block w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center overflow-hidden mx-auto sm:mx-2 my-2 sm:my-0">
              <img src="/monko-yell.png" alt="Monko" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
            </span>
            NKO
          </h1>
          <p className="text-yellow-400 text-lg sm:text-xl font-semibold tracking-wider">
            The Memecoin with Many Faces
          </p>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
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
