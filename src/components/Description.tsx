import React from 'react';
import { StaticImageData } from 'next/image'; // Import the reusable ImageComponent
import ImageComponent from './AppIcon';

interface DescriptionProps {
  text: string;
  icon?: string | StaticImageData;  // Optional icon prop (app icon)
  imageSrc: string | StaticImageData;  // Image to display inside the card
}

const Description: React.FC<DescriptionProps> = ({ text, icon, imageSrc }) => {
  return (
    <div className='h-48 pt-18'>
    <div className="relative my-6 p-4 bg-gradient-to-r from-[#1C1B1B] via-[#464545] to-[#939393] rounded-lg flex items-start">
      {/* Icon outside the card */}
      {icon && (
        <div className="absolute -left-16 top-1/2 transform -translate-y-1/2">
          <ImageComponent
            src={icon}
            alt="App Icon"
            width={50}  // Set desired width for the icon
            height={50} // Set desired height for the icon
            className="rounded-full"
          />
        </div>
      )}

      {/* Image inside the card to the left */}
      <div className="mr-6">
        <ImageComponent
          src={imageSrc}
          alt="Description Image"
          width={100}  // Adjust width
          height={100} // Adjust height
        />
      </div>

      {/* Text inside the card */}
      <div>
        <p className="text-lg text-white">{text}</p>
      </div>
    </div>
    </div>
  );
};

export default Description;
