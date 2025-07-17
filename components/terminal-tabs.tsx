"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DogmaAIChat } from "@/components/dogma-ai-chat"
import { InteractiveTerminal } from "@/components/interactive-terminal"

export function TerminalTabs() {
  return (
    <Tabs defaultValue="terminal" className="w-full">
      <TabsList className="grid w-full grid-cols-2 bg-black border border-terminal-green text-terminal-green">
        <TabsTrigger
          value="terminal"
          className="data-[state=active]:bg-terminal-green data-[state=active]:text-black data-[state=active]:shadow-[0_0_5px_rgba(0,255,0,0.5)]"
        >
          Terminal
        </TabsTrigger>
        <TabsTrigger
          value="ai-assistant"
          className="data-[state=active]:bg-terminal-green data-[state=active]:text-black data-[state=active]:shadow-[0_0_5px_rgba(0,255,0,0.5)]"
        >
          AI Assistant
        </TabsTrigger>
      </TabsList>
      <TabsContent value="terminal" className="mt-4">
        <InteractiveTerminal />
      </TabsContent>
      <TabsContent value="ai-assistant" className="mt-4">
        <DogmaAIChat />
      </TabsContent>
    </Tabs>
  )
}
