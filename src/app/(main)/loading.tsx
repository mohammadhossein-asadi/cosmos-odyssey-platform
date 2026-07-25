export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 mx-auto mb-4 rounded-full border-2 border-plasma-500 border-t-transparent animate-spin" />
        <div className="text-text-secondary text-sm">Loading...</div>
      </div>
    </div>
  );
}
