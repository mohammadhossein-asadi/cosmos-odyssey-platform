"use client";

function ScaleIndicator() {
  return (
    <div className="absolute bottom-4 right-4 bg-surface-glass/80 backdrop-blur-md rounded-lg px-3 py-2 border border-border-default">
      <div className="text-[10px] text-text-muted uppercase tracking-wider mb-1">Scale</div>
      <div className="flex items-center gap-2">
        <div className="w-8 h-px bg-plasma-400" />
        <span className="text-[10px] text-text-secondary">1 AU</span>
      </div>
      <div className="text-[9px] text-text-muted mt-1">1 AU = 149.6M km</div>
    </div>
  );
}

export { ScaleIndicator };
