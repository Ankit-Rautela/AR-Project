import React, { useState, useEffect } from 'react';
import "../index.css";

// Import the click sound file
import clickSound from '../assets/sound-3.mp3';


const Cursor = () => {
  // State to track cursor position
  const [position, setPosition] = useState({ x: -100, y: -100 }); // Set initial position off-screen
  const [visible, setVisible] = useState(false); // State to track cursor visibility - Not working right-now
  const [audio] = useState(new Audio(clickSound)); // Create an Audio object for the click sound

  useEffect(() => {
    // Update cursor position and make it visible when the mouse moves
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true); 
    };

    // Hide cursor when the mouse leaves the window - Not working right-now
    const handleMouseLeave = () => {
      setVisible(false); // Set cursor invisible when leaving the website
    };

    // Play click sound when the mouse is clicked
    const handleClick = () => {
      audio.play(); // Play the click sound
    };

    // Add event listeners
    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('click', handleClick);
    };
  }, [audio]);

  return (
    <div className={`cursor ${visible ? 'visible' : ''}`} style={{ left: position.x, top: position.y }}></div>
  );
};

export default Cursor;
