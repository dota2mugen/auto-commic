import React from "react";
import { useCurrentFrame } from "remotion";
import { COLORS } from "../utils/theme";
import { glow } from "../utils/animations";

interface GridBackgroundProps {
  opacity?: number;
  color?: string;
  gridSize?: number;
}

export const GridBackground: React.FC<GridBackgroundProps> = ({
  opacity = 0.1,
  color = COLORS.primary,
  gridSize = 40,
}) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          linear-gradient(${color}${Math.round(opacity * 255).toString(16).padStart(2, "0")} 1px, transparent 1px),
          linear-gradient(90deg, ${color}${Math.round(opacity * 255).toString(16).padStart(2, "0")} 1px, transparent 1px)
        `,
        backgroundSize: `${gridSize}px ${gridSize}px`,
        pointerEvents: "none",
      }}
    />
  );
};

interface GlowingOrbProps {
  x?: string;
  y?: string;
  size?: number;
  color?: string;
  animate?: boolean;
}

export const GlowingOrb: React.FC<GlowingOrbProps> = ({
  x = "50%",
  y = "50%",
  size = 400,
  color = COLORS.primary,
  animate = true,
}) => {
  const frame = useCurrentFrame();
  const glowOpacity = animate ? glow(frame, 0.3, 0.6, 0.02) : 0.4;
  
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: size,
        height: size,
        transform: "translate(-50%, -50%)",
        borderRadius: "50%",
        background: `radial-gradient(circle, ${color}40 0%, ${color}20 40%, transparent 70%)`,
        opacity: glowOpacity,
        filter: "blur(40px)",
        pointerEvents: "none",
      }}
    />
  );
};

interface ParticleFieldProps {
  count?: number;
  color?: string;
}

export const ParticleField: React.FC<ParticleFieldProps> = ({
  count = 50,
  color = COLORS.primary,
}) => {
  const frame = useCurrentFrame();
  
  const particles = Array.from({ length: count }, (_, i) => {
    const seed = i * 12345.6789;
    const x = ((seed % 1920) / 1920) * 100;
    const baseY = ((seed * 0.7) % 1080) / 1080 * 100;
    const y = (baseY + frame * 0.02 * ((seed % 3) + 1)) % 100;
    const size = 2 + (seed % 4);
    const opacity = 0.2 + ((seed % 50) / 100);
    
    return { x, y, size, opacity, seed };
  });
  
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {particles.map((particle) => (
        <div
          key={particle.seed}
          style={{
            position: "absolute",
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            borderRadius: "50%",
            backgroundColor: color,
            opacity: particle.opacity,
          }}
        />
      ))}
    </div>
  );
};

interface TechBackgroundProps {
  variant?: "grid" | "particles" | "orbs" | "full";
}

export const TechBackground: React.FC<TechBackgroundProps> = ({
  variant = "full",
}) => {
  return (
    <>
      {variant === "grid" && <GridBackground />}
      {variant === "particles" && <ParticleField />}
      {variant === "orbs" && (
        <>
          <GlowingOrb x="20%" y="30%" size={300} color={COLORS.primary} />
          <GlowingOrb x="80%" y="70%" size={250} color={COLORS.secondary} />
        </>
      )}
      {variant === "full" && (
        <>
          <GridBackground opacity={0.05} />
          <ParticleField count={30} />
          <GlowingOrb x="30%" y="40%" size={500} color={COLORS.primary} />
          <GlowingOrb x="70%" y="60%" size={400} color={COLORS.secondary} />
        </>
      )}
    </>
  );
};