import React from 'react';
import { StaticImageData } from 'next/image'; // Import the reusable ImageComponent
import ImageComponent from './AppIcon';

interface DescriptionProps {
  text: string; // Optional icon prop (app icon)
  imageSrc: string | StaticImageData;  // Image to display inside the card
}

const Description: React.FC<DescriptionProps> = ({ text, imageSrc }) => {
  return (
    <div className="flex justify-center items-center h-full bg-black p-4">
      <div className="flex flex-col items-center space-y-6">
        <div className="w-full max-w-sm sm:max-w-sm md:max-w-lg bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex-shrink-0 w-full sm:w-1/2 md:w-auto">
            <ImageComponent
              src={imageSrc}
              alt="App Icon"
              width={110}
              height={90}
              className="rounded-lg overflow-hidden"
            />
          </div>
        </div>
        <div className="flex-grow">
          <div className="bg-gradient-to-r from-[#1C1B1B] via-[#464545] to-[#939393] rounded-2xl py-4 px-6">
            <span className=" text-white px-2">
              <p className="text-white text-sm">{text}</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;