"use client"

import type React from "react"

import { useState, useRef, useEffect, useCallback } from "react"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { BlinkingCursor } from "@/components/blinking-cursor"
import { TypingEffect } from "@/components/typing-effect"

interface TerminalLine {
  type: "command" | "output" | "welcome" | "ai-output" | "ai-thinking" | "error"
  content: string
}

// Simple in-memory file system simulation
const fileSystem: Record<string, any> = {
  "/": {
    type: "directory",
    contents: {
      home: {
        type: "directory",
        contents: {
          user: {
            type: "directory",
            contents: {
              "welcome.txt": { type: "file", content: "Welcome to DogAgent AI! This is a simulated file." },
              "commands.txt": {
                type: "file",
                content: "Available commands: help, ls, pwd, cd, cat, mkdir, touch, rm, whoami, clear, date.",
              },
            },
          },
        },
      },
    },
  },
}

let currentPath = "/home/user"

const getDirContents = (path: string, fs: Record<string, any>) => {
  let current = fs
  const parts = path.split("/").filter(Boolean)
  for (const part of parts) {
    if (current.contents && current.contents[part]) {
      current = current.contents[part]
    } else {
      return null // Path not found
    }
  }
  return current.contents
}

const resolvePath = (path: string, current: string) => {
  const parts = current.split("/").filter(Boolean)
  const targetParts = path.split("/").filter(Boolean)

  if (path.startsWith("/")) {
    parts.length = 0 // Absolute path
  }

  for (const part of targetParts) {
    if (part === "..") {
      if (parts.length > 0) parts.pop()
    } else if (part !== ".") {
      parts.push(part)
    }
  }
  return "/" + parts.join("/")
}

export function InteractiveTerminal() {
  const [history, setHistory] = useState<TerminalLine[]>([])
  const [input, setInput] = useState("")
  const [typingWelcome, setTypingWelcome] = useState(true)
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [commandIndex, setCommandIndex] = useState(-1)
  const [isAILoading, setIsAILoading] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const welcomeMessage = "DogAgent AI version 2.0.1 - Professional Crypto & Web3 Expert System"
  const instructions =
    "Type 'help' for commands, 'dogagent <query>' for expert analysis, or 'ai <query>' for advanced crypto consultation"

  useEffect(() => {
    if (typingWelcome) {
      setHistory([
        { type: "welcome", content: welcomeMessage },
        { type: "welcome", content: instructions },
      ])
    }
  }, [typingWelcome])

  useEffect(() => {
    scrollAreaRef.current?.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: "smooth" })
  }, [history])

  const executeCommand = useCallback(async (command: string) => {
    const [cmd, ...args] = command.split(" ")
    const output: TerminalLine[] = []

    setHistory((prev) => [...prev, { type: "command", content: command }])

    switch (cmd) {
      case "help":
        output.push({ type: "output", content: "Available commands:" })
        output.push({ type: "output", content: "  help - Show available commands" })
        output.push({ type: "output", content: "  ls - List directory contents" })
        output.push({ type: "output", content: "  pwd - Print working directory" })
        output.push({ type: "output", content: "  cd <directory> - Change directory" })
        output.push({ type: "output", content: "  cat <file> - Display file contents" })
        output.push({ type: "output", content: "  mkdir <directory> - Create directory" })
        output.push({ type: "output", content: "  touch <file> - Create empty file" })
        output.push({ type: "output", content: "  rm <file/directory> - Remove file/directory" })
        output.push({ type: "output", content: "  whoami - Display current user" })
        output.push({ type: "output", content: "  clear - Clear terminal" })
        output.push({ type: "output", content: "  date - Show current date and time" })
        output.push({ type: "output", content: "  dogagent <query> - Get crypto/web3 analysis" })
        output.push({ type: "output", content: "  ai <query> - Advanced AI consultation" })
        break
      case "ls":
        const targetPath = args[0] ? resolvePath(args[0], currentPath) : currentPath
        const contents = getDirContents(targetPath, fileSystem)
        if (contents) {
          output.push({ type: "output", content: `Contents of ${targetPath}:` })
          for (const item in contents) {
            output.push({
              type: "output",
              content: `  ${item}${contents[item].type === "directory" ? "/" : ""}`,
            })
          }
        } else {
          output.push({
            type: "error",
            content: `ls: cannot access '${args[0] || targetPath}': No such file or directory`,
          })
        }
        break
      case "pwd":
        output.push({ type: "output", content: currentPath })
        break
      case "cd":
        if (args.length === 0) {
          output.push({ type: "error", content: "cd: missing operand" })
        } else {
          const newPath = resolvePath(args[0], currentPath)
          const contents = getDirContents(newPath, fileSystem)
          if (contents) {
            currentPath = newPath
          } else {
            output.push({ type: "error", content: `cd: no such file or directory: ${args[0]}` })
          }
        }
        break
      case "cat":
        if (args.length === 0) {
          output.push({ type: "error", content: "cat: missing operand" })
        } else {
          const filePath = resolvePath(args[0], currentPath)
          let current = fileSystem
          const parts = filePath.split("/").filter(Boolean)
          let found = true
          for (const part of parts) {
            if (current.contents && current.contents[part]) {
              current = current.contents[part]
            } else {
              found = false
              break
            }
          }
          if (found && current.type === "file") {
            output.push({ type: "output", content: current.content })
          } else {
            output.push({
              type: "error",
              content: `cat: ${args[0]}: No such file or directory or not a file`,
            })
          }
        }
        break
      case "mkdir":
        if (args.length === 0) {
          output.push({ type: "error", content: "mkdir: missing operand" })
        } else {
          const newDirPath = resolvePath(args[0], currentPath)
          const parentPath = newDirPath.substring(0, newDirPath.lastIndexOf("/")) || "/"
          const dirName = newDirPath.substring(newDirPath.lastIndexOf("/") + 1)

          const parentContents = getDirContents(parentPath, fileSystem)
          if (parentContents) {
            if (!parentContents[dirName]) {
              parentContents[dirName] = { type: "directory", contents: {} }
            } else {
              output.push({
                type: "error",
                content: `mkdir: cannot create directory '${args[0]}': File exists`,
              })
            }
          } else {
            output.push({
              type: "error",
              content: `mkdir: cannot create directory '${args[0]}': No such file or directory`,
            })
          }
        }
        break
      case "touch":
        if (args.length === 0) {
          output.push({ type: "error", content: "touch: missing operand" })
        } else {
          const newFilePath = resolvePath(args[0], currentPath)
          const parentPath = newFilePath.substring(0, newFilePath.lastIndexOf("/")) || "/"
          const fileName = newFilePath.substring(newFilePath.lastIndexOf("/") + 1)

          const parentContents = getDirContents(parentPath, fileSystem)
          if (parentContents) {
            if (!parentContents[fileName]) {
              parentContents[fileName] = { type: "file", content: "" }
            } else {
              output.push({ type: "error", content: `touch: '${args[0]}': File exists` })
            }
          } else {
            output.push({
              type: "error",
              content: `touch: cannot touch '${args[0]}': No such file or directory`,
            })
          }
        }
        break
      case "rm":
        if (args.length === 0) {
          output.push({ type: "error", content: "rm: missing operand" })
        } else {
          const targetPath = resolvePath(args[0], currentPath)
          const parentPath = targetPath.substring(0, targetPath.lastIndexOf("/")) || "/"
          const itemName = targetPath.substring(targetPath.lastIndexOf("/") + 1)

          const parentContents = getDirContents(parentPath, fileSystem)
          if (parentContents && parentContents[itemName]) {
            delete parentContents[itemName]
          } else {
            output.push({
              type: "error",
              content: `rm: cannot remove '${args[0]}': No such file or directory`,
            })
          }
        }
        break
      case "whoami":
        output.push({ type: "output", content: "guest" })
        break
      case "clear":
        setHistory([])
        setTypingWelcome(true) // Re-trigger welcome message
        return
      case "date":
        output.push({ type: "output", content: new Date().toLocaleString() })
        break
      case "dogagent": // Changed from dogma
      case "ai":
        const aiQuery = args.join(" ")
        if (!aiQuery) {
          output.push({ type: "error", content: `${cmd}: missing query` })
          break
        }
        setIsAILoading(true)
        setHistory((prev) => [...prev, ...output, { type: "ai-thinking", content: "Thinking..." }])
        try {
          const response = await fetch("/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              messages: [{ role: "user", content: aiQuery }],
            }),
          })

          if (!response.ok || !response.body) {
            throw new Error(`API error: ${response.statusText}`)
          }

          const reader = response.body.getReader()
          const decoder = new TextDecoder()
          let aiResponse = ""

          // Remove the "Thinking..." message before starting to stream
          setHistory((prev) => prev.filter((line) => line.type !== "ai-thinking"))

          while (true) {
            const { value, done } = await reader.read()
            if (done) break
            const chunk = decoder.decode(value, { stream: true })
            aiResponse += chunk
            // Update history with streamed content
            setHistory((prev) => {
              const lastLine = prev[prev.length - 1]
              if (lastLine && lastLine.type === "ai-output") {
                return [...prev.slice(0, -1), { ...lastLine, content: aiResponse }]
              } else {
                return [...prev, { type: "ai-output", content: aiResponse }]
              }
            })
          }
        } catch (err: any) {
          setHistory((prev) => [
            ...prev,
            { type: "error", content: `AI Error: ${err.message || "Failed to get AI response."}` },
          ])
        } finally {
          setIsAILoading(false)
        }
        return // Return early as history is updated asynchronously
      case "":
        break // Do nothing for empty command
      default:
        output.push({ type: "error", content: `${cmd}: command not found` })
    }

    setHistory((prev) => [...prev, ...output])
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim() === "" || isAILoading) return

    setCommandHistory((prev) => [...prev, input])
    setCommandIndex(-1) // Reset index after new command
    executeCommand(input)
    setInput("")
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault()
      if (commandHistory.length > 0 && commandIndex < commandHistory.length - 1) {
        const newIndex = commandIndex + 1
        setCommandIndex(newIndex)
        setInput(commandHistory[commandHistory.length - 1 - newIndex])
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (commandIndex > 0) {
        const newIndex = commandIndex - 1
        setCommandIndex(newIndex)
        setInput(commandHistory[commandHistory.length - 1 - newIndex])
      } else if (commandIndex === 0) {
        setCommandIndex(-1)
        setInput("")
      }
    }
  }

  const handleQuickCommand = (cmd: string) => {
    setInput(cmd)
    inputRef.current?.focus()
  }

  return (
    <div className="flex flex-col h-[500px] bg-black border border-terminal-green p-4 rounded-md shadow-inner shadow-terminal-green/50">
      <div className="flex justify-between text-terminal-green text-sm mb-2">
        <span>{`guest@dogagent-ai:${currentPath}$`}</span>
        <span className="text-terminal-amber">[INTERACTIVE SHELL - AI POWERED]</span>
      </div>
      <ScrollArea className="flex-1 pr-4 mb-4" viewportRef={scrollAreaRef}>
        <div className="flex flex-col space-y-1 text-terminal-green text-sm">
          {history.map((line, index) => (
            <div key={index} className={line.type === "error" ? "text-red-500" : ""}>
              {line.type === "welcome" ? (
                <TypingEffect
                  text={line.content}
                  speed={30}
                  onComplete={() => {
                    if (index === history.length - 1) setTypingWelcome(false)
                  }}
                />
              ) : (
                <>
                  {line.type === "command" && (
                    <span className="text-terminal-amber">{`guest@dogagent-ai:${currentPath}$ `}</span>
                  )}
                  {line.content}
                </>
              )}
            </div>
          ))}
          {(isAILoading || !typingWelcome) && (
            <div className="flex items-center">
              <span className="text-terminal-amber">{`guest@dogagent-ai:${currentPath}$ `}</span>
              {isAILoading && <span className="ml-1 text-terminal-green italic">Thinking...</span>}
              <BlinkingCursor />
            </div>
          )}
        </div>
      </ScrollArea>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          ref={inputRef}
          className="flex-1 bg-black border border-terminal-green text-terminal-green placeholder:text-terminal-green/70 focus-visible:ring-terminal-green focus-visible:ring-offset-0"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your command..."
          autoFocus
          disabled={isAILoading}
        />
        <Button
          type="submit"
          className="bg-terminal-green text-black hover:bg-terminal-green/80 active:bg-terminal-green/90 shadow-[0_0_5px_rgba(0,255,0,0.5)]"
          disabled={isAILoading}
        >
          Run
        </Button>
      </form>

      <div className="flex flex-wrap gap-2 mt-4">
        <Button
          variant="outline"
          className="border-terminal-green text-terminal-green hover:bg-terminal-green/20 bg-transparent"
          onClick={() => handleQuickCommand("help")}
          disabled={isAILoading}
        >
          help
        </Button>
        <Button
          variant="outline"
          className="border-terminal-green text-terminal-green hover:bg-terminal-green/20 bg-transparent"
          onClick={() => handleQuickCommand("ls -la")}
          disabled={isAILoading}
        >
          ls -la
        </Button>
        <Button
          variant="outline"
          className="border-terminal-green text-terminal-green hover:bg-terminal-green/20 bg-transparent"
          onClick={() => handleQuickCommand("pwd")}
          disabled={isAILoading}
        >
          pwd
        </Button>
        <Button
          variant="outline"
          className="border-terminal-green text-terminal-green hover:bg-terminal-green/20 bg-transparent"
          onClick={() => handleQuickCommand("whoami")}
          disabled={isAILoading}
        >
          whoami
        </Button>
        <Button
          variant="outline"
          className="border-terminal-green text-terminal-green hover:bg-terminal-green/20 bg-transparent"
          onClick={() => handleQuickCommand("dogagent what is DeFi?")}
          disabled={isAILoading}
        >
          dogagent what is DeFi?
        </Button>
        <Button
          variant="outline"
          className="border-terminal-green text-terminal-green hover:bg-terminal-green/20 bg-transparent"
          onClick={() => handleQuickCommand("ai summarize this text")}
          disabled={isAILoading}
        >
          AI Mode
        </Button>
        <Button
          variant="outline"
          className="border-terminal-green text-terminal-green hover:bg-terminal-green/20 bg-transparent"
          onClick={() => handleQuickCommand("clear")}
          disabled={isAILoading}
        >
          clear
        </Button>
      </div>
    </div>
  )
}
