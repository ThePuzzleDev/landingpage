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
        </h1>
        <div className="bg-black w-full md:w-1/2 mt-8 md:mt-0 text-left">
          <span className="typewriter text-3xl md:text-4xl font-bold text-white pl-6">The Puzzle Dev</span>
          </div>
        <p className="mt-4 italic text-lg text-gray-700">
          —where innovation meets the perfect fit.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
