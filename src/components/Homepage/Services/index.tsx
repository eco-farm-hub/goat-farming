import React from 'react';

const services = [
  {
    title: "Farm Tours",
    description: "Come and visit our farm to see our goats and learn about our farming practices.",
    icon: "🚜",
  },
  {
    title: "Consultations",
    description: "Get expert advice on starting your own goat farm or improving your current practices.",
    icon: "📞",
  },
  {
    title: "Goat Sales",
    description: "We sell healthy goats for breeding, milk production, or meat.",
    icon: "🐐",
  },
];

const Services = () => {
  return (
      <div className="flex flex-col items-center py-16">
        <h2 className="text-4xl font-bold mb-8">Our Services</h2>
        <div className="flex flex-wrap justify-center space-x-4">
          {services.map((service, idx) => (
            <div key={idx} className="p-6 max-w-sm bg-[var(--ifm-cards-background-color)] shadow-lg rounded-lg">
              <div className="text-4xl">{service.icon}</div>
              <h3 className="text-2xl font-semibold mt-4">{service.title}</h3>
              <p className="mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Services;