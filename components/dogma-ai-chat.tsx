"use client"

import { useChat } from "@ai-sdk/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BlinkingCursor } from "@/components/blinking-cursor"
import { useEffect, useRef } from "react"

export function DogmaAIChat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    streamProtocol: "text",
  })
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => bottomRef.current?.scrollIntoView({ behavior: "smooth" }), [messages])

  return (
    <div className="flex flex-col h-[400px] md:h-[500px] bg-black border border-terminal-green p-4 rounded-md">
      <ScrollArea className="flex-1 pr-4 mb-4">
        <div className="space-y-2 text-sm">
          {messages.length === 0 && (
            <p className="text-terminal-amber">{"> Ready for queries. Type your command below."}</p>
          )}
          {messages.map((m) => (
            <p key={m.id} className={m.role === "user" ? "text-terminal-amber" : "text-terminal-green"}>
              <span className="font-bold">{m.role === "user" ? "USER" : "DOG AGENT"}:</span> {m.content}
            </p>
          ))}
          {isLoading && (
            <p className="text-terminal-green italic">
              <span className="font-bold">DOG AGENT:</span> Thinking...
              <BlinkingCursor />
            </p>
          )}
          {error && (
            <p className="text-red-500">
              <span className="font-bold">ERROR:</span> {error.message}
            </p>
          )}
          <div ref={bottomRef} />
        </div>
      </ScrollArea>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          className="flex-1 bg-black border border-terminal-green text-terminal-green placeholder:text-terminal-green/70 focus-visible:ring-terminal-green"
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message…"
          disabled={isLoading}
        />
        <Button
          type="submit"
          className="bg-terminal-green text-black hover:bg-terminal-green/80 shadow-[0_0_5px_rgba(0,255,0,.5)]"
          disabled={isLoading}
        >
          Send
        </Button>
      </form>
    </div>
  )
}
