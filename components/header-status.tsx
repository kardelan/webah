import { Badge } from "@/components/ui/badge"

export function HeaderStatus() {
  return (
    <header className="flex justify-between items-center mb-6 border-b-2 border-terminal-green pb-4">
      <h1 className="text-2xl md:text-3xl font-bold text-terminal-green">SKIMASK COSMO AI</h1> {/* Diperbarui */}
      <div className="flex flex-wrap justify-end gap-2">
        <Badge className="bg-terminal-green text-black px-3 py-1 rounded-sm text-xs md:text-sm">
          guest@skimask-cosmo-ai {/* Diperbarui */}
        </Badge>
        <Badge className="bg-terminal-green text-black px-3 py-1 rounded-sm text-xs md:text-sm">4 users online</Badge>
        <Badge className="bg-terminal-green text-black px-3 py-1 rounded-sm text-xs md:text-sm">1 AI sessions</Badge>
      </div>
    </header>
  )
}
