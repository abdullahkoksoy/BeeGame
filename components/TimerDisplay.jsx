import React from "react";

const TimerDisplay = ({ time }) => {
  const formatTime = () => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return <div className="text-7xl">{formatTime()}</div>;
};

export default TimerDisplay;
