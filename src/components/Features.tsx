import { useInView } from 'react-intersection-observer';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported
import { Reviews } from './AppScreenshots';

interface FeaturesProps {
  features: string[];
}


const PHONES = [
  '/images/Screenshots/1.png',
  '/images/Screenshots/2.png',
  '/images/Screenshots/3.png',
  '/images/Screenshots/4.png',
  '/images/Screenshots/5.png',
  '/images/Screenshots/6.png',
]


export default function Features({ features }: FeaturesProps) {
  const { ref: featuresRef, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, 
  });

  return (
    <div className="my-6 px-4 flex flex-col md:flex-row items-center justify-between">
      {/* Key Features */}
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Key Features</h2>
        <ul
          ref={featuresRef}
          className={`list-disc list-inside transition-opacity duration-700  ${
            inView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {features.map((feature, index) => (
            <li
              key={index}
              className={`mb-2 transition-transform duration-700 gradient-text text-xl`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* App Screenshots */}
      <div className="w-full md:w-1/8 mt-6 md:mt-0">
      <Reviews screenshots={PHONES} />
      </div>
    </div>
  );
}