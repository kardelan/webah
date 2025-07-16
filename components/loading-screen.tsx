"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { GlowingCard } from "./ui/glowing-card"
import { ProgressBar } from "./ui/progress-bar"

export function LoadingScreen({ onLoaded }: { onLoaded: () => void }) {
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)
  const loadingSteps = [
    "CONNECTING TO TESLA NETWORK...",
    "LOADING AI MODULES...",
    "INITIALIZING SECURITY PROTOCOLS...",
    "ESTABLISHING IDEA TEAMS LINK...",
    "SYSTEM READY",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          const newProgress = prev + 10
          if (newProgress <= (currentStep + 1) * (100 / loadingSteps.length)) {
            setCurrentStep((prevStep) => prevStep + 1)
          }
          return newProgress
        }
        clearInterval(interval)
        setTimeout(onLoaded, 500) // Give a small delay after 100% before hiding
        return 100
      })
    }, 600) // Adjust speed of loading

    return () => clearInterval(interval)
  }, [currentStep, loadingSteps.length, onLoaded])

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <GlowingCard className="w-full max-w-md p-8 text-center space-y-6">
        <Image
          src="/placeholder.svg?height=128&width=128"
          alt="Dogimus Robot"
          width={128}
          height={128}
          className="mx-auto animate-bounce"
        />
        <h1 className="text-5xl font-bold text-neon-blue text-glow">DOGIMUS</h1>
        <p className="text-gray-400 text-lg">INITIALIZING ROBOT SYSTEMS...</p>
        <ProgressBar progress={progress} />
        <div className="space-y-3 text-left">
          {loadingSteps.map((step, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className={`w-4 h-4 border-2 rounded-sm ${
                  index < currentStep ? "bg-neon-blue border-neon-blue" : "border-neon-blue/50"
                } transition-colors duration-300`}
              />
              <span
                className={`text-lg ${
                  index < currentStep ? "text-neon-blue text-glow" : "text-gray-500"
                } transition-colors duration-300`}
              >
                {step}
              </span>
            </div>
          ))}
        </div>
      </GlowingCard>
    </div>
  )
}
