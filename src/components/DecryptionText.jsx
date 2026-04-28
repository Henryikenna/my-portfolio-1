import React, { useState, useEffect } from "react";

const languages = [
  "Hello World!",
  "Bonjour le Monde!",
  "¡Hola Mundo!",
  "Nnọọ Ụwa!",
  "Pẹlẹ Ayé!",
  "Sannu Duniya!",
  "こんにちは世界!",
];

const getRandomChar = () =>
  String.fromCharCode(Math.floor(Math.random() * (126 - 33 + 1)) + 33);

const DecryptionText = () => {
  const [currentText, setCurrentText] = useState(languages[0]);
  const [decryptedText, setDecryptedText] = useState(currentText);
  const [nextText, setNextText] = useState(
    languages[(languages.indexOf(currentText) + 1) % languages.length]
  );

  useEffect(() => {
    const startDecryption = () => {
      let step = 0;
      const maxLength = Math.max(currentText.length, nextText.length);
      const interval = setInterval(() => {
        if (step <= maxLength) {
          const chars = Array.from({ length: maxLength }, (_, i) => {
            if (i < step) return nextText[i] || "";
            return getRandomChar();
          });
          setDecryptedText(chars.join(""));
          step++;
        } else {
          clearInterval(interval);
          setCurrentText(nextText);
          setNextText(
            languages[(languages.indexOf(nextText) + 1) % languages.length]
          );
        }
      }, 88);
      return () => clearInterval(interval);
    };

    const changeTextInterval = setInterval(() => {
      startDecryption();
    }, 3000);

    return () => clearInterval(changeTextInterval);
  }, [currentText, nextText]);

  return (
    <span className="font-mono text-xs md:text-sm text-warm-white/35 tracking-widest">
      {decryptedText}
    </span>
  );
};

export default DecryptionText;
