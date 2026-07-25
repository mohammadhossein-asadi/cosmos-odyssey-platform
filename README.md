# Cosmos Odyssey

An immersive interactive space exploration and astronomy experience platform. Explore the universe through cutting-edge 3D visualizations and interactive experiences.

## Features

- **Solar System Explorer** - Interactive 3D solar system with all 8 planets
- **Space Travel** - Animated journey between celestial bodies
- **Star Explorer** - Interactive star map with constellation data
- **Encyclopedia** - Detailed planet information and comparisons
- **Black Hole Experience** - Visualize extreme cosmic phenomena
- **Cosmic Timeline** - Journey through 13.8 billion years of history
- **Space Missions** - Explore the history of space exploration
- **User Profile** - Track your exploration achievements

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI**: React 19, TypeScript, Tailwind CSS v4
- **3D**: Three.js, React Three Fiber, Drei
- **Animation**: GSAP
- **Testing**: Vitest
- **CI/CD**: GitHub Actions

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
src/
  app/              # Next.js App Router pages
  components/       # Reusable UI components
    ui/             # Base UI (Button, Card, Modal, etc.)
    space/          # Space-specific components
    layout/         # Layout components
    three/          # Three.js/R3F components
  features/         # Feature modules
  data/             # Static celestial data
  hooks/            # Custom React hooks
  lib/              # Utilities and helpers
  styles/           # Global CSS and themes
  types/            # TypeScript interfaces
```

## License

MIT
