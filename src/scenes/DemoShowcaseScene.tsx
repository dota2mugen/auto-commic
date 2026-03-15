import React from "react";
import { AbsoluteFill, Sequence, useVideoConfig, useCurrentFrame, interpolate, spring, Img, Video, staticFile } from "remotion";
import { COLORS } from "../utils/theme";
import { TechBackground } from "../components/Background";

const TitleSection: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleScale = spring({ frame, fps, config: { damping: 10, stiffness: 120 } });
  const subtitleOpacity = interpolate(frame, [20, 40], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.background, justifyContent: "center", alignItems: "center" }}>
      <TechBackground variant="orbs" />
      <div style={{ textAlign: "center", zIndex: 1 }}>
        <h1 style={{
          fontSize: 72,
          fontWeight: "bold",
          color: COLORS.text,
          transform: `scale(${titleScale})`,
          marginBottom: 30,
        }}>
          AI漫剧Demo展示
        </h1>
        <p style={{
          fontSize: 32,
          color: COLORS.textSecondary,
          opacity: subtitleOpacity,
        }}>
          西游记 · 悟空与白骨精对峙
        </p>
      </div>
    </AbsoluteFill>
  );
};

const DemoVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleScale = spring({ frame, fps, config: { damping: 12, stiffness: 100 } });
  const videoOpacity = interpolate(frame, [30, 50], [0, 1], { extrapolateRight: "clamp" });
  const videoScale = spring({ frame: frame - 20, fps, config: { damping: 12, stiffness: 80 } });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.background, justifyContent: "center", alignItems: "center" }}>
      <TechBackground variant="grid" />
      <div style={{ textAlign: "center", zIndex: 1 }}>
        <h1 style={{
          fontSize: 48,
          fontWeight: "bold",
          color: COLORS.text,
          transform: `scale(${titleScale})`,
          marginBottom: 30,
        }}>
          AI漫剧成品 Demo
        </h1>
        <div style={{
          width: 1000,
          height: 562,
          borderRadius: 16,
          overflow: "hidden",
          border: `3px solid ${COLORS.primary}`,
          boxShadow: `0 0 40px ${COLORS.primary}40, 0 0 80px ${COLORS.primary}20`,
          opacity: videoOpacity,
          transform: `scale(${videoScale})`,
        }}>
          <Video
            src={staticFile("demo/demo.mp4")}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <p style={{
          fontSize: 20,
          color: COLORS.textSecondary,
          marginTop: 20,
          opacity: interpolate(frame, [60, 80], [0, 1], { extrapolateRight: "clamp" }),
        }}>
          西游记 · 悟空与白骨精对峙 · 15秒
        </p>
      </div>
    </AbsoluteFill>
  );
};

export const DemoShowcaseScene: React.FC = () => {
  return (
    <div style={{ flex: 1, backgroundColor: COLORS.background }}>
      <Sequence from={0} durationInFrames={150}>
        <TitleSection />
      </Sequence>
      <Sequence from={150} durationInFrames={600}>
        <DemoVideo />
      </Sequence>
    </div>
  );
};