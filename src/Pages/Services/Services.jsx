import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Office Cleaning",
      description: "Professional cleaning services tailored for offices to ensure a clean and productive workspace.",
      link: "/office-cleaning",
    },
    {
      title: "Daycare Centers and Schools",
      description: "Safe and thorough cleaning for daycare centers and schools to maintain a healthy environment for children.",
      link: "/daycare-schools",
    },
    {
      title: "Churches and Community Centers",
      description: "Cleaning services designed for places of worship and community gathering spaces.",
      link: "/churches-community",
    },
    {
      title: "Move In / Move Out Cleaning",
      description: "Comprehensive cleaning services for moving in or out of homes or offices.",
      link: "/move-in-out",
    },
    {
      title: "Airbnb & Short Term Rentals",
      description: "Specialized cleaning for Airbnb and short-term rental properties to ensure guest satisfaction.",
      link: "/airbnb-rentals",
    },
  ];

  return (
    <div className="min-h-screen bg-base-200 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center text-primary mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="card-body">
                <h2 className="card-title text-3xl font-semibold text-secondary">{service.title}</h2>
                <p className="text-lg text-gray-600">{service.description}</p>
                <div className="card-actions justify-end">
                  <a href={service.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary text-lg px-6 py-3">
                    See Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
