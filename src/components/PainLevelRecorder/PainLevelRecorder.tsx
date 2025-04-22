import { useState } from "react";
import { useData } from "../../context/DataContext"; // Import useData
import { PainRecord } from "../../types/PainRecord"; // Import PainRecord
import { FaRegStar, FaStar } from "react-icons/fa";
import "./PainLevelRecorder.css";

const PainLevelRecorder = () => {
  const [painLevel, setPainLevel] = useState(0);
  const { addRecord } = useData(); // Use the useData hook

  const submit = () => {
    const record: PainRecord = {
      id: new Date().getTime().toString(), // Generate a unique ID
      level: painLevel,
      date: new Date().toISOString(),
    };
    addRecord(record);
    setPainLevel(0); // Reset to default after submission
  };

  const buttons = Array.from({ length: 10 }, (_, index) => (
    <button
      key={index + 1}
      onClick={() => setPainLevel(index + 1)}
      className={`pain-button ${painLevel === index + 1 ? "active" : ""}`}
    >
      {index + 1 == painLevel ? <FaStar /> : <FaRegStar />}
    </button>
  ));

  return (
    <div className="pain-level-recorder">
      {painLevel > 0 && (
        <div className="pain-level-display">
          <h2>Selected Pain Level: {painLevel}</h2>
        </div>
      )}
      {buttons}
      <br />
      <button type="submit" className="submit-button" onClick={submit}>
        Submit
      </button>
    </div>
  );
};

export default PainLevelRecorder;
