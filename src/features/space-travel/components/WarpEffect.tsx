"use client";

function WarpEffect({ active }: { active: boolean }) {
  if (!active) return null;
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="warp-lines absolute inset-0 opacity-30" />
      <div className="absolute inset-0 bg-gradient-radial from-plasma-500/20 via-transparent to-transparent" />
    </div>
  );
}

export { WarpEffect };
