import React from 'react';

interface ServiceCardProps {
  title: string;
  subtitle: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, subtitle, description }) => {
  return (
    <div className="bg-gray-100 text-black rounded-md shadow-md p-6 mb-6 w-full h-96 max-w-xs flex flex-col"> {/* Increased height */}
      <h2 className="bg-black text-white text-lg font-bold p-4 mb-2 rounded-md flex-shrink-0">
        {title}
      </h2>
      <h3 className="text-xl italic mb-4 flex-shrink-0">{subtitle}</h3>
      <hr className="border-t-2 border-black mb-4 flex-shrink-0" />
      <p className="text-sm leading-relaxed flex-grow">{description}</p>
    </div>
  );
};

export default ServiceCard;
