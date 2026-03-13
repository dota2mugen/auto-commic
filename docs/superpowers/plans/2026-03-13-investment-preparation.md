# 投资交流准备工作实施计划

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 完成AI漫剧Demo成品和10分钟演示视频，用于第一次技术交流

**Architecture:** 
- Day 1-3：手工使用AI工具制作AI漫剧Demo（选题→角色设计→分镜→图像→视频）
- Day 4：使用Remotion制作演示视频，整合Demo素材和技术讲解内容
- Day 5：准备技术交流材料

**Tech Stack:** 
- AI工具：nanabanana2（角色设计）、AI视频模型（视频生成）
- 视频制作：Remotion + React + TypeScript

---

## Chunk 1: AI漫剧Demo制作指南

### Task 1: 选题确认

**产出文件:**
- 创建: `demo/选题确认.md`

**目标:** 选择适合的名著经典场面作为Demo素材

**选题标准:**
- 知名度高，观众容易理解
- 场景数量适中（2-3个镜头）
- 角色数量少（1-2个主角）
- 有戏剧张力

**推荐选题:**
| 选题 | 优势 | 镜头数 | 角色数 |
|------|------|--------|--------|
| 西游记·三打白骨精 | 知名度高，冲突强烈 | 3 | 2 |
| 红楼梦·黛玉葬花 | 情感丰富，画面唯美 | 2 | 1 |
| 三国演义·桃园结义 | 兄弟情义，场景简洁 | 2 | 3 |

- [ ] **Step 1: 确定选题**

根据个人偏好和制作难度，选择一个选题。建议选择"西游记·三打白骨精"，戏剧张力强，容易展示AI视频效果。

- [ ] **Step 2: 创建选题确认文档**

```markdown
# Demo选题确认

## 选题: 西游记·三打白骨精

### 场景设定
1. **场景1**: 白骨精变幻成村姑，向唐僧走来
2. **场景2**: 孙悟空火眼金睛识破，举起金箍棒
3. **场景3**: 白骨精现原形，孙悟空一棒打下

### 角色设定
1. **孙悟空**: 主角，需要角色设定卡
2. **白骨精**: 反派，需要角色设定卡（村姑形态+原形）
3. **唐僧**: 背景角色，可不单独设定

### 画面风格
- 中国风动画风格
- 色彩鲜明，对比强烈
- 动作夸张有张力

### 预期时长
- 场景1: 5秒
- 场景2: 5秒
- 场景3: 5秒
- 总时长: 约15秒
```

保存到 `demo/选题确认.md`

---

### Task 2: 角色设计（nanabanana2）

**产出文件:**
- 创建: `demo/角色设定/孙悟空/`
- 创建: `demo/角色设定/白骨精/`

**目标:** 使用nanabanana2生成角色设定卡，保证不同场景中角色一致性

**nanabanana2使用流程:**

- [ ] **Step 1: 准备角色描述提示词**

**孙悟空角色提示词:**
```
A character sheet of Sun Wukong (Monkey King) from Journey to the West, 
Chinese animation style, full body view, showing multiple poses and expressions.

Character features:
- Golden fur, monkey face
- Red eyes with golden pupils (Fiery Golden Eyes)
- Golden headband (Filleting Spell)
- Yellow and red robes
- Holding Ruyi Jingu Bang (golden staff)

Views needed:
- Front view
- Side view
- Back view
- Action poses (fighting stance, jumping, using staff)
- Facial expressions (angry, determined, surprised)

Style: Chinese animation, vibrant colors, clean lines
```

**白骨精角色提示词:**
```
A character sheet of Baigujing (White Bone Spirit) from Journey to the West,
Chinese animation style, full body view, showing multiple poses and expressions.

Character features (village girl form):
- Beautiful young woman appearance
- Traditional Chinese village clothing
- Carrying a basket
- Subtle hint of evil in eyes

Character features (true form):
- Skeletal appearance with white bones
- Glowing eyes
- Flowing white robes
- Menacing pose

Views needed:
- Village girl: front, side, expressions (innocent, revealing true nature)
- True form: front, action pose

Style: Chinese animation, contrasting innocent vs menacing
```

- [ ] **Step 2: 使用nanabanana2生成角色设定卡**

1. 访问nanabanana2平台
2. 输入孙悟空角色提示词
3. 生成并保存结果（可能需要多次调整提示词）
4. 输入白骨精角色提示词
5. 生成并保存结果

- [ ] **Step 3: 整理角色设定卡文件**

```
demo/
└── 角色设定/
    ├── 孙悟空/
    │   ├── 角色设定卡_主图.png
    │   ├── 三视图.png
    │   ├── 表情集.png
    │   └── 动作参考.png
    └── 白骨精/
        ├── 村姑形态_主图.png
        ├── 村姑形态_三视图.png
        ├── 原形_主图.png
        └── 原形_动作参考.png
```

- [ ] **Step 4: 截图记录生成过程**

对nanabanana2的使用界面进行截图，用于演示视频中的"生成全过程还原"部分。

保存到: `demo/过程记录/角色设计_截图/`

---

### Task 3: 分镜设计

**产出文件:**
- 创建: `demo/分镜设计/`

**目标:** 使用AI生成分镜设计，确定每个镜头的构图和动作

- [ ] **Step 1: 准备分镜提示词**

**场景1分镜提示词:**
```
Storyboard panel 1: Journey to the West - Baigujing appears as village girl

Scene: Mountain path, ancient China
Shot type: Medium long shot, camera following from behind

Action: A beautiful village girl in traditional Chinese clothing walks toward the camera, carrying a basket. She has a sweet smile. In the background, a monk (Tang Seng) sits resting.

Composition: Girl in foreground left, monk small in background right
Mood: Seemingly peaceful, but with subtle unease
Style: Chinese animation, vibrant colors
```

**场景2分镜提示词:**
```
Storyboard panel 2: Journey to the West - Sun Wukong discovers the truth

Scene: Same mountain path
Shot type: Close-up on Sun Wukong's face, then pull back to medium shot

Action: Sun Wukong's eyes glow golden (Fiery Golden Eyes). His expression changes from casual to alarmed to determined. He reaches for his golden staff.

Composition: Dramatic angle, low angle shot looking up at Wukong
Mood: Tense, dramatic revelation
Style: Chinese animation, high contrast
```

**场景3分镜提示词:**
```
Storyboard panel 3: Journey to the West - Sun Wukong defeats Baigujing

Scene: Same mountain path, dramatic lighting
Shot type: Dynamic action shot, camera following the staff

Action: Baigujing transforms into skeletal true form. Sun Wukong leaps and swings his golden staff down in a powerful strike. Impact creates bright flash.

Composition: Diagonal composition, staff leading the eye, Baigujing in defensive pose
Mood: Epic climax, powerful
Style: Chinese animation, dynamic action
```

- [ ] **Step 2: 使用AI生成分镜图**

1. 使用图像生成AI（如Midjourney、Stable Diffusion等）
2. 输入分镜提示词
3. 生成并调整直到满意
4. 保存分镜图

- [ ] **Step 3: 整理分镜文件**

```
demo/
└── 分镜设计/
    ├── 场景1_白骨精出现.png
    ├── 场景2_悟空识破.png
    ├── 场景3_悟空打妖.png
    └── 分镜说明.md
```

- [ ] **Step 4: 截图记录生成过程**

保存到: `demo/过程记录/分镜设计_截图/`

---

### Task 4: 视频生成

**产出文件:**
- 创建: `demo/视频片段/`
- 创建: `demo/Demo成品.mp4`

**目标:** 使用AI视频模型生成视频片段，整合为Demo成品

- [ ] **Step 1: 准备视频生成提示词**

**场景1视频提示词:**
```
A beautiful village girl in traditional Chinese clothing walks along a mountain path, carrying a basket. She approaches with a sweet smile. In the background, a Buddhist monk sits resting. Chinese animation style, smooth motion, 5 seconds.
```

**场景2视频提示词:**
```
Close-up of Sun Wukong (Monkey King) with golden fur and red glowing eyes. His expression changes dramatically as he sees through a disguise. He reaches for his golden staff with determination. Chinese animation style, cinematic, 5 seconds.
```

**场景3视频提示词:**
```
Dynamic action scene: Sun Wukong leaps and swings his golden staff down. A white skeletal figure (Baigujing) tries to defend but is struck. Bright flash on impact. Chinese animation style, epic action, 5 seconds.
```

- [ ] **Step 2: 使用AI视频模型生成视频**

推荐工具：
- Runway Gen-3
- Pika Labs
- Kling AI
- 可灵AI

操作步骤：
1. 上传角色设定图作为参考（如果工具支持）
2. 输入视频生成提示词
3. 生成视频片段
4. 可能需要多次尝试，选择最佳结果

- [ ] **Step 3: 整理视频文件**

```
demo/
└── 视频片段/
    ├── 场景1_白骨精出现.mp4
    ├── 场景2_悟空识破.mp4
    └── 场景3_悟空打妖.mp4
```

- [ ] **Step 4: 合成Demo成品**

使用视频编辑工具（如剪映、DaVinci Resolve等）：
1. 导入三个视频片段
2. 添加转场效果
3. 可选：添加BGM
4. 导出为 `demo/Demo成品.mp4`

- [ ] **Step 5: 截图记录生成过程**

保存到: `demo/过程记录/视频生成_截图/`

---

### Task 5: Demo素材整理

**产出文件:**
- 整理: `demo/` 目录结构完整

**目标:** 确保所有Demo素材和过程记录完整，为演示视频制作做准备

- [ ] **Step 1: 确认目录结构**

```
demo/
├── 选题确认.md
├── Demo成品.mp4
├── 角色设定/
│   ├── 孙悟空/
│   │   ├── 角色设定卡_主图.png
│   │   ├── 三视图.png
│   │   ├── 表情集.png
│   │   └── 动作参考.png
│   └── 白骨精/
│       ├── 村姑形态_主图.png
│       ├── 村姑形态_三视图.png
│       ├── 原形_主图.png
│       └── 原形_动作参考.png
├── 分镜设计/
│   ├── 场景1_白骨精出现.png
│   ├── 场景2_悟空识破.png
│   ├── 场景3_悟空打妖.png
│   └── 分镜说明.md
├── 视频片段/
│   ├── 场景1_白骨精出现.mp4
│   ├── 场景2_悟空识破.mp4
│   └── 场景3_悟空打妖.mp4
└── 过程记录/
    ├── 角色设计_截图/
    ├── 分镜设计_截图/
    └── 视频生成_截图/
```

- [ ] **Step 2: 检查素材完整性**

确认以下素材齐全：
- [ ] Demo成品视频
- [ ] 角色设定卡（孙悟空、白骨精）
- [ ] 分镜图（3个场景）
- [ ] 视频片段（3个场景）
- [ ] 过程截图（每个步骤）

---

## Chunk 2: 演示视频制作（Remotion项目）

### Task 6: 项目结构重构

**文件:**
- 修改: `src/PitchVideo.tsx`
- 修改: `src/Root.tsx`
- 创建: `src/scenes/DemoShowcaseScene.tsx`
- 创建: `src/scenes/ProcessRevealScene.tsx`
- 创建: `src/scenes/TechStackScene.tsx` (已存在，可能需要更新)
- 创建: `src/scenes/BoundaryRiskScene.tsx`

**目标:** 重构项目结构以支持10分钟视频

- [ ] **Step 1: 更新Root.tsx时长**

当前时长1800帧（60秒），需要更新为18000帧（600秒=10分钟）

修改 `src/Root.tsx`:
```typescript
import { Composition } from "remotion";
import { PitchVideo } from "./PitchVideo";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="PitchVideo"
        component={PitchVideo}
        durationInFrames={18000}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
```

- [ ] **Step 2: 更新PitchVideo.tsx场景结构**

修改 `src/PitchVideo.tsx`:

```typescript
import { Sequence, useVideoConfig } from "remotion";
import { OpeningScene } from "./scenes/OpeningScene";
import { DemoShowcaseScene } from "./scenes/DemoShowcaseScene";
import { ProcessRevealScene } from "./scenes/ProcessRevealScene";
import { TechStackScene } from "./scenes/TechStackScene";
import { BoundaryRiskScene } from "./scenes/BoundaryRiskScene";
import { ClosingScene } from "./scenes/ClosingScene";

export const PitchVideo: React.FC = () => {
  const { fps } = useVideoConfig();
  
  return (
    <div style={{ flex: 1, backgroundColor: "#0a0a0a" }}>
      {/* 开场 30秒 */}
      <Sequence from={0} durationInFrames={900}>
        <OpeningScene />
      </Sequence>
      
      {/* Demo展示 90秒 (1.5分钟) */}
      <Sequence from={900} durationInFrames={2700}>
        <DemoShowcaseScene />
      </Sequence>
      
      {/* 生成全过程还原 270秒 (4.5分钟) */}
      <Sequence from={3600} durationInFrames={8100}>
        <ProcessRevealScene />
      </Sequence>
      
      {/* 技术栈全景 60秒 (1分钟) */}
      <Sequence from={11700} durationInFrames={1800}>
        <TechStackScene />
      </Sequence>
      
      {/* 能力边界与风险 60秒 (1分钟) */}
      <Sequence from={13500} durationInFrames={1800}>
        <BoundaryRiskScene />
      </Sequence>
      
      {/* 结尾 30秒 */}
      <Sequence from={15300} durationInFrames={2700}>
        <ClosingScene />
      </Sequence>
    </div>
  );
};
```

- [ ] **Step 3: 创建DemoShowcaseScene组件**

创建 `src/scenes/DemoShowcaseScene.tsx`:

```typescript
import React from "react";
import { AbsoluteFill, useVideoConfig, useCurrentFrame, interpolate, spring } from "remotion";
import { COLORS } from "../utils/theme";

export const DemoShowcaseScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });
  
  const titleScale = spring({ frame, fps, config: { damping: 12, stiffness: 100 } });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.background }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        padding: 80,
      }}>
        <h1 style={{
          fontSize: 64,
          fontWeight: "bold",
          color: COLORS.text,
          opacity: titleOpacity,
          transform: `scale(${titleScale})`,
          marginBottom: 40,
        }}>
          AI漫剧Demo展示
        </h1>
        
        <div style={{
          width: "80%",
          aspectRatio: "16/9",
          backgroundColor: COLORS.surface,
          borderRadius: 16,
          border: `2px solid ${COLORS.primary}40`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <p style={{
            fontSize: 32,
            color: COLORS.textSecondary,
          }}>
            [Demo视频将在此处播放]
          </p>
        </div>
        
        <p style={{
          fontSize: 24,
          color: COLORS.textSecondary,
          marginTop: 40,
          opacity: interpolate(frame, [60, 90], [0, 1], { extrapolateRight: "clamp" }),
        }}>
          西游记 · 三打白骨精
        </p>
      </div>
    </AbsoluteFill>
  );
};
```

- [ ] **Step 4: 创建ProcessRevealScene组件**

创建 `src/scenes/ProcessRevealScene.tsx`:

```typescript
import React from "react";
import { AbsoluteFill, Sequence, useVideoConfig, useCurrentFrame, interpolate, spring } from "remotion";
import { COLORS } from "../utils/theme";

interface ProcessStep {
  title: string;
  description: string;
  duration: number;
}

const processSteps: ProcessStep[] = [
  { title: "Step 1: 选题确认", description: "选择名著经典场面", duration: 450 },
  { title: "Step 2: 角色设计", description: "nanabanana2生成角色设定卡", duration: 900 },
  { title: "Step 3: 分镜设计", description: "AI生成分镜图", duration: 900 },
  { title: "Step 4: 视频生成", description: "AI视频模型生成片段", duration: 1350 },
  { title: "Step 5: 后期整合", description: "合成Demo成品", duration: 450 },
];

const ProcessStepComponent: React.FC<{ step: ProcessStep; index: number }> = ({ step, index }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" });
  const scale = spring({ frame, fps, config: { damping: 12, stiffness: 100 } });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.background }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        padding: 80,
      }}>
        <h2 style={{
          fontSize: 48,
          fontWeight: "bold",
          color: COLORS.primary,
          opacity,
          transform: `scale(${scale})`,
          marginBottom: 20,
        }}>
          {step.title}
        </h2>
        
        <p style={{
          fontSize: 28,
          color: COLORS.textSecondary,
          opacity: interpolate(frame, [30, 60], [0, 1], { extrapolateRight: "clamp" }),
          marginBottom: 60,
        }}>
          {step.description}
        </p>
        
        <div style={{
          width: "70%",
          aspectRatio: "16/9",
          backgroundColor: COLORS.surface,
          borderRadius: 16,
          border: `2px solid ${COLORS.primary}40`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: interpolate(frame, [60, 90], [0, 1], { extrapolateRight: "clamp" }),
        }}>
          <p style={{
            fontSize: 24,
            color: COLORS.textSecondary,
          }}>
            [过程截图/演示将在此处展示]
          </p>
        </div>
        
        <div style={{
          display: "flex",
          gap: 20,
          marginTop: 60,
          opacity: interpolate(frame, [90, 120], [0, 1], { extrapolateRight: "clamp" }),
        }}>
          {processSteps.map((_, i) => (
            <div key={i} style={{
              width: 100,
              height: 8,
              borderRadius: 4,
              backgroundColor: i <= index ? COLORS.primary : COLORS.surface,
            }} />
          ))}
        </div>
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
            <ProcessStepComponent step={step} index={index} />
          </Sequence>
        );
      })}
    </div>
  );
};
```

- [ ] **Step 5: 创建BoundaryRiskScene组件**

创建 `src/scenes/BoundaryRiskScene.tsx`:

```typescript
import React from "react";
import { AbsoluteFill, useVideoConfig, useCurrentFrame, interpolate, spring } from "remotion";
import { COLORS } from "../utils/theme";

interface BoundaryItem {
  label: string;
  status: "mature" | "developing" | "pending";
  description: string;
}

interface RiskItem {
  category: string;
  description: string;
}

const boundaries: BoundaryItem[] = [
  { label: "图像生成", status: "mature", description: "成熟，角色一致性是关键难点" },
  { label: "视频生成", status: "developing", description: "快速进化，目前适合短片段" },
  { label: "音频生成", status: "mature", description: "已可商用" },
  { label: "全流程自动化", status: "pending", description: "尚需工程化整合" },
];

const risks: RiskItem[] = [
  { category: "技术风险", description: "AI生成质量波动" },
  { category: "版权风险", description: "训练数据合规性" },
  { category: "内容风险", description: "AI生成内容的审查" },
  { category: "竞争风险", description: "技术门槛在降低" },
];

const statusColors = {
  mature: COLORS.success,
  developing: COLORS.accent,
  pending: COLORS.textSecondary,
};

const statusLabels = {
  mature: "成熟",
  developing: "发展中",
  pending: "待完善",
};

export const BoundaryRiskScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" });
  
  const showBoundaries = frame >= 30;
  const showRisks = frame >= 900;

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.background }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: 80,
      }}>
        <h1 style={{
          fontSize: 48,
          fontWeight: "bold",
          color: COLORS.text,
          opacity: titleOpacity,
          marginBottom: 60,
          textAlign: "center",
        }}>
          能力边界与风险
        </h1>
        
        <div style={{
          display: "flex",
          flex: 1,
          gap: 60,
        }}>
          <div style={{
            flex: 1,
            opacity: interpolate(frame, [30, 60], [0, 1], { extrapolateRight: "clamp" }),
          }}>
            <h2 style={{
              fontSize: 32,
              fontWeight: "bold",
              color: COLORS.primary,
              marginBottom: 40,
            }}>
              技术能力边界
            </h2>
            
            {boundaries.map((item, index) => {
              const itemOpacity = interpolate(
                frame,
                [60 + index * 60, 90 + index * 60],
                [0, 1],
                { extrapolateRight: "clamp" }
              );
              
              return (
                <div key={index} style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 30,
                  opacity: itemOpacity,
                }}>
                  <div style={{
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    backgroundColor: statusColors[item.status],
                    marginRight: 20,
                  }} />
                  <div>
                    <p style={{
                      fontSize: 24,
                      color: COLORS.text,
                      fontWeight: "bold",
                    }}>
                      {item.label}
                      <span style={{
                        fontSize: 16,
                        color: statusColors[item.status],
                        marginLeft: 10,
                      }}>
                        ({statusLabels[item.status]})
                      </span>
                    </p>
                    <p style={{
                      fontSize: 18,
                      color: COLORS.textSecondary,
                    }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div style={{
            flex: 1,
            opacity: interpolate(frame, [900, 930], [0, 1], { extrapolateRight: "clamp" }),
          }}>
            <h2 style={{
              fontSize: 32,
              fontWeight: "bold",
              color: COLORS.accent,
              marginBottom: 40,
            }}>
              潜在风险
            </h2>
            
            {risks.map((item, index) => {
              const itemOpacity = interpolate(
                frame,
                [930 + index * 60, 960 + index * 60],
                [0, 1],
                { extrapolateRight: "clamp" }
              );
              
              return (
                <div key={index} style={{
                  padding: 20,
                  marginBottom: 20,
                  backgroundColor: COLORS.surface,
                  borderRadius: 12,
                  border: `1px solid ${COLORS.accent}40`,
                  opacity: itemOpacity,
                }}>
                  <p style={{
                    fontSize: 20,
                    color: COLORS.accent,
                    fontWeight: "bold",
                    marginBottom: 8,
                  }}>
                    {item.category}
                  </p>
                  <p style={{
                    fontSize: 18,
                    color: COLORS.textSecondary,
                  }}>
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
```

- [ ] **Step 6: 运行项目验证**

```bash
npm run start
```

在Remotion Studio中预览视频，确认各场景正常显示。

---

### Task 7: 更新OpeningScene和ClosingScene

**文件:**
- 修改: `src/scenes/OpeningScene.tsx`
- 修改: `src/scenes/ClosingScene.tsx`

**目标:** 更新开场和结尾场景以匹配新的视频结构

- [ ] **Step 1: 更新OpeningScene**

修改 `src/scenes/OpeningScene.tsx`:

```typescript
import React from "react";
import { AbsoluteFill, useVideoConfig, useCurrentFrame, interpolate, spring } from "remotion";
import { COLORS } from "../utils/theme";

export const OpeningScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" });
  const titleScale = spring({ frame, fps, config: { damping: 12, stiffness: 100 } });
  
  const subtitleOpacity = interpolate(frame, [60, 90], [0, 1], { extrapolateRight: "clamp" });
  const descOpacity = interpolate(frame, [120, 150], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.background }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        padding: 80,
      }}>
        <h1 style={{
          fontSize: 80,
          fontWeight: "bold",
          color: COLORS.text,
          opacity: titleOpacity,
          transform: `scale(${titleScale})`,
          marginBottom: 30,
          textAlign: "center",
        }}>
          AI漫剧技术展示
        </h1>
        
        <h2 style={{
          fontSize: 40,
          color: COLORS.primary,
          opacity: subtitleOpacity,
          marginBottom: 40,
        }}>
          从创意到成品的完整流程
        </h2>
        
        <p style={{
          fontSize: 24,
          color: COLORS.textSecondary,
          opacity: descOpacity,
          maxWidth: 800,
          textAlign: "center",
          lineHeight: 1.6,
        }}>
          本次展示将演示如何使用AI工具，
          <br />
          在短时间内完成一个AI漫剧片段的制作
        </p>
      </div>
    </AbsoluteFill>
  );
};
```

- [ ] **Step 2: 更新ClosingScene**

修改 `src/scenes/ClosingScene.tsx`:

```typescript
import React from "react";
import { AbsoluteFill, useVideoConfig, useCurrentFrame, interpolate, spring } from "remotion";
import { COLORS } from "../utils/theme";

export const ClosingScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" });
  const titleScale = spring({ frame, fps, config: { damping: 12, stiffness: 100 } });
  
  const contactOpacity = interpolate(frame, [60, 90], [0, 1], { extrapolateRight: "clamp" });
  const thanksOpacity = interpolate(frame, [120, 150], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.background }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        padding: 80,
      }}>
        <h1 style={{
          fontSize: 64,
          fontWeight: "bold",
          color: COLORS.text,
          opacity: titleOpacity,
          transform: `scale(${titleScale})`,
          marginBottom: 60,
        }}>
          感谢观看
        </h1>
        
        <div style={{
          padding: 40,
          backgroundColor: COLORS.surface,
          borderRadius: 16,
          border: `2px solid ${COLORS.primary}40`,
          opacity: contactOpacity,
          marginBottom: 40,
        }}>
          <p style={{
            fontSize: 28,
            color: COLORS.text,
            marginBottom: 20,
          }}>
            联系方式
          </p>
          <p style={{
            fontSize: 24,
            color: COLORS.textSecondary,
          }}>
            [公司名称]
          </p>
          <p style={{
            fontSize: 24,
            color: COLORS.textSecondary,
          }}>
            [联系人]
          </p>
          <p style={{
            fontSize: 24,
            color: COLORS.textSecondary,
          }}>
            [邮箱/电话]
          </p>
        </div>
        
        <p style={{
          fontSize: 32,
          color: COLORS.primary,
          opacity: thanksOpacity,
        }}>
          期待与您合作
        </p>
      </div>
    </AbsoluteFill>
  );
};
```

- [ ] **Step 3: 运行项目验证**

```bash
npm run start
```

---

### Task 8: 整合Demo素材到演示视频

**文件:**
- 修改: `src/scenes/DemoShowcaseScene.tsx`
- 修改: `src/scenes/ProcessRevealScene.tsx`

**目标:** 将Demo素材整合到演示视频中

**注意:** Remotion支持使用Video组件播放视频文件，需要将Demo素材复制到public目录

- [ ] **Step 1: 创建public目录并复制素材**

```bash
mkdir -p public/demo
cp demo/Demo成品.mp4 public/demo/
cp -r demo/角色设定 public/demo/
cp -r demo/分镜设计 public/demo/
cp -r demo/视频片段 public/demo/
```

- [ ] **Step 2: 更新DemoShowcaseScene使用Video组件**

修改 `src/scenes/DemoShowcaseScene.tsx`:

```typescript
import React from "react";
import { AbsoluteFill, Video, useVideoConfig, useCurrentFrame, interpolate, spring } from "remotion";
import { COLORS } from "../utils/theme";

export const DemoShowcaseScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });
  
  const titleScale = spring({ frame, fps, config: { damping: 12, stiffness: 100 } });
  const showVideo = frame >= 60;

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.background }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        padding: 80,
      }}>
        <h1 style={{
          fontSize: 64,
          fontWeight: "bold",
          color: COLORS.text,
          opacity: titleOpacity,
          transform: `scale(${titleScale})`,
          marginBottom: 40,
          position: showVideo ? "absolute" : "relative",
          top: showVideo ? 60 : "auto",
        }}>
          AI漫剧Demo展示
        </h1>
        
        {showVideo && (
          <div style={{
            width: "80%",
            aspectRatio: "16/9",
            borderRadius: 16,
            overflow: "hidden",
            border: `2px solid ${COLORS.primary}40`,
            opacity: interpolate(frame, [60, 90], [0, 1], { extrapolateRight: "clamp" }),
          }}>
            <Video
              src="/demo/Demo成品.mp4"
              style={{ width: "100%", height: "100%" }}
              muted
            />
          </div>
        )}
        
        {!showVideo && (
          <p style={{
            fontSize: 24,
            color: COLORS.textSecondary,
            marginTop: 40,
            opacity: interpolate(frame, [30, 60], [0, 1], { extrapolateRight: "clamp" }),
          }}>
            西游记 · 三打白骨精
          </p>
        )}
      </div>
    </AbsoluteFill>
  );
};
```

- [ ] **Step 3: 运行项目验证**

```bash
npm run start
```

---

### Task 9: 渲染最终视频

**目标:** 渲染最终的演示视频

- [ ] **Step 1: 运行构建命令**

```bash
npm run build
```

或使用自定义设置：

```bash
npx remotion render src/index.ts PitchVideo out/pitch-video.mp4
```

- [ ] **Step 2: 检查输出文件**

确认 `out/video.mp4` 或 `out/pitch-video.mp4` 已生成

---

## Chunk 3: 技术交流准备

### Task 10: 技术讲解要点文档

**产出文件:**
- 创建: `docs/技术讲解要点.md`

**目标:** 整理技术交流中需要讲解的要点

- [ ] **Step 1: 创建技术讲解要点文档**

```markdown
# 技术讲解要点

## 1. 开场介绍（2-3分钟）

- 自我介绍：技术背景、在公司负责的领域
- 本次交流目的：展示AI漫剧技术能力，了解客户需求
- 演示内容概览：AI漫剧Demo + 技术讲解

## 2. AI漫剧Demo展示（5分钟）

- 播放Demo视频
- 讲解Demo制作流程：
  - 选题：西游记·三打白骨精
  - 角色设计：nanabanana2生成角色设定卡
  - 分镜设计：AI生成分镜图
  - 视频生成：AI视频模型
  - 后期整合：合成Demo成品

## 3. 技术能力边界讲解（5分钟）

### 3.1 当前技术能力
- 图像生成：成熟，角色一致性是关键难点
- 视频生成：快速进化，目前适合短片段
- 音频生成：已可商用
- 全流程自动化：尚需工程化整合

### 3.2 关键技术挑战
- 角色一致性：不同场景中角色外观保持
- 动作连贯性：视频生成的时序一致性
- 风格控制：保持统一的视觉风格
- 成本控制：平衡质量与生成成本

### 3.3 潜在风险
- 技术风险：AI生成质量波动
- 版权风险：训练数据合规性
- 内容风险：AI生成内容的审查
- 竞争风险：技术门槛在降低

## 4. 客户需求了解（10分钟）

提问清单：
- 您对AI漫剧的具体需求场景是什么？
- 目标受众是谁？消费场景是什么？
- 对内容质量和产出周期有什么要求？
- 现有内容生产流程是怎样的？
- 预算范围大概是多少？

## 5. 下一步计划（2-3分钟）

- 根据客户需求，可以提供：
  - 技术咨询服务
  - 定制化Demo制作
  - 完整解决方案设计
- 预期交付物和时间节点

## 6. Q&A
```

保存到 `docs/技术讲解要点.md`

---

### Task 11: 预演练习

**目标:** 进行预演练习，确保交流流畅

- [ ] **Step 1: 自我预演**

按照技术讲解要点文档，进行完整的自我预演，计时并调整。

- [ ] **Step 2: 检查演示设备**

- 视频播放设备正常
- 投影/屏幕共享正常
- 音频播放正常
- 备用方案准备（如网络视频无法播放，准备本地文件）

- [ ] **Step 3: 准备FAQ预案**

预判可能的问题并准备答案：

| 可能问题 | 准备答案 |
|---------|---------|
| 制作一个完整的AI漫剧需要多久？ | 根据内容复杂度，简单片段1-2天，完整剧集需要数周 |
| 成本大概是多少？ | 取决于内容长度和质量要求，可以提供具体报价 |
| 你们和竞品有什么区别？ | 我们专注ToB定制，工程化能力强，提供完整解决方案 |
| 技术成熟度如何？ | 部分技术已成熟，视频生成仍在快速发展中 |
| 可以定制我们的内容吗？ | 可以，我们会根据您的需求提供定制化服务 |

---

## 时间安排总结

| 天数 | 任务 | 预计时间 |
|------|------|---------|
| Day 1 | Task 1-2: 选题确认、角色设计 | 6-8小时 |
| Day 2 | Task 3: 分镜设计 | 4-6小时 |
| Day 3 | Task 4-5: 视频生成、素材整理 | 6-8小时 |
| Day 4 | Task 6-9: 演示视频制作 | 8-10小时 |
| Day 5 | Task 10-11: 技术准备、预演 | 4-6小时 |

---

## 检查清单

在投资交流前，确认以下事项：

- [ ] AI漫剧Demo成品已完成
- [ ] Demo素材和过程记录完整
- [ ] 演示视频已渲染并测试播放
- [ ] 技术讲解要点文档已准备
- [ ] 预演练习已完成
- [ ] 演示设备已检查
- [ ] FAQ预案已准备