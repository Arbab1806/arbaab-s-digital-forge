import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown, User, Code, Briefcase, Mail, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const roles = ['Freelancer', 'Penetration Tester', 'Web Developer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="h-screen w-full relative overflow-hidden" id="hero">
      {/* Background grid */}
      <div className="cyber-grid" />
      
      {/* 3D floating elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyber-blue rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0.6, 1, 0.6],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Name with glowing effect */}
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6"
            animate={{
              textShadow: [
                "0 0 20px hsl(var(--cyber-blue))",
                "0 0 40px hsl(var(--cyber-green))",
                "0 0 20px hsl(var(--cyber-blue))"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="text-gradient-cyber">ARBAB</span>
            <br />
            <span className="text-foreground">HUSSAIN</span>
          </motion.h1>

          {/* Animated Subtitle */}
          <motion.div
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed h-16 flex items-center justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <span>I'm a </span>
            <div className="relative ml-2 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRoleIndex}
                  className="inline-block text-cyber-blue font-semibold relative"
                  initial={{ 
                    opacity: 0, 
                    x: 50,
                    rotateY: 90
                  }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    rotateY: 0
                  }}
                  exit={{ 
                    opacity: 0, 
                    x: -50,
                    rotateY: -90
                  }}
                  transition={{ 
                    duration: 0.8,
                    ease: "easeInOut"
                  }}
                >
                  {/* Blue shining line effect */}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-transparent via-cyber-blue to-transparent"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ 
                      duration: 2, 
                      ease: "easeInOut",
                      delay: 0.3
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-transparent via-cyber-blue to-transparent opacity-60"
                    animate={{ 
                      x: ["0%", "100%", "0%"],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  {roles[currentRoleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8"
          >
            <Link to="/about">
              <Button className="cyber-button w-full" data-clickable="true">
                <User className="w-4 h-4 mr-2" />
                About
              </Button>
            </Link>
            <Link to="/skills">
              <Button className="cyber-button w-full" data-clickable="true">
                <Code className="w-4 h-4 mr-2" />
                Skills
              </Button>
            </Link>
            <Link to="/services">
              <Button className="cyber-button w-full" data-clickable="true">
                <Settings className="w-4 h-4 mr-2" />
                Services
              </Button>
            </Link>
            <Link to="/projects">
              <Button className="cyber-button w-full" data-clickable="true">
                <Briefcase className="w-4 h-4 mr-2" />
                Projects
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="cyber-button w-full" data-clickable="true">
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </Button>
            </Link>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <Button
              onClick={scrollToNext}
              className="bg-gradient-cyber hover:shadow-cyber text-background font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-500 hover:scale-105 animated-border"
              data-clickable="true"
            >
              Explore My Work
              <motion.div
                className="ml-2"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                🎯
              </motion.div>
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8 text-cyber-blue cursor-pointer" onClick={scrollToNext} />
          </motion.div>
        </motion.div>
      </div>

      {/* Side decorations */}
      <motion.div
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-cyber-blue to-cyber-green rounded-full"
        initial={{ height: 0 }}
        animate={{ height: 128 }}
        transition={{ duration: 2, delay: 1.5 }}
      />
      
      <motion.div
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-cyber-green to-cyber-blue rounded-full"
        initial={{ height: 0 }}
        animate={{ height: 128 }}
        transition={{ duration: 2, delay: 1.5 }}
      />
    </section>
  );
};

export default HeroSection;