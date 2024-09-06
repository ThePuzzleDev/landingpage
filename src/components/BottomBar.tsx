// components/BottomBar.tsx
import React from 'react';

const BottomBar: React.FC = () => {
  return (
    <div className="bg-black-900 text-white py-4 px-6 w-full flex justify-between items-center mt-auto">
      {/* Left Section: Contact Email */}
      <a 
        href="mailto:thepuzzledev@gmail.com"
        className="text-sm hover:underline"
      >
        Contact Us
      </a>

      {/* Right Section: App Store Link */}
      <a 
        href="#" // Replace with your actual App Store link
        className="text-sm hover:underline"
      >
        Download on the App Store
      </a>
    </div>
  );
};

export default BottomBar;
