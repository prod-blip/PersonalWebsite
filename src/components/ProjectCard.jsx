import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 ${isHovered ? 'scale-105' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-start mb-4">
        <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
          {project.year}
        </span>
        <ExternalLink className={`w-5 h-5 text-gray-400 transition-colors duration-300 ${isHovered ? 'text-purple-600' : ''}`} />
      </div>
      
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
      <p className="text-gray-700 leading-relaxed mb-4">{project.description}</p>
      
      {project.tags && (
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, idx) => (
            <span 
              key={idx} 
              className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded-full hover:bg-purple-100 transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;