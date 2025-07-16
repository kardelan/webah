"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { TradingPanelSection } from "@/components/trading-panel-section"
import { RoadmapSection } from "@/components/roadmap-section"
import { MilestonesSection } from "@/components/milestones-section"
import { FaqSection } from "@/components/faq-section"
import { FooterSection } from "@/components/footer-section"
import { LoadingScreen } from "@/components/loading-screen"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate initial loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 6000) // Adjust this time to match the loading screen animation
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen onLoaded={() => setIsLoading(false)} />
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <TradingPanelSection />
        <RoadmapSection />
        <MilestonesSection />
        <FaqSection />
      </main>
      <FooterSection />
    </div>
  )
}
