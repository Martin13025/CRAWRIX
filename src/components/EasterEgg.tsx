import React, { useState, useEffect } from "react";
import "./EasterEgg.css";

const NUM_GIFS = 100;

const EasterEgg = () => {
  const [showGifs, setShowGifs] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [gifPositions, setGifPositions] = useState<
    { top: number; left: number; src: string }[]
  >([]);
  const [isFirstGif, setIsFirstGif] = useState(true);

  useEffect(() => {
    const checkDevTools = () => {
      if (
        window.outerWidth - window.innerWidth > 100 ||
        window.outerHeight - window.innerHeight > 100
      ) {
        setShowGifs(false);
      }
    };

    window.addEventListener("resize", checkDevTools);
    return () => window.removeEventListener("resize", checkDevTools);
  }, []);

  const handleClick = () => {
    setClickCount((prev) => prev + 1);

    if (clickCount + 1 === 3) {
      const newPositions = Array.from({ length: NUM_GIFS }, () => ({
        top: Math.random() * 95,
        left: Math.random() * 95,
        src: isFirstGif ? "/easter-egg.gif" : "/easter-egg2.gif",
      }));

      setGifPositions(newPositions);
      setShowGifs(true);

      setTimeout(() => {
        setShowGifs(false);
        setClickCount(0);
        setIsFirstGif((prev) => !prev);
      }, 7000);
    }
  };

  return (
    <div onClick={handleClick} className="footer-left">
      v 1.2
      {showGifs &&
        gifPositions.map((pos, index) => (
          <img
            key={index}
            src={pos.src}
            alt="Surprise!"
            className="hidden-gif"
            style={{ top: `${pos.top}%`, left: `${pos.left}%` }}
          />
        ))}
    </div>
  );
};

export default EasterEgg;
