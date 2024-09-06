"use client"; // Ensure client-side rendering

import React, { useEffect, useRef, useState } from 'react';

const ContactUs: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isScaled, setIsScaled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsScaled(true);
            setTimeout(() => {
              setIsScaled(false); // Revert the scale after 1.5 seconds
            }, 1500);
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the card is visible
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div id='contact' className="bg-white py-8 px-4 text-black">
      {/* Title Section */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold mb-2">
          Get in touch with us
        </h1>
        <p className="text-lg font-semibold text-gray-800">
          Have a project in mind or need more information? We&apos;re here to help!
        </p>
      </div>

      {/* Contact Box with Glassmorphism */}
      <div
        ref={cardRef}
        className={`max-w-xl mx-auto rounded-lg p-4 shadow-lg bg-white bg-opacity-90 
                    backdrop-filter backdrop-blur-lg border border-opacity-30 border-gray-300 
                    transition-transform duration-500 ease-in-out ${
                      isScaled ? 'scale-110' : 'scale-100'
                    }`}
      >
        <h2 className="text-md font-bold mb-3">
          Email Us: <span className="font-normal">thepuzzledev@gmail.com</span>
        </h2>
        <hr className="border-t border-gray-300 border-opacity-30 my-3" />
        <p className="text-sm leading-relaxed">
          Whether you&apos;re looking to start a new project, have questions about our services, 
          or just want to chat about your ideas, feel free to drop us an email. 
          Our team is ready to assist you and bring your vision to life.
        </p>
      </div>

      {/* Call-to-Action */}
      <div className="text-center mt-6">
        <a
          href="mailto:thepuzzledev@gmail.com"
          className="inline-block bg-black text-white font-bold py-2 px-4 rounded-md shadow hover:bg-opacity-90 transition-colors"
        >
          Let&apos;s connect and solve your business puzzle together!
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
