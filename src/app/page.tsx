import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="relative flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-cosmic-900 via-cosmic-800 to-cosmic-900" />
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.7 + 0.3,
                animation: `star-twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-display)] mb-6 bg-gradient-to-r from-cosmic-200 via-plasma-300 to-aurora-400 bg-clip-text text-transparent">
            Cosmos Odyssey
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-2xl mx-auto">
            Explore the universe through immersive 3D visualizations and interactive experiences.
            Your journey through the cosmos begins here.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/solar-system"
              className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-lg bg-plasma-500 hover:bg-plasma-400 text-white font-medium transition-all duration-200 shadow-glow-sm hover:shadow-glow-md"
            >
              Explore Solar System
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/space-travel"
              className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-lg border border-border-accent text-plasma-300 hover:bg-plasma-500/10 font-medium transition-all duration-200"
            >
              Start Space Travel
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center font-[family-name:var(--font-display)] mb-12">
            Discover the Universe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Solar System", desc: "Explore all 8 planets in interactive 3D", href: "/solar-system", color: "from-plasma-500/20 to-cosmic-500/20" },
              { title: "Space Travel", desc: "Journey between celestial bodies", href: "/space-travel", color: "from-aurora-500/20 to-cosmic-500/20" },
              { title: "Star Explorer", desc: "Discover stars and constellations", href: "/star-explorer", color: "from-star-500/20 to-cosmic-500/20" },
              { title: "Encyclopedia", desc: "Learn about celestial objects", href: "/encyclopedia", color: "from-nebula-500/20 to-cosmic-500/20" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group p-6 rounded-xl bg-surface-primary border border-border-default hover:border-plasma-500/30 transition-all duration-300 hover:shadow-glow-sm"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                  <div className="w-6 h-6 rounded-full bg-plasma-500/50" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-plasma-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
