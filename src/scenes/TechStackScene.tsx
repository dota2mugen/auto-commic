import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from "remotion";
import { COLORS } from "../utils/theme";

interface TechLayer {
  name: string;
  items: string[];
  color: string;
}

const techStack: TechLayer[] = [
  {
    name: "内容层",
    items: ["剧本生成", "分镜脚本", "角色设定", "场景描述"],
    color: "#f59e0b",
  },
  {
    name: "模型层",
    items: ["LLM/剧本", "Diffusion/图像", "视频生成", "TTS/配音"],
    color: "#8b5cf6",
  },
  {
    name: "工程层",
    items: ["数据管道", "模型调度", "质量控制", "输出管理"],
    color: "#10b981",
  },
  {
    name: "数据层",
    items: ["剧本语料", "角色数据", "风格参考", "用户反馈"],
    color: "#6366f1",
  },
];

export const TechStackScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1]);

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.background, padding: 80 }}>
      <div style={{ position: "absolute", top: 60, left: 80, opacity: titleOpacity }}>
        <div style={{ fontSize: 56, fontWeight: 700, color: COLORS.text }}>
          技术栈全景图
        </div>
        <div style={{ fontSize: 24, color: COLORS.textSecondary, marginTop: 8 }}>
          AI漫剧核心技术与流程
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: 180,
          left: 80,
          right: 80,
          bottom: 60,
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        {techStack.map((layer, layerIndex) => {
          const delay = layerIndex * 30 + 30;
          const layerOpacity = interpolate(frame, [delay, delay + 30], [0, 1]);
          const layerX = interpolate(
            spring({ frame: frame - delay, fps, config: { damping: 12 } }),
            [0, 1],
            [-50, 0]
          );

          return (
            <div
              key={layerIndex}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 24,
                opacity: layerOpacity,
                transform: `translateX(${layerX}px)`,
              }}
            >
              <div
                style={{
                  width: 120,
                  fontSize: 24,
                  fontWeight: 600,
                  color: layer.color,
                  textAlign: "right",
                }}
              >
                {layer.name}
              </div>
              
              <div style={{ display: "flex", gap: 16, flex: 1 }}>
                {layer.items.map((item, itemIndex) => {
                  const itemDelay = delay + itemIndex * 10 + 20;
                  const itemOpacity = interpolate(frame, [itemDelay, itemDelay + 20], [0, 1]);
                  const itemScale = spring({
                    frame: frame - itemDelay,
                    fps,
                    config: { damping: 10 },
                  });

                  return (
                    <div
                      key={itemIndex}
                      style={{
                        flex: 1,
                        background: COLORS.surface,
                        border: `1px solid ${layer.color}40`,
                        borderRadius: 12,
                        padding: "20px 16px",
                        textAlign: "center",
                        opacity: itemOpacity,
                        transform: `scale(${itemScale})`,
                      }}
                    >
                      <div style={{ fontSize: 18, color: COLORS.text, fontWeight: 500 }}>
                        {item}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 20,
          right: 80,
          fontSize: 20,
          color: COLORS.accent,
          opacity: interpolate(frame, [300, 330], [0, 1]),
        }}
      >
        工程层 = 公司现有核心能力
      </div>
    </AbsoluteFill>
  );
};