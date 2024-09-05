import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface ImageComponentProps {
  src: string | StaticImageData;  // Source of the image, can be a URL or a static import
  alt: string;  // Alternative text for the image
  width?: number;  // Optional width of the image
  height?: number;  // Optional height of the image
  className?: string;  // Optional CSS class name for styling
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  src,
  alt,
  width = 600,  // Default width
  height = 400,  // Default height
  className
}) => {
  return (
    <div className={className}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        layout="responsive"  // Adjusts the image to fit the container
      />
    </div>
  );
};

export default ImageComponent;
