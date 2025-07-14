import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface CurtainAnimationProps {
  isOpen: boolean;
  onComplete: () => void;
}

const CurtainAnimation: React.FC<CurtainAnimationProps> = ({ isOpen, onComplete }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onComplete();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onComplete]);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-gradient-to-b from-blue-900 to-blue-800">
      {/* Left Curtain */}
      <motion.div
        className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 shadow-2xl"
        style={{
          width: '50%',
          backgroundImage: `
            linear-gradient(90deg, 
              hsl(220, 70%, 25%) 0%,
              hsl(220, 75%, 30%) 10%,
              hsl(220, 80%, 35%) 20%,
              hsl(220, 75%, 30%) 30%,
              hsl(220, 70%, 25%) 40%,
              hsl(220, 75%, 30%) 50%,
              hsl(220, 80%, 35%) 60%,
              hsl(220, 75%, 30%) 70%,
              hsl(220, 70%, 25%) 80%,
              hsl(220, 75%, 30%) 90%,
              hsl(220, 80%, 35%) 100%
            )
          `,
          boxShadow: 'inset -20px 0 40px rgba(0,0,0,0.3), 20px 0 50px rgba(0,0,0,0.4)'
        }}
        initial={{ x: 0 }}
        animate={isOpen ? { 
          x: '-45%',
          skewY: -2
        } : { x: 0 }}
        transition={{ 
          duration: 2, 
          ease: [0.25, 0.46, 0.45, 0.94],
          type: "tween"
        }}
      >
        {/* Curtain folds */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 bottom-0 bg-gradient-to-b from-blue-500/20 to-blue-900/40"
              style={{
                left: `${i * 12.5}%`,
                width: '2px',
                boxShadow: '2px 0 4px rgba(0,0,0,0.3)'
              }}
            />
          ))}
        </div>
        
        {/* Golden rope and tassel */}
        <motion.div
          className="absolute top-20 right-4 w-2 h-40 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full shadow-lg"
          initial={{ x: 0 }}
          animate={isOpen ? { x: -60, rotate: 15 } : { x: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-b from-yellow-400 to-yellow-700 rounded-full shadow-md">
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-yellow-600 rounded-full opacity-80" />
          </div>
        </motion.div>
      </motion.div>

      {/* Right Curtain */}
      <motion.div
        className="absolute top-0 right-0 h-full bg-gradient-to-l from-blue-600 via-blue-700 to-blue-800 shadow-2xl"
        style={{
          width: '50%',
          backgroundImage: `
            linear-gradient(270deg, 
              hsl(220, 70%, 25%) 0%,
              hsl(220, 75%, 30%) 10%,
              hsl(220, 80%, 35%) 20%,
              hsl(220, 75%, 30%) 30%,
              hsl(220, 70%, 25%) 40%,
              hsl(220, 75%, 30%) 50%,
              hsl(220, 80%, 35%) 60%,
              hsl(220, 75%, 30%) 70%,
              hsl(220, 70%, 25%) 80%,
              hsl(220, 75%, 30%) 90%,
              hsl(220, 80%, 35%) 100%
            )
          `,
          boxShadow: 'inset 20px 0 40px rgba(0,0,0,0.3), -20px 0 50px rgba(0,0,0,0.4)'
        }}
        initial={{ x: 0 }}
        animate={isOpen ? { 
          x: '45%',
          skewY: 2
        } : { x: 0 }}
        transition={{ 
          duration: 2, 
          ease: [0.25, 0.46, 0.45, 0.94],
          type: "tween"
        }}
      >
        {/* Curtain folds */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 bottom-0 bg-gradient-to-b from-blue-500/20 to-blue-900/40"
              style={{
                right: `${i * 12.5}%`,
                width: '2px',
                boxShadow: '-2px 0 4px rgba(0,0,0,0.3)'
              }}
            />
          ))}
        </div>
        
        {/* Golden rope and tassel */}
        <motion.div
          className="absolute top-20 left-4 w-2 h-40 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full shadow-lg"
          initial={{ x: 0 }}
          animate={isOpen ? { x: 60, rotate: -15 } : { x: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-b from-yellow-400 to-yellow-700 rounded-full shadow-md">
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-yellow-600 rounded-full opacity-80" />
          </div>
        </motion.div>
      </motion.div>

      {/* Top curtain rod */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-yellow-500 to-yellow-700 shadow-lg border-b-2 border-yellow-800" />
      
      {/* Curtain rings */}
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="absolute top-1 w-6 h-6 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full shadow-md"
          style={{ left: `${10 + i * 8}%` }}
        />
      ))}
    </div>
  );
};

export default CurtainAnimation;