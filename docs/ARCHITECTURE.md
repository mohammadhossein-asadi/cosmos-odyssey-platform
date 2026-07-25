# Architecture

## Overview

Cosmos Odyssey uses a feature-based architecture with Next.js App Router.

## Directory Structure

```
src/
  app/              # Next.js App Router
    (main)/         # Route group for main pages
    api/            # API routes (future)
  components/       # Shared components
    ui/             # Base UI primitives
    space/          # Space-specific components
    layout/         # Layout components
    three/          # Three.js/R3F components
  features/         # Feature modules (self-contained)
    solar-system/
    space-travel/
    star-explorer/
    encyclopedia/
    black-hole/
    cosmic-timeline/
    missions/
    search/
    profile/
  data/             # Static data
  hooks/            # Custom React hooks
  lib/              # Utilities and helpers
  styles/           # Global CSS
  types/            # TypeScript types
```

## Principles

1. **Feature isolation** - Each feature has its own types, hooks, and components
2. **Shared UI** - Base components in `components/ui/` are reusable
3. **Data layer** - Static data is separate from components
4. **Type safety** - Strong TypeScript throughout
5. **Performance** - Lazy loading for 3D scenes, code splitting
