import React from 'react';
import { StaticImageData } from 'next/image'; // Import the reusable ImageComponent
import ImageComponent from './AppIcon';

interface DescriptionProps {
  text: string; // Optional icon prop (app icon)
  imageSrc: string | StaticImageData;  // Image to display inside the card
}
const Description: React.FC<DescriptionProps> = ({ text, imageSrc }) => {
  return (
    <div className="flex justify-center items-center h-72 bg-black p-4">
    
        <div className="flex items-center space-x-6">
        <div className="w-90 bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex-shrink-0">
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
            <div className="bg-gradient-to-r from-[#1C1B1B] via-[#464545] to-[#939393] rounded-full py-4 px-6">
            <span className="typewriter  text-white  px-2 ">
              <p className="text-white text-base">{text}</p>
              </span>
            </div>

          </div>
        </div>
      </div>
    
  );
};
export default Description;
