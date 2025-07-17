import type React from "react"

export function TerminalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-terminal-green font-mono flex items-center justify-center p-4">
      <div className="w-full max-w-6xl border-2 border-terminal-green rounded-lg p-6 md:p-8 lg:p-10 shadow-[0_0_15px_rgba(0,255,0,0.7)] relative overflow-hidden">
        {/* scan-lines */}
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            background:
              "repeating-linear-gradient(0deg,rgba(0,0,0,.1) 0,rgba(0,0,0,.1) 1px,transparent 1px,transparent 2px)",
          }}
        />
        {children}
      </div>
    </div>
  )
}
