'use client'; // Ensure this is at the top of the file

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
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
     <div className=" bg-black rounded-lg text-white text-3xl font-bold px-4 py-4 mb-8">
        Our Creations
      </div>
      <div className="bg-white rounded-lg p-10 max-w-screen-lg border border-black">
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center">
          {projects.map((project, index) => {
            // Use the index to create a unique ref for each card
            const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
            
            return (
              <motion.div
                key={project.id} // Use id for the key instead of name
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <ProjectCard
                  project={{
                    id: project.id,
                    name: project.name, // Map name to title
                    description: project.shortDescription, // Map shortDescription to description
                    image: project.image,
                    link: project.link,
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
