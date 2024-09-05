import React from 'react';
import ProjectCard from './ProjectCard';

interface Project {
  id: number;
  name: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  link: string;
}

interface PortfolioProps {
  projects: Project[];
}

const Portfolio: React.FC<PortfolioProps> = ({ projects }) => {
  return (
    <div className="bg-white py-12 flex flex-col items-center"> {/* Background and vertical alignment */}
      <div className="bg-black text-white text-2xl px-4 py-2  mb-8">Portfolio</div> {/* Title section */}
      <div className="bg-white rounded-lg p-10 max-w-screen-lg border border-black">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={{
                title: project.name,
                description: project.shortDescription,
                image: project.image,
                link: project.link,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
