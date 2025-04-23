import { FaStar, FaRegStar } from "react-icons/fa";

type PainButtonsSelectorProps = {
  painLevel: number;
  setPainLevel: (level: number) => void;
};

const PainButtonsSelector = ({
  painLevel,
  setPainLevel,
}: PainButtonsSelectorProps) => {
  const buttons = Array.from({ length: 10 }, (_, index) => (
    <button
      key={index + 1}
      onClick={() => setPainLevel(index + 1)}
      className={`pain-button ${painLevel === index + 1 ? "active" : ""}`}
    >
      {index + 1 == painLevel ? <FaStar /> : <FaRegStar />}
    </button>
  ));

  return buttons;
};

export default PainButtonsSelector;
