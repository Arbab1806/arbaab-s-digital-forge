import React from 'react';
import { motion } from 'framer-motion';

interface CurtainAnimationProps {
  isOpen: boolean;
  onComplete: () => void;
}

const CurtainAnimation: React.FC<CurtainAnimationProps> = ({ isOpen, onComplete }) => {
  return (
    <>
      {/* Left Curtain - Fabric Style */}
      <motion.div
        className="fixed top-0 left-0 w-1/2 h-full z-40"
        initial={{ x: 0 }}
        animate={{ x: isOpen ? "-100%" : 0 }}
        transition={{ 
          duration: 2.5, 
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.3
        }}
        onAnimationComplete={() => {
          if (isOpen) onComplete();
        }}
      >
        {/* Fabric curtain with realistic folds and texture */}
        <div className="w-full h-full relative overflow-hidden">
          {/* Heavy velvet fabric base */}
          <motion.div 
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(90deg, 
                  hsl(220 60% 8%) 0%,
                  hsl(220 55% 12%) 15%,
                  hsl(220 60% 8%) 30%,
                  hsl(220 55% 12%) 45%,
                  hsl(220 60% 8%) 60%,
                  hsl(220 55% 12%) 75%,
                  hsl(220 60% 8%) 90%,
                  hsl(220 65% 5%) 100%
                ),
                radial-gradient(ellipse at 20% 50%, hsl(220 70% 15% / 0.3) 0%, transparent 50%),
                radial-gradient(ellipse at 80% 30%, hsl(220 60% 20% / 0.2) 0%, transparent 40%)
              `
            }}
            animate={isOpen ? {
              scale: [1, 1.05, 1.02],
              filter: ["brightness(1)", "brightness(0.9)", "brightness(0.7)"]
            } : {}}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
          
          {/* Fabric pleats and folds - vertical draping */}
          {Array.from({ length: 12 }, (_, i) => (
            <motion.div
              key={`fold-${i}`}
              className="absolute top-0 bottom-0"
              style={{ 
                left: `${8 + i * 7}%`,
                width: '4px',
                background: `linear-gradient(to bottom,
                  hsl(220 70% ${5 + (i % 3) * 3}%) 0%,
                  hsl(220 65% ${8 + (i % 2) * 4}%) 20%,
                  hsl(220 60% ${6 + (i % 4) * 2}%) 40%,
                  hsl(220 65% ${9 + (i % 3) * 3}%) 60%,
                  hsl(220 70% ${4 + (i % 2) * 5}%) 80%,
                  hsl(220 60% ${7 + (i % 4) * 2}%) 100%
                )`,
                boxShadow: `
                  2px 0 4px hsl(220 80% 5% / 0.6),
                  -1px 0 2px hsl(220 70% 15% / 0.3)
                `
              }}
              animate={isOpen ? {
                scaleY: [1, 0.95, 1.08, 0.92],
                scaleX: [1, 1.3, 0.7, 1.1],
                rotateZ: [0, 1.5, -0.8, 0.5],
                opacity: [1, 0.8, 0.6, 0.3]
              } : {
                scaleY: [1, 1.02, 1],
                rotateZ: [0, 0.3, 0]
              }}
              transition={{ 
                duration: isOpen ? 2.8 : 3, 
                delay: i * 0.1,
                repeat: isOpen ? 0 : Infinity,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            />
          ))}
          
          {/* Fabric weight lines - horizontal gathering */}
          {Array.from({ length: 8 }, (_, i) => (
            <motion.div
              key={`weight-${i}`}
              className="absolute left-0 right-0 h-1"
              style={{ 
                top: `${15 + i * 10}%`,
                background: `linear-gradient(to right,
                  transparent 0%,
                  hsl(220 80% 3% / 0.8) 20%,
                  hsl(220 70% 8% / 0.6) 50%,
                  hsl(220 80% 3% / 0.8) 80%,
                  transparent 100%
                )`,
                borderTop: '1px solid hsl(220 60% 12%)',
                borderBottom: '1px solid hsl(220 80% 4%)'
              }}
              animate={isOpen ? {
                scaleX: [1, 0.8, 0.6, 0.2],
                opacity: [0.6, 0.4, 0.2, 0]
              } : {
                scaleX: [0.9, 1, 0.9],
                opacity: [0.4, 0.6, 0.4]
              }}
              transition={{ 
                duration: isOpen ? 2.5 : 4, 
                delay: i * 0.15,
                repeat: isOpen ? 0 : Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
          
          {/* Curtain rod connection - brass rings */}
          {Array.from({ length: 8 }, (_, i) => (
            <motion.div
              key={`ring-${i}`}
              className="absolute top-2 w-3 h-3 rounded-full"
              style={{ 
                left: `${12 + i * 10}%`,
                background: `radial-gradient(circle, hsl(45 70% 50%) 0%, hsl(45 60% 35%) 70%, hsl(45 80% 25%) 100%)`,
                boxShadow: `
                  0 2px 4px hsl(220 80% 5% / 0.8),
                  inset 0 1px 2px hsl(45 80% 60%)
                `
              }}
              animate={isOpen ? {
                scale: [1, 0.8, 0.6],
                y: [0, 3, 8],
                opacity: [1, 0.7, 0]
              } : {
                y: [0, 1, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: isOpen ? 2.2 : 2,
                delay: i * 0.08,
                repeat: isOpen ? 0 : Infinity,
                ease: "easeInOut"
              }}
            />
          ))}

          {/* Fabric edge with golden trim */}
          <motion.div 
            className="absolute top-0 right-0 bottom-0 w-2"
            style={{
              background: `linear-gradient(to bottom,
                hsl(45 80% 45%) 0%,
                hsl(45 70% 35%) 25%,
                hsl(45 80% 45%) 50%,
                hsl(45 70% 35%) 75%,
                hsl(45 80% 45%) 100%
              )`,
              boxShadow: `
                0 0 15px hsl(220 70% 25%),
                0 0 30px hsl(220 60% 20% / 0.8),
                inset 0 0 10px hsl(45 90% 55%)
              `
            }}
            animate={isOpen ? {
              opacity: [1, 0.8, 0.5],
              scaleX: [1, 0.7, 0.3],
              filter: ["brightness(1)", "brightness(1.2)", "brightness(0.8)"]
            } : {
              filter: ["brightness(1)", "brightness(1.1)", "brightness(1)"]
            }}
            transition={{ 
              duration: isOpen ? 2.5 : 3, 
              repeat: isOpen ? 0 : Infinity,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          />
        </div>
      </motion.div>

      {/* Right Curtain - Fabric Style */}
      <motion.div
        className="fixed top-0 right-0 w-1/2 h-full z-40"
        initial={{ x: 0 }}
        animate={{ x: isOpen ? "100%" : 0 }}
        transition={{ 
          duration: 2.5, 
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.3
        }}
      >
        {/* Fabric curtain with realistic folds and texture */}
        <div className="w-full h-full relative overflow-hidden">
          {/* Heavy velvet fabric base */}
          <motion.div 
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(270deg, 
                  hsl(220 60% 8%) 0%,
                  hsl(220 55% 12%) 15%,
                  hsl(220 60% 8%) 30%,
                  hsl(220 55% 12%) 45%,
                  hsl(220 60% 8%) 60%,
                  hsl(220 55% 12%) 75%,
                  hsl(220 60% 8%) 90%,
                  hsl(220 65% 5%) 100%
                ),
                radial-gradient(ellipse at 80% 50%, hsl(220 70% 15% / 0.3) 0%, transparent 50%),
                radial-gradient(ellipse at 20% 70%, hsl(220 60% 20% / 0.2) 0%, transparent 40%)
              `
            }}
            animate={isOpen ? {
              scale: [1, 1.05, 1.02],
              filter: ["brightness(1)", "brightness(0.9)", "brightness(0.7)"]
            } : {}}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
          
          {/* Fabric pleats and folds - vertical draping */}
          {Array.from({ length: 12 }, (_, i) => (
            <motion.div
              key={`fold-${i}`}
              className="absolute top-0 bottom-0"
              style={{ 
                left: `${8 + i * 7}%`,
                width: '4px',
                background: `linear-gradient(to bottom,
                  hsl(220 70% ${5 + (i % 3) * 3}%) 0%,
                  hsl(220 65% ${8 + (i % 2) * 4}%) 20%,
                  hsl(220 60% ${6 + (i % 4) * 2}%) 40%,
                  hsl(220 65% ${9 + (i % 3) * 3}%) 60%,
                  hsl(220 70% ${4 + (i % 2) * 5}%) 80%,
                  hsl(220 60% ${7 + (i % 4) * 2}%) 100%
                )`,
                boxShadow: `
                  -2px 0 4px hsl(220 80% 5% / 0.6),
                  1px 0 2px hsl(220 70% 15% / 0.3)
                `
              }}
              animate={isOpen ? {
                scaleY: [1, 0.95, 1.08, 0.92],
                scaleX: [1, 1.3, 0.7, 1.1],
                rotateZ: [0, -1.5, 0.8, -0.5],
                opacity: [1, 0.8, 0.6, 0.3]
              } : {
                scaleY: [1, 1.02, 1],
                rotateZ: [0, -0.3, 0]
              }}
              transition={{ 
                duration: isOpen ? 2.8 : 3, 
                delay: i * 0.1,
                repeat: isOpen ? 0 : Infinity,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            />
          ))}
          
          {/* Fabric weight lines - horizontal gathering */}
          {Array.from({ length: 8 }, (_, i) => (
            <motion.div
              key={`weight-${i}`}
              className="absolute left-0 right-0 h-1"
              style={{ 
                top: `${15 + i * 10}%`,
                background: `linear-gradient(to left,
                  transparent 0%,
                  hsl(220 80% 3% / 0.8) 20%,
                  hsl(220 70% 8% / 0.6) 50%,
                  hsl(220 80% 3% / 0.8) 80%,
                  transparent 100%
                )`,
                borderTop: '1px solid hsl(220 60% 12%)',
                borderBottom: '1px solid hsl(220 80% 4%)'
              }}
              animate={isOpen ? {
                scaleX: [1, 0.8, 0.6, 0.2],
                opacity: [0.6, 0.4, 0.2, 0]
              } : {
                scaleX: [0.9, 1, 0.9],
                opacity: [0.4, 0.6, 0.4]
              }}
              transition={{ 
                duration: isOpen ? 2.5 : 4, 
                delay: i * 0.15,
                repeat: isOpen ? 0 : Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
          
          {/* Curtain rod connection - brass rings */}
          {Array.from({ length: 8 }, (_, i) => (
            <motion.div
              key={`ring-${i}`}
              className="absolute top-2 w-3 h-3 rounded-full"
              style={{ 
                left: `${12 + i * 10}%`,
                background: `radial-gradient(circle, hsl(45 70% 50%) 0%, hsl(45 60% 35%) 70%, hsl(45 80% 25%) 100%)`,
                boxShadow: `
                  0 2px 4px hsl(220 80% 5% / 0.8),
                  inset 0 1px 2px hsl(45 80% 60%)
                `
              }}
              animate={isOpen ? {
                scale: [1, 0.8, 0.6],
                y: [0, 3, 8],
                opacity: [1, 0.7, 0]
              } : {
                y: [0, 1, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: isOpen ? 2.2 : 2,
                delay: i * 0.08,
                repeat: isOpen ? 0 : Infinity,
                ease: "easeInOut"
              }}
            />
          ))}

          {/* Fabric edge with golden trim */}
          <motion.div 
            className="absolute top-0 left-0 bottom-0 w-2"
            style={{
              background: `linear-gradient(to bottom,
                hsl(45 80% 45%) 0%,
                hsl(45 70% 35%) 25%,
                hsl(45 80% 45%) 50%,
                hsl(45 70% 35%) 75%,
                hsl(45 80% 45%) 100%
              )`,
              boxShadow: `
                0 0 15px hsl(220 70% 25%),
                0 0 30px hsl(220 60% 20% / 0.8),
                inset 0 0 10px hsl(45 90% 55%)
              `
            }}
            animate={isOpen ? {
              opacity: [1, 0.8, 0.5],
              scaleX: [1, 0.7, 0.3],
              filter: ["brightness(1)", "brightness(1.2)", "brightness(0.8)"]
            } : {
              filter: ["brightness(1)", "brightness(1.1)", "brightness(1)"]
            }}
            transition={{ 
              duration: isOpen ? 2.5 : 3, 
              repeat: isOpen ? 0 : Infinity,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          />
        </div>
      </motion.div>
    </>
  );
};

export default CurtainAnimation;