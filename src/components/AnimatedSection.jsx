import React, { useState, useEffect } from 'react';

const AnimatedSection = ({ children, id, className = '', threshold = 0.3, delay = 0 }) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );
    
    const element = document.getElementById(id);
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, [id, threshold]);

  return (
    <div 
      id={id} 
      className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;