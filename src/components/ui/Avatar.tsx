import { cn } from "@/lib/utils";

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: "sm" | "md" | "lg";
  fallback?: string;
  className?: string;
}

function Avatar({ src, alt, size = "md", fallback, className }: AvatarProps) {
  const sizeClasses = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-16 h-16 text-lg",
  };

  if (!src) {
    return (
      <div
        className={cn(
          "rounded-full bg-gradient-to-br from-plasma-500 to-cosmic-500 flex items-center justify-center text-white font-medium",
          sizeClasses[size],
          className
        )}
      >
        {fallback || "?"}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt || ""}
      className={cn("rounded-full object-cover", sizeClasses[size], className)}
    />
  );
}

export { Avatar };
