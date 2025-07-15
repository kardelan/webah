import { Card, CardContent } from "@/components/ui/card"

const stories = [
  {
    title: "The Samurai Phase",
    image: "/monko-samurai.png",
    description:
      "When the market was tough, Monko became a warrior. With discipline and honor, he taught the community about HODLing through the storms.",
    meme: '"The way of the diamond hands is not for the weak" - Monko-san',
  },
  {
    title: "Vacation Vibes",
    image: "/monko-vacation.png",
    description:
      "During the bull run, Monko put on his shades and Hawaiian shirt. Life was good, gains were flowing, and everyone was invited to the party.",
    meme: '"Aloha to the moon, bro!" - Chill Monko',
  },
  {
    title: "The Philosopher",
    image: "/monko-see.png",
    description:
      "In quiet moments, Monko contemplates the deeper meaning of DeFi, memes, and the nature of digital value. To moon or not to moon?",
    meme: '"Alas, poor FIAT, I knew thee well" - Intellectual Monko',
  },
  {
    title: "The Hype Beast",
    image: "/monko-character-chicken-monko.png",
    description:
      "When big news drops or pumps happen, Monko can't contain his excitement. He's the voice of every trader's inner emotions.",
    meme: '"LFG! TO THE MOON! 🚀🚀🚀" - Excited Monko',
  },
  {
    title: "The Genius",
    image: "/monko-smart.png",
    description:
      "Monko studies the charts, reads the whitepapers, and shares alpha with the community. He's got the big brain energy we all need.",
    meme: '"Actually, if you look at the tokenomics..." - Smart Monko',
  },
  {
    title: "The Couch Potato",
    image: "/monko-potato.png",
    description:
      "Sometimes you just need to relax, stake your tokens, and let the passive income flow while binge-watching crypto YouTube.",
    meme: '"Why trade when you can stake and chill?" - Lazy Monko',
  },
]

export function StorySection() {
  return (
    <section id="story" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">The Many Faces of Monko</h2>
          <p className="text-gray-300 text-lg">
            Every crypto journey has different phases, and Monko has lived them all
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <Card key={index} className="bg-blue-900 border-blue-700 hover:border-yellow-400 transition-colors">
              <CardContent className="p-6">
                <div className="mb-4">
                  <img
                    src={story.image || "/placeholder.svg"}
                    alt={story.title}
                    className="w-24 h-24 mx-auto object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-yellow-400 mb-3 text-center">{story.title}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{story.description}</p>
                <div className="bg-blue-800 p-3 rounded-lg">
                  <p className="text-yellow-400 text-xs italic text-center">{story.meme}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
