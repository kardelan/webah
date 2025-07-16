import { cn } from "@/lib/utils"
import type React from "react"

interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  progress: number
  className?: string
}

export function ProgressBar({ progress, className, ...props }: ProgressBarProps) {
  return (
    <div
      className={cn("w-full h-4 bg-gray-800 rounded-full overflow-hidden border border-neon-blue/50", className)}
      {...props}
    >
      <div
        className="h-full bg-neon-blue rounded-full transition-all duration-500 ease-out shadow-neon-blue/70"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
