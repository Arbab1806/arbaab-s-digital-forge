import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const mouseEnter = () => setIsHovering(true);
    const mouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', mouseMove);
    
    const interactiveElements = document.querySelectorAll('button, a, [role="button"], .cyber-card, .cyber-button, [data-clickable="true"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', mouseEnter);
      el.addEventListener('mouseleave', mouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', mouseEnter);
        el.removeEventListener('mouseleave', mouseLeave);
      });
    };
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999]"
      style={{
        left: mousePosition.x - 10,
        top: mousePosition.y - 10,
      }}
      transition={{
        type: "tween",
        duration: 0
      }}
    >
      <div 
        className="w-5 h-5 rounded-full border-2 transition-all duration-200"
        style={{
          backgroundColor: isHovering ? '#ff00ff' : '#00f5ff',
          borderColor: isHovering ? '#ff00ff' : '#00f5ff',
          boxShadow: `0 0 10px ${isHovering ? '#ff00ff' : '#00f5ff'}`,
          transform: isHovering ? 'scale(1.3)' : 'scale(1)'
        }}
      />
    </motion.div>
  );
};

export default CustomCursor;