import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from "remotion";
import { COLORS } from "../utils/theme";

const capabilities = [
  {
    current: "数据采集与清洗",
    transfer: "剧本语料处理",
    icon: "📊",
  },
  {
    current: "API接口开发",
    transfer: "模型调度服务",
    icon: "🔌",
  },
  {
    current: "系统架构设计",
    transfer: "内容生产流水线",
    icon: "🏗️",
  },
  {
    current: "DevOps运维",
    transfer: "AI服务部署",
    icon: "⚙️",
  },
];

export const CapabilityScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1]);

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.background, padding: 80 }}>
      <div style={{ position: "absolute", top: 60, left: 80, opacity: titleOpacity }}>
        <div style={{ fontSize: 56, fontWeight: 700, color: COLORS.text }}>
          能力迁移路径
        </div>
        <div style={{ fontSize: 24, color: COLORS.textSecondary, marginTop: 8 }}>
          工程化能力 → AI内容生产
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: 200,
          left: 80,
          right: 80,
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 32,
        }}
      >
        {capabilities.map((cap, index) => {
          const delay = index * 25 + 30;
          const opacity = interpolate(frame, [delay, delay + 30], [0, 1]);
          const scale = spring({
            frame: frame - delay,
            fps,
            config: { damping: 12 },
          });

          const arrowProgress = interpolate(
            frame,
            [delay + 40, delay + 80],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
          );

          return (
            <div
              key={index}
              style={{
                background: COLORS.surface,
                borderRadius: 20,
                padding: 32,
                display: "flex",
                alignItems: "center",
                gap: 24,
                opacity,
                transform: `scale(${scale})`,
                border: `1px solid ${COLORS.primary}20`,
              }}
            >
              <div
                style={{
                  width: 64,
                  height: 64,
                  background: `${COLORS.primary}20`,
                  borderRadius: 16,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 32,
                }}
              >
                {cap.icon}
              </div>
              
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <div
                    style={{
                      padding: "12px 20px",
                      background: "#1e1e2e",
                      borderRadius: 8,
                      border: "1px solid #333",
                    }}
                  >
                    <div style={{ fontSize: 14, color: COLORS.textSecondary, marginBottom: 4 }}>
                      现有能力
                    </div>
                    <div style={{ fontSize: 18, color: COLORS.text, fontWeight: 500 }}>
                      {cap.current}
                    </div>
                  </div>
                  
                  <div
                    style={{
                      color: COLORS.accent,
                      fontSize: 24,
                      opacity: arrowProgress,
                      transform: `translateX(${interpolate(arrowProgress, [0, 1], [-20, 0])}px)`,
                    }}
                  >
                    →
                  </div>
                  
                  <div
                    style={{
                      padding: "12px 20px",
                      background: `linear-gradient(135deg, ${COLORS.primary}20, ${COLORS.secondary}20)`,
                      borderRadius: 8,
                      border: `1px solid ${COLORS.primary}40`,
                      opacity: arrowProgress,
                    }}
                  >
                    <div style={{ fontSize: 14, color: COLORS.accent, marginBottom: 4 }}>
                      迁移能力
                    </div>
                    <div style={{ fontSize: 18, color: COLORS.text, fontWeight: 500 }}>
                      {cap.transfer}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 60,
          left: 80,
          right: 80,
          padding: 24,
          background: `linear-gradient(135deg, ${COLORS.primary}15, ${COLORS.secondary}15)`,
          borderRadius: 16,
          border: `1px solid ${COLORS.primary}30`,
          opacity: interpolate(frame, [200, 240], [0, 1]),
        }}
      >
        <div style={{ fontSize: 22, color: COLORS.text, textAlign: "center" }}>
          <span style={{ color: COLORS.accent }}>核心优势：</span>
          工程化落地能力是AI产品成功的关键壁垒
        </div>
      </div>
    </AbsoluteFill>
  );
};