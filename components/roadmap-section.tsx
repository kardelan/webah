import { Card, CardContent } from "@/components/ui/card"

const roadmapPhases = [
  {
    phase: "Phase 1",
    title: "The Birth of Monko",
    status: "completed",
    image: "/monko-character-chicken-monko.png",
    items: [
      "Token Launch on Algorand",
      "Community Building",
      "Initial Meme Creation",
      "Social Media Presence",
      "First DEX Listing",
    ],
  },
  {
    phase: "Phase 2",
    title: "Growing the Army",
    status: "current",
    image: "/monko-character-affluent.png",
    items: [
      "Major Exchange Listings",
      "NFT Collection Launch",
      "Staking Rewards Program",
      "Community Governance",
      "Meme Contest Platform",
    ],
  },
  {
    phase: "Phase 3",
    title: "Monko Ecosystem",
    status: "future",
    image: "/monko-character-chat.png",
    items: [
      "Monko DeFi Platform",
      "Cross-Chain Bridge",
      "Mobile App Launch",
      "Merchandise Store",
      "Gaming Integration",
    ],
  },
  {
    phase: "Phase 4",
    title: "To the Moon",
    status: "future",
    image: "/monko-character-goblin.png",
    items: [
      "Global Partnerships",
      "Monko Metaverse",
      "Educational Platform",
      "Charity Initiatives",
      "World Domination 🌍",
    ],
  },
]

export function RoadmapSection() {
  return (
    <section id="roadmap" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Roadmap</h2>
          <p className="text-gray-300 text-lg">The journey of Monko through the crypto universe</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {roadmapPhases.map((phase, index) => (
            <Card
              key={index}
              className={`bg-blue-900 border-2 ${
                phase.status === "completed"
                  ? "border-green-500"
                  : phase.status === "current"
                    ? "border-yellow-400"
                    : "border-blue-700"
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-sm text-gray-400">{phase.phase}</span>
                    <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                  </div>
                  <div className="flex items-center space-x-2">
                    {phase.status === "completed" && <span className="text-green-500 font-bold">Done</span>}
                    {phase.status === "current" && <span className="text-yellow-400 font-bold">In Progress</span>}
                    {phase.status === "future" && <span className="text-gray-400 font-bold">Planned</span>}
                  </div>
                </div>

                <ul className="space-y-2">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-3">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          phase.status === "completed"
                            ? "bg-green-500"
                            : phase.status === "current"
                              ? "bg-yellow-400"
                              : "bg-gray-500"
                        }`}
                      ></div>
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
