import React from 'react';

const BottomBar: React.FC = () => {
  return (
    <div className="bg-black text-white py-4 px-6 w-full flex flex-col sm:flex-row justify-between items-center mt-auto">
      {/* Left Section: Contact Email */}
      <a 
        href="mailto:thepuzzledev@gmail.com"
        className="text-sm hover:underline mb-2 sm:mb-0"
      >
        Contact Us
      </a>

      {/* Right Section: App Store & Play Store Links */}
      <div className="flex gap-x-6">
        <a 
          href="https://apps.apple.com/in/developer/aaseem-mhaskar/id1765509719"
          className="text-sm hover:underline"
        >
          App Store
        </a>
        <a 
          href="https://play.google.com/store/apps/developer?id=ThePuzzleDev"
          className="text-sm hover:underline"
        >
          Play Store
        </a>
      </div>
    </div>
  );
};

export default BottomBar;
