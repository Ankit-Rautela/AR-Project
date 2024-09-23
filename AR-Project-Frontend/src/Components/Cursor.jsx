import React, { useState, useEffect } from 'react';
import "../index.css";
import clickSound from '../assets/sound-3.mp3';

const Cursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [audio] = useState(new Audio(clickSound));
  let timeoutId; // Declare a variable to hold the timeout ID

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);

      // Clear the previous timeout and set a new one
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setVisible(false); // Make cursor invisible after 3 seconds
      }, 1000);
    };

    const handleMouseLeave = () => {
      clearTimeout(timeoutId); // Clear timeout on mouse leave
      setVisible(false);
    };

    const handleClick = () => {
      audio.play();
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('click', handleClick);

    return () => {
      clearTimeout(timeoutId); // Clear timeout on component unmount
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('click', handleClick);
    };
  }, [audio]);

  return (
    <div className={`cursor ${visible ? 'visible' : ''}`} style={{ left: position.x, top: position.y }}></div>
  );
};

export default Cursor;
