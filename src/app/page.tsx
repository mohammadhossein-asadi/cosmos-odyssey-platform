"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const features = [
  { title: "Solar System", description: "Explore all 8 planets in interactive 3D", href: "/solar-system", icon: "🪐", color: "from-plasma-500/20 to-cosmic-500/20" },
  { title: "Star Catalog", description: "Discover stars with spectral classification", href: "/star-catalog", icon: "⭐", color: "from-star-500/20 to-cosmic-500/20" },
  { title: "Galaxy Explorer", description: "Journey through galaxies and nebulae", href: "/galaxy-explorer", icon: "🌌", color: "from-aurora-500/20 to-cosmic-500/20" },
  { title: "Nebula Viewer", description: "Immersive 3D nebula visualization", href: "/nebula-viewer", icon: "☁️", color: "from-nebula-500/20 to-cosmic-500/20" },
  { title: "Black Holes", description: "Visualize the most extreme objects", href: "/black-hole-visualizer", icon: "🕳️", color: "from-plasma-500/20 to-nebula-500/20" },
  { title: "Exoplanets", description: "Discover worlds beyond our solar system", href: "/exoplanet-explorer", icon: "🌍", color: "from-aurora-500/20 to-star-500/20" },
  { title: "Space Travel", description: "Journey between celestial destinations", href: "/space-travel", icon: "🚀", color: "from-star-500/20 to-plasma-500/20" },
  { title: "Star Chart", description: "Interactive night sky map", href: "/star-chart", icon: "🗺️", color: "from-plasma-500/20 to-star-500/20" },
];

const stats = [
  { label: "Planets", value: "8", icon: "🪐" },
  { label: "Stars", value: "50+", icon: "⭐" },
  { label: "Galaxies", value: "20+", icon: "🌌" },
  { label: "Nebulae", value: "15+", icon: "☁️" },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[85vh] text-center px-4 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-cosmic-900 via-cosmic-800 to-cosmic-900" />
          {mounted && [...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-px bg-white rounded-full"
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
          <div className="mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-plasma-500/20 border border-plasma-500/30 text-plasma-300 text-xs font-medium mb-4">
              Interactive Space Exploration Platform
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-[family-name:var(--font-display)] mb-6 bg-gradient-to-r from-cosmic-200 via-plasma-300 to-aurora-400 bg-clip-text text-transparent leading-tight">
            Cosmos Odyssey
          </h1>
          <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
            Explore the universe through immersive 3D visualizations.
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

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 border-y border-border-default bg-surface-primary/50">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-text-primary font-[family-name:var(--font-display)]">{stat.value}</div>
              <div className="text-xs text-text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center font-[family-name:var(--font-display)] mb-4">
              Explore the Universe
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Choose your destination and begin your cosmic journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <Link
                key={feature.href}
                href={feature.href}
                className="group p-6 rounded-xl bg-surface-primary border border-border-default hover:border-plasma-500/30 transition-all duration-300 hover:shadow-glow-sm"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-plasma-300 transition-colors font-[family-name:var(--font-display)]">
                  {feature.title}
                </h3>
                <p className="text-sm text-text-secondary">{feature.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-cosmic-900 via-cosmic-800 to-cosmic-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] mb-4">
            Ready to Explore?
          </h2>
          <p className="text-text-secondary mb-8">
            Start your journey through the cosmos with our interactive 3D experiences
          </p>
          <Link
            href="/solar-system"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-plasma-500 hover:bg-plasma-400 text-white font-medium transition-all shadow-glow-sm hover:shadow-glow-md"
          >
            Begin Your Journey
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border-default">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs text-text-muted">
            Cosmos Odyssey - Interactive Space Exploration Platform
          </p>
          <p className="text-[10px] text-text-muted mt-1">
            Built with Next.js, Three.js, and React Three Fiber
          </p>
        </div>
      </footer>
    </main>
  );
}
