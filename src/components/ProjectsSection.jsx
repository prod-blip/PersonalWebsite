import React from 'react';
import AnimatedSection from './AnimatedSection';
import ProjectCard from './ProjectCard';
import { PROJECTS_DATA } from '../utils/constants';

const ProjectsSection = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection id="projects-section">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Selected Projects</h2>
            <p className="text-lg text-gray-600">(Click to view, Refresh if blank)</p>
            <div className="w-20 h-1 bg-purple-600 mx-auto mt-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS_DATA.map((project, idx) => (
              <ProjectCard key={idx} project={project} index={idx} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProjectsSection;