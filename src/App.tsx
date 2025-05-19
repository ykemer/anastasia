import "./App.css";
import Header from "./components/common/Header";
import Menu from "./components/common/Menu";
import PainLevelRecorder from "./components/PainLevelRecorder/PainLevelRecorder";
import RecordsDisplay from "./components/RecordsDisplay/RecordsDisplay";
import { DataProvider } from "./infrastructure/context/DataContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200  h-screen">
        <Header />

        <div className="rounded-xl bg-white p-10 dark:bg-gray-900/80 mt-30 mx-4 h-3/4 shadow-lg overflow-x-auto">
          <Routes>
            <Route path="/" element={<PainLevelRecorder />} />
            <Route path="/records" element={<RecordsDisplay />} />
          </Routes>
        </div>
        <Menu />
      </div>
    </>
  );
}

export default App;
