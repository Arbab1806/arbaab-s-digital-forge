import React from 'react';
import { motion } from 'framer-motion';

interface CurtainAnimationProps {
  isOpen: boolean;
  onComplete: () => void;
}

const CurtainAnimation: React.FC<CurtainAnimationProps> = ({ isOpen, onComplete }) => {
  return (
    <>
      {/* Left Curtain */}
      <motion.div
        className="fixed top-0 left-0 w-1/2 h-full bg-gray-900 z-40"
        initial={{ x: 0 }}
        animate={{ x: isOpen ? "-100%" : 0 }}
        transition={{ 
          duration: 1.5, 
          ease: "easeInOut",
          delay: 0.5
        }}
        onAnimationComplete={() => {
          if (isOpen) onComplete();
        }}
      >
        {/* Curtain texture */}
        <div className="w-full h-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 relative overflow-hidden">
          {/* Vertical lines for curtain effect */}
          {Array.from({ length: 10 }, (_, i) => (
            <div
              key={i}
              className="absolute top-0 bottom-0 w-px bg-gray-600 opacity-30"
              style={{ left: `${(i + 1) * 10}%` }}
            />
          ))}
          
          {/* Cyber glow edge */}
          <div className="absolute top-0 right-0 bottom-0 w-1 bg-cyber-blue shadow-cyber" />
        </div>
      </motion.div>

      {/* Right Curtain */}
      <motion.div
        className="fixed top-0 right-0 w-1/2 h-full bg-gray-900 z-40"
        initial={{ x: 0 }}
        animate={{ x: isOpen ? "100%" : 0 }}
        transition={{ 
          duration: 1.5, 
          ease: "easeInOut",
          delay: 0.5
        }}
      >
        {/* Curtain texture */}
        <div className="w-full h-full bg-gradient-to-l from-gray-900 via-gray-800 to-gray-700 relative overflow-hidden">
          {/* Vertical lines for curtain effect */}
          {Array.from({ length: 10 }, (_, i) => (
            <div
              key={i}
              className="absolute top-0 bottom-0 w-px bg-gray-600 opacity-30"
              style={{ left: `${(i + 1) * 10}%` }}
            />
          ))}
          
          {/* Cyber glow edge */}
          <div className="absolute top-0 left-0 bottom-0 w-1 bg-cyber-blue shadow-cyber" />
        </div>
      </motion.div>
    </>
  );
};

export default CurtainAnimation;