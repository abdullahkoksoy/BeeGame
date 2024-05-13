// components/ScoringSystem.jsx
import React from "react";

const ScoringSystem = ({ score }) => {
  return (
    <div className="text-2xl mt-8 sm:mt-20 font-semibold bg-white text-orange-500 rounded-xl pl-6 pr-6 p-1">
      Score: {score}
    </div>
  );
};

export default ScoringSystem;
