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
        {/* Premium curtain body with fluid effects */}
        <div className="w-full h-full relative overflow-hidden">
          {/* Multiple gradient layers for depth */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"
            animate={isOpen ? {
              scale: [1, 1.02, 1],
              opacity: [1, 0.9, 0.7]
            } : {}}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          
          {/* Ripple wave effect */}
          <motion.div
            className="absolute inset-0"
            animate={isOpen ? {
              backgroundPosition: ["0% 0%", "100% 50%", "200% 100%"],
              opacity: [0.8, 0.6, 0.3]
            } : {}}
            transition={{ duration: 2.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 8px,
                hsl(var(--cyber-blue) / 0.1) 8px,
                hsl(var(--cyber-blue) / 0.1) 12px
              )`
            }}
          />
          
          {/* Fluid vertical folds with wave motion */}
          {Array.from({ length: 15 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-gray-600 via-gray-700 to-gray-900 opacity-30"
              style={{ left: `${(i + 1) * 6.5}%` }}
              animate={isOpen ? {
                scaleY: [1, 0.9, 1.1, 0.95, 1],
                scaleX: [1, 1.2, 0.8, 1],
                opacity: [0.3, 0.5, 0.2, 0.1],
                rotateZ: [0, 2, -1, 0]
              } : {}}
              transition={{ 
                duration: 2.2, 
                delay: i * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            />
          ))}
          
          {/* Premium glowing edge with blur effect */}
          <motion.div 
            className="absolute top-0 right-0 bottom-0 w-3 bg-gradient-to-b from-cyber-blue via-primary to-cyber-blue"
            style={{
              boxShadow: `
                0 0 30px hsl(var(--cyber-blue)),
                0 0 60px hsl(var(--cyber-blue) / 0.8),
                inset 0 0 25px hsl(var(--cyber-blue) / 0.6),
                0 0 100px hsl(var(--cyber-blue) / 0.4)
              `,
              filter: 'blur(0.5px)'
            }}
            animate={isOpen ? {
              opacity: [1, 0.7, 0.9, 0.4],
              scaleX: [1, 1.5, 0.8, 0.3],
              boxShadow: [
                "0 0 30px hsl(var(--cyber-blue)), 0 0 60px hsl(var(--cyber-blue) / 0.8)",
                "0 0 50px hsl(var(--cyber-blue)), 0 0 100px hsl(var(--cyber-blue))",
                "0 0 20px hsl(var(--cyber-blue)), 0 0 40px hsl(var(--cyber-blue) / 0.5)"
              ]
            } : {
              opacity: [0.9, 1, 0.9],
              boxShadow: [
                "0 0 25px hsl(var(--cyber-blue)), 0 0 50px hsl(var(--cyber-blue) / 0.7)",
                "0 0 35px hsl(var(--cyber-blue)), 0 0 70px hsl(var(--cyber-blue))",
                "0 0 25px hsl(var(--cyber-blue)), 0 0 50px hsl(var(--cyber-blue) / 0.7)"
              ]
            }}
            transition={{ 
              duration: isOpen ? 2.5 : 2, 
              repeat: isOpen ? 0 : Infinity,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          />
          
          {/* Enhanced floating particles with motion blur */}
          {Array.from({ length: 10 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-cyber-blue"
              style={{ 
                right: '6px',
                top: `${10 + i * 8}%`,
                width: `${2 + (i % 3)}px`,
                height: `${2 + (i % 3)}px`,
                filter: 'blur(0.5px)',
                boxShadow: '0 0 8px hsl(var(--cyber-blue))'
              }}
              animate={isOpen ? {
                x: [0, -15, -30, -50],
                y: [0, Math.random() * 20 - 10, Math.random() * 30 - 15],
                opacity: [1, 0.8, 0.3, 0],
                scale: [1, 1.5, 2, 0]
              } : {
                x: [0, -8, 0],
                opacity: [0, 1, 0],
                scale: [0, 1.2, 0]
              }}
              transition={{
                duration: isOpen ? 3 : 2.5,
                repeat: isOpen ? 0 : Infinity,
                delay: i * 0.2,
                ease: [0.25, 0.46, 0.45, 0.94]
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
        {/* Premium curtain body with fluid effects */}
        <div className="w-full h-full relative overflow-hidden">
          {/* Multiple gradient layers for depth */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-bl from-gray-900 via-black to-gray-800"
            animate={isOpen ? {
              scale: [1, 1.02, 1],
              opacity: [1, 0.9, 0.7]
            } : {}}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          
          {/* Ripple wave effect */}
          <motion.div
            className="absolute inset-0"
            animate={isOpen ? {
              backgroundPosition: ["0% 0%", "-100% 50%", "-200% 100%"],
              opacity: [0.8, 0.6, 0.3]
            } : {}}
            transition={{ duration: 2.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              backgroundImage: `repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 8px,
                hsl(var(--cyber-blue) / 0.1) 8px,
                hsl(var(--cyber-blue) / 0.1) 12px
              )`
            }}
          />
          
          {/* Fluid vertical folds with wave motion */}
          {Array.from({ length: 15 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-gray-600 via-gray-700 to-gray-900 opacity-30"
              style={{ left: `${(i + 1) * 6.5}%` }}
              animate={isOpen ? {
                scaleY: [1, 0.9, 1.1, 0.95, 1],
                scaleX: [1, 1.2, 0.8, 1],
                opacity: [0.3, 0.5, 0.2, 0.1],
                rotateZ: [0, -2, 1, 0]
              } : {}}
              transition={{ 
                duration: 2.2, 
                delay: i * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            />
          ))}
          
          {/* Premium glowing edge with blur effect */}
          <motion.div 
            className="absolute top-0 left-0 bottom-0 w-3 bg-gradient-to-b from-cyber-blue via-primary to-cyber-blue"
            style={{
              boxShadow: `
                0 0 30px hsl(var(--cyber-blue)),
                0 0 60px hsl(var(--cyber-blue) / 0.8),
                inset 0 0 25px hsl(var(--cyber-blue) / 0.6),
                0 0 100px hsl(var(--cyber-blue) / 0.4)
              `,
              filter: 'blur(0.5px)'
            }}
            animate={isOpen ? {
              opacity: [1, 0.7, 0.9, 0.4],
              scaleX: [1, 1.5, 0.8, 0.3],
              boxShadow: [
                "0 0 30px hsl(var(--cyber-blue)), 0 0 60px hsl(var(--cyber-blue) / 0.8)",
                "0 0 50px hsl(var(--cyber-blue)), 0 0 100px hsl(var(--cyber-blue))",
                "0 0 20px hsl(var(--cyber-blue)), 0 0 40px hsl(var(--cyber-blue) / 0.5)"
              ]
            } : {
              opacity: [0.9, 1, 0.9],
              boxShadow: [
                "0 0 25px hsl(var(--cyber-blue)), 0 0 50px hsl(var(--cyber-blue) / 0.7)",
                "0 0 35px hsl(var(--cyber-blue)), 0 0 70px hsl(var(--cyber-blue))",
                "0 0 25px hsl(var(--cyber-blue)), 0 0 50px hsl(var(--cyber-blue) / 0.7)"
              ]
            }}
            transition={{ 
              duration: isOpen ? 2.5 : 2, 
              repeat: isOpen ? 0 : Infinity,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          />
          
          {/* Enhanced floating particles with motion blur */}
          {Array.from({ length: 10 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-cyber-blue"
              style={{ 
                left: '6px',
                top: `${10 + i * 8}%`,
                width: `${2 + (i % 3)}px`,
                height: `${2 + (i % 3)}px`,
                filter: 'blur(0.5px)',
                boxShadow: '0 0 8px hsl(var(--cyber-blue))'
              }}
              animate={isOpen ? {
                x: [0, 15, 30, 50],
                y: [0, Math.random() * 20 - 10, Math.random() * 30 - 15],
                opacity: [1, 0.8, 0.3, 0],
                scale: [1, 1.5, 2, 0]
              } : {
                x: [0, 8, 0],
                opacity: [0, 1, 0],
                scale: [0, 1.2, 0]
              }}
              transition={{
                duration: isOpen ? 3 : 2.5,
                repeat: isOpen ? 0 : Infinity,
                delay: i * 0.2,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default CurtainAnimation;