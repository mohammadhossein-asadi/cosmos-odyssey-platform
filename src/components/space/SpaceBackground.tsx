"use client";

function SpaceBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-cosmic-900" />
      <div className="absolute inset-0 nebula-bg" />
      {[...Array(100)].map((_, i) => (
        <div
          key={i}
          className="absolute w-px h-px bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5 + 0.2,
            animation: `star-twinkle ${Math.random() * 4 + 2}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
}

export { SpaceBackground };
