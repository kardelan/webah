"use client" // This component needs to be a client component for Framer Motion

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export function CommunitySection() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <motion.section
      id="community"
      className="py-20 px-4 bg-blue-900/50"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div variants={cardVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Join the Monko Community</h2>
          <p className="text-gray-300 text-lg">Connect with fellow Monko enthusiasts and meme creators</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div variants={cardVariants}>
            <Card className="bg-blue-900 border-blue-700">
              <CardContent className="p-8 text-center">
                <img
                  src="/monko-character-chat.png"
                  alt="Community Monko"
                  className="w-32 h-32 mx-auto mb-6 object-contain"
                />
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">Be Part of the Family</h3>
                <p className="text-gray-300 mb-6 text-base">
                  Join fellow Monko enthusiasts sharing memes, trading tips, and building the future of community-driven
                  crypto together.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={cardVariants}>
            <Card className="bg-blue-900 border-blue-700">
              <CardContent className="p-8">
                <img
                  src="/monko-character-affluent.png"
                  alt="Curious Monko"
                  className="w-32 h-32 mx-auto mb-6 object-contain"
                />
                <h3 className="text-2xl font-bold text-yellow-400 mb-4 text-center">Community Highlights</h3>
                <div className="space-y-4 text-base">
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
          </motion.div>
        </div>

        <motion.div variants={buttonVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white p-6 h-auto flex flex-col items-center space-y-2 text-lg">
            <img src="/twitter-icon.png" alt="Twitter Icon" className="w-10 h-10 object-contain" />
            <span>Follow Twitter</span>
          </Button>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white p-6 h-auto flex flex-col items-center space-y-2 text-lg">
            <img src="/telegram-icon.png" alt="Telegram Icon" className="w-10 h-10 object-contain" />
            <span>Join Telegram</span>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  )
}
