export function FooterNavigation() {
  return (
    <footer className="mt-12 text-terminal-green text-sm text-center">
      <pre className="whitespace-pre-wrap">
        {`
+---------------------------------------------------+
| [ ABOUT ] | [ DOCS ] | [ CONTACT ] |
+---------------------------------------------------+
| [ BUY DOGAI ] |
+---------------------------------------------------+
        `}
      </pre>
      <nav className="mt-2">
        <ul className="flex justify-center space-x-6 flex-wrap">
          <li>
            <a href="#" className="hover:text-terminal-amber transition-colors duration-200">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-terminal-amber transition-colors duration-200">
              DOCS
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-terminal-amber transition-colors duration-200">
              CONTACT
            </a>
          </li>
          <li>
            <a
              href="https://ape.store/base/0x1715de95144bd4442e590447df2aef25908d4fb4"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-terminal-amber transition-colors duration-200"
            >
              BUY DOGAI
            </a>
          </li>
        </ul>
      </nav>
      <p className="mt-4 text-xs text-terminal-green/70 text-center">
        {"> SKI MASK AI v2.0.1 // All systems nominal."}
      </p>
    </footer>
  )
}
