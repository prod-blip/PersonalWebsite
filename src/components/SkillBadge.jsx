import React from 'react';

const SkillBadge = ({ skill, index, inView }) => {
  return (
    <div
      className={`group p-4 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl transition-all duration-500 hover:shadow-lg hover:scale-105 hover:from-purple-100 hover:to-indigo-100 cursor-pointer ${inView ? 'animate-fade-in' : ''}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <span className="font-medium text-gray-800 group-hover:text-purple-700 transition-colors duration-300">
        {skill}
      </span>
    </div>
  );
};

export default SkillBadge;