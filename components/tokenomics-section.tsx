import { Card, CardContent } from "@/components/ui/card"

export function TokenomicsSection() {
  return (
    <section id="tokenomics" className="py-20 px-4 bg-blue-900/50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Tokenomics</h2>
          <p className="text-gray-300 text-lg">Fair distribution for the Monko community</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-blue-900 border-blue-700">
            <CardContent className="p-8 text-center">
              <div className="mb-4">
                <img src="/monko-smart.png" alt="Smart Monko" className="w-20 h-20 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">Total Supply</h3>
              <p className="text-4xl font-bold text-white">1,000,000,000</p>
              <p className="text-gray-400 mt-2">$MONKO Tokens</p>
            </CardContent>
          </Card>

          <Card className="bg-blue-900 border-blue-700">
            <CardContent className="p-8 text-center">
              <div className="mb-4">
                <img src="/monko-vacation.png" alt="Chill Monko" className="w-20 h-20 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">Network</h3>
              <p className="text-2xl font-bold text-white">Algorand</p>
              <p className="text-gray-400 mt-2">Fast & Eco-Friendly</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Token Distribution</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-900 p-6 rounded-lg border border-blue-700">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">40%</span>
                </div>
                <h4 className="text-yellow-400 font-bold mb-2">Community</h4>
                <p className="text-gray-400 text-sm">Fair launch & airdrops</p>
              </div>
            </div>

            <div className="bg-blue-900 p-6 rounded-lg border border-blue-700">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">30%</span>
                </div>
                <h4 className="text-yellow-400 font-bold mb-2">Liquidity</h4>
                <p className="text-gray-400 text-sm">DEX liquidity pools</p>
              </div>
            </div>

            <div className="bg-blue-900 p-6 rounded-lg border border-blue-700">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">20%</span>
                </div>
                <h4 className="text-yellow-400 font-bold mb-2">Development</h4>
                <p className="text-gray-400 text-sm">Future features & growth</p>
              </div>
            </div>

            <div className="bg-blue-900 p-6 rounded-lg border border-blue-700">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">10%</span>
                </div>
                <h4 className="text-yellow-400 font-bold mb-2">Marketing</h4>
                <p className="text-gray-400 text-sm">Meme campaigns & partnerships</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
