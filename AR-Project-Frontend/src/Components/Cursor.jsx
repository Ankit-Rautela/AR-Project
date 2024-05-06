import React, { useState, useEffect } from 'react';
import "../index.css";


const Cursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 }); // Set initial position off-screen
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true); // Set cursor visible when moving
    };

    const handleMouseLeave = () => {
      setVisible(false); // Set cursor invisible when leaving the website
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className={`cursor ${visible ? 'visible' : ''}`} style={{ left: position.x, top: position.y }}></div>
  );
};

export default Cursor;
