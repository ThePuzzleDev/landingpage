import React from 'react';
import PuzzleScene from './PuzzleScene';

interface HeroSectionProps {
  id?: string; // Optional prop
}

const HeroSection: React.FC<HeroSectionProps> = ({ id }) => {
  return (
    <section id={id} className="flex flex-col md:flex-row items-center justify-between px-6 py-12 md:px-12 md:py-20 bg-white h-screen">
      <div className="w-full md:w-1/2 h-full md:h-[80vh] bg-gray-200">
        <PuzzleScene />
      </div>
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-black">
          Complete your business puzzle with<br />
          <span className="typewriter  bg-black text-white  px-2 ">
            The Puzzle Dev
          </span>
        </h1>
        <p className="mt-4 italic text-lg text-gray-700 ">
          —where innovation meets the perfect fit.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
