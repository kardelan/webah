import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Lock } from "lucide-react"

export function WalletSection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-md">
        <Card className="bg-gray-800 border-green-500/30 border-2">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Welcome. New. Monks.</h3>
            <p className="text-gray-400 mb-6">Get. Wallet. Be. Algorand.</p>

            <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold mb-4 w-full">
              <span className="mr-2">⚡</span>
              Pera Wallet
            </Button>

            <div className="flex items-center justify-center text-gray-400 text-sm">
              <Lock className="w-4 h-4 mr-2" />
              Keys. Belong. You.
            </div>

            <div className="mt-4">
              <img src="/monkey-avatar.png" alt="Monko Character" className="w-12 h-12 object-contain mx-auto" />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
