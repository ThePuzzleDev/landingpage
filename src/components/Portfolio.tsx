import React from 'react';
import ProjectCard from './ProjectCard';

interface Project {
  id: number;
  name: string; // This will be mapped to title
  shortDescription: string; // This will be mapped to description
  fullDescription: string;
  image: string;
  link: string;
}

interface PortfolioProps {
  projects: Project[];
}

const Portfolio: React.FC<PortfolioProps> = ({ projects }) => {
  return (
    <div id="portfolio" className="bg-white py-12 flex flex-col items-center">
      <div className="bg-black text-white text-2xl px-4 py-2 mb-8">Portfolio</div>
      <div className="bg-white rounded-lg p-10 max-w-screen-lg border border-black">
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center">
          {projects.map((project) => (
            <ProjectCard
              key={project.name}
              project={{
                id: project.id,
                name: project.name, // Map name to title
                description: project.shortDescription, // Map shortDescription to description
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
