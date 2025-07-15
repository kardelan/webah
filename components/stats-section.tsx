import { Card, CardContent } from "@/components/ui/card"

const stats = [
  {
    title: "$MONKO",
    subtitle: "Ticker. Monko.",
    value: "$MONKO",
  },
  {
    title: "$1.4M",
    subtitle: "Market Cap. Big.",
    value: "$1.4M",
  },
  {
    title: "-1.64%",
    subtitle: "Change. Today. Sad.",
    value: "-1.64%",
    hasMonkeyIcon: true,
  },
  {
    title: "3.8K",
    subtitle: "Holders. Many.",
    value: "3.8K",
  },
  {
    title: "$245.3K",
    subtitle: "Total. Value. Locked.",
    value: "$245.3K",
  },
  {
    title: "$15.7K",
    subtitle: "Volume. Today.",
    value: "$15.7K",
  },
]

export function StatsSection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <img src="/monkey-avatar.png" alt="Monko Character" className="w-12 h-12 object-contain" />
          </div>
          <h2 className="text-2xl font-bold text-white text-center mb-2">Be. Statistics.</h2>
          <div className="flex justify-center space-x-4">
            <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded text-sm font-semibold">$USD</span>
            <span className="bg-gray-700 text-yellow-400 px-3 py-1 rounded text-sm font-semibold">ALGO</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gray-800 border-green-500/30 border-2">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center mb-2">
                  <h3 className="text-2xl font-bold text-yellow-400">{stat.value}</h3>
                  {stat.hasMonkeyIcon && (
                    <img src="/monkey-avatar.png" alt="Monko" className="ml-2 w-8 h-8 object-contain" />
                  )}
                </div>
                <p className="text-gray-400 text-sm">{stat.subtitle}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-right">
          <p className="text-gray-500 text-sm">
            Data. From. <span className="underline">Vestige.fi</span>
          </p>
        </div>
      </div>
    </section>
  )
}
