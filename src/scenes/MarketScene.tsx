import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from "remotion";
import { COLORS } from "../utils/theme";

const marketData = [
  { label: "2024年短剧市场规模", value: "500亿+", sub: "同比增长67%" },
  { label: "AI内容渗透率", value: "15%", sub: "预计2025年达40%" },
  { label: "制作成本下降", value: "70%", sub: "AI替代传统流程" },
];

export const MarketScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleProgress = spring({ frame, fps, config: { damping: 15 } });
  const titleX = interpolate(titleProgress, [0, 1], [-100, 0]);

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.background, padding: 80 }}>
      <div style={{ position: "absolute", top: 80, left: 80 }}>
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: COLORS.text,
            transform: `translateX(${titleX}px)`,
            opacity: titleProgress,
          }}
        >
          市场机会
        </div>
        <div
          style={{
            fontSize: 24,
            color: COLORS.textSecondary,
            marginTop: 12,
            opacity: interpolate(frame, [30, 60], [0, 1]),
          }}
        >
          短剧市场爆发，AI重构内容生产
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          gap: 60,
        }}
      >
        {marketData.map((item, index) => {
          const delay = index * 20 + 40;
          const progress = spring({
            frame: frame - delay,
            fps,
            config: { damping: 12 },
          });
          const scale = interpolate(progress, [0, 1], [0.8, 1]);
          const opacity = interpolate(frame, [delay, delay + 30], [0, 1]);

          return (
            <div
              key={index}
              style={{
                background: COLORS.surface,
                borderRadius: 24,
                padding: "48px 56px",
                textAlign: "center",
                transform: `scale(${scale})`,
                opacity,
                border: `1px solid ${COLORS.primary}30`,
                boxShadow: `0 20px 60px ${COLORS.primary}15`,
              }}
            >
              <div
                style={{
                  fontSize: 20,
                  color: COLORS.textSecondary,
                  marginBottom: 16,
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  fontSize: 64,
                  fontWeight: 800,
                  background: COLORS.gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {item.value}
              </div>
              <div
                style={{
                  fontSize: 18,
                  color: COLORS.accent,
                  marginTop: 12,
                }}
              >
                {item.sub}
              </div>
            </div>
          );
        })}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 80,
          left: 80,
          right: 80,
          height: 4,
          background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.secondary})`,
          borderRadius: 2,
          transform: `scaleX(${interpolate(frame, [60, 180], [0, 1])})`,
          transformOrigin: "left",
        }}
      />
    </AbsoluteFill>
  );
};