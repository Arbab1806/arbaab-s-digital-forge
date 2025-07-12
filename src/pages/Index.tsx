import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

// Components
import CustomCursor from '@/components/CustomCursor';
import LoadingScreen from '@/components/LoadingScreen';
import CurtainAnimation from '@/components/CurtainAnimation';

// Sections
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';
import SocialSection from '@/components/sections/SocialSection';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showCurtains, setShowCurtains] = useState(false);
  const [curtainsOpen, setCurtainsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);

  // Loading sequence
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      setShowCurtains(true);
    }, 3000);

    return () => clearTimeout(loadingTimer);
  }, []);

  // Curtain sequence
  useEffect(() => {
    if (showCurtains) {
      const curtainTimer = setTimeout(() => {
        setCurtainsOpen(true);
      }, 500);

      return () => clearTimeout(curtainTimer);
    }
  }, [showCurtains]);

  // Content reveal
  const handleCurtainComplete = () => {
    setShowContent(true);
  };

  // Book-style page scrolling with no overlap
  useEffect(() => {
    if (showContent) {
      const style = document.createElement('style');
      style.textContent = `
        html {
          scroll-behavior: auto;
          scroll-snap-type: y mandatory;
          scroll-padding-top: 0px;
        }
        
        body {
          overflow-y: auto;
          height: 100vh;
        }
        
        .snap-container {
          scroll-snap-type: y mandatory;
          overflow-y: scroll;
          height: 100vh;
          scroll-behavior: auto;
        }
        
        .snap-page {
          scroll-snap-align: start;
          scroll-snap-stop: always;
          height: 100vh;
          width: 100vw;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `;
      document.head.appendChild(style);

      return () => {
        document.head.removeChild(style);
      };
    }
  }, [showContent]);

  return (
    <>
      {/* Custom Cursor */}
      <CustomCursor />

      <AnimatePresence mode="wait">
        {/* Loading Screen */}
        {isLoading && (
          <LoadingScreen 
            key="loading"
            onComplete={() => setIsLoading(false)} 
          />
        )}

        {/* Curtain Animation */}
        {showCurtains && !isLoading && (
          <CurtainAnimation
            key="curtains"
            isOpen={curtainsOpen}
            onComplete={handleCurtainComplete}
          />
        )}
      </AnimatePresence>

      {/* Main Portfolio Content */}
      {showContent && (
        <main className="snap-container">
          <section className="snap-page"><HeroSection /></section>
          <section className="snap-page"><AboutSection /></section>
          <section className="snap-page"><SkillsSection /></section>
          <section className="snap-page"><ProjectsSection /></section>
          <section className="snap-page"><ContactSection /></section>
          <section className="snap-page"><SocialSection /></section>
        </main>
      )}
    </>
  );
};

export default Index;
