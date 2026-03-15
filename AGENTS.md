# AGENTS.md

This document provides guidelines for AI coding agents working in this repository.

## 项目背景与目标

### 公司背景
- 公司主营业务：数据服务
- 技术团队：正在探索AI+数据方向，对AI应用有一定理解
- 核心能力：工程化能力（数据采集、API开发、系统架构、DevOps运维）
- AI能力：暂无明显优势，需要从零开始

### 交流目标
- **主要目标**：展示公司能力，争取投资
- **目标受众**：商务投资老板，对AI很感兴趣
- **受众关注点**：AI漫剧、AI量化交易（本项目聚焦AI漫剧方向）
- **准备时间**：3-5天

### 投资交流核心内容
本次交流需要准备以下材料：

1. **行业洞察**（展示专业度）
   - AI漫剧市场规模、增速、痛点
   - 技术成熟度评估
   - 商业模式分析

2. **技术方案**（展示可行性）
   - 技术栈全景图：内容层 → 模型层 → 工程层 → 数据层
   - 关键技术难点及解决思路
   - 公司能力迁移路径

3. **MVP计划**（展示执行力）
   - 8周分阶段交付计划
   - 资源投入与里程碑
   - 风险评估与应对

4. **演示视频**（本项目产出）
   - 用Remotion制作的动态演示视频
   - 时长约60秒，涵盖市场机会、技术栈、能力迁移、MVP计划
   - 作为交流中的视觉辅助材料

### 关键信息
| 维度 | 内容 |
|------|------|
| 目标方向 | AI漫剧（非AI量化交易） |
| 公司优势 | 工程化落地能力、数据服务经验 |
| 公司劣势 | 无AI算法积累、无内容行业经验 |
| 差异化定位 | ToB内容定制 / 工程化能力壁垒 |
| MVP周期 | 8周快速验证 |

### 能力迁移映射
| 现有能力 | 迁移目标 |
|---------|---------|
| 数据采集与清洗 | 剧本语料处理 |
| API接口开发 | 模型调度服务 |
| 系统架构设计 | 内容生产流水线 |
| DevOps运维 | AI服务部署 |

---

## Project Overview

This is a Remotion-based video project for creating AI drama pitch presentation videos. The project generates animated presentations using React components that render to video frames.

## Build/Lint/Test Commands

```bash
# Install dependencies
npm install

# Start Remotion Studio (preview and edit videos interactively)
npm run start

# Render video to MP4
npm run build

# Alternative render command
npm run render
```

### Rendering Specific Videos

```bash
# Render specific composition
npx remotion render src/index.ts PitchVideo out/video.mp4

# Render with custom settings
npx remotion render src/index.ts PitchVideo out/video.mp4 --fps 30 --width 1920 --height 1080

# Render as GIF
npx remotion render src/index.ts PitchVideo out/video.gif --codec gif
```

### Type Checking

```bash
# TypeScript type check
npx tsc --noEmit
```

## Project Structure

```
src/
├── index.ts           # Entry point, registers Remotion root
├── Root.tsx           # Composition definitions
├── PitchVideo.tsx     # Main video component with scene sequences
├── scenes/            # Individual scene components
│   ├── OpeningScene.tsx
│   ├── MarketScene.tsx
│   ├── TechStackScene.tsx
│   ├── CapabilityScene.tsx
│   ├── MVPScene.tsx
│   └── ClosingScene.tsx
└── utils/
    └── theme.ts       # Color palette and animation configs
```

## Code Style Guidelines

### Imports

```typescript
// 1. React imports first
import React from "react";

// 2. Third-party library imports (Remotion)
import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from "remotion";

// 3. Local imports (relative paths)
import { COLORS } from "../utils/theme";

// 4. Type imports last (use type-only imports)
import type { SomeType } from "./types";
```

### Component Structure

```typescript
// Interface definitions at the top (before component)
interface DataItem {
  label: string;
  value: string;
  color?: string;
}

// Use React.FC type annotation
export const ComponentName: React.FC = () => {
  // 1. Hooks at the top
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 2. Derived values and animations
  const opacity = interpolate(frame, [0, 30], [0, 1]);
  const scale = spring({ frame, fps, config: { damping: 12 } });

  // 3. JSX return
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.background }}>
      {/* Content */}
    </AbsoluteFill>
  );
};
```

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `OpeningScene`, `TechStackScene` |
| Variables | camelCase | `titleOpacity`, `layerIndex` |
| Constants | SCREAMING_SNAKE_CASE or PascalCase | `COLORS`, `TechLayer` |
| Interfaces | PascalCase | `TechLayer`, `Phase` |
| Files | PascalCase for components | `OpeningScene.tsx` |

### TypeScript Guidelines

- Use `strict` mode (enabled in tsconfig.json)
- Define interfaces for data structures, especially arrays used in `.map()`
- Prefer `const` over `let` and `var`
- Use type inference where obvious, explicit types where needed

```typescript
// Good: Interface for data structures
interface Phase {
  name: string;
  duration: string;
  tasks: string[];
  deliverable: string;
}

const mvpPlan: Phase[] = [
  { name: "Phase 1", duration: "Week 1-2", tasks: [], deliverable: "Doc" }
];

// Good: Type inference for simple values
const frame = useCurrentFrame(); // inferred as number
const opacity = interpolate(frame, [0, 30], [0, 1]); // inferred as number
```

### Styling

This project uses inline styles exclusively. No CSS modules or styled-components.

```typescript
// Preferred: Use COLORS constant for consistency
<div style={{
  backgroundColor: COLORS.background,
  color: COLORS.text,
  padding: 80,
  borderRadius: 16,
  border: `1px solid ${COLORS.primary}40`,
}}>
  Content
</div>

// For gradients and dynamic colors
<div style={{
  background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`,
  opacity: opacity,
}}>
  Content
</div>
```

### Animation Patterns

```typescript
// Fade in animation
const opacity = interpolate(frame, [0, 30], [0, 1]);

// Spring-based scale animation
const scale = spring({ frame, fps, config: { damping: 12, stiffness: 100 } });

// Staggered animations with delay
const itemOpacity = interpolate(frame, [delay + itemIndex * 10, delay + itemIndex * 10 + 20], [0, 1]);

// Use in style
<div style={{
  opacity: opacity,
  transform: `scale(${scale})`,
}}>
```

### Scene Timing

Each scene uses Remotion's `Sequence` component in the main `PitchVideo.tsx`:

```typescript
<Sequence from={0} durationInFrames={150}>
  <OpeningScene />
</Sequence>
```

- `from`: Starting frame number
- `durationInFrames`: Scene length in frames
- At 30 fps: 150 frames = 5 seconds

### Error Handling

For video rendering, components should gracefully handle edge cases:

```typescript
// Clamp interpolation values
const opacity = interpolate(frame, [0, 30], [0, 1], {
  extrapolateLeft: "clamp",
  extrapolateRight: "clamp",
});

// Null checks for optional data
{data?.map((item, index) => (
  <div key={index}>{item.name}</div>
))}
```

## Color Palette

Defined in `src/utils/theme.ts`:

| Name | Value | Usage |
|------|-------|-------|
| primary | #6366f1 | Primary brand color |
| secondary | #8b5cf6 | Secondary accent |
| accent | #f59e0b | Highlights, CTAs |
| background | #0a0a0a | Scene backgrounds |
| surface | #1a1a2e | Card backgrounds |
| text | #ffffff | Primary text |
| textSecondary | #94a3b8 | Secondary text |
| success | #10b981 | Success states |

## Key Remotion APIs

- `useCurrentFrame()`: Get current frame number for animations
- `useVideoConfig()`: Get video dimensions and fps
- `AbsoluteFill`: Container that fills the composition
- `Sequence`: Time-based component wrapper
- `interpolate()`: Linear interpolation for animations
- `spring()`: Physics-based animations

## Adding New Scenes

1. Create component in `src/scenes/NewScene.tsx`
2. Import in `src/PitchVideo.tsx`
3. Add `Sequence` wrapper with timing
4. Update total duration in `Root.tsx` if needed