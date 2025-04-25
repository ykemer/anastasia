import PainEmoji from "../PainLevelRecorder/PainEmoji";

type PainLevelDisplayProps = {
  painLevel: number;
};

const PainLevelDisplay = ({ painLevel }: PainLevelDisplayProps) => {
  if (painLevel === 0) return null; // Don't display if pain level is 0
  return (
    <div className="pain-level-display">
      <h2>
        Pain Level: {painLevel} <PainEmoji level={painLevel} />
      </h2>
    </div>
  );
};

export default PainLevelDisplay;
