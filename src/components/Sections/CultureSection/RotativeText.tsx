import React, { useCallback, useEffect, useState } from "react";

const RotativeText: React.FC = () => {
  const words = ["engineers", "designers", "product managers", "people"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState<string[]>([]);
  const [mode, setMode] = useState("write");
  const [waiting, setWaiting] = useState(0);
  const [tick, setTick] = useState(0);

  const velocityMs = 100;
  const waitingTime = 16; // N times "velocityMs"

  const deleteWord = () => {
    return;
  };

  useEffect(() => {
    const tick = setInterval(() => {
      setTick((old) => ++old);
    }, velocityMs);
  }, []);

  useEffect(() => {
    if (mode === "write") {
      const word = words[currentIndex];
      setCurrentWord((old) => {
        if (old.length === word.length) {
          setWaiting(0);
          setMode("waiting");
        }
        return [...old, word[old.length]];
      });
    }
    if (mode === "waiting") {
      setWaiting((old) => {
        if (old >= waitingTime) {
          setMode("delete");
        }
        return ++old;
      });
    }
    if (mode === "delete") {
      setCurrentWord((old) => {
        if (old.length === 0) {
          setMode("write");
          setCurrentIndex((old) => {
            if (old + 1 >= words.length) {
              return 0;
            }
            return old + 1;
          });
        }
        return old.slice(0, -1);
      });
    }
  }, [tick]);

  return <span>{currentWord.join("")}</span>;
};

export default RotativeText;
