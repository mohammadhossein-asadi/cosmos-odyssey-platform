import dynamic from "next/dynamic";

export const LazySolarSystemScene = dynamic(
  () => import("@/components/space/SolarSystemScene").then((m) => m.SolarSystemScene),
  { ssr: false, loading: () => <div className="h-[400px] bg-cosmic-900 rounded-xl animate-pulse" /> }
);

export const LazyStarfield = dynamic(
  () => import("@/components/three/Starfield").then((m) => m.Starfield),
  { ssr: false }
);

export const LazySearchOverlay = dynamic(
  () => import("@/features/search/SearchOverlay").then((m) => m.SearchOverlay),
  { ssr: false }
);
