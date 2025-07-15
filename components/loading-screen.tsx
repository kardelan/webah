"use client"

import { useState, useEffect } from "react"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 5000) // 5 detik
    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-blue-950 transition-opacity duration-500">
      <div className="text-center">
        <img src="/monko-character-monk.png" alt="Loading Monko" className="w-48 h-48 mx-auto animate-pulse" />{" "}
        {/* Updated to monko-character-monk.png */}
        <p className="mt-4 text-white text-xl font-semibold">Welcome to MONKO</p>
      </div>
    </div>
  )
}
