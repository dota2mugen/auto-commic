import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const fadeIn = (
  frame: number,
  startFrame: number = 0,
  duration: number = 20
): number => {
  return interpolate(frame, [startFrame, startFrame + duration], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
};

export const fadeOut = (
  frame: number,
  startFrame: number,
  duration: number = 20
): number => {
  return interpolate(frame, [startFrame, startFrame + duration], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
};

export const slideIn = (
  frame: number,
  fps: number,
  direction: "left" | "right" | "top" | "bottom" = "left",
  startFrame: number = 0,
  distance: number = 100
): { opacity: number; transform: string } => {
  const progress = spring({
    frame: frame - startFrame,
    fps,
    config: { damping: 15, stiffness: 100 },
  });
  
  const opacity = interpolate(progress, [0, 1], [0, 1]);
  
  let transform = "";
  switch (direction) {
    case "left":
      transform = `translateX(${interpolate(progress, [0, 1], [-distance, 0])}px)`;
      break;
    case "right":
      transform = `translateX(${interpolate(progress, [0, 1], [distance, 0])}px)`;
      break;
    case "top":
      transform = `translateY(${interpolate(progress, [0, 1], [-distance, 0])}px)`;
      break;
    case "bottom":
      transform = `translateY(${interpolate(progress, [0, 1], [distance, 0])}px)`;
      break;
  }
  
  return { opacity, transform };
};

export const scaleIn = (
  frame: number,
  fps: number,
  startFrame: number = 0,
  fromScale: number = 0.8
): { opacity: number; transform: string } => {
  const progress = spring({
    frame: frame - startFrame,
    fps,
    config: { damping: 12, stiffness: 100 },
  });
  
  return {
    opacity: interpolate(progress, [0, 1], [0, 1]),
    transform: `scale(${interpolate(progress, [0, 1], [fromScale, 1])})`,
  };
};

export const typewriter = (
  frame: number,
  text: string,
  startFrame: number,
  fps: number,
  speed: number = 2
): string => {
  const charCount = Math.floor((frame - startFrame) / speed);
  return text.slice(0, Math.max(0, Math.min(charCount, text.length)));
};

export const stagger = (
  frame: number,
  index: number,
  baseDelay: number,
  staggerDelay: number
): number => {
  return baseDelay + index * staggerDelay;
};

export const pulse = (
  frame: number,
  min: number = 0.8,
  max: number = 1.2,
  speed: number = 0.05
): number => {
  return min + (max - min) * (0.5 + 0.5 * Math.sin(frame * speed));
};

export const glow = (
  frame: number,
  baseOpacity: number = 0.4,
  maxOpacity: number = 0.8,
  speed: number = 0.03
): number => {
  return baseOpacity + (maxOpacity - baseOpacity) * (0.5 + 0.5 * Math.sin(frame * speed));
};

export const useSpringIn = (startFrame: number = 0) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const progress = spring({
    frame: frame - startFrame,
    fps,
    config: { damping: 12, stiffness: 100 },
  });
  
  return {
    scale: interpolate(progress, [0, 1], [0.8, 1]),
    opacity: interpolate(progress, [0, 1], [0, 1]),
    y: interpolate(progress, [0, 1], [20, 0]),
  };
};

export const useFadeIn = (startFrame: number = 0, duration: number = 20) => {
  const frame = useCurrentFrame();
  
  return interpolate(frame, [startFrame, startFrame + duration], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
};