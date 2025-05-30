import React, { useState, useEffect } from 'react';
import TimelineItem from './TimelineItem';
import { TIMELINE_DATA } from '../utils/constants';

const TimelineSection = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    
    const element = document.getElementById('timeline-section');
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="timeline-section" className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Life and Career Milestones</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-indigo-500 to-purple-500 transform md:-translate-x-0.5"></div>
          
          {TIMELINE_DATA.map((item, idx) => (
            <TimelineItem key={idx} item={item} index={idx} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;