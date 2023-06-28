import React, { useState, useEffect } from 'react';

function Typewriter({ words, delay }) {
  const [displayedWord, setDisplayedWord] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    let interval;

    const type = () => {
      if (!isErasing) {
        if (currentIndex < words.length) {
          const currentWord = words[currentIndex];
          if (displayedWord !== currentWord) {
            setDisplayedWord(prevDisplayedWord => prevDisplayedWord + currentWord[displayedWord.length]);
          } else {
            setIsErasing(true);
            setTimeout(() => {
              erase();
            }, delay);
          }
        } else {
          setCurrentIndex(0);
        }
      } else {
        if (displayedWord.length > 0) {
          setDisplayedWord(prevDisplayedWord => prevDisplayedWord.slice(0, -1));
        } else {
          setIsErasing(false);
          setCurrentIndex(prevIndex => prevIndex + 1);
          setShowCursor(true);
        }
      }
    };

    const erase = () => {
      if (displayedWord.length > 0) {
        setDisplayedWord(prevDisplayedWord => prevDisplayedWord.slice(0, -1));
      } else {
        setIsErasing(false);
        setCurrentIndex(prevIndex => prevIndex + 1);
        setShowCursor(true);
      }
    };

    interval = setInterval(type, delay);

    return () => clearInterval(interval);
  }, [words, delay, displayedWord, currentIndex, isErasing]);

  return (
    <div>
      {displayedWord}
      {showCursor && <span style={{ color: '#fff' }}>|</span>}
    </div>
  );
}

export default Typewriter;
