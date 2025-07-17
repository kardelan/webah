"use client"
import { useEffect, useState } from "react"

export function PowerOnAnimation({ onComplete }: { onComplete: () => void }) {
  const boot = [
    "BOOTING DOGAGENT AI OS…", // Diperbarui
    "LOADING KERNEL MODULES…",
    "ESTABLISHING NEURAL LINK…",
    "INITIATING AI PROTOCOLS…",
    "DOGAGENT AI READY.", // Diperbarui
  ]
  const [stage, setStage] = useState(0)
  const [fade, setFade] = useState(false)

  useEffect(() => {
    if (stage < boot.length) {
      const id = setTimeout(() => setStage((s) => s + 1), 800)
      return () => clearTimeout(id)
    }
    const fadeId = setTimeout(() => setFade(true), 400)
    const doneId = setTimeout(onComplete, 1400)
    return () => {
      clearTimeout(fadeId)
      clearTimeout(doneId)
    }
  }, [stage, boot.length, onComplete])

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black text-terminal-green font-mono text-2xl md:text-4xl ${
        fade ? "animate-fade-out" : ""
      }`}
    >
      <div className="text-center space-y-2">
        {boot.slice(0, stage).map((line, i) => (
          <p key={i} className="animate-power-on-text">
            {line}
          </p>
        ))}
      </div>
    </div>
  )
}
