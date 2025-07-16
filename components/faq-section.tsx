import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { GlowingCard } from "./ui/glowing-card"

export function FaqSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 relative z-0">
      <div className="container px-4 md:px-6 text-center">
        <GlowingCard className="max-w-4xl mx-auto p-8 space-y-6">
          <h2 className="text-3xl font-bold text-neon-blue text-glow mb-6">ABOUT TESLA DOG ROBOT</h2>
          <Accordion type="single" collapsible className="w-full">
            <GlowingCard className="mb-4 p-0 border-none shadow-none animate-none">
              <AccordionItem value="item-1" className="border-b border-neon-blue/50">
                <AccordionTrigger className="text-lg font-medium text-white hover:text-neon-blue transition-colors">
                  When will it be available?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 text-left p-4">
                  The Tesla Dog Robot is projected to launch in Q3 2026, with mass production starting in 2025.
                </AccordionContent>
              </AccordionItem>
            </GlowingCard>
            <GlowingCard className="mb-4 p-0 border-none shadow-none animate-none">
              <AccordionItem value="item-2" className="border-b border-neon-blue/50">
                <AccordionTrigger className="text-lg font-medium text-white hover:text-neon-blue transition-colors">
                  How does DOGIMUS token work?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 text-left p-4">
                  The DOGIMUS token is built on the Ethereum blockchain and serves as the utility token for the Tesla
                  Dog Robot ecosystem, enabling various features and transactions.
                </AccordionContent>
              </AccordionItem>
            </GlowingCard>
            <GlowingCard className="mb-4 p-0 border-none shadow-none animate-none">
              <AccordionItem value="item-3" className="border-b border-neon-blue/50">
                <AccordionTrigger className="text-lg font-medium text-white hover:text-neon-blue transition-colors">
                  What is the Tesla Dog Robot?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 text-left p-4">
                  The Tesla Dog Robot is a revolutionary AI-powered robot designed for home security and vandal
                  protection, integrated with advanced features and blockchain technology.
                </AccordionContent>
              </AccordionItem>
            </GlowingCard>
            <GlowingCard className="mb-4 p-0 border-none shadow-none animate-none">
              <AccordionItem value="item-4" className="border-b border-neon-blue/50">
                <AccordionTrigger className="text-lg font-medium text-white hover:text-neon-blue transition-colors">
                  What are the 6 security features?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 text-left p-4">
                  The 6 security features include advanced motion detection, facial recognition, real-time alerts,
                  autonomous patrolling, sound detection, and integration with smart home systems.
                </AccordionContent>
              </AccordionItem>
            </GlowingCard>
          </Accordion>
        </GlowingCard>
      </div>
    </section>
  )
}
