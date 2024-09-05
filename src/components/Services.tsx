import React from 'react';
import ServiceCard from './ServiceCard';

interface ServicesProps {
  id?: string; // Optional prop
}

const Services: React.FC<ServicesProps> = ({ id }) => {
  return (
    <div className="bg-black text-white py-12">
      <div className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {/* Place-items-center centers the grid items both horizontally and vertically */}
        
        <ServiceCard 
          title="Mobile Development"
          subtitle="Crafting Exceptional Mobile Experiences"
          description="Elevate your business with tailor-made mobile applications. Our expertise spans both Android and iOS, ensuring seamless performance and intuitive user interfaces. From concept to launch, we transform your ideas into innovative mobile solutions."
        />
        
        <ServiceCard 
          title="Web Development"
          subtitle="Building Responsive & Fast Websites"
          description="Our web development services ensure your website is fast, responsive, and engaging. Whether you need an e-commerce platform or a corporate website, we have you covered."
        />
        
        <ServiceCard 
          title="UI/UX Design"
          subtitle="Designing User-Centered Interfaces"
          description="We create user-centered designs that are both beautiful and functional, improving user experience and boosting engagement across your digital platforms."
        />
      
      </div>
    </div>
  );
};

export default Services;
