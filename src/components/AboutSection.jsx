import React, { useState, useEffect } from 'react';
import AnimatedSection from './AnimatedSection';
import { Building2, TrendingUp, Code, Lightbulb, Calendar, MapPin, Brain, MessageSquare, Mic, Search, Target } from 'lucide-react';

const AboutSection = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    
    const element = document.getElementById('about-section');
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      company: "ICICI Bank Limited",
      role: "Product Manager – Digital Lending Products",
      duration: "Dec 2021 - Present",
      location: "Mumbai, India",
      icon: Building2,
      color: "from-purple-600 to-indigo-600",
      achievements: [
        <>Spearheaded the <strong>development of a digital secured lending platform</strong> for SME customers, contributing ~₹ 500 Cr annually to the lending portfolio</>,
        <>Orchestrated flow of entire <strong>lead conversion cycle with CRM Integration</strong> & automated calling leading to increased overall conversion by 10%</>,
        <>Executed <strong>data-driven digital campaigns</strong>, resulting in a 50% increase in clicks and a 10% increase in loan sanctions across the products</>,
        <>Executed a thorough multi-channel communication strategy, covering all customer touchpoints to ensure product awareness</>,
        <>Skilled in creating product requirement documents, wireframes, understanding user journey, data analysis & delivering presentations</>,
      ]
    },
    {
      company: "Tata Metaliks Limited",
      role: "Growth & Strategy Manager",
      duration: "April 2018 – Nov 2021",
      location: "Delhi, India", 
      icon: TrendingUp,
      color: "from-indigo-600 to-purple-600",
      achievements: [
        "Overseeing 100% digital adoption of CRM application for Pig Iron Sales facilitating an online experience of purchase & service for end user",
        <>Led <strong>consumer research across North India</strong> foundry belt to derive specific usage and supply of niche grade Pig Iron increasing FY'21 turnover across the territory by 8%</>,
        "Driving digital transformation through implementation of Robotic Process Automation, Pricing Model Analytics & Freight Prediction Model solutions",
        "Scaled direct user base >20% YoY under end-user market acquisition & sales plan in FY'20"
      ]
    },
    {
      company: "Accenture Services Pvt. Ltd.",
      role: "Software Engineer",
      duration: "March 2015 – June 2016",
      location: "Bangalore, India",
      icon: Code,
      color: "from-blue-600 to-indigo-600",
      achievements: [
        "Executed continuous improvement of the software modules comprising the UI, data model, and inter-process connectivity of a Workforce Management Product",
        "Facilitated between business & technical personnel ensuring mutual understanding & delivery of processes, applications and other deliverables",
      ]
    }
  ];

  return (
    <section id="about-section" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection id="about-animated" delay={300}>
          {/* Header - MOBILE RESPONSIVE */}
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Professional Journey
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-4 sm:mb-6 lg:mb-8 px-2 sm:px-4 lg:px-0">
              7+ years driving growth through data-driven product initiatives
            </p>
            <div className="w-16 sm:w-20 h-1 bg-purple-600 mx-auto"></div>
          </div>

          {/* Work Experience Cards - MOBILE RESPONSIVE */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 mb-10 sm:mb-12 lg:mb-16">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className={`group relative bg-gradient-to-br from-gray-50 to-purple-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${inView ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${idx * 200}ms` }}
              >
                {/* Company Header - MOBILE RESPONSIVE */}
                <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:items-start sm:justify-between mb-4 sm:mb-6">
                  <div className="flex items-start space-x-3 sm:space-x-4 min-w-0 flex-1">
                    <div className={`p-2 sm:p-3 bg-gradient-to-r ${exp.color} rounded-lg sm:rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <exp.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 leading-tight break-words">{exp.company}</h3>
                      <p className="text-sm sm:text-base lg:text-lg font-semibold text-purple-600 leading-tight mt-1 break-words">{exp.role}</p>
                    </div>
                  </div>
                  
                  <div className="text-left sm:text-right text-xs sm:text-sm text-gray-600 flex-shrink-0 ml-7 sm:ml-0">
                    <div className="flex items-center space-x-1 mb-1">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Achievements Grid - MOBILE RESPONSIVE */}
                <div className="space-y-3 sm:space-y-0 sm:grid sm:grid-cols-1 lg:grid-cols-2 sm:gap-3 lg:gap-4">
                  {exp.achievements.map((achievement, achieveIdx) => (
                    <div
                      key={achieveIdx}
                      className="flex items-start space-x-2 sm:space-x-3 p-3 sm:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* AI Side Projects - MOBILE RESPONSIVE */}
          <div className={`bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-white shadow-2xl ${inView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
            <div className="text-center mb-6 sm:mb-8">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 bg-white/20 rounded-lg sm:rounded-xl backdrop-blur-sm">
                  <Brain className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">AI Side Projects</h3>
              </div>
              <p className="text-purple-200 text-sm sm:text-base">Built end to end full stack AI Applications</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
              {/* Project 1: PM Interview Simulator */}
              <div className="group bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                  <div className="p-1.5 sm:p-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-md sm:rounded-lg">
                    <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <h4 className="text-base sm:text-lg lg:text-xl font-bold text-white leading-tight">PM Interview Simulator</h4>
                </div>
                <p className="text-purple-100 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3">
                  AI-powered platform simulating real product management interviews with adaptive questioning
                </p>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  <span className="text-xs bg-indigo-500/30 text-indigo-200 px-2 py-1 rounded">OpenAI Integration</span>
                  <span className="text-xs bg-indigo-500/30 text-indigo-200 px-2 py-1 rounded">Full-Stack</span>
                  <span className="text-xs bg-indigo-500/30 text-indigo-200 px-2 py-1 rounded">Fine-Tuning</span>
                </div>
              </div>

              {/* Project 2: RAG Assistant Voicebot */}
              <div className="group bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                  <div className="p-1.5 sm:p-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-md sm:rounded-lg">
                    <Mic className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <h4 className="text-base sm:text-lg lg:text-xl font-bold text-white leading-tight">RAG Assistant Voicebot</h4>
                </div>
                <p className="text-purple-100 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3">
                  Agentic AI voicebot with drag-and-drop file context integration for intelligent query responses
                </p>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  <span className="text-xs bg-indigo-500/30 text-indigo-200 px-2 py-1 rounded">RAG Architecture</span>
                  <span className="text-xs bg-indigo-500/30 text-indigo-200 px-2 py-1 rounded">Voice AI</span>
                  <span className="text-xs bg-indigo-500/30 text-indigo-200 px-2 py-1 rounded">Data Chunking</span>
                </div>
              </div>

              {/* Project 3: LinkedIn Job Analyzer */}
              <div className="group bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                  <div className="p-1.5 sm:p-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-md sm:rounded-lg">
                    <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <h4 className="text-base sm:text-lg lg:text-xl font-bold text-white leading-tight">LinkedIn Job Analyzer</h4>
                </div>
                <p className="text-purple-100 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3">
                  Intelligent agent that extracts, analyzes job postings and builds searchable database with relevance scoring
                </p>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  <span className="text-xs bg-indigo-500/30 text-indigo-200 px-2 py-1 rounded">Web Scraping</span>
                  <span className="text-xs bg-indigo-500/30 text-indigo-200 px-2 py-1 rounded">Agentic AI</span>
                  <span className="text-xs bg-indigo-500/30 text-indigo-200 px-2 py-1 rounded">API Integration</span>
                </div>
              </div>

              {/* Project 4: Poker Assistant */}
              <div className="group bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                  <div className="p-1.5 sm:p-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-md sm:rounded-lg">
                    <Target className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <h4 className="text-base sm:text-lg lg:text-xl font-bold text-white leading-tight">Poker Strategy Assistant</h4>
                </div>
                <p className="text-purple-100 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3">
                  AI agent analyzing poker hands, opponent patterns, and probability calculations for optimal move recommendations
                </p>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  <span className="text-xs bg-indigo-500/30 text-indigo-200 px-2 py-1 rounded">UI Design</span>
                  <span className="text-xs bg-indigo-500/30 text-indigo-200 px-2 py-1 rounded">Game State Analysis</span>
                  <span className="text-xs bg-indigo-500/30 text-indigo-200 px-2 py-1 rounded">Agentic AI</span>
                </div>
              </div>
            </div>

            {/* Bottom Stats - MOBILE RESPONSIVE */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/20">
              <div className="text-center">
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white">4+</p>
                <p className="text-xs text-purple-200">AI Projects</p>
              </div>
              <div className="text-center">
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white">100%</p>
                <p className="text-xs text-purple-200">Self-Built</p>
              </div>
              <div className="text-center">
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white">AI-First</p>
                <p className="text-xs text-purple-200">Approach</p>
              </div>
            </div>
          </div>

          {/* Skills & Education Summary - MOBILE RESPONSIVE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mt-10 sm:mt-12 lg:mt-16">
            {/* Education */}
            <div className={`bg-gradient-to-br from-indigo-50 to-purple-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl hover:shadow-lg transition-shadow duration-300 ${inView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Education</h3>
              <div className="space-y-2 sm:space-y-3">
                <div>
                  <p className="text-sm sm:text-base font-semibold text-purple-700">MBA - International Business</p>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Indian Institute of Foreign Trade, New Delhi (2016-2018)</p>
                </div>
                <div>
                  <p className="text-sm sm:text-base font-semibold text-purple-700">B.Tech</p>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Uttar Pradesh Technical University (2010-2014)</p>
                </div>
              </div>
            </div>

            {/* Key Metrics */}
            <div className={`bg-gradient-to-br from-purple-50 to-indigo-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl hover:shadow-lg transition-shadow duration-300 ${inView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1000ms' }}>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Impact Metrics</h3>
              <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
                <div className="text-center">
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-600">₹500+ Cr</p>
                  <p className="text-xs sm:text-sm text-gray-600">Revenue Impact</p>
                </div>
                <div className="text-center">
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-indigo-600">50%</p>
                  <p className="text-xs sm:text-sm text-gray-600">Process Improvement</p>
                </div>
                <div className="text-center">
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-600">20%+ YoY</p>
                  <p className="text-xs sm:text-sm text-gray-600">User Growth</p>
                </div>
                <div className="text-center">
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-indigo-600">7+</p>
                  <p className="text-xs sm:text-sm text-gray-600">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutSection;