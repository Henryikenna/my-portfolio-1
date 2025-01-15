// import React, { useState, useEffect } from "react";
// import { CSSTransition, TransitionGroup } from "react-transition-group";
// // import "./DecryptionText.css";

// const languages = [
//   "Hello World",
//   "Hola Mundo",
//   "Bonjour le Monde",
//   "Hallo Welt",
//   "Ciao Mondo",
//   "こんにちは世界",
//   "안녕하세요 세상",
//   "你好，世界",
//   "Olá Mundo",
//   "Привет, мир",
// ];

// const getRandomChar = () => {
//   return String.fromCharCode(Math.floor(Math.random() * (126 - 33 + 1)) + 33);
// };

// const DecryptionText = () => {
//   const [currentText, setCurrentText] = useState(languages[0]);
//   const [decryptedText, setDecryptedText] = useState("");

//   useEffect(() => {
//     let index = 0;
//     const interval = setInterval(() => {
//       if (index < currentText.length) {
//         const chars = Array.from(currentText).map((char, i) =>
//           i < index ? char : getRandomChar()
//         );

//         setDecryptedText(chars.join(""));
//         index++;
//       } else {
//         clearInterval(interval);
//       }
//     }, 100);

//     return () => clearInterval(interval);
//   }, [currentText]);

//   useEffect(() => {
//     const changeTextInterval = setInterval(() => {
//       const nextLanguage =
//         languages[(languages.indexOf(currentText) + 1) % languages.length];
//       setCurrentText(nextLanguage);
//     }, 3000); // Change language every 3 seconds

//     return () => clearInterval(changeTextInterval);
//   }, [currentText]);

//   return (
//     <TransitionGroup>
//       <CSSTransition key={currentText} timeout={1000} classNames="fade">
//         <span className="text-lg md:text-xl lg:text-2xl font-bold text-white">
//           {decryptedText}
//         </span>
//       </CSSTransition>
//     </TransitionGroup>
//   );
// };

// export default DecryptionText;




// import React, { useState, useEffect } from "react";
// import { CSSTransition, TransitionGroup } from "react-transition-group";
// import "./DecryptionText.css"; // Make sure to include styles for the transition

// const languages = [
//   "Hello World",
//   "Hola Mundo",
//   "Bonjour le Monde",
//   "Hallo Welt",
//   "Ciao Mondo",
//   "こんにちは世界",
//   "안녕하세요 세상",
//   "你好，世界",
//   "Olá Mundo",
//   "Привет, мир",
// ];

// const getRandomChar = () => {
//   return String.fromCharCode(Math.floor(Math.random() * (126 - 33 + 1)) + 33);
// };

// const DecryptionText = () => {
//   const [currentText, setCurrentText] = useState(languages[0]);
//   const [decryptedText, setDecryptedText] = useState("");
//   const [isDecrypting, setIsDecrypting] = useState(true);

//   useEffect(() => {
//     if (isDecrypting) {
//       let index = 0;
//       const interval = setInterval(() => {
//         if (index <= currentText.length) {
//           const chars = Array.from(currentText).map((char, i) =>
//             i < index ? char : getRandomChar()
//           );

//           setDecryptedText(chars.join(""));
//           index++;
//         } else {
//           clearInterval(interval);
//           setIsDecrypting(false); // Stop decrypting once finished
//         }
//       }, 50); // Faster decryption for a snappier effect

//       return () => clearInterval(interval);
//     }
//   }, [currentText, isDecrypting]);

//   useEffect(() => {
//     const changeTextInterval = setInterval(() => {
//       setIsDecrypting(true); // Start decrypting when the next language is about to display
//       const nextLanguage =
//         languages[(languages.indexOf(currentText) + 1) % languages.length];
//       setCurrentText(nextLanguage);
//     }, 4000); // Total cycle time: decryption + pause

//     return () => clearInterval(changeTextInterval);
//   }, [currentText]);

//   return (
//     <TransitionGroup>
//       <CSSTransition key={currentText} timeout={1000} classNames="fade">
//         <span className="text-lg md:text-xl lg:text-2xl font-bold text-white">
//           {decryptedText}
//         </span>
//       </CSSTransition>
//     </TransitionGroup>
//   );
// };

// export default DecryptionText;





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
  

const getRandomChar = () => {
  return String.fromCharCode(Math.floor(Math.random() * (126 - 33 + 1)) + 33);
};

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
            if (i < step) {
              return nextText[i] || ""; // Target character or empty if shorter
            }
            return getRandomChar(); // Random character for undeciphered part
          });

          setDecryptedText(chars.join(""));
          step++;
        } else {
          clearInterval(interval);
          setCurrentText(nextText);
          setNextText(
            languages[
              (languages.indexOf(nextText) + 1) % languages.length
            ]
          );
        }
      }, 88); // Adjust speed for smoothness

      return () => clearInterval(interval);
    };

    const changeTextInterval = setInterval(() => {
      startDecryption();
    }, 3000); // Interval between full transitions

    return () => clearInterval(changeTextInterval);
  }, [currentText, nextText]);

  return (
    <span className="text-lg md:text-2xl text-center lg:text-4xl font-bold text-white">
      {decryptedText},<br /> My name is <span className="font-extrabold">Henry Unegbu</span>
    </span>
  );
};

export default DecryptionText;
