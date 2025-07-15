"use client" // This component needs to be a client component for Framer Motion

import { motion } from "framer-motion"

export function Footer() {
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.footer
      className="py-12 px-4 border-t border-blue-800"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          <motion.div variants={itemVariants}>
            <h3 className="text-yellow-400 font-bold text-xl mb-4">$MONK</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              The memecoin with many faces, built for the community, by the community.
            </p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-yellow-400 text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#story" className="text-gray-400 hover:text-yellow-400 text-sm">
                  Story
                </a>
              </li>
              <li>
                <a href="#tokenomics" className="text-gray-400 hover:text-yellow-400 text-sm">
                  Tokenomics
                </a>
              </li>
              <li>
                <a href="#roadmap" className="text-gray-400 hover:text-yellow-400 text-sm">
                  Roadmap
                </a>
              </li>
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-4">Community</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm">
                  Telegram
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="text-center pt-8 border-t border-blue-800">
          <p className="text-gray-500 text-sm">
            © 2025 $MONK. All Rights Reserved. Built with ❤️ by the Monko Community.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  )
}
