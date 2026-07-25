"use client";

interface TravelHUDProps {
  speed: number;
  distance: string;
  destination: string;
  progress: number;
}

function TravelHUD({ speed, distance, destination, progress }: TravelHUDProps) {
  return (
    <div className="absolute top-4 left-4 right-4 flex justify-between items-start pointer-events-none">
      <div className="bg-surface-glass backdrop-blur-md rounded-lg p-3 border border-border-default">
        <div className="text-[10px] text-text-muted uppercase tracking-wider">Speed</div>
        <div className="text-lg font-bold text-plasma-300">{speed} km/s</div>
      </div>
      <div className="bg-surface-glass backdrop-blur-md rounded-lg p-3 border border-border-default text-center">
        <div className="text-[10px] text-text-muted uppercase tracking-wider">Destination</div>
        <div className="text-sm font-semibold text-text-primary">{destination}</div>
      </div>
      <div className="bg-surface-glass backdrop-blur-md rounded-lg p-3 border border-border-default text-right">
        <div className="text-[10px] text-text-muted uppercase tracking-wider">Distance</div>
        <div className="text-lg font-bold text-aurora-400">{distance}</div>
      </div>
    </div>
  );
}

export { TravelHUD };
