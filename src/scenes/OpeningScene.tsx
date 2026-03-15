import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from "remotion";
import { COLORS } from "../utils/theme";
import { TechBackground } from "../components/Background";
import { TypewriterText } from "../components/Transition";

export const OpeningScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const titleScale = spring({ frame, fps, config: { damping: 10, stiffness: 150 } });
  const subtitleOpacity = interpolate(frame, [30, 50], [0, 1], { extrapolateRight: "clamp" });
  const descOpacity = interpolate(frame, [80, 100], [0, 1], { extrapolateRight: "clamp" });
  
  const glowPulse = 0.6 + 0.2 * Math.sin(frame * 0.05);

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.background, justifyContent: "center", alignItems: "center" }}>
      <TechBackground variant="orbs" />
      
      <div style={{ textAlign: "center", zIndex: 1 }}>
        <div
          style={{
            fontSize: 120,
            fontWeight: 900,
            background: COLORS.gradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            transform: `scale(${titleScale})`,
            letterSpacing: -4,
            marginBottom: 30,
            textShadow: `0 0 60px ${COLORS.primary}${Math.round(glowPulse * 255).toString(16).padStart(2, "0")}`,
          }}
        >
          AI漫剧流程体验
        </div>
        
        <div
          style={{
            fontSize: 36,
            color: COLORS.primary,
            opacity: subtitleOpacity,
            fontWeight: 500,
            marginBottom: 40,
            letterSpacing: 2,
          }}
        >
          <TypewriterText 
            text="从创意到成品的完整流程" 
            startFrame={30} 
            speed={1.5}
          />
        </div>
        
        <div
          style={{
            fontSize: 22,
            color: COLORS.textSecondary,
            opacity: descOpacity,
            maxWidth: 800,
            lineHeight: 1.6,
          }}
        >
          本次展示将演示如何使用AI工具
          <br />
          在短时间内完成一个AI漫剧片段的制作
        </div>
      </div>
    </AbsoluteFill>
  );
};