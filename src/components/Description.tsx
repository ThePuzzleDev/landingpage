import React from 'react';
import { StaticImageData } from 'next/image';
import ImageComponent from './AppIcon';

interface DescriptionProps {
  text: string;
  imageSrc: string | StaticImageData;
}

const Description: React.FC<DescriptionProps> = ({ text, imageSrc }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[18rem] bg-black p-4 space-y-4 md:space-y-0 md:flex-row md:space-x-4 ">
      {/* Image Container */}
      <div className="rounded-full w-32 h-32 bg-white  flex items-center justify-center shadow-lg md:w-48 md:h-48">
        <ImageComponent
          src={imageSrc}
          alt="App Icon"
          width={96}
          height={96}
          className="w-full h-full"
          layout="responsive"
        />
      </div>
      {/* Text Container */}
      <div className="w-full max-w-md">
        <div className="bg-gradient-to-r from-[#1C1B1B] via-[#464545] to-[#939393] rounded-2xl py-3 px-4">
          <p className="text-white text-base text-center md:text-left">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Description;
