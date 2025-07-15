export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-blue-900/50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Monko</h2>
          <p className="text-gray-300 text-lg">Meet the most versatile character in the crypto space</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="/monko-see.png" alt="Monko Contemplating" className="w-full max-w-md mx-auto" />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-yellow-400">The Philosophy of Monko</h3>
            <p className="text-gray-300 leading-relaxed">
              Monko isn't just another memecoin character. He's a reflection of all of us in the crypto space -
              sometimes wise like a samurai, sometimes relaxed like on vacation, sometimes contemplative like Hamlet,
              and sometimes just chilling on the couch.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Built on the Algorand blockchain, $MONKO represents the community-driven spirit of meme culture while
              maintaining the technical excellence and environmental consciousness that Algorand provides.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">✓</span> {/* Replaced Check icon */}
              </div>
              <span className="text-gray-300">Community Owned & Driven</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">✓</span> {/* Replaced Check icon */}
              </div>
              <span className="text-gray-300">Environmentally Friendly (Algorand)</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">✓</span> {/* Replaced Check icon */}
              </div>
              <span className="text-gray-300">Meme-Driven Utility</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
