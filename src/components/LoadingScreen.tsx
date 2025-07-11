import React from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={() => setTimeout(onComplete, 2000)}
    >
      {/* 3D Animated A Logo */}
      <motion.div
        className="relative mb-8"
        initial={{ scale: 0, rotateY: -180 }}
        animate={{ 
          scale: 1, 
          rotateY: 0,
          rotateX: [0, 360, 0],
          rotateZ: [0, 180, 0]
        }}
        transition={{ 
          scale: { duration: 1, ease: "backOut" },
          rotateY: { duration: 1, ease: "backOut" },
          rotateX: { duration: 3, repeat: Infinity, ease: "linear" },
          rotateZ: { duration: 4, repeat: Infinity, ease: "linear" }
        }}
      >
        <div className="relative w-32 h-32">
          {/* Main A Letter */}
          <motion.div
            className="absolute inset-0 text-8xl font-bold text-gradient-cyber flex items-center justify-center"
            animate={{
              textShadow: [
                "0 0 20px hsl(var(--cyber-blue))",
                "0 0 40px hsl(var(--cyber-green))",
                "0 0 20px hsl(var(--cyber-blue))"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            A
          </motion.div>
          
          {/* Rotating rings around the A */}
          <motion.div
            className="absolute inset-0 border-2 border-cyber-blue rounded-full opacity-60"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          
          <motion.div
            className="absolute inset-2 border border-cyber-green rounded-full opacity-40"
            animate={{ rotate: -360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Pulsing glow */}
          <motion.div
            className="absolute inset-0 bg-gradient-glow rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Loading Text */}
      <motion.h2
        className="text-2xl font-semibold text-foreground mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Loading Portfolio
      </motion.h2>

      {/* Loading Bar */}
      <div className="w-80 h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-cyber rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </div>

      {/* Percentage Counter */}
      <motion.div
        className="mt-4 text-cyber-blue font-mono text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          {Array.from({ length: 101 }, (_, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: i === 100 ? 1 : 0 }}
              transition={{ delay: (i / 100) * 2 }}
            >
              {i === 100 && `${i}%`}
            </motion.span>
          ))}
        </motion.span>
      </motion.div>

      {/* Background cyber grid */}
      <div className="cyber-grid" />
      
      {/* Floating particles */}
      {Array.from({ length: 20 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyber-blue rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}
    </motion.div>
  );
};

export default LoadingScreen;