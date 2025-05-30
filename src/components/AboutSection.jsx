// import React from 'react';
// import AnimatedSection from './AnimatedSection';
// import { COMPANIES_WORKED_WITH } from '../utils/constants';

// const AboutSection = () => {
//   return (
//     <section className="py-20 px-6 bg-white">
//       <div className="max-w-4xl mx-auto">
//         <AnimatedSection id="about-section" delay={300}>
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
//               Pronounced <span className="text-purple-600">Ah-nih-ket</span> / अनिकेत
//             </h2>
//             <div className="w-20 h-1 bg-purple-600 mx-auto mb-8"></div>
//           </div>

//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div className="space-y-6">
//               <p className="text-lg text-gray-700 leading-relaxed">
//                 Born and raised in <span className="font-semibold text-purple-600">Bombay</span> / मुंबई,
//                 <br />lives and works in <span className="font-semibold text-purple-600">Toronto</span> / T'karonto
//               </p>
//               <p className="text-lg text-gray-700 leading-relaxed">
//                 Develops multimedia content for a living and made this page to showcase some of his works, 
//                 skills, and the fact that he can build a website.
//               </p>
//               <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-105">
//                 or keep scrolling to learn more
//               </button>
//             </div>
            
//             <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">Worked with</h3>
//               <div className="grid grid-cols-2 gap-4">
//                 {COMPANIES_WORKED_WITH.map((company, idx) => (
//                   <div 
//                     key={idx} 
//                     className="bg-white p-3 rounded-lg text-center font-medium text-gray-700 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 transform cursor-pointer"
//                   >
//                     {company}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="text-center mt-16">
//             <h3 className="text-2xl font-bold text-gray-900 mb-4">Recognized by</h3>
//             <div className="flex flex-wrap justify-center gap-6 opacity-70">
//               <span className="text-gray-600">Industry Leaders</span>
//               <span className="text-gray-600">•</span>
//               <span className="text-gray-600">Creative Agencies</span>
//               <span className="text-gray-600">•</span>
//               <span className="text-gray-600">Media Outlets</span>
//             </div>
//           </div>
//         </AnimatedSection>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;

import React, { useState, useEffect } from 'react';
import AnimatedSection from './AnimatedSection';
import { Building2, TrendingUp, Code, Lightbulb, Calendar, MapPin } from 'lucide-react';

const AboutSection = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
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
        "Spearheaded digital secured lending platform contributing ₹30 Cr annually",
        "Reduced loan sanction turnaround time by 50% through self-served interface",
        "Increased overall conversion by 10% with CRM integration & automated calling",
        "Boosted platform user base by 12% via Mobile App for assisted onboarding"
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
        "Achieved 100% digital adoption of CRM application for Pig Iron Sales",
        "Increased FY'21 turnover by 8% through consumer research across North India",
        "Delivered ₹10 Cr cost savings via RPA, Pricing Analytics & Freight Prediction",
        "Scaled direct user base >20% YoY under market acquisition plan"
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
        "Enhanced UI, data model & inter-process connectivity of Workforce Management Product",
        "Facilitated seamless communication between business & technical personnel",
        "Delivered continuous improvement of software modules and applications"
      ]
    }
  ];

  const sideProject = {
    name: "AI-Powered Product Management Interview Platform",
    url: "www.aiprodview.com",
    icon: Lightbulb,
    highlights: [
      "Built end-to-end platform simulating PM interviews using AI",
      "Developed full-stack solution with HTML, CSS, JavaScript & Python/Django",
      "Integrated OpenAI API for adaptive AI interviewer experience"
    ]
  };

  return (
    <section id="about-section" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection id="about-animated" delay={300}>
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Professional Journey
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              7+ years driving growth through data-driven product initiatives
            </p>
            <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
          </div>

          {/* Work Experience Cards */}
          <div className="space-y-8 mb-16">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className={`group relative bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${inView ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${idx * 200}ms` }}
              >
                {/* Company Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 bg-gradient-to-r ${exp.color} rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <exp.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{exp.company}</h3>
                      <p className="text-lg font-semibold text-purple-600">{exp.role}</p>
                    </div>
                  </div>
                  
                  <div className="text-right text-sm text-gray-600">
                    <div className="flex items-center space-x-1 mb-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Achievements Grid */}
                <div className="grid md:grid-cols-2 gap-4">
                  {exp.achievements.map((achievement, achieveIdx) => (
                    <div
                      key={achieveIdx}
                      className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Side Project Highlight */}
          <div className={`bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900 rounded-2xl p-8 text-white shadow-2xl ${inView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <sideProject.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Side Project</h3>
                <a 
                  href={`https://${sideProject.url}`} 
                  className="text-purple-300 hover:text-purple-200 transition-colors duration-300 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {sideProject.url}
                </a>
              </div>
            </div>
            
            <h4 className="text-xl font-semibold mb-4 text-purple-200">
              {sideProject.name}
            </h4>
            
            <div className="grid md:grid-cols-3 gap-4">
              {sideProject.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-200 text-sm leading-relaxed">{highlight}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Education Summary */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {/* Education */}
            <div className={`bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300 ${inView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Education</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-purple-700">MBA - International Business</p>
                  <p className="text-gray-600">Indian Institute of Foreign Trade, New Delhi (2016-2018)</p>
                </div>
                <div>
                  <p className="font-semibold text-purple-700">B.Tech</p>
                  <p className="text-gray-600">Uttar Pradesh Technical University (2010-2014)</p>
                </div>
              </div>
            </div>

            {/* Key Metrics */}
            <div className={`bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300 ${inView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1000ms' }}>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Impact Metrics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-purple-600">₹40+ Cr</p>
                  <p className="text-sm text-gray-600">Revenue Impact</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-indigo-600">50%</p>
                  <p className="text-sm text-gray-600">Process Improvement</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-purple-600">20%+</p>
                  <p className="text-sm text-gray-600">User Growth</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-indigo-600">7+</p>
                  <p className="text-sm text-gray-600">Years Experience</p>
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