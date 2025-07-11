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
        className="fixed top-0 left-0 w-1/2 h-full z-40"
        initial={{ x: 0 }}
        animate={{ x: isOpen ? "-100%" : 0 }}
        transition={{ 
          duration: 2, 
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.3
        }}
        onAnimationComplete={() => {
          if (isOpen) onComplete();
        }}
      >
        {/* Main curtain body */}
        <div className="w-full h-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 relative overflow-hidden">
          {/* Fabric texture with ripple effect */}
          <motion.div
            className="absolute inset-0"
            animate={isOpen ? {
              backgroundPosition: ["0% 0%", "100% 0%"],
              opacity: [1, 0.8, 1]
            } : {}}
            transition={{ duration: 1.5, repeat: 1 }}
            style={{
              backgroundImage: `repeating-linear-gradient(
                90deg,
                transparent,
                transparent 3px,
                hsl(var(--gray-600) / 0.3) 3px,
                hsl(var(--gray-600) / 0.3) 4px
              )`
            }}
          />
          
          {/* Vertical curtain folds */}
          {Array.from({ length: 12 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-500 to-gray-700 opacity-40"
              style={{ left: `${(i + 1) * 8}%` }}
              animate={isOpen ? {
                scaleY: [1, 0.95, 1.05, 1],
                opacity: [0.4, 0.6, 0.2]
              } : {}}
              transition={{ 
                duration: 1.2, 
                delay: i * 0.05,
                repeat: 1
              }}
            />
          ))}
          
          {/* Glowing cyber edge with particles */}
          <motion.div 
            className="absolute top-0 right-0 bottom-0 w-2 bg-gradient-to-b from-primary to-cyber-blue"
            style={{
              boxShadow: `
                0 0 20px hsl(var(--primary)),
                0 0 40px hsl(var(--cyber-blue) / 0.7),
                inset 0 0 20px hsl(var(--primary) / 0.5)
              `
            }}
            animate={{
              opacity: [0.8, 1, 0.8],
              boxShadow: [
                "0 0 20px hsl(var(--primary)), 0 0 40px hsl(var(--cyber-blue) / 0.7)",
                "0 0 40px hsl(var(--primary)), 0 0 60px hsl(var(--cyber-blue))",
                "0 0 20px hsl(var(--primary)), 0 0 40px hsl(var(--cyber-blue) / 0.7)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Floating particles along the edge */}
          {Array.from({ length: 6 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full"
              style={{ 
                right: '8px',
                top: `${15 + i * 12}%`
              }}
              animate={{
                x: [0, -10, 0],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Right Curtain */}
      <motion.div
        className="fixed top-0 right-0 w-1/2 h-full z-40"
        initial={{ x: 0 }}
        animate={{ x: isOpen ? "100%" : 0 }}
        transition={{ 
          duration: 2, 
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.3
        }}
      >
        {/* Main curtain body */}
        <div className="w-full h-full bg-gradient-to-l from-gray-900 via-gray-800 to-gray-600 relative overflow-hidden">
          {/* Fabric texture with ripple effect */}
          <motion.div
            className="absolute inset-0"
            animate={isOpen ? {
              backgroundPosition: ["0% 0%", "-100% 0%"],
              opacity: [1, 0.8, 1]
            } : {}}
            transition={{ duration: 1.5, repeat: 1 }}
            style={{
              backgroundImage: `repeating-linear-gradient(
                90deg,
                transparent,
                transparent 3px,
                hsl(var(--gray-600) / 0.3) 3px,
                hsl(var(--gray-600) / 0.3) 4px
              )`
            }}
          />
          
          {/* Vertical curtain folds */}
          {Array.from({ length: 12 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-500 to-gray-700 opacity-40"
              style={{ left: `${(i + 1) * 8}%` }}
              animate={isOpen ? {
                scaleY: [1, 0.95, 1.05, 1],
                opacity: [0.4, 0.6, 0.2]
              } : {}}
              transition={{ 
                duration: 1.2, 
                delay: i * 0.05,
                repeat: 1
              }}
            />
          ))}
          
          {/* Glowing cyber edge with particles */}
          <motion.div 
            className="absolute top-0 left-0 bottom-0 w-2 bg-gradient-to-b from-primary to-cyber-blue"
            style={{
              boxShadow: `
                0 0 20px hsl(var(--primary)),
                0 0 40px hsl(var(--cyber-blue) / 0.7),
                inset 0 0 20px hsl(var(--primary) / 0.5)
              `
            }}
            animate={{
              opacity: [0.8, 1, 0.8],
              boxShadow: [
                "0 0 20px hsl(var(--primary)), 0 0 40px hsl(var(--cyber-blue) / 0.7)",
                "0 0 40px hsl(var(--primary)), 0 0 60px hsl(var(--cyber-blue))",
                "0 0 20px hsl(var(--primary)), 0 0 40px hsl(var(--cyber-blue) / 0.7)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Floating particles along the edge */}
          {Array.from({ length: 6 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full"
              style={{ 
                left: '8px',
                top: `${15 + i * 12}%`
              }}
              animate={{
                x: [0, 10, 0],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3
              }}
            />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default CurtainAnimation;