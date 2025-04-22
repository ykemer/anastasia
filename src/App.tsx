import { useState } from "react";
import "./App.css";
import PainLevelRecorder from "./components/PainLevelRecorder/PainLevelRecorder";
import RecordsDisplay from "./components/RecordsDisplay/RecordsDisplay";

function App() {
  const [activeTab, setActiveTab] = useState("recorder");

  return (
    <>
      <div>
        <h1>Pain Tracker</h1>
        <div className="menu">
          <button
            onClick={() => setActiveTab("recorder")}
            className={activeTab === "recorder" ? "active" : ""}
          >
            Pain Recorder
          </button>
          <button
            onClick={() => setActiveTab("display")}
            className={activeTab === "display" ? "active" : ""}
          >
            Records Display
          </button>
        </div>
        {activeTab === "recorder" ? <PainLevelRecorder /> : <RecordsDisplay />}
      </div>
    </>
  );
}

export default App;
