import React, { useState, useEffect } from "react";

const LoadingSpinner = () => {
  const phrases = [
    "Hello World",    // English
    "Hola Mundo",     // Spanish
    "Ndewo Ụwa",      // Igbo
    "Ẹ n lẹ Ayé",     // Yoruba
    "Sannu Duniya",   // Hausa
    "こんにちは世界",  // Japanese
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 500); // Change phrase every second

    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <h1 className="text-white text-4xl font-bold">{phrases[currentPhraseIndex]}</h1>
    </div>
  );
};

export default LoadingSpinner; 