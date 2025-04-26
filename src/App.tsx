import "./App.css";
import PainLevelRecorder from "./components/PainLevelRecorder/PainLevelRecorder";
import RecordsDisplay from "./components/RecordsDisplay/RecordsDisplay";
import { DataProvider } from "./infrastructure/context/DataContext";
import { useTranslation } from "react-i18next";
import {
  BrowserRouter,
  Link,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

function App() {
  return (
    <DataProvider>
      <BrowserRouter basename="/anastasia">
        <AppContent />
      </BrowserRouter>
    </DataProvider>
  );
}

function AppContent() {
  const { t } = useTranslation();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <div>
      <h1 className="header">{t("header.pain_tracker")}</h1>
      <div className="menu">
        <Link to="/" className={`menu-button ${isActive("/")}`}>
          {t("menu.pain_recorder")}
        </Link>
        <Link to="/records" className={`menu-button ${isActive("/records")}`}>
          {t("menu.display_records")}
        </Link>
      </div>
      <div className="tab-content">
        <Routes>
          <Route path="/" element={<PainLevelRecorder />} />
          <Route path="/records" element={<RecordsDisplay />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
