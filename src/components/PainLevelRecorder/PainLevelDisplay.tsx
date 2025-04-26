import { t } from "i18next";
import PainEmoji from "./PainEmoji";

type PainLevelDisplayProps = {
  painLevel: number;
};

const PainLevelDisplay = ({ painLevel }: PainLevelDisplayProps) => {
  if (painLevel === 0) return null; // Don't display if pain level is 0
  return (
    <div className="pain-level-display">
      <h2>
        {t("input.pain_level")}: {painLevel} <PainEmoji level={painLevel} />
      </h2>
    </div>
  );
};

export default PainLevelDisplay;
