"use client";

import React, { useState, useEffect } from "react";
import TimerDisplay from "@/components/TimerDisplay";
import HiveOfLetters from "@/components/HiveOfLetters";
import WordInput from "@/components/WordInput";
import ScoringSystem from "@/components/ScoringSystem";

const Trpage = () => {
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
      "PAS",
      "PES",
      "SAP",
      "ARP",
      "PAT",
      "PER",
      "PET",
      "RAP",
      "MAS",
      "SAM",
      "SEM",
      "AST",
      "MAT",
      "MET",
      "RAM",
      "SER",
      "SET",
      "TAM",
      "TAS",
      "TEM",
      "ART",
      "ATE",
      "RET",
      "TAR",
      "TER",
      "SPAM",
      "APSE",
      "PARS",
      "PERS",
      "PEST",
      "PRES",
      "RAMP",
      "SARP",
      "STEP",
      "APRE",
      "ETAP",
      "PARE",
      "PERT",
      "TRAP",
      "ESMA",
      "MARS",
      "MEST",
      "SEMA",
      "SEMT",
      "MART",
      "MERA",
      "MERT",
      "META",
      "RAST",
      "REST",
      "SERA",
      "SERT",
      "STAR",
      "STER",
      "TEMA",
      "TERS",
      "TRAS",
      "ERAT",
      "RATE",
      "SPERM",
      "AMPER",
      "PERMA",
      "SERAP",
      "TEMAS",
      "TERAS",
      "ESTAMP",
      "SPERMA",
      "SERTAP",
      "MASTER",
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
        Onayla
      </button>

      <button
        onClick={startTimer2}
        className="hidden sm:block ml-10 lg:ml-0 text-2xl font-medium rounded-full w-32 h-32 bg-orange-500 mr-[620px] -mt-40 border-2 border-white hover:bg-white hover:border-orange-500 hover:text-orange-500"
      >
        Oyunu <br /> Başlat
      </button>

      {showStartButton && (
        <button
          onClick={startTimer}
          className="block w-[360px] h-[360px] -mt-[200px] sm:hidden text-4xl font-medium rounded-full pl-6 pr-6 p-1 bg-orange-500 border-2 border-white hover:bg-white hover:border-orange-500 hover:text-orange-500"
        >
          Oyunu Başlat
        </button>
      )}
      <ScoringSystem score={score} />
      <div className="flex-col flex-1 p-4 ml-[690px] -mt-[253px] hidden sm:flex mr-32 lg:mr-0">
        <h2 className="text-white text-2xl mb-4 rounded-2xl font-semibold underline decoration-solid decoration-orange-500 decoration-4">
          Doğru Kelimeler
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
          Doğru Kelimeler
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
          <h1 className="text-3xl">Oyun Kuralları</h1>
          <p className="text-base">
            {" "}
            - Belirtilen harfleri içeren kelimeler tahmin et
            <br /> - Her kelime en az 3 harften oluşmaktadır <br /> - Her doğru
            cevap için +15 saniye eklenecek
          </p>
        </div>
      )}
    </div>
  );
};

export default Trpage;
