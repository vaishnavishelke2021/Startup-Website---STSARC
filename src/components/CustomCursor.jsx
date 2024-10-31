// CustomCursor.jsx
import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.querySelectorAll(".hoverable").forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.querySelectorAll("a, button, .hoverable").forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      className={`fixed pointer-events-none z-50  
      transition-all duration-300 ease-out
      ${
        isHovering
          ? "w-16 h-16 bg-orange-500/10 -mt-5 text-black backdrop-blur- border-2 border-orange-400"
          : "w-4 h-4 bg-orange-400"
      }`}
      style={{
        borderRadius: isHovering ? "50%" : "50%",
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: isHovering
          ? "transform 0.2s ease-out, width 0.2s ease-out, height 0.2s ease-out"
          : "transform 0.1s ease-out, width 0.1s ease-out, height 0.1s ease-out",
      }}
    />
  );
};

export default CustomCursor;
