import React from 'react';

const features = [
  {
    title: "Expert Guides",
    description: "Access comprehensive guides and resources for sustainable goat farming.",
    icon: "📘",
  },
  {
    title: "Healthy Goats",
    description: "Learn how to raise healthy herds with organic farming practices.",
    icon: "🐐",
  },
  {
    title: "Profitable Farming",
    description: "Maximize profits with strategies that boost productivity and sustainability.",
    icon: "💼",
  },
];

const HomepageFeatures = () => {
  return (
    <div className="flex flex-col items-center py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
      <div className="flex flex-wrap justify-center space-x-4">
        {features.map((feature, idx) => (
          <div key={idx} className="p-6 max-w-sm bg-[var(--ifm-cards-background-color)] shadow-lg rounded-lg">
            <div className="text-4xl">{feature.icon}</div>
            <h3 className="text-2xl font-semibold mt-4">{feature.title}</h3>
            <p className="mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomepageFeatures;