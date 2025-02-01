import React from 'react';

const OfficeCleaning = () => {
  return (
    <div className="min-h-screen bg-base-200 py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-primary mb-6">Office Cleaning Services</h1>
          <p className="text-2xl text-gray-600">
            Cleanvera is a top cleaning company in Manchester specializing in office cleaning. We offer reliable and thorough cleaning solutions to keep your workplace spotless and hygienic.
          </p>
        </div>

        {/* Service Description */}
        <div className="bg-base-100 p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-4xl font-semibold text-secondary mb-6">Our Office Cleaning Services</h2>
          <p className="text-xl text-gray-600 mb-6">
            We offer a wide range of services including daily office cleaning, commercial cleaning, carpet cleaning, deep cleaning, interior window cleaning, and many more. No matter the size of your office, we provide tailored solutions to meet your needs.
          </p>
          <ul className="list-disc list-inside text-xl text-gray-600 mb-6">
            <li>Daily Office Cleaning</li>
            <li>Commercial Cleaning</li>
            <li>Carpet Cleaning</li>
            <li>Deep Cleaning</li>
            <li>Interior Window Cleaning</li>
          </ul>
          <p className="text-xl text-gray-600">
            With Cleanvera’s office cleaning services, your team can focus on their work while we take care of the cleanliness.
          </p>
        </div>

        {/* Client Satisfaction */}
        <div className="bg-base-100 p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-4xl font-semibold text-secondary mb-6">100% Client Satisfaction Guaranteed</h2>
          <p className="text-xl text-gray-600">
            At Cleanvera, we are dedicated to delivering 100% client satisfaction. We go the extra mile to ensure your office always looks its best—creating a welcoming environment for clients, employees, and visitors alike. When you choose Cleanvera, you can count on top-quality cleaning services every time.
          </p>
        </div>

        {/* Vetted Cleaners */}
        <div className="bg-base-100 p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-4xl font-semibold text-secondary mb-6">Fully Vetted Cleaners</h2>
          <p className="text-xl text-gray-600 mb-6">
            Having fully vetted cleaners for your company is crucial for maintaining trust, security, and high-quality service. Vetted cleaners undergo thorough background checks and training, ensuring that they are reliable, professional, and trustworthy.
          </p>
          <p className="text-xl text-gray-600">
            This gives you peace of mind knowing your office and sensitive areas are in safe hands. It also ensures that the cleaning service is consistent, efficient, and up to high standards, contributing to a cleaner, healthier workplace and a more positive image for your business.
          </p>
        </div>

        {/* 5-Step Screening Process */}
        <div className="bg-base-100 p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-4xl font-semibold text-secondary mb-6">Our 5-Step Rigorous Screening Process</h2>
          <p className="text-xl text-gray-600 mb-6">
            At Cleanvera, we follow a super rigorous screening process to ensure we only work with the best cleaners. Here's how it works:
          </p>
          <div className="space-y-6">
            <div className="bg-base-200 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-primary">1. Online Registration & Initial Screening</h3>
              <p className="text-xl text-gray-600">All applicants must complete our detailed online registration. Only those who meet our strict criteria move on to the next phase.</p>
            </div>
            <div className="bg-base-200 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-primary">2. First Phone Screening</h3>
              <p className="text-xl text-gray-600">We conduct an in-depth phone interview to get a better understanding of the cleaner’s qualifications and reliability.</p>
            </div>
            <div className="bg-base-200 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-primary">3. Zoom Meeting</h3>
              <p className="text-xl text-gray-600">Our screening continues with a Zoom interview, where we ask more specific questions and assess the cleaner’s professionalism.</p>
            </div>
            <div className="bg-base-200 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-primary">4. Training Session</h3>
              <p className="text-xl text-gray-600">Cleaners who pass the first three rounds proceed to a training session where they learn about our company’s standards, procedures, and expectations.</p>
            </div>
            <div className="bg-base-200 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-primary">5. Background Check & Final Approval</h3>
              <p className="text-xl text-gray-600">The final step is a comprehensive background check to ensure the cleaner is trustworthy and reliable. Only the top 2% of applicants pass our entire screening process.</p>
            </div>
          </div>
        </div>

        {/* Why Office Cleaning is Essential */}
        <div className="bg-base-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-4xl font-semibold text-secondary mb-6">Why Office Cleaning is Essential</h2>
          <p className="text-xl text-gray-600">
            Office cleaning is essential for maintaining a healthy, productive, and professional work environment. Regular cleaning helps prevent the spread of germs, boosts employee morale, and creates a welcoming space for clients and visitors. A clean office also reduces the risk of accidents, extends the life of office furniture, and ensures compliance with health and safety standards. Keeping your office clean is a smart investment in both your employees’ well-being and your business’s reputation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OfficeCleaning;
