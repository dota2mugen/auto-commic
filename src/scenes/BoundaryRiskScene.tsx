import React from "react";
import { AbsoluteFill, Sequence, useVideoConfig, useCurrentFrame, interpolate, spring } from "remotion";
import { COLORS } from "../utils/theme";
import { TechBackground } from "../components/Background";
import { TypewriterText } from "../components/Transition";

interface TechBoundary {
  title: string;
  status: "critical" | "moderate" | "manageable";
  description: string;
  detail: string;
}

interface ComplianceRisk {
  category: string;
  impact: "high" | "medium";
  description: string;
}

interface EngineeringChallenge {
  area: string;
  difficulty: number;
  description: string;
}

const techBoundaries: TechBoundary[] = [
  { 
    title: "不可控性", 
    status: "critical",
    description: "每次生成都是抽卡模式",
    detail: "需要专业编导能力 + 精准表达才能保证质量下限"
  },
  { 
    title: "API限制", 
    status: "critical",
    description: "Seedance2.0能力最强但需排队",
    detail: "无API支持，严重影响工程化和敏捷化"
  },
  { 
    title: "审核严格", 
    status: "moderate",
    description: "平台审核趋严",
    detail: "生成内容可能无法下载使用，后续漫剧上线需备案排队"
  },
  { 
    title: "一致性难题", 
    status: "critical",
    description: "单次最多15秒，拼接困难",
    detail: "配音、BGM、场地的一致性难以保证"
  },
];

const complianceRisks: ComplianceRisk[] = [
  { category: "内容审查", impact: "high", description: "AI生成内容可能触及审核红线" },
  { category: "版权模糊", impact: "medium", description: "训练数据与生成内容权属不清晰" },
  { category: "平台政策", impact: "medium", description: "平台对AI内容的限制政策变化" },
];

const engineeringChallenges: EngineeringChallenge[] = [
  { area: "周转效率", difficulty: 75, description: "从创意到成品的周期控制" },
  { area: "可扩展性", difficulty: 80, description: "批量生产与定制化的平衡" },
  { area: "质量保障", difficulty: 85, description: "自动化流程中的质量控制" },
];

const statusConfig = {
  critical: { color: "#ef4444", label: "关键挑战" },
  moderate: { color: COLORS.accent, label: "中度挑战" },
  manageable: { color: COLORS.success, label: "可控" },
};

const TechBoundarySection: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleScale = spring({ frame, fps, config: { damping: 12, stiffness: 100 } });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.background }}>
      <TechBackground variant="grid" />
      <div style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: 60,
        zIndex: 1,
      }}>
        <h1 style={{
          fontSize: 48,
          fontWeight: "bold",
          color: COLORS.text,
          transform: `scale(${titleScale})`,
          marginBottom: 20,
        }}>
          技术边界（真实体验）
        </h1>
        
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 20,
          flex: 1,
        }}>
          {techBoundaries.map((item, index) => {
            const delay = 30 + index * 40;
            const itemOpacity = interpolate(frame, [delay, delay + 20], [0, 1], { extrapolateRight: "clamp" });
            const itemY = interpolate(
              spring({ frame: frame - delay, fps, config: { damping: 12 } }),
              [0, 1],
              [30, 0]
            );
            
            return (
              <div key={index} style={{
                padding: 24,
                backgroundColor: COLORS.surface,
                borderRadius: 16,
                border: `1px solid ${statusConfig[item.status].color}40`,
                opacity: itemOpacity,
                transform: `translateY(${itemY}px)`,
              }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 12,
                  gap: 12,
                }}>
                  <div style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor: statusConfig[item.status].color,
                  }} />
                  <span style={{
                    fontSize: 22,
                    fontWeight: "bold",
                    color: COLORS.text,
                  }}>
                    {item.title}
                  </span>
                  <span style={{
                    fontSize: 12,
                    padding: "4px 8px",
                    borderRadius: 4,
                    backgroundColor: `${statusConfig[item.status].color}20`,
                    color: statusConfig[item.status].color,
                  }}>
                    {statusConfig[item.status].label}
                  </span>
                </div>
                <p style={{
                  fontSize: 16,
                  color: COLORS.accent,
                  marginBottom: 8,
                }}>
                  {item.description}
                </p>
                <p style={{
                  fontSize: 14,
                  color: COLORS.textSecondary,
                }}>
                  {item.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};

const ComplianceRiskSection: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleScale = spring({ frame, fps, config: { damping: 12, stiffness: 100 } });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.background }}>
      <TechBackground variant="orbs" />
      <div style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: 60,
        alignItems: "center",
        zIndex: 1,
      }}>
        <h1 style={{
          fontSize: 48,
          fontWeight: "bold",
          color: COLORS.text,
          transform: `scale(${titleScale})`,
          marginBottom: 40,
        }}>
          合规风险
        </h1>
        
        <div style={{
          display: "flex",
          gap: 30,
          width: "100%",
          maxWidth: 1200,
        }}>
          {complianceRisks.map((item, index) => {
            const delay = 30 + index * 30;
            const itemOpacity = interpolate(frame, [delay, delay + 20], [0, 1], { extrapolateRight: "clamp" });
            const itemScale = spring({ frame: frame - delay, fps, config: { damping: 12 } });
            
            return (
              <div key={index} style={{
                flex: 1,
                padding: 32,
                backgroundColor: COLORS.surface,
                borderRadius: 16,
                border: `1px solid ${item.impact === "high" ? "#ef4444" : COLORS.accent}40`,
                opacity: itemOpacity,
                transform: `scale(${itemScale})`,
                textAlign: "center",
              }}>
                <div style={{
                  fontSize: 14,
                  padding: "6px 12px",
                  borderRadius: 20,
                  backgroundColor: `${item.impact === "high" ? "#ef4444" : COLORS.accent}20`,
                  color: item.impact === "high" ? "#ef4444" : COLORS.accent,
                  display: "inline-block",
                  marginBottom: 16,
                }}>
                  {item.impact === "high" ? "高影响" : "中影响"}
                </div>
                <h3 style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  color: COLORS.text,
                  marginBottom: 12,
                }}>
                  {item.category}
                </h3>
                <p style={{
                  fontSize: 16,
                  color: COLORS.textSecondary,
                }}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};

const EngineeringChallengeSection: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleScale = spring({ frame, fps, config: { damping: 12, stiffness: 100 } });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.background }}>
      <TechBackground variant="grid" />
      <div style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: 60,
        alignItems: "center",
        zIndex: 1,
      }}>
        <h1 style={{
          fontSize: 48,
          fontWeight: "bold",
          color: COLORS.text,
          transform: `scale(${titleScale})`,
          marginBottom: 40,
        }}>
          工程化挑战
        </h1>
        
        <div style={{
          width: "100%",
          maxWidth: 800,
        }}>
          {engineeringChallenges.map((item, index) => {
            const delay = 30 + index * 40;
            const itemOpacity = interpolate(frame, [delay, delay + 20], [0, 1], { extrapolateRight: "clamp" });
            const progressWidth = interpolate(
              frame,
              [delay + 20, delay + 60],
              [0, item.difficulty],
              { extrapolateRight: "clamp" }
            );
            
            return (
              <div key={index} style={{
                marginBottom: 30,
                opacity: itemOpacity,
              }}>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 8,
                }}>
                  <span style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: COLORS.text,
                  }}>
                    {item.area}
                  </span>
                  <span style={{
                    fontSize: 18,
                    color: COLORS.primary,
                    fontWeight: "bold",
                  }}>
                    {Math.round(progressWidth)}%
                  </span>
                </div>
                <div style={{
                  width: "100%",
                  height: 8,
                  backgroundColor: COLORS.surface,
                  borderRadius: 4,
                  overflow: "hidden",
                }}>
                  <div style={{
                    width: `${progressWidth}%`,
                    height: "100%",
                    background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.secondary})`,
                    borderRadius: 4,
                  }} />
                </div>
                <p style={{
                  fontSize: 14,
                  color: COLORS.textSecondary,
                  marginTop: 8,
                }}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
        
        <div style={{
          marginTop: 40,
          padding: 20,
          backgroundColor: `${COLORS.primary}10`,
          borderRadius: 12,
          border: `1px solid ${COLORS.primary}30`,
          opacity: interpolate(frame, [180, 210], [0, 1], { extrapolateRight: "clamp" }),
        }}>
          <p style={{
            fontSize: 18,
            color: COLORS.primary,
            textAlign: "center",
          }}>
            这些挑战正是工程化能力的价值所在
          </p>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const BoundaryRiskScene: React.FC = () => {
  return (
    <div style={{ flex: 1, backgroundColor: COLORS.background }}>
      <Sequence from={0} durationInFrames={900}>
        <TechBoundarySection />
      </Sequence>
      <Sequence from={900} durationInFrames={900}>
        <ComplianceRiskSection />
      </Sequence>
      <Sequence from={1800} durationInFrames={900}>
        <EngineeringChallengeSection />
      </Sequence>
    </div>
  );
};