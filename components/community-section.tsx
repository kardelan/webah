import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function CommunitySection() {
  return (
    <section id="community" className="py-20 px-4 bg-blue-900/50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Join the Monko Community</h2>
          <p className="text-gray-300 text-lg">Connect with fellow Monko enthusiasts and meme creators</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-blue-900 border-blue-700">
            <CardContent className="p-8 text-center">
              <img src="/monko-potato.png" alt="Community Monko" className="w-32 h-32 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Be Part of the Family</h3>
              <p className="text-gray-300 mb-6">
                Join thousands of Monko holders sharing memes, trading tips, and building the future of community-driven
                crypto together.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-green-500 text-xl">👥</span> {/* Replaced Users icon */}
                  <span className="text-gray-300">15,000+ Community Members</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-blue-500 text-xl">💬</span> {/* Replaced MessageCircle icon */}
                  <span className="text-gray-300">24/7 Active Chat</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-purple-500 text-xl">✉️</span> {/* Replaced Send icon */}
                  <span className="text-gray-300">Daily Meme Contests</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-blue-900 border-blue-700">
            <CardContent className="p-8">
              <img src="/monko-soothe.png" alt="Facepalm Monko" className="w-32 h-32 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-yellow-400 mb-4 text-center">Community Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Total Holders</span>
                  <span className="text-white font-bold">8,500+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Memes Created</span>
                  <span className="text-white font-bold">2,300+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Community Votes</span>
                  <span className="text-white font-bold">450+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Countries</span>
                  <span className="text-white font-bold">67</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white p-6 h-auto flex flex-col items-center space-y-2">
            <span className="text-4xl">🐦</span> {/* Replaced Twitter icon */}
            <span>Follow Twitter</span>
          </Button>

          <Button className="bg-blue-500 hover:bg-blue-600 text-white p-6 h-auto flex flex-col items-center space-y-2">
            <span className="text-4xl">✈️</span> {/* Replaced Send icon */}
            <span>Join Telegram</span>
          </Button>

          <Button className="bg-purple-600 hover:bg-purple-700 text-white p-6 h-auto flex flex-col items-center space-y-2">
            <span className="text-4xl">🗣️</span> {/* Replaced MessageCircle icon */}
            <span>Discord Chat</span>
          </Button>

          <Button className="bg-orange-600 hover:bg-orange-700 text-white p-6 h-auto flex flex-col items-center space-y-2">
            <span className="text-4xl">👽</span> {/* Replaced Users icon */}
            <span>Reddit Forum</span>
          </Button>
        </div>
      </div>
    </section>
  )
}
