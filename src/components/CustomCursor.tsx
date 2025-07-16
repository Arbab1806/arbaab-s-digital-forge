import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY
        });
      });
    };

    const mouseEnter = () => setCursorVariant('hover');
    const mouseLeave = () => setCursorVariant('default');

    window.addEventListener('mousemove', mouseMove, { passive: true });
    
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

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
    },
    hover: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 2,
    }
  };

  return (
    <motion.div
      className="thunderbolt-cursor fixed pointer-events-none z-[9999] mix-blend-difference"
      variants={variants}
      animate={cursorVariant}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 400,
        mass: 0.5
      }}
    >
      <div className="relative w-8 h-8">
        <motion.div
          className="absolute inset-0 text-2xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            rotate: { duration: 4, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          ⚡
        </motion.div>
        
        {/* Gradient glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full opacity-50 blur-sm"
          style={{
            background: 'linear-gradient(45deg, #00f5ff, #ff00ff)',
            width: '20px',
            height: '20px'
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </motion.div>
  );
};

export default CustomCursor;