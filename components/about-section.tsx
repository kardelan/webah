export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-blue-900/50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Monko</h2>
          <p className="text-gray-300 text-lg">Meet the most versatile character in the crypto space</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            {" "}
            {/* Added flex and justify-center for centering image */}
            <img src="/monko-hamlet.png" alt="Monko Contemplating" className="w-full max-w-sm mx-auto" />{" "}
            {/* Adjusted max-w-md to max-w-sm for better mobile scaling */}
          </div>

          <div className="space-y-6 text-center md:text-left">
            {" "}
            {/* Added text alignment for mobile */}
            <h3 className="text-2xl font-bold text-yellow-400">The Philosophy of Monko</h3>
            <p className="text-gray-300 leading-relaxed text-base">
              Monko isn't just another memecoin character. He's a reflection of all of us in the crypto space -
              sometimes wise like a samurai, sometimes relaxed like on vacation, sometimes contemplative like Hamlet,
              and sometimes just chilling on the couch.
            </p>
            <p className="text-gray-300 leading-relaxed text-base">
              Built on the Algorand blockchain, $MONKO represents the community-driven spirit of meme culture while
              maintaining the technical excellence and environmental consciousness that Algorand provides.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
