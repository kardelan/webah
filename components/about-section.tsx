"use client" // This component needs to be a client component for Framer Motion

import { motion } from "framer-motion"

export function AboutSection() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.section
      id="about"
      className="py-20 px-4 bg-blue-900/50"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Monko</h2>
          <p className="text-gray-300 text-lg">Meet the most versatile character in the crypto space</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants} className="flex justify-center">
            <img src="/monko-hamlet.png" alt="Monko Contemplating" className="w-full max-w-sm mx-auto" />
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6 text-center md:text-left">
            <h3 className="text-2xl font-bold text-yellow-400">The Philosophy of Monko</h3>
            <p className="text-gray-300 leading-relaxed text-base">
              Monko isn't just another memecoin character. He's a reflection of all of us in the crypto space -
              sometimes wise like a samurai, sometimes relaxed like on vacation, sometimes contemplative like Hamlet,
              and sometimes just chilling on the couch.
            </p>
            <p className="text-gray-300 leading-relaxed text-base">
              Built for the Ape Store, $MONKO represents the community-driven spirit of meme culture while maintaining
              the technical excellence and environmental consciousness that Ape Store provides.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
