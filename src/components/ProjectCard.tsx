import Link from 'next/link';
import React from 'react';

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white bg-opacity-70 text-black rounded-lg p-6 w-full h-96 max-w-xs flex flex-col items-center justify-between">
      {/* Image Section with Circular Border */}
      <img
        src={project.image}
        alt={project.title}
        className="w-32 h-32 object-cover rounded-full border-2 border-gray-400 mb-6"
      />
      {/* Title */}
      <h2 className="text-xl font-bold mb-2 text-center">{project.title}</h2>
      {/* Description */}
      <p className="text-sm mb-4 text-center">{project.description}</p>
      {/* Link */}
      <Link href={`/project/${project.id}`}>
        {/* <a className="text-blue-500 underline text-center">Learn More</a> */}
        Learn More
      </Link>
    </div>
  );
};

export default ProjectCard;
