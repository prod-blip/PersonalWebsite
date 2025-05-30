import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  
  const achievements = [
    "led the development for a digital lending platform",
    "led cross-functional collaboration across product, tech, and business", 
    "leveraged data insights to drive product decisions",
    "championed product adoption through strategic marketing campaigns",
    "built AI-powered products from concept to full-scale deployment"
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % achievements.length);
      }, 250);
      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }, 3000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <header className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex items-center justify-center relative overflow-hidden">
      {/* GRID PATTERN BACKGROUND */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gIDxkZWZzPiAgICA8cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4gICAgICA8cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPiAgICA8L3BhdHRlcm4+ICA8L2RlZnM+ICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-20"></div>
      
      {/* ANIMATED GEOMETRIC SHAPES */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-indigo-500/10 rounded-lg rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-pink-500/20 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-60 right-40 w-12 h-12 bg-yellow-500/20 rotate-45 animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      {/* MAIN CONTENT */}
        <div 
            className={`text-center z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
            >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent animate-pulse-slow">
                Atul Pandey
            </h1>
            
            <div className="text-xl md:text-2xl space-y-2">
                <p className="opacity-90 mt-10">is a</p>
                <p className="opacity-90"><span className="text-purple-300 font-semibold md:text-4xl">growth-focused product leader</span></p>
                
                {/* SEPARATE LINES */}
                <p className="opacity-90 mt-15">who has</p>
                <div className="relative flex items-center justify-center">
                <div className="perspective-1000">
                    <div className={`transition-transform duration-700 transform-style-preserve-3d ${isAnimating ? 'rotate-x-animation' : ''}`}>
                    <span className="text-purple-300 font-semibold md:text-4xl">{achievements[currentIndex]}</span>
                    </div>
                </div>
            </div>
        </div>
        
        <p className="text-lg mb-12 mt-50 opacity-80">Welcome to his web resume!</p>
        
        <div className="animate-bounce">
          <ChevronDown className="w-8 h-8 mx-auto text-purple-300" />
        </div>
        
        <p className="text-sm mt-4 opacity-60">Scroll to browse</p>
      </div>
    </header>
  );
};

export default Header;