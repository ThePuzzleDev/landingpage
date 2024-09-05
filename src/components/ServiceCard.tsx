import React from 'react';

interface ServiceCardProps {
  title: string;
  subtitle: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, subtitle, description }) => {
  return (
    <div className="bg-gray-100 text-black rounded-md shadow-md p-6 mb-6 max-w-sm">
      <h2 className="bg-black text-white text-lg font-bold p-2 mb-2 rounded-md">{title}</h2>
      <h3 className="text-xl italic mb-4">{subtitle}</h3>
      <hr className="border-t-2 border-black mb-4" />
      <p className="text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;
