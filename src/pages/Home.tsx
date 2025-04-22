import React from "react";
import PainLevelRecorder from "../components/PainLevelRecorder/PainLevelRecorder";
import RecordsDisplay from "../components/RecordsDisplay/RecordsDisplay";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Pain Tracker</h1>
      <PainLevelRecorder />
      <RecordsDisplay />
    </div>
  );
};

export default Home;
