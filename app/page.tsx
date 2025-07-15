import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { StorySection } from "@/components/story-section"
import { TokenomicsSection } from "@/components/tokenomics-section"
import { RoadmapSection } from "@/components/roadmap-section"
import { CommunitySection } from "@/components/community-section"
import { Footer } from "@/components/footer"
import { LoadingScreen } from "@/components/loading-screen" // Import LoadingScreen

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-950">
      <LoadingScreen /> {/* Tambahkan LoadingScreen di sini */}
      <Header />
      <HeroSection />
      <AboutSection />
      <StorySection />
      <TokenomicsSection />
      <RoadmapSection />
      <CommunitySection />
      <Footer />
    </div>
  )
}
