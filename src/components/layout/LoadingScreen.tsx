"use client";

function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-cosmic-900">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-plasma-500 border-t-transparent animate-spin" />
        <div className="text-text-secondary text-sm">Loading cosmos...</div>
      </div>
    </div>
  );
}

export { LoadingScreen };
