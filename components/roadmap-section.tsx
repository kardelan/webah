"use client" // This component needs to be a client component for Framer Motion

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const roadmapPhases = [
  {
    phase: "Phase 1",
    title: "The Birth of Monko",
    status: "completed",
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
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <motion.section
      id="roadmap"
      className="py-20 px-4"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto">
        <motion.div variants={cardVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Roadmap</h2>
          <p className="text-gray-300 text-lg">The journey of Monko through the crypto universe</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {roadmapPhases.map((phase, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card
                className={`bg-blue-900 border-2 ${
                  phase.status === "completed"
                    ? "border-green-500"
                    : phase.status === "current"
                      ? "border-yellow-400"
                      : "border-blue-700"
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row items-center justify-between mb-4 text-center sm:text-left">
                    <div>
                      <span className="text-sm text-gray-400">{phase.phase}</span>
                      <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                    </div>
                    <div className="flex items-center space-x-2 mt-2 sm:mt-0">
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
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
