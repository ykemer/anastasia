import { useState } from "react";
import { useData } from "../../context/DataContext"; // Import useData
import { PainRecord } from "../../types/PainRecord"; // Import PainRecord
import "./PainLevelRecorder.css";
import PainButtonsSelector from "./PainButtonsSelector";
import Toaster from "./Toaster";
import PainLevelDisplay from "../RecordsDisplay/PainLevelDisplay";

const PainLevelRecorder = () => {
  const [painLevel, setPainLevel] = useState(0);

  const [showMessage, setShowMessage] = useState(false);
  const { addRecord } = useData();

  const submit = () => {
    const record: PainRecord = {
      id: new Date().getTime().toString(), // Generate a unique ID
      level: painLevel,
      date: new Date().toISOString(),
    };
    addRecord(record);
    setPainLevel(0);
    setShowMessage(true);
  };

  return (
    <div className="pain-level-recorder">
      <PainLevelDisplay painLevel={painLevel} />
      <Toaster
        setShowMessage={setShowMessage}
        showMessage={showMessage}
        message="Pain level recorded!"
      />
      {PainButtonsSelector({ painLevel, setPainLevel })}
      <br />
      {painLevel > 0 && (
        <button type="submit" className="submit-button" onClick={submit}>
          Submit
        </button>
      )}
    </div>
  );
};

export default PainLevelRecorder;
