import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Shield, Users, Zap, Target, Globe } from "lucide-react"

const features = [
  {
    icon: TrendingUp,
    title: "Advanced Trading Tools",
    description:
      "Professional-grade analytics and trading interfaces designed for both beginners and experts in the meme token space.",
  },
  {
    icon: Shield,
    title: "Secure & Audited",
    description:
      "Smart contracts audited by leading security firms with multi-signature wallet protection and transparent tokenomics.",
  },
  {
    icon: Users,
    title: "Community Governance",
    description:
      "Decentralized decision making where token holders vote on key proposals and shape the future of the ecosystem.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built on high-performance blockchain infrastructure ensuring instant transactions and minimal fees.",
  },
  {
    icon: Target,
    title: "Yield Farming",
    description: "Earn passive income through our innovative staking mechanisms and liquidity mining programs.",
  },
  {
    icon: Globe,
    title: "Multi-Chain Support",
    description: "Seamlessly operate across multiple blockchains with our cross-chain bridge technology.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Powerful Features for the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Future</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover the cutting-edge tools and features that make our memecoin ecosystem the most advanced in the
            market.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
