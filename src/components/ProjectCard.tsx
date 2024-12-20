import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  project: {
    id: number;
    name: string;
    description: string;
    image: string;
    link: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white bg-opacity-70 text-black rounded-xl p-6 w-full h-96 max-w-xs flex flex-col items-center justify-between">
      {/* Image Section with Circular Border */}
      <div className="w-32 h-32 mb-6 relative">
        <Image
          src={project.image}
          alt={project.name}
          layout="fill" // Make the Image component fill its parent container
          objectFit="cover" // Ensure the image covers the area without distortion
          className="rounded-full border-2 border-gray-400"
        />
      </div>
      {/* Title */}
      <h2 className="text-xl font-bold mb-2 text-center">{project.name}</h2>
      {/* Description */}
      <p className="text-sm mb-4 text-center">{project.description}</p>
      {/* Link */}
      <Link href={`/project/${project.name}`} className="text-blue-500  hover:text-blue-700 flex items-center">
        <span className="mr-2">Explore &gt;</span> 
      </Link>

    </div>
  );
};

export default ProjectCard;
