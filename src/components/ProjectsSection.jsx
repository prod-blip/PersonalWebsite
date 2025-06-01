import React, { useState, useEffect } from 'react';
import AnimatedSection from './AnimatedSection';
import { BarChart3, Users, Globe, Zap, Music, Target, TrendingUp, Brain } from 'lucide-react';

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    
    const element = document.getElementById('projects-section');
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);

  const spotifyFitProjects = [
    {
      title: "Regional Market Penetration Strategy",
      subtitle: "Consumer Research & Digital Transformation",
      company: "Tata Metaliks",
      impact: "8% Territory Growth",
      description: "Led comprehensive consumer research across North India foundry belt to understand regional usage patterns and supply preferences for niche products",
      spotifyRelevance: "Regional Market Insights",
      icon: Globe,
      color: "from-green-500 to-emerald-600",
      metrics: ["Regional consumer behavior analysis", "Market-specific product adaptation", "Territory-wide growth strategy"],
      spotifyConnection: "Perfect for SAMEA regional insights and market understanding"
    },
    {
      title: "Cross-Functional Growth Engine",
      subtitle: "CRM Integration & Conversion Optimization", 
      company: "ICICI Bank",
      impact: "₹30 Cr Revenue",
      description: "Orchestrated end-to-end lead conversion cycle with CRM integration, automated calling, and data-driven campaigns across multiple touchpoints",
      spotifyRelevance: "Cross-Functional Leadership",
      icon: Users,
      color: "from-purple-500 to-violet-600",
      metrics: ["10% conversion increase", "50% faster turnaround", "Multi-channel integration"],
      spotifyConnection: "Ideal for collaborating with Marketing, Music & Premium teams"
    },
    {
      title: "Data-Driven Product Localization",
      subtitle: "Digital Platform Development & User Experience",
      company: "ICICI Bank", 
      impact: "50% Time Reduction",
      description: "Developed guided self-served digital interface specifically tailored for SME customers, reducing complexity while maintaining functionality",
      spotifyRelevance: "Product Regionalization",
      icon: Target,
      color: "from-indigo-500 to-blue-600",
      metrics: ["User-centric design", "Regional customization", "Performance optimization"],
      spotifyConnection: "Essential for localizing Spotify features for SAMEA markets"
    },
    {
      title: "AI-Powered Consumer Intelligence",
      subtitle: "End-to-End Platform Development",
      company: "Side Project",
      impact: "Full-Stack Innovation",
      description: "Built comprehensive AI platform from scratch, integrating OpenAI API to create adaptive user experiences based on behavioral patterns",
      spotifyRelevance: "AI & Data Analytics",
      icon: Brain,
      color: "from-cyan-500 to-teal-600", 
      metrics: ["AI integration expertise", "User behavior analysis", "Adaptive experiences"],
      spotifyConnection: "Leveraging AI for consumer insights and personalization"
    }
  ];

  const keyStrengths = [
    { icon: BarChart3, label: "Data-Driven Decisions", value: "₹40+ Cr Impact" },
    { icon: TrendingUp, label: "Growth Leadership", value: "20%+ User Growth" },
    { icon: Music, label: "Cultural Passion", value: "Music Enthusiast" },
    { icon: Zap, label: "Digital Innovation", value: "AI Side Projects" }
  ];

  return (
    <section id="projects-section" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection id="projects-animated">
          {/* Header - MOBILE RESPONSIVE */}
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Why I'm Perfect for <span className="text-green-500">Spotify</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 px-2 sm:px-4 lg:px-0">
              Proven track record in data driven decisions, product adoption & cross-functional growth
            </p>
            <div className="w-16 sm:w-20 h-1 bg-green-500 mx-auto"></div>
          </div>

          {/* Key Strengths Row - MOBILE RESPONSIVE */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-10 sm:mb-12 lg:mb-16">
            {keyStrengths.map((strength, idx) => (
              <div
                key={idx}
                className={`text-center p-3 sm:p-4 lg:p-6 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${inView ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="inline-flex p-2 sm:p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg sm:rounded-xl text-white mb-2 sm:mb-4">
                  <strength.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1 sm:mb-2 leading-tight">{strength.label}</h3>
                <p className="text-xs sm:text-sm lg:text-base text-green-600 font-semibold">{strength.value}</p>
              </div>
            ))}
          </div>

          {/* Projects Grid - MOBILE RESPONSIVE */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12 lg:mb-16">
            {spotifyFitProjects.map((project, idx) => (
              <div
                key={idx}
                className={`group relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 ${hoveredProject === idx ? 'scale-105' : ''} ${inView ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${(idx + 4) * 150}ms` }}
                onMouseEnter={() => setHoveredProject(idx)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Header - MOBILE RESPONSIVE */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 sm:mb-6 space-y-3 sm:space-y-0">
                  <div className={`p-3 sm:p-4 bg-gradient-to-r ${project.color} rounded-lg sm:rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300 w-fit`}>
                    <project.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                  </div>
                  <div className="sm:text-right">
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 sm:px-3 py-1 rounded-full">
                      {project.spotifyRelevance}
                    </span>
                  </div>
                </div>

                {/* Content - MOBILE RESPONSIVE */}
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 leading-tight">{project.title}</h3>
                  <p className="text-sm sm:text-base lg:text-lg font-medium text-purple-600 mb-2 sm:mb-3 leading-tight">{project.subtitle}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-600 mb-3 sm:mb-4 space-y-1 sm:space-y-0">
                    <span className="font-medium">{project.company}</span>
                    <span className="font-bold text-green-600">{project.impact}</span>
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">{project.description}</p>
                </div>

                {/* Metrics - MOBILE RESPONSIVE */}
                <div className="mb-4 sm:mb-6">
                  <div className="space-y-2">
                    {project.metrics.map((metric, metricIdx) => (
                      <div key={metricIdx} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-xs sm:text-sm text-gray-600 leading-relaxed">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Spotify Connection - MOBILE RESPONSIVE */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 sm:p-4 rounded-lg border-l-4 border-green-500">
                  <p className="text-xs sm:text-sm font-medium text-gray-800 leading-relaxed">
                    <span className="text-green-600 font-bold">Spotify Fit:</span> {project.spotifyConnection}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* SAMEA Focus Section - MOBILE RESPONSIVE */}
          <div className={`bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-white relative overflow-hidden ${inView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1000ms' }}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-6 sm:top-10 left-6 sm:left-10 w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 border-2 border-green-400 rounded-full"></div>
              <div className="absolute bottom-6 sm:bottom-10 right-6 sm:right-10 w-10 sm:w-12 lg:w-16 h-10 sm:h-12 lg:h-16 border-2 border-green-400 rotate-45"></div>
              <div className="absolute top-1/2 left-1/4 w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 border-2 border-green-400 rounded-lg rotate-12"></div>
            </div>

            <div className="relative z-10">
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-4">Ready for SAMEA Strategy Role</h3>
                <p className="text-base sm:text-lg lg:text-xl text-green-200">Combining regional expertise with global product vision</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                <div className="text-center">
                  <div className="inline-flex p-3 sm:p-4 bg-white/20 rounded-full mb-3 sm:mb-4">
                    <Globe className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-green-400" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold mb-2">Regional Insights</h4>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">Deep consumer research across diverse markets and cultural contexts</p>
                </div>

                <div className="text-center">
                  <div className="inline-flex p-3 sm:p-4 bg-white/20 rounded-full mb-3 sm:mb-4">
                    <Users className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-green-400" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold mb-2">Cross-Functional Leadership</h4>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">Proven ability to align Marketing, Product, and Premium teams</p>
                </div>

                <div className="text-center">
                  <div className="inline-flex p-3 sm:p-4 bg-white/20 rounded-full mb-3 sm:mb-4">
                    <BarChart3 className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-green-400" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold mb-2">Data-Driven Results</h4>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">₹40+ Cr revenue impact through insights-led product decisions</p>
                </div>
              </div>

              <div className="text-center mt-6 sm:mt-8">
                <button className="w-full sm:w-auto bg-green-500 hover:bg-green-400 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm sm:text-base">
                  Let's Transform Music in SAMEA Together
                </button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProjectsSection;