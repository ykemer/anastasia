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
    <div className="flex items-center justify-center mt-40">
      <div className="grid grid-cols-3 gap-6 justify-items-center">
        {Array.from({ length: 10 }, (_, index) => {
          const active = painLevel === index + 1;
          const extraClasses = index === 9 ? "col-span-1 col-start-2" : "";
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
    </div>
  );
};

export default PainButtonsSelector;
