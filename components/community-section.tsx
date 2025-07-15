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
              <img
                src="/monko-character-professor-teaching.png"
                alt="Community Monko"
                className="w-32 h-32 mx-auto mb-6"
              />{" "}
              {/* Updated to monko-character-professor-teaching.png */}
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Be Part of the Family</h3>
              <p className="text-gray-300 mb-6">
                Join fellow Monko enthusiasts sharing memes, trading tips, and building the future of community-driven
                crypto together.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-green-500 text-xl">👥</span>
                  <span className="text-gray-300">Growing Community</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-blue-500 text-xl">💬</span>
                  <span className="text-gray-300">Active Discussions</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-purple-500 text-xl">✉️</span>
                  <span className="text-gray-300">Exciting Contests</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-blue-900 border-blue-700">
            <CardContent className="p-8">
              <img src="/monko-template-what.png" alt="Curious Monko" className="w-32 h-32 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-yellow-400 mb-4 text-center">Community Highlights</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Total Members</span>
                  <span className="text-white font-bold">Join to see!</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Meme Creations</span>
                  <span className="text-white font-bold">Endless fun!</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Community Engagements</span>
                  <span className="text-white font-bold">Be part of it!</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Global Reach</span>
                  <span className="text-white font-bold">Worldwide!</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white p-6 h-auto flex flex-col items-center space-y-2">
            <img src="/twitter-icon.png" alt="Twitter Icon" className="w-10 h-10 object-contain" />
            <span>Follow Twitter</span>
          </Button>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white p-6 h-auto flex flex-col items-center space-y-2">
            <img src="/telegram-icon.png" alt="Telegram Icon" className="w-10 h-10 object-contain" />
            <span>Join Telegram</span>
          </Button>
        </div>
      </div>
    </section>
  )
}
