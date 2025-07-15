"use client" // This component needs to be a client component for Framer Motion

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export function TokenomicsSection() {
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <motion.section
      id="tokenomics"
      className="py-20 px-4 bg-blue-900/50"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div variants={cardVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Tokenomics</h2>
          <p className="text-gray-300 text-lg">Fair distribution for the Monko community</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div variants={cardVariants}>
            <Card className="bg-blue-900 border-blue-700">
              <CardContent className="p-8 text-center">
                <div className="mb-4 flex justify-center">
                  <img
                    src="/monko-character-diamon-hands.png"
                    alt="Diamond Hands Monko"
                    className="w-20 h-20 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">Total Supply</h3>
                <p className="text-4xl font-bold text-white">1,000,000,000</p>
                <p className="text-gray-400 mt-2">$MONK Tokens</p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={cardVariants}>
            <Card className="bg-blue-900 border-blue-700">
              <CardContent className="p-8 text-center">
                <div className="mb-4 flex justify-center">
                  <img src="/monko-character-chad.png" alt="Chad Monko" className="w-20 h-20 object-contain" />
                </div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">Network</h3>
                <p className="text-2xl font-bold text-white">Base Network</p>
                <p className="text-gray-400 mt-2">Fast & Scalable</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
