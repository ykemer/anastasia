import { FaStar, FaRegStar } from "react-icons/fa";

type PainButtonsSelectorProps = {
  painLevel: number;
  setPainLevel: (level: number) => void;
};

const PainButtonsSelector = ({
  painLevel,
  setPainLevel,
}: PainButtonsSelectorProps) => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 justify-items-center w-full">
      {Array.from({ length: 10 }, (_, index) => {
        const active = painLevel === index + 1;
        // Center last button on mobile (3-cols), normal on larger screens
        const extraClasses =
          index === 9 ? "col-span-1 col-start-2 sm:col-start-auto" : "";
        return (
          <button
            key={index + 1}
            onClick={() => setPainLevel(index + 1)}
            className={`w-16 h-16 flex items-center justify-center rounded-full text-2xl transition ${extraClasses}
          ${
            active
              ? "bg-yellow-400 text-yellow-900 border-4 border-yellow-400 shadow-lg"
              : "bg-transparent border-4 border-white text-white hover:bg-yellow-100 hover:text-yellow-700"
          }
        `}
          >
            {active ? <FaStar /> : <FaRegStar />}
          </button>
        );
      })}
    </div>
  );
};

export default PainButtonsSelector;
