export function FooterNavigation() {
  return (
    <footer className="mt-12 text-terminal-green text-sm text-center">
      <pre className="whitespace-pre-wrap">
        {`
+---------------------------------------------------+
| [ ABOUT ] | [ DOCS ] | [ CONTACT ] |
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
        </ul>
      </nav>
      <p className="mt-4 text-xs text-terminal-green/70 text-center">
        {"> Dog Agent AI v2.0.1 // All systems nominal."}
      </p>
    </footer>
  )
}
