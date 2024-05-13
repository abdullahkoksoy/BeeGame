import React from "react";

const WordInput = ({ onInputChange, value, onSubmit }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <input
      type="text"
      placeholder="___ ___ ___ ___ ___ ___ ___"
      onChange={(e) => onInputChange(e.target.value)}
      onKeyDown={handleKeyDown}
      className="text-black rounded-3xl pr-6 pl-6 p-2 text-2xl mt-4"
      value={value}
    />
  );
};

export default WordInput;
