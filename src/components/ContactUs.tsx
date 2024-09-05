import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <div className="bg-white py-16 px-4">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-black mb-2">
          Get in touch with us
        </h1>
        <p className="text-xl font-semibold text-gray-800">
          Have a project in mind or need more information? We're here to help!
        </p>
      </div>

      {/* Contact Box */}
      <div className="max-w-xl mx-auto border border-gray-300 rounded-lg p-6 shadow-md bg-gradient-to-br from-[#D9D9D9] to-[#D9D9D9]">
      <h2 className="text-lg font-bold text-black bg-white p-2 rounded-md">
  Email Us: <span className="font-normal text-black">contact@thepuzzledev.com</span>
</h2>

        <hr className="border-t-2 border-gray-400 my-4" />
        <p className="text-sm text-gray-700 leading-relaxed">
          Whether you're looking to start a new project, have questions about our services, 
          or just want to chat about your ideas, feel free to drop us an email. 
          Our team is ready to assist you and bring your vision to life.
        </p>
      </div>

      {/* Call-to-Action */}
      <div className="text-center mt-8">
        <a
          href="mailto:contact@thepuzzledev.com"
          className="inline-block bg-black text-white font-bold py-3 px-6 rounded-md shadow hover:bg-gray-800 transition-colors"
        >
          Let's connect and solve your business puzzle together!
        </a>
      </div>
    </div>
  );
};

export default ContactUs;