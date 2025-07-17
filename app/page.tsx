"use client"

import { useState } from "react"
import { TerminalLayout } from "@/components/terminal-layout"
import { SkiMaskAIAvatar } from "@/components/ski-mask-ai-avatar"
import { PowerOnAnimation } from "@/components/power-on-animation"
import { HeaderStatus } from "@/components/header-status"
import { TerminalTabs } from "@/components/terminal-tabs"
import { QuickTipsFooter } from "@/components/quick-tips-footer"

export default function Home() {
  const [showPowerOn, setShowPowerOn] = useState(true)

  const handlePowerOnComplete = () => {
    setShowPowerOn(false)
  }

  if (showPowerOn) {
    return <PowerOnAnimation onComplete={handlePowerOnComplete} />
  }

  return (
    <TerminalLayout>
      <HeaderStatus />

      <main className="flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-12 p-4 md:p-8">
        <section className="flex-1 w-full lg:w-auto max-w-4xl">
          <TerminalTabs />
        </section>

        <aside className="lg:w-1/3 flex justify-center items-center lg:mt-0 mt-8">
          <SkiMaskAIAvatar />
        </aside>
      </main>

      <QuickTipsFooter />
    </TerminalLayout>
  )
}
