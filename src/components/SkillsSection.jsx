import React, { useState, useEffect } from 'react';
import AnimatedSection from './AnimatedSection';
import SkillBadge from './SkillBadge';
import { SKILLS_DATA } from '../utils/constants';

const SkillsSection = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    
    const element = document.getElementById('skills-section');
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills-section" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <AnimatedSection id="skills-animated">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Key Skills</h2>
          {/* <p className="text-lg text-gray-600 mb-12">(The 'Key Skills' section)</p> */}
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-12"></div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {SKILLS_DATA.map((skill, idx) => (
              <SkillBadge key={idx} skill={skill} index={idx} inView={inView} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SkillsSection;