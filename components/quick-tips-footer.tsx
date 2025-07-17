export function QuickTipsFooter() {
  return (
    <footer className="mt-12 text-terminal-green text-sm">
      <h2 className="text-xl font-bold mb-4">Quick Tips</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-terminal-amber mb-2">Terminal Commands:</h3>
          <ul className="list-none space-y-1">
            <li>help - Show all commands</li>
            <li>ls - List files</li>
            <li>cd - Change directory</li>
            <li>clear - Clear console</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-terminal-amber mb-2">Navigation:</h3>
          <ul className="list-none space-y-1">
            <li>↑↓ - Command history</li>
            <li>Tab - Auto-complete (not implemented)</li>
            <li>Ctrl+C - Stop process (not implemented)</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-terminal-amber mb-2">AI Assistant:</h3>
          <ul className="list-none space-y-1">
            <li>Multiple AI sessions</li>
            <li>Conversation history</li>
            <li>Prompt suggestions</li>
          </ul>
        </div>
      </div>

      {/* New Join Community Section */}
      <div className="mt-8">
        <h3 className="font-bold text-terminal-amber mb-2">Join Our Community:</h3>
        <ul className="list-none space-y-1 flex flex-wrap gap-x-6 gap-y-2 justify-center md:justify-start">
          <li>
            <a
              href="https://t.me/dogaiportal"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-terminal-amber transition-colors duration-200"
            >
              Telegram
            </a>
          </li>
          <li>
            <a
              href="https://x.com/dogagentai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-terminal-amber transition-colors duration-200"
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>

      <p className="mt-8 text-xs text-terminal-green/70 text-center">
        {"> Dog Agent AI v2.0.1 // All systems nominal."}
      </p>
    </footer>
  )
}
