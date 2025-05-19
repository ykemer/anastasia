import { t } from "i18next";
import PainEmoji from "./PainEmoji";

type PainLevelDisplayProps = {
  painLevel: number;
};

const PainLevelDisplay = ({ painLevel }: PainLevelDisplayProps) => {
  if (painLevel === 0) return null;
  return (
    <div className="absolute inset-0 mt-30 h-1/6 mx-4">
      <div className="flex flex-col p-4 text-xl bold text-center bg-purple-900 rounded-lg mx-auto shadow-lg w-full">
        <h2 className="text-4xl text-white ">
          {t("input.pain_level")}: {painLevel}
        </h2>
        <PainEmoji level={painLevel} />
      </div>
    </div>
  );
};

export default PainLevelDisplay;
