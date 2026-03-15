import React from "react";
import { AbsoluteFill, Sequence, useVideoConfig, useCurrentFrame, interpolate, spring, Img, Video, staticFile } from "remotion";
import { COLORS } from "../utils/theme";
import { TechBackground } from "../components/Background";

interface ProcessStep {
  title: string;
  description: string;
  duration: number;
  type: "image" | "prompt" | "result" | "video";
  image?: string;
  promptText?: string;
  videoSrc?: string;
}

const processSteps: ProcessStep[] = [
  { 
    title: "Step 1: 选题确认", 
    description: "选择名著经典场面，确定风格方向", 
    duration: 400,
    type: "image",
    image: staticFile("demo/悟空-白骨精.jpg"),
  },
  { 
    title: "Step 2: 孙悟空提示词", 
    description: "编写角色设计提示词", 
    duration: 400,
    type: "prompt",
    promptText: "A professional character sheet of Sun Wukong (Monkey King) in dark Chinese mythology aesthetic style...\n\nCharacter features:\n- Anthropomorphic monkey with golden fur\n- Fierce expression with glowing red Fiery Golden Eyes\n- Dark ornate armor with gold accents\n- Ruyi Jingu Bang golden staff",
  },
  { 
    title: "Step 3: 孙悟空生成过程", 
    description: "AI角色生成中...", 
    duration: 350,
    type: "image",
    image: staticFile("demo/过程记录/角色设计_截图/悟空设计.png"),
  },
  { 
    title: "Step 4: 孙悟空生成结果", 
    description: "角色设定卡完成", 
    duration: 500,
    type: "result",
    image: staticFile("demo/角色设定/孙悟空/悟空.png"),
  },
  { 
    title: "Step 5: 白骨精提示词", 
    description: "编写角色设计提示词", 
    duration: 400,
    type: "prompt",
    promptText: "A professional character sheet of Baigujing (White Bone Spirit) in dark Chinese mythology aesthetic style...\n\nCharacter features:\n- Ethereal skeletal figure with white bones\n- Flowing white and pale blue translucent robes\n- Glowing pale blue eyes\n- Chinese ghost/spirit aesthetic",
  },
  { 
    title: "Step 6: 白骨精生成过程", 
    description: "AI角色生成中...", 
    duration: 350,
    type: "image",
    image: staticFile("demo/过程记录/角色设计_截图/白骨设计.png"),
  },
  { 
    title: "Step 7: 白骨精生成结果", 
    description: "角色设定卡完成", 
    duration: 500,
    type: "result",
    image: staticFile("demo/角色设定/白骨精/白骨精.png"),
  },
  { 
    title: "Step 8: 分镜1 - 白骨精现身", 
    description: "悟空背影，白骨精在正前方现身", 
    duration: 400,
    type: "prompt",
    promptText: "【分镜1 - 远景镜头】\n\n远景镜头，悟空背对镜头站在前景中央。\n\n悟空身穿深色铠甲，金色毛发，手持金箍棒。\n\n在悟空前方远处的迷雾中，白骨精的身影缓缓浮现。\n\n风格：暗黑中国神话，水墨元素，冷色调，电影级画面。\n\n时长：3秒",
  },
  { 
    title: "Step 9: 分镜2 - 镜头环绕", 
    description: "镜头转到悟空正面", 
    duration: 400,
    type: "prompt",
    promptText: "【分镜2 - 中景镜头】\n\n镜头从悟空背后环绕到正面。\n\n悟空正面面对镜头，金箍棒缓缓抬起，表情凶狠坚定。\n\n镜头缓慢推进，聚焦悟空的战斗姿态。\n\n风格：暗黑中国神话，电影级灯光，冷色调氛围。\n\n时长：3秒",
  },
  { 
    title: "Step 10: 分镜3 - 双人对峙", 
    description: "白骨精威胁，悟空举棒", 
    duration: 400,
    type: "prompt",
    promptText: "【分镜3 - 双人镜头】\n\n双人中景，悟空和白骨精对峙。\n\n白骨精抬起一只手，指尖散发出幽蓝的光芒。\n\n悟空将金箍棒高高举起，火眼金睛发出金红色光芒。\n\n风格：暗黑中国神话，戏剧性灯光，紧张氛围。\n\n时长：3秒",
  },
  { 
    title: "Step 11: 分镜4 - 眼神对峙", 
    description: "两人眼神交汇特写", 
    duration: 400,
    type: "prompt",
    promptText: "【分镜4 - 分屏特写】\n\n分屏画面，左右各占一半。\n\n左侧：悟空面部特写，火眼金睛发出金红色光芒。\n\n右侧：白骨精面部特写，幽蓝色眼睛发出诡异光芒。\n\n风格：暗黑中国神话，高对比度灯光，电影级画面。\n\n时长：3秒",
  },
  { 
    title: "Step 12: 分镜5 - 火眼金睛", 
    description: "火眼金睛爆发，画面定格", 
    duration: 400,
    type: "prompt",
    promptText: "【分镜5 - 极特写】\n\n极特写镜头，火眼金睛充满画面。\n\n悟空的火眼金睛发出耀眼的金红色光芒，如火焰般燃烧。\n\n画面在最强张力处定格。\n\n风格：暗黑中国神话，超自然光效，史诗级画面。\n\n时长：3秒",
  },
  { 
    title: "Step 13: 视频生成过程", 
    description: "AI视频模型生成中...", 
    duration: 400,
    type: "image",
    image: staticFile("demo/过程记录/视频生成_截图/视频生成过程.png"),
  },
  { 
    title: "Step 14: Demo成品", 
    description: "AI漫剧Demo完成", 
    duration: 500,
    type: "video",
    videoSrc: staticFile("demo/demo.mp4"),
  },
];

const PromptDisplay: React.FC<{ text: string }> = ({ text }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [20, 40], [0, 1], { extrapolateRight: "clamp" });

  return (
    <div style={{
      width: "85%",
      maxHeight: "55vh",
      backgroundColor: "#0d1117",
      borderRadius: 12,
      padding: 24,
      border: `1px solid ${COLORS.primary}40`,
      opacity,
      overflow: "auto",
    }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        marginBottom: 12,
        gap: 8,
      }}>
        <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#ff5f56" }} />
        <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#ffbd2e" }} />
        <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#27c93f" }} />
      </div>
      <pre style={{
        fontSize: 14,
        color: "#c9d1d9",
        fontFamily: "monospace",
        whiteSpace: "pre-wrap",
        margin: 0,
        lineHeight: 1.5,
      }}>
        {text}
      </pre>
    </div>
  );
};

const ProcessStepComponent: React.FC<{ step: ProcessStep; index: number; totalSteps: number }> = ({ step, index, totalSteps }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleScale = spring({ frame, fps, config: { damping: 10, stiffness: 120 } });
  const descOpacity = interpolate(frame, [20, 40], [0, 1], { extrapolateRight: "clamp" });
  const contentOpacity = interpolate(frame, [40, 60], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.background }}>
      <TechBackground variant="grid" />
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: step.type === "result" || step.type === "video" ? "flex-start" : "center",
        height: "100%",
        padding: 50,
        paddingTop: step.type === "result" || step.type === "video" ? 60 : 50,
        zIndex: 1,
      }}>
        <div style={{
          position: "absolute",
          top: 16,
          left: 16,
          display: "flex",
          gap: 4,
        }}>
          {processSteps.map((_, i) => (
            <div key={i} style={{
              width: 20,
              height: 3,
              borderRadius: 2,
              backgroundColor: i <= index ? COLORS.primary : COLORS.surface,
              opacity: i <= index ? 1 : 0.3,
            }} />
          ))}
        </div>

        <h2 style={{
          fontSize: 36,
          fontWeight: "bold",
          color: COLORS.primary,
          transform: `scale(${titleScale})`,
          marginBottom: 6,
        }}>
          {step.title}
        </h2>
        
        <p style={{
          fontSize: 18,
          color: COLORS.textSecondary,
          opacity: descOpacity,
          marginBottom: step.type === "result" || step.type === "video" ? 12 : 20,
        }}>
          {step.description}
        </p>
        
        {step.type === "image" && step.image && (
          <div style={{
            width: "85%",
            aspectRatio: "16/9",
            backgroundColor: COLORS.surface,
            borderRadius: 16,
            border: `2px solid ${COLORS.primary}40`,
            overflow: "hidden",
            opacity: contentOpacity,
          }}>
            <Img 
              src={step.image} 
              style={{ width: "100%", height: "100%", objectFit: "contain" }} 
            />
          </div>
        )}

        {step.type === "prompt" && step.promptText && (
          <PromptDisplay text={step.promptText} />
        )}

        {step.type === "result" && step.image && (
          <div style={{
            width: "100%",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: contentOpacity,
          }}>
            <div style={{
              flex: 1,
              width: "90%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <div style={{
                maxWidth: "100%",
                maxHeight: "50vh",
                backgroundColor: COLORS.surface,
                borderRadius: 16,
                border: `3px solid ${COLORS.success}`,
                overflow: "hidden",
                boxShadow: `0 0 40px ${COLORS.success}30`,
              }}>
                <Img 
                  src={step.image} 
                  style={{ maxWidth: "100%", maxHeight: "50vh", objectFit: "contain" }} 
                />
              </div>
            </div>
            <div style={{ 
              textAlign: "center", 
              padding: "12px 0",
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}>
              <div style={{
                fontSize: 24,
                color: COLORS.success,
                fontWeight: "bold",
              }}>
                生成完成
              </div>
              <div style={{
                fontSize: 16,
                color: COLORS.textSecondary,
              }}>
                4K高清角色设定卡
              </div>
            </div>
          </div>
        )}

        {step.type === "video" && step.videoSrc && (
          <div style={{
            width: "100%",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: contentOpacity,
          }}>
            <div style={{
              flex: 1,
              width: "85%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <div style={{
                width: "100%",
                aspectRatio: "16/9",
                borderRadius: 16,
                overflow: "hidden",
                border: `3px solid ${COLORS.success}`,
                boxShadow: `0 0 40px ${COLORS.success}30`,
              }}>
                <Video
                  src={step.videoSrc}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
            <div style={{ 
              textAlign: "center", 
              padding: "12px 0",
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}>
              <div style={{
                fontSize: 24,
                color: COLORS.success,
                fontWeight: "bold",
              }}>
                Demo生成完成
              </div>
              <div style={{
                fontSize: 16,
                color: COLORS.textSecondary,
              }}>
                西游记 · 悟空与白骨精对峙 · 15秒
              </div>
            </div>
          </div>
        )}
      </div>
    </AbsoluteFill>
  );
};

export const ProcessRevealScene: React.FC = () => {
  let currentFrame = 0;
  
  return (
    <div style={{ flex: 1, backgroundColor: COLORS.background }}>
      {processSteps.map((step, index) => {
        const startFrame = currentFrame;
        currentFrame += step.duration;
        return (
          <Sequence key={index} from={startFrame} durationInFrames={step.duration}>
            <ProcessStepComponent step={step} index={index} totalSteps={processSteps.length} />
          </Sequence>
        );
      })}
    </div>
  );
};