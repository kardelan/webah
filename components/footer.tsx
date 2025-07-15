export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-blue-800">
      <div className="container mx-auto max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          {" "}
          {/* Changed to grid-cols-1 for mobile, added text alignment */}
          <div>
            <h3 className="text-yellow-400 font-bold text-xl mb-4">$MONKO</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              The memecoin with many faces, built on Algorand for the community, by the community.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-yellow-400 text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#story" className="text-gray-400 hover:text-yellow-400 text-sm">
                  Story
                </a>
              </li>
              <li>
                <a href="#tokenomics" className="text-gray-400 hover:text-yellow-400 text-sm">
                  Tokenomics
                </a>
              </li>
              <li>
                <a href="#roadmap" className="text-gray-400 hover:text-yellow-400 text-sm">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Community</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm">
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-blue-800">
          <p className="text-gray-500 text-sm">
            © 2025 $MONKO. All Rights Reserved. Built with ❤️ by the Monko Community.
          </p>
        </div>
      </div>
    </footer>
  )
}
