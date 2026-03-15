import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS } from "../utils/theme";

interface SceneTransitionProps {
  type: "fade" | "slide" | "zoom" | "wipe";
  duration?: number;
}

export const SceneTransition: React.FC<SceneTransitionProps> = ({
  type = "fade",
  duration = 30,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const progress = interpolate(frame, [0, duration], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  
  if (type === "fade") {
    return (
      <AbsoluteFill
        style={{
          backgroundColor: COLORS.background,
          opacity: 1 - progress,
          zIndex: 100,
        }}
      />
    );
  }
  
  if (type === "slide") {
    return (
      <AbsoluteFill
        style={{
          backgroundColor: COLORS.background,
          transform: `translateX(${interpolate(progress, [0, 1], [0, 1920])}px)`,
          zIndex: 100,
        }}
      />
    );
  }
  
  if (type === "zoom") {
    return (
      <AbsoluteFill
        style={{
          backgroundColor: COLORS.background,
          transform: `scale(${interpolate(progress, [0, 1], [0, 3])})`,
          borderRadius: "50%",
          zIndex: 100,
        }}
      />
    );
  }
  
  if (type === "wipe") {
    return (
      <AbsoluteFill
        style={{
          background: `linear-gradient(90deg, ${COLORS.background} 0%, ${COLORS.background} ${interpolate(progress, [0, 1], [0, 100])}%, transparent ${interpolate(progress, [0, 1], [0, 100])}%)`,
          zIndex: 100,
        }}
      />
    );
  }
  
  return null;
};

interface GlitchTextProps {
  text: string;
  style?: React.CSSProperties;
}

export const GlitchText: React.FC<GlitchTextProps> = ({ text, style }) => {
  const frame = useCurrentFrame();
  
  const glitchOffset = Math.sin(frame * 0.5) * 2;
  
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <span
        style={{
          ...style,
          position: "relative",
          zIndex: 2,
        }}
      >
        {text}
      </span>
      <span
        style={{
          ...style,
          position: "absolute",
          top: 0,
          left: glitchOffset,
          color: "#ff0000",
          opacity: 0.5,
          clipPath: "inset(0 0 50% 0)",
          zIndex: 1,
        }}
      >
        {text}
      </span>
      <span
        style={{
          ...style,
          position: "absolute",
          top: 0,
          left: -glitchOffset,
          color: "#00ffff",
          opacity: 0.5,
          clipPath: "inset(50% 0 0 0)",
          zIndex: 1,
        }}
      >
        {text}
      </span>
    </div>
  );
};

interface TypewriterTextProps {
  text: string;
  startFrame: number;
  speed?: number;
  style?: React.CSSProperties;
  cursor?: boolean;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  startFrame,
  speed = 2,
  style,
  cursor = true,
}) => {
  const frame = useCurrentFrame();
  
  const visibleChars = Math.max(0, Math.floor((frame - startFrame) / speed));
  const displayText = text.slice(0, Math.min(visibleChars, text.length));
  const showCursor = cursor && visibleChars < text.length;
  
  return (
    <span style={style}>
      {displayText}
      {showCursor && (
        <span
          style={{
            opacity: frame % 30 < 15 ? 1 : 0,
          }}
        >
          |
        </span>
      )}
    </span>
  );
};

interface ProgressBarProps {
  progress: number;
  color?: string;
  height?: number;
  style?: React.CSSProperties;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  color = COLORS.primary,
  height = 4,
  style,
}) => {
  return (
    <div
      style={{
        width: "100%",
        height,
        backgroundColor: `${COLORS.surface}`,
        borderRadius: height / 2,
        overflow: "hidden",
        ...style,
      }}
    >
      <div
        style={{
          width: `${Math.min(100, Math.max(0, progress * 100))}%`,
          height: "100%",
          backgroundColor: color,
          transition: "width 0.1s ease-out",
        }}
      />
    </div>
  );
};

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  style?: React.CSSProperties;
  prefix?: string;
  suffix?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 30,
  style,
  prefix = "",
  suffix = "",
}) => {
  const frame = useCurrentFrame();
  
  const displayValue = Math.floor(
    interpolate(frame, [0, duration], [0, value], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );
  
  return (
    <span style={style}>
      {prefix}{displayValue}{suffix}
    </span>
  );
};