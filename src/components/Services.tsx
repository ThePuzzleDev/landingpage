'use client'; // Ensure this is at the top of the file

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ServiceCard from './ServiceCard';

interface ServicesProps {
  id?: string; // Optional prop
}

const Services: React.FC<ServicesProps> = ({ id }) => {
  // Create references and inView states for each card
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div id='services' className="bg-black text-white py-20"> {/* Increased height */}
      <div className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        
        {/* Card 1 - Fades in from the left */}
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: inView1 ? 1 : 0, x: inView1 ? 0 : -100 }}
          transition={{ duration: 1 }}
        >
          <ServiceCard
            title="Mobile Development"
            subtitle="Crafting Exceptional Mobile Experiences"
            description="Elevate your business with tailor-made mobile applications. Our expertise spans both Android and iOS, ensuring seamless performance and intuitive user interfaces. From concept to launch, we transform your ideas into innovative mobile solutions."
          />
        </motion.div>

        {/* Card 2 - Fades in from the bottom */}
        <motion.div
          ref={ref2}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 100 }}
          transition={{ duration: 1 }}
        >
          <ServiceCard
            title="Web Development"
            subtitle="Building Responsive & Fast Websites"
            description="Our web development services ensure your website is fast, responsive, and engaging. Whether you need an e-commerce platform or a corporate website, we have you covered."
          />
        </motion.div>

        {/* Card 3 - Fades in from the right */}
        <motion.div
          ref={ref3}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: inView3 ? 1 : 0, x: inView3 ? 0 : 100 }}
          transition={{ duration: 1 }}
        >
          <ServiceCard
            title="UI/UX Design"
            subtitle="Designing User-Centered Interfaces"
            description="We create user-centered designs that are both beautiful and functional, improving user experience and boosting engagement across your digital platforms."
          />
        </motion.div>
        
      </div>
    </div>
  );
};

export default Services;
