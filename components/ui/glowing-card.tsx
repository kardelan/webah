import { cn } from "@/lib/utils"
import type React from "react"

interface GlowingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

export function GlowingCard({ children, className, ...props }: GlowingCardProps) {
  return (
    <div
      className={cn(
        "relative border-2 border-neon-blue shadow-neon-blue/50 rounded-lg p-6 bg-black/30 backdrop-blur-sm",
        "before:absolute before:inset-0 before:border-2 before:border-neon-blue before:rounded-lg before:opacity-50 before:blur-sm",
        "after:absolute after:inset-0 after:border-2 after:border-neon-blue after:rounded-lg after:opacity-20 after:blur-lg",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
