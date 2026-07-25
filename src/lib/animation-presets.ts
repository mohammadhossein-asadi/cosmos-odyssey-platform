export const animationPresets = {
  easeOutCubic: "cubic-bezier(0.33, 1, 0.68, 1)",
  easeInOutCubic: "cubic-bezier(0.65, 0, 0.35, 1)",
  easeOutExpo: "cubic-bezier(0.19, 1, 0.22, 1)",
  easeInOutExpo: "cubic-bezier(0.87, 0, 0.13, 1)",
  spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  bouncy: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
};

export const transitionPresets = {
  fast: { duration: 150, ease: animationPresets.easeOutCubic },
  normal: { duration: 300, ease: animationPresets.easeOutCubic },
  slow: { duration: 500, ease: animationPresets.easeOutCubic },
  spring: { duration: 400, ease: animationPresets.spring },
};

export const staggerChildren = (delay: number = 0.1) => ({
  transition: { staggerChildren: delay },
});
