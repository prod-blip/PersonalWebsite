import React, { useEffect } from 'react';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import TimelineSection from './components/TimelineSection';
import ContactSection from './components/ContactSection';

const App = () => {
  useEffect(() => {
    // Smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add custom styles for animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fade-in {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in {
        animation: fade-in 0.6s ease-out forwards;
      }
      
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
      
      @keyframes pulse-slow {
        0%, 100% { opacity: 0.8; }
        50% { opacity: 1; }
      }
      .animate-pulse-slow {
        animation: pulse-slow 3s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <TimelineSection />
      <ContactSection />
    </div>
  );
};

export default App;