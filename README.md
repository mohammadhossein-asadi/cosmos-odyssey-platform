<div align="center">

# Cosmos Odyssey Platform

### 3D Space Exploration & Interactive Cosmic Journey

An immersive 3D space exploration platform built with Next.js 15, React Three Fiber, Three.js, and GSAP — featuring real-time celestial rendering, interactive orbital mechanics, and cinematic space navigation.

[![Live Demo](https://img.shields.io/badge/Live_Demo-cosmos--odyssey--platform--phi.vercel.app-0a0a0a?style=for-the-badge&labelColor=0a0a0a&color=3b82f6)](https://cosmos-odyssey-platform-phi.vercel.app/)
[![Next.js 15](https://img.shields.io/badge/Next.js_15-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript_5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Three.js](https://img.shields.io/badge/Three.js_0.185-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![React Three Fiber](https://img.shields.io/badge/R3F_9-000000?style=for-the-badge&logo=react&logoColor=white)](https://docs.pmnd.rs/react-three-fiber)
[![GSAP](https://img.shields.io/badge/GSAP_3.15-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/gsap/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

</div>

---

## Overview

Cosmos Odyssey Platform is a visually stunning 3D web experience that lets users explore the cosmos through interactive celestial bodies, real-time orbital mechanics, and cinematic camera transitions. Built with React Three Fiber for declarative 3D rendering and GSAP for smooth animations, it demonstrates the power of modern web graphics.

---

## Features

| Feature | Description |
|:--------|:------------|
| **3D Solar System** | Real-time rendering of planets, moons, and celestial bodies with accurate scaling |
| **Orbital Mechanics** | Physically-based orbital paths with Kepler's laws implementation |
| **Interactive Navigation** | Mouse/touch controls for orbiting, zooming, and panning through space |
| **Cinematic Camera** | GSAP-powered smooth camera transitions between celestial targets |
| **Time Controls** | Adjustable time scale to accelerate/decelerate orbital motion |
| **Celestial Info Panels** | Dynamic data display for selected planets, stars, and objects |
| **Responsive Design** | Adapts to all viewport sizes with performance scaling |
| **Dark Theme Optimized** | Space-optimized dark theme with HDR lighting |

---

## Tech Stack

| Layer | Technologies |
|:------|:-------------|
| **Framework** | Next.js 15 (App Router, Turbopack) |
| **Language** | TypeScript 5 |
| **3D Rendering** | Three.js 0.185, React Three Fiber 9, React Three Drei 10 |
| **Animation** | GSAP 3.15 |
| **Styling** | Tailwind CSS 4 |
| **Testing** | Vitest 4, jsdom |
| **Linting** | ESLint 9, eslint-config-next |

---

## Project Structure

```
cosmos-odyssey-platform/
├── src/
│   ├── app/                    # Next.js App Router pages
│   ├── components/             # React components
│   │   ├── celestial/          # Planet, star, moon components
│   │   ├── controls/           # Camera, orbit controls
│   │   ├── ui/                 # UI primitives
│   │   └── scene/              # Scene setup, lighting
│   ├── data/                   # Celestial data (positions, orbits, metadata)
│   ├── features/               # Feature modules
│   ├── hooks/                  # Custom hooks (useOrbit, useCamera, etc.)
│   ├── lib/                    # Utilities, Three.js helpers
│   ├── styles/                 # Global styles, Tailwind config
│   └── types/                  # TypeScript types
├── public/                     # Static assets (textures, models)
├── .github/workflows/          # CI/CD pipelines
├── next.config.ts
├── tsconfig.json
├── vitest.config.ts
└── package.json
```

---

## Quick Start

### Prerequisites

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0

### Installation

```bash
git clone https://github.com/mohammadhossein-asadi/cosmos-odyssey-platform.git
cd cosmos-odyssey-platform
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:3000` with Turbopack for fast HMR.

### Production Build

```bash
npm run build
npm run start
```

### Testing

```bash
npm run test          # Run tests once
npm run test:watch    # Watch mode
```

---

## Key Architecture Decisions

### React Three Fiber for Declarative 3D
R3F enables writing Three.js scenes as React components with automatic cleanup, reactive updates, and seamless integration with React's ecosystem.

### GSAP for Cinematic Transitions
GSAP's timeline and scroll-triggered animations create smooth, performant camera flights between celestial bodies without blocking the main thread.

### Data-Driven Celestial Bodies
Planet/orbit data lives in `src/data/` as typed TypeScript structures — positions, orbital elements, physical properties, and metadata are separated from rendering logic.

### Performance-First Rendering
- Level-of-detail (LOD) for distant objects
- Frustum culling via Three.js
- Texture compression and lazy loading
- Reduced motion support for accessibility

---

## Scripts

| Command | Description |
|:--------|:------------|
| `npm run dev` | Start dev server with Turbopack |
| `npm run build` | Production build |
| `npm run start` | Run production server |
| `npm run lint` | ESLint |
| `npm run test` | Run Vitest tests |
| `npm run test:watch` | Watch mode |

---

## Roadmap

- [ ] Real astronomical data integration (NASA/JPL ephemerides)
- [ ] Constellation overlay with mythology
- [ ] Spacecraft mission trajectories
- [ ] VR/WebXR support
- [ ] Multiplayer shared exploration
- [ ] Educational guided tours

---

## License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">

**Mohammadhossein Asadi** — Frontend & Full-Stack Engineer

[![GitHub](https://img.shields.io/badge/GitHub-mohammadhossein--asadi-0a0a0a?style=flat-square&logo=github)](https://github.com/mohammadhossein-asadi)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-mohammadhossein--asadi-0a66c2?style=flat-square&logo=linkedin)](https://linkedin.com/in/mohammadhossein-asadi)

</div>