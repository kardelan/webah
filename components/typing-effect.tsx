"use client"
import { useEffect, useState } from "react"

interface Props {
  text: string
  speed?: number
  onComplete?: () => void
}

export function TypingEffect({ text, speed = 70, onComplete }: Props) {
  const [shown, setShown] = useState("")

  useEffect(() => {
    if (shown.length < text.length) {
      const id = setTimeout(() => setShown(text.slice(0, shown.length + 1)), speed)
      return () => clearTimeout(id)
    } else {
      onComplete?.()
    }
  }, [shown, text, speed, onComplete])

  return <>{shown}</>
}
