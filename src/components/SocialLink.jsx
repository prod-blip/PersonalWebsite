import React from 'react';

const SocialLink = ({ href, icon: Icon, label }) => {
  return (
    <a 
      href={href} 
      className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110 hover:shadow-lg group"
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
    </a>
  );
};

export default SocialLink;