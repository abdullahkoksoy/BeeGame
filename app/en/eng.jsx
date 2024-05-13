"use client";

import React, { useState, useEffect } from "react";
import TimerDisplay from "@/components/TimerDisplay";
import HiveOfLetters from "@/components/HiveOfLetters";
import WordInput from "@/components/WordInput";
import ScoringSystem from "@/components/ScoringSystem";

const Engpage = () => {
  const [totalTime] = useState(60);
  const [time, setTime] = useState(totalTime);
  const [timerRunning, setTimerRunning] = useState(false);
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [word, setWord] = useState("");
  const [score, setScore] = useState(0);
  const [showStartButton, setShowStartButton] = useState(true);
  const [gameStarted, setGameStarted] = useState(false);
  const [guessedWords, setGuessedWords] = useState([]);
  const dictionary = {
    words: [
      "STREAM",
      "TRAMP",
      "STAMP",
      "TRAP",
      "MAP",
      "RAM",
      "TAME",
      "PEAT",
      "PEATS",
      "STAR",
      "PASTE",
      "STEP",
      "RAMP",
      "PASTE",
      "RATE",
      "TEAM",
      "SMART",
      "MEAT",
      "TREAT",
      "TRAMS",
      "MARS",
      "SEAT",
      "TAMP",
      "TAPES",
      "MATS",
      "MAT",
      "REST",
      "EAST",
      "SEAM",
      "SET",
      "PAT",
      "PATE",
      "EAT",
      "MAST",
      "PAR",
      "PEST",
      "PEAR",
      "ME",
      "RAM",
      "MAT",
      "PAST",
      "RAP",
      "SPAT",
      "SPAM",
      "TEA",
      "PART",
      "RAT",
      "PAST",
      "SAT",
      "STAR",
      "TEAR",
      "EAR",
      "SEA",
      "MAST",
      "SPEAR",
      "SMART",
      "STARE",
      "PEAT",
      "TERM",
      "TRAM",
      "TRAMP",
      "STREAM",
      "SPEAR",
      "EAST",
      "SEAM",
      "PAR",
      "PEAR",
      "EAST",
      "RAT",
      "REST",
      "ART",
      "TREAT",
      "SEAR",
      "EAST",
      "SEAT",
      "PAST",
      "MAT",
      "PART",
      "MATE",
      "MARE",
      "MEAT",
      "MARS",
      "PEAT",
      "PATE",
      "TEAR",
      "TEAM",
      "TRAM",
      "TRAP",
      "TRAMS",
      "ME",
      "EAT",
      "ATE",
      "SPA",
      "SAP",
      "RAM",
      "RAMP",
      "RAP",
      "TAP",
      "TAPE",
      "TAPS",
      "EAST",
      "SAT",
      "STAR",
      "PAST",
      "PEAR",
      "PAR",
      "PART",
      "SPEAR",
      "SEAR",
      "STREAM",
      "SMART",
      "MATE",
      "TRAMP",
      "TRAP",
      "RATE",
      "MARE",
      "EAT",
      "SEA",
      "TEA",
      "TREAT",
      "TREATS",
      "PEAT",
      "MEAT",
      "STARE",
      "STEP",
      "RAT",
      "EAR",
      "MAT",
      "SPAT",
      "ART",
      "TEAR",
      "TEAM",
      "ME",
      "TEAR",
      "MATE",
      "RAP",
      "SMART",
      "SEAT",
      "TERM",
      "PASTE",
      "PEAT",
      "PEAR",
      "SPEAR",
      "SPEAR",
      "MAT",
      "PAST",
      "TREAT",
      "PEST",
      "TREATS",
      "TREATS",
      "TERM",
      "TEAR",
      "TEAR",
      "SEAR",
      "SEAR",
      "MARS",
      "ME",
      "EAR",
      "EAST",
      "TAP",
      "TAPS",
      "TAPES",
      "PAR",
      "PEAT",
      "PEATS",
      "PAT",
      "PASTE",
      "PATE",
      "PEAR",
      "PEST",
      "PEAT",
      "PEATS",
      "PEAT",
      "PEATS",
      "PART",
      "PAST",
      "PASTE",
      "PATE",
      "PEAR",
      "PEST",
      "PEAT",
      "PEATS",
      "PEAT",
      "PEATS",
      "STAMP",
      "STAR",
      "STAR",
      "STEAM",
      "STEP",
      "STREAM",
      "STRAP",
      "TAME",
      "TAMP",
      "TAMPER",
      "TAMPER",
      "TAP",
      "TAPE",
      "TAPS",
      "TEAM",
      "TEAR",
      "TERM",
      "TRAMP",
      "TRAMP",
      "TRAMPS",
      "TRAMPS",
      "TRAP",
      "TRAPS",
    ],
  };

  const startTimer = () => {
    setTimerRunning(true);
    setShowStartButton(false);
    setGameStarted(true);
  };

  const startTimer2 = () => {
    setTimerRunning(true);
    setGameStarted(true);
  };

  useEffect(() => {
    let intervalId;
    if (timerRunning) {
      intervalId = setInterval(() => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;

        // Update time
        setTime((prevTime) => prevTime - 1);
      }, 1000);

      // Clear interval when time reaches 0
      if (time <= 0) {
        clearInterval(intervalId);
        setTimerRunning(false);
      }
    }

    // Clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, [time, timerRunning]); // Re-run effect when 'time' changes

  // Format time to display as MM:SS
  const formatTime = () => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const handleWordChange = (input) => {
    setWord(input.toUpperCase());
  };

  const handleWordSubmit = () => {
    if (dictionary.words.includes(word.toUpperCase())) {
      const wordLength = word.length;
      const wordScore = wordLength * 10;
      setScore(score + wordScore);
      setTime(time + 15);
      setGuessedWords([...guessedWords, word]);
      setWord("");
    }
  };

  const handleEnterKeyPress = () => {
    handleWordSubmit();
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center p-24 bg-gradient-to-b from-teal-700 to-teal-500 text-white">
      <div className="text-white text-5xl justify-center items-center font-semibold mb-10 ">
        Bee&nbsp;Game
      </div>
      <TimerDisplay time={time} />
      {gameStarted && (
        <HiveOfLetters
          selectedLetters={selectedLetters}
          dictionary={dictionary}
          remainingTime={time}
        />
      )}
      <WordInput
        onInputChange={handleWordChange}
        value={word}
        onSubmit={handleEnterKeyPress}
      />
      <button
        onClick={handleWordSubmit}
        disabled={time === 0}
        className="text-2xl font-medium mt-4 rounded-3xl bg-orange-500 pl-6 pr-6 p-1 hover:border-2 border-white"
      >
        Submit
      </button>

      <button
        onClick={startTimer2}
        className="hidden sm:block ml-10 lg:ml-0 text-2xl font-medium rounded-full w-32 h-32 bg-orange-500 mr-[620px] -mt-40 border-2 border-white hover:bg-white hover:border-orange-500 hover:text-orange-500"
      >
        Start The <br /> Game
      </button>

      {showStartButton && (
        <button
          onClick={startTimer}
          className="block w-[360px] h-[360px] -mt-[200px] sm:hidden text-4xl font-medium rounded-full pl-6 pr-6 p-1 bg-orange-500 border-2 border-white hover:bg-white hover:border-orange-500 hover:text-orange-500"
        >
          Start The Game
        </button>
      )}
      <ScoringSystem score={score} />
      <div className="flex-col flex-1 p-4 ml-[690px] -mt-[253px] hidden sm:flex mr-32 lg:mr-0">
        <h2 className="text-white text-2xl mb-4 rounded-2xl font-semibold underline decoration-solid decoration-orange-500 decoration-4">
          Correct Words
        </h2>
        <ul className="text-teal-500 bg-white rounded-xl text-xl text-center font-bold">
          {guessedWords.map((guessedWord, index) => (
            <li key={index} className="">
              {guessedWord}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-col flex-1 p-4 mt-10 sm:hidden flex">
        <h2 className="text-white text-2xl mb-4 rounded-2xl font-semibold underline decoration-solid decoration-orange-500 decoration-4">
          Correct Words
        </h2>
        <ul className="text-teal-500 bg-white rounded-xl text-xl text-center font-bold">
          {guessedWords.map((guessedWord, index) => (
            <li key={index} className="">
              {guessedWord}
            </li>
          ))}
        </ul>
      </div>
      {!gameStarted && (
        <div className="bg-white text-teal-500 rounded-3xl pl-6 pr-6 p-1 w-[400px] z-10">
          <h1 className="text-3xl">Game Rules</h1>
          <p className="text-base">
            {" "}
            - Guess some words that includes the letters
            <br /> - Every word has minimum 3 letters <br /> - For every correct
            answer you will gain +15 seconds
          </p>
        </div>
      )}
    </div>
  );
};

export default Engpage;
