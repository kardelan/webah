import { Card, CardContent } from "@/components/ui/card"

export function TokenomicsSection() {
  return (
    <section id="tokenomics" className="py-20 px-4 bg-blue-900/50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Tokenomics</h2>
          <p className="text-gray-300 text-lg">Fair distribution for the Monko community</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {" "}
          {/* Changed to grid-cols-1 for mobile */}
          <Card className="bg-blue-900 border-blue-700">
            <CardContent className="p-8 text-center">
              <div className="mb-4 flex justify-center">
                {" "}
                {/* Added flex justify-center for image */}
                <img
                  src="/monko-character-diamon-hands.png"
                  alt="Diamond Hands Monko"
                  className="w-20 h-20 object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">Total Supply</h3>
              <p className="text-4xl font-bold text-white">1,000,000,000</p>
              <p className="text-gray-400 mt-2">$MONKO Tokens</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-900 border-blue-700">
            <CardContent className="p-8 text-center">
              <div className="mb-4 flex justify-center">
                {" "}
                {/* Added flex justify-center for image */}
                <img src="/monko-character-chad.png" alt="Chad Monko" className="w-20 h-20 object-contain" />
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">Network</h3>
              <p className="text-2xl font-bold text-white">Algorand</p>
              <p className="text-gray-400 mt-2">Fast & Eco-Friendly</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
