import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from "remotion";
import { COLORS } from "../utils/theme";

interface Phase {
  name: string;
  duration: string;
  tasks: string[];
  deliverable: string;
  budget: string;
}

const mvpPlan: Phase[] = [
  {
    name: "第一阶段",
    duration: "第1-2周",
    tasks: ["技术选型与架构设计", "开源模型调研测试", "数据管道搭建"],
    deliverable: "技术方案文档",
    budget: "人力投入",
  },
  {
    name: "第二阶段",
    duration: "第3-4周",
    tasks: ["剧本生成模块开发", "图像生成流水线", "基础配音合成"],
    deliverable: "MVP核心功能",
    budget: "API调用成本",
  },
  {
    name: "第三阶段",
    duration: "第5-6周",
    tasks: ["视频合成模块", "质量控制系统", "用户界面开发"],
    deliverable: "可演示产品",
    budget: "服务器成本",
  },
  {
    name: "第四阶段",
    duration: "第7-8周",
    tasks: ["内测与优化", "性能调优", "商业化准备"],
    deliverable: "商业就绪版本",
    budget: "运营成本",
  },
];

export const MVPScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1]);

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.background, padding: 60 }}>
      <div style={{ position: "absolute", top: 40, left: 80, opacity: titleOpacity }}>
        <div style={{ fontSize: 48, fontWeight: 700, color: COLORS.text }}>
          MVP计划表
        </div>
        <div style={{ fontSize: 22, color: COLORS.textSecondary, marginTop: 6 }}>
          8周快速验证，分阶段交付
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: 140,
          left: 60,
          right: 60,
          bottom: 40,
          display: "flex",
          gap: 20,
        }}
      >
        {mvpPlan.map((phase, index) => {
          const delay = index * 35 + 20;
          const opacity = interpolate(frame, [delay, delay + 30], [0, 1]);
          const scale = spring({
            frame: frame - delay,
            fps,
            config: { damping: 12 },
          });
          const translateY = interpolate(scale, [0, 1], [30, 0]);

          return (
            <div
              key={index}
              style={{
                flex: 1,
                background: COLORS.surface,
                borderRadius: 20,
                padding: 24,
                opacity,
                transform: `scale(${scale}) translateY(${translateY}px)`,
                border: `1px solid ${COLORS.primary}30`,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  fontSize: 18,
                  color: COLORS.accent,
                  fontWeight: 600,
                  marginBottom: 8,
                }}
              >
                {phase.name}
              </div>
              <div
                style={{
                  fontSize: 24,
                  color: COLORS.text,
                  fontWeight: 700,
                  marginBottom: 16,
                }}
              >
                {phase.duration}
              </div>
              
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, color: COLORS.textSecondary, marginBottom: 8 }}>
                  核心任务
                </div>
                {phase.tasks.map((task, i) => (
                  <div
                    key={i}
                    style={{
                      fontSize: 15,
                      color: COLORS.text,
                      padding: "8px 12px",
                      background: "#1a1a2e",
                      borderRadius: 6,
                      marginBottom: 6,
                      opacity: interpolate(frame, [delay + 20 + i * 8, delay + 40 + i * 8], [0, 1]),
                    }}
                  >
                    {task}
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: 16,
                  padding: 16,
                  background: `linear-gradient(135deg, ${COLORS.primary}15, transparent)`,
                  borderRadius: 12,
                  border: `1px solid ${COLORS.primary}20`,
                }}
              >
                <div style={{ fontSize: 13, color: COLORS.textSecondary }}>交付物</div>
                <div style={{ fontSize: 16, color: COLORS.text, fontWeight: 500, marginTop: 4 }}>
                  {phase.deliverable}
                </div>
                <div style={{ fontSize: 13, color: COLORS.accent, marginTop: 8 }}>
                  {phase.budget}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 16,
          left: 0,
          right: 0,
          textAlign: "center",
          fontSize: 18,
          color: COLORS.textSecondary,
          opacity: interpolate(frame, [350, 380], [0, 1]),
        }}
      >
        预计总投入：核心团队3-5人 + API/服务器费用约5-10万/月
      </div>
    </AbsoluteFill>
  );
};