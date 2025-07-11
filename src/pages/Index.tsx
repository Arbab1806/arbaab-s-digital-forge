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

  // Smooth snap scrolling between sections
  useEffect(() => {
    if (showContent) {
      const style = document.createElement('style');
      style.textContent = `
        html {
          scroll-behavior: smooth;
          scroll-snap-type: y mandatory;
        }
        
        body {
          overflow-y: auto;
          height: 100vh;
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
        <main className="snap-y overflow-y-auto h-screen">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
          <SocialSection />
        </main>
      )}
    </>
  );
};

export default Index;
