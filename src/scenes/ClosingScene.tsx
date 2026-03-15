import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from "remotion";
import { COLORS } from "../utils/theme";
import { TechBackground } from "../components/Background";

export const ClosingScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleProgress = spring({ frame, fps, config: { damping: 10, stiffness: 100 } });
  const titleScale = interpolate(titleProgress, [0, 1], [0.8, 1]);
  
  const subtitleOpacity = interpolate(frame, [60, 90], [0, 1], { extrapolateRight: "clamp" });
  
  const glowPulse = 0.5 + 0.3 * Math.sin(frame * 0.08);

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.background, justifyContent: "center", alignItems: "center" }}>
      <TechBackground variant="full" />
      
      <div style={{ textAlign: "center", zIndex: 1 }}>
        <div
          style={{
            fontSize: 100,
            fontWeight: 900,
            background: COLORS.gradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            transform: `scale(${titleScale})`,
            marginBottom: 40,
            textShadow: `0 0 80px ${COLORS.primary}${Math.round(glowPulse * 255).toString(16).padStart(2, "0")}`,
          }}
        >
          感谢观看
        </div>

        <div
          style={{
            fontSize: 32,
            color: COLORS.primary,
            fontWeight: 600,
            opacity: subtitleOpacity,
          }}
        >
          期待与您合作
        </div>
      </div>
    </AbsoluteFill>
  );
};