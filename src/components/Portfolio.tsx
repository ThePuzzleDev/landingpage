'use client'; // Ensure this is at the top of the file

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ProjectCard'; // Ensure the path to ProjectCard is correct

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

const AnimatedProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1,   // Trigger when 10% of the element is visible
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      <ProjectCard
        project={{
          id: project.id,
          name: project.name,
          description: project.shortDescription,
          image: project.image,
          link: project.link,
        }}
      />
    </motion.div>
  );
};

const Portfolio: React.FC<PortfolioProps> = ({ projects }) => {
  return (
    <div id="portfolio" className="bg-white py-12 flex flex-col items-center">
      <div className="bg-black rounded-lg text-white text-3xl font-bold px-4 py-4 mb-8">
        Our Creations
      </div>
      <div className="bg-white rounded-lg p-10 max-w-screen-lg border border-black">
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center">
          {projects.map((project, index) => (
            <AnimatedProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
