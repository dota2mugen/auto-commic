import { Sequence, useVideoConfig } from "remotion";
import { OpeningScene } from "./scenes/OpeningScene";
import { DemoShowcaseScene } from "./scenes/DemoShowcaseScene";
import { ProcessRevealScene } from "./scenes/ProcessRevealScene";
import { BoundaryRiskScene } from "./scenes/BoundaryRiskScene";
import { ClosingScene } from "./scenes/ClosingScene";

export const PitchVideo: React.FC = () => {
  const { fps } = useVideoConfig();
  
  return (
    <div style={{ flex: 1, backgroundColor: "#0a0a0a" }}>
      <Sequence from={0} durationInFrames={600}>
        <OpeningScene />
      </Sequence>
      <Sequence from={600} durationInFrames={750}>
        <DemoShowcaseScene />
      </Sequence>
      <Sequence from={1350} durationInFrames={5800}>
        <ProcessRevealScene />
      </Sequence>
      <Sequence from={7150} durationInFrames={2700}>
        <BoundaryRiskScene />
      </Sequence>
      <Sequence from={9850} durationInFrames={300}>
        <ClosingScene />
      </Sequence>
    </div>
  );
};