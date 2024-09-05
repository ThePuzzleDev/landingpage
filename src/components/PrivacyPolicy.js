const PrivacyPolicy = ({ policy }) => {
  // Find the "Contact Us" section if it exists
  const contactUsSection = policy.sections.find(sec => sec.title === "Contact Us");

  return (
    <section className="bg-black min-h-screen flex items-center justify-center py-8 px-4">
      <div className="bg-white w-full max-w-4xl p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-black">Privacy Policy for {policy.appName}</h2>
        <p className="mb-4 text-black">Last Updated: {policy.lastUpdated}</p>
        <p className="mb-6 text-black">{policy.description}</p>
        {policy.sections.filter(section => section.title !== "Contact Us").map((section, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-black">{section.title}</h3>
            {Array.isArray(section.content)
              ? section.content.map((item, i) => (
                  <p key={i} className="mb-2 text-black">{item}</p>
                ))
              : <p className="mb-2 text-black">{section.content}</p>
            }
          </div>
        ))}
        {contactUsSection && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-black">Contact Us</h3>
            <p className="mb-1 text-black">{contactUsSection.content[0]}</p>
            <p className="mb-1 text-black">{contactUsSection.content[1]}</p>
            <p className="text-black">
              <a href={`mailto:${contactUsSection.content[2]}`} className="text-blue-500 hover:underline">
                {contactUsSection.content[2]}
              </a>
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PrivacyPolicy;
