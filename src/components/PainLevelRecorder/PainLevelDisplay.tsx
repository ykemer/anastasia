import { t } from "i18next";
import PainEmoji from "./PainEmoji";

type PainLevelDisplayProps = {
  painLevel: number;
};

const PainLevelDisplay = ({ painLevel }: PainLevelDisplayProps) => {
  const isVisible = painLevel !== 0;

  return (
    <div
      className={`
        mb-10 flex flex-col p-4 text-center bg-purple-900 rounded-lg
        transition-all duration-500 ease-in-out
        ${
          isVisible
            ? "opacity-100 scale-100"
            : "opacity-0 scale-90 pointer-events-none"
        }
      `}
    >
      <h2 className="text-4xl text-white font-bold">
        {t("input.pain_level")}: {painLevel}
      </h2>
      <PainEmoji level={painLevel} />
    </div>
  );
};

export default PainLevelDisplay;
