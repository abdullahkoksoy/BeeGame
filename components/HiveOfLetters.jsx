import React, { useState, useEffect } from "react";

const HiveOfLetters = ({ dictionary, onGuess, remainingTime }) => {
  const [selectedLetters] = useState(["T", "R", "S", "M", "A", "E", "P"]);

  // Function to handle letter guesses
  const handleGuess = (letter) => {
    // Logic for checking the guess against the dictionary goes here
    onGuess(letter);
  };

  return (
    <div className="flex sm:flex-wrap justify-center sm:gap-2 gap-1 mt-10">
      {selectedLetters.map((letter, index) => (
        <div
          key={index}
          className={`sm:w-12 sm:h-12 w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 bg-white text-black`}
          onClick={() => handleGuess(letter)}
        >
          {letter || " "}
        </div>
      ))}
    </div>
  );
};

export default HiveOfLetters;
