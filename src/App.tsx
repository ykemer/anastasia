import { useState } from "react";
import "./App.css";
import PainLevelRecorder from "./components/PainLevelRecorder/PainLevelRecorder";
import RecordsDisplay from "./components/RecordsDisplay/RecordsDisplay";
import { DataProvider } from "./context/DataContext";

function App() {
  const [activeTab, setActiveTab] = useState("recorder");

  return (
    <DataProvider>
      <div>
        <h1 className="header">Pain Tracker</h1>
        <div className="menu">
          <button
            onClick={() => setActiveTab("recorder")}
            className={
              activeTab === "recorder" ? "menu-button active" : "menu-button"
            }
            aria-selected={activeTab === "recorder"}
            role="tab"
          >
            Pain Recorder
          </button>
          <button
            onClick={() => setActiveTab("display")}
            className={
              activeTab === "display" ? "menu-button active" : "menu-button"
            }
            aria-selected={activeTab === "display"}
            role="tab"
          >
            Records Display
          </button>
        </div>
        <div className="tab-content">
          {activeTab === "recorder" ? (
            <PainLevelRecorder />
          ) : (
            <RecordsDisplay />
          )}
        </div>
      </div>
    </DataProvider>
  );
}

export default App;
