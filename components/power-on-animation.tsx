"use client"
import { useEffect, useState } from "react"

export function PowerOnAnimation({ onComplete }: { onComplete: () => void }) {
  const boot = [
    "BOOTING SKI MASK AI OS…",
    "LOADING KERNEL MODULES…",
    "ESTABLISHING NEURAL LINK…",
    "INITIATING AI PROTOCOLS…",
    "SKI MASK AI READY.",
  ]
  const [stage, setStage] = useState(0)
  const [fade, setFade] = useState(false)

  useEffect(() => {
    if (stage < boot.length) {
      // Delay antar baris teks (4 baris x 1200ms = 4.8 detik)
      const id = setTimeout(() => setStage((s) => s + 1), 1200)
      return () => clearTimeout(id)
    }
    // Mulai fade-out 200ms setelah baris terakhir muncul
    const fadeId = setTimeout(() => setFade(true), 200)
    // Selesaikan animasi (panggil onComplete) 1200ms setelah baris terakhir muncul
    // (200ms untuk mulai fade + 1000ms durasi fade-out CSS)
    const doneId = setTimeout(onComplete, 1200)
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
