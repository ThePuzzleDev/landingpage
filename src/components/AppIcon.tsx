import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface ImageComponentProps {
  src: string | StaticImageData;  // Source of the image, can be a URL or a static import
  alt: string;  // Alternative text for the image
  width?: number;  // Optional width of the image
  height?: number;  // Optional height of the image
  className?: string;  // Optional CSS class name for styling
  layout?: 'fixed' | 'intrinsic' | 'responsive' | 'fill'; // Corrected layout types
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  src,
  alt,
  width,
  height,
  className,
  layout = 'responsive', // Default to 'responsive'
}) => {
  return (
    <div className={className}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        layout={layout} // Adjusts the image to fit the container
        className="rounded-full object-cover w-full h-full"
      />
    </div>
  );
};

export default ImageComponent;
