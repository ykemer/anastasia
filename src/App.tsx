import { useState } from "react";
import "./App.css";
import PainLevelRecorder from "./components/PainLevelRecorder/PainLevelRecorder";
import RecordsDisplay from "./components/RecordsDisplay/RecordsDisplay";
import { DataProvider } from "./infrastructure/context/DataContext";
import { useTranslation } from "react-i18next";

function App() {
  const [activeTab, setActiveTab] = useState("recorder");
  const { t } = useTranslation();
  return (
    <DataProvider>
      <div>
        <h1 className="header">{t("header.pain_tracker")}</h1>
        <div className="menu">
          <button
            onClick={() => setActiveTab("recorder")}
            className={
              activeTab === "recorder" ? "menu-button active" : "menu-button"
            }
            aria-selected={activeTab === "recorder"}
            role="tab"
          >
            {t("menu.pain_recorder")}
          </button>
          <button
            onClick={() => setActiveTab("display")}
            className={
              activeTab === "display" ? "menu-button active" : "menu-button"
            }
            aria-selected={activeTab === "display"}
            role="tab"
          >
            {t("menu.display_records")}
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
