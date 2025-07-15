export function HeroBanner() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="container mx-auto">
        <div className="relative">
          <img src="/monkey-hero.jpg" alt="Monko Hero" className="w-full h-64 md:h-96 object-cover rounded-2xl" />
          <div className="absolute inset-0 bg-black/40 rounded-2xl flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">
                TO THE <span className="text-yellow-400">MOON</span>
              </h2>
              <p className="text-xl md:text-2xl">With. Monko. Together.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
