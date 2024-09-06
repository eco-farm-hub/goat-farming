import { BookOpenIcon, BriefcaseIcon, HeartIcon } from '@heroicons/react/24/outline';
import React from 'react';

const features = [
  {
    title: 'Expert Guides',
    description: 'Access comprehensive guides and resources for sustainable goat farming.',
    icon: BookOpenIcon,
  },
  {
    title: 'Healthy Herds',
    description: 'Learn best practices for raising healthy goats with organic farming techniques.',
    icon: HeartIcon,
  },
  {
    title: 'Profitable Farming',
    description: 'Increase profitability by adopting sustainable and productive farming strategies.',
    icon: BriefcaseIcon,
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">
            Goat Farming Benefits
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold sm:text-4xl">
            Why Choose Us for Goat Farming?
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
            Our expert services and resources help you manage and grow your goat farming business efficiently and sustainably.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-1 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-200 mb-6">
                <feature.icon className="h-8 w-8 text-green-600" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="mt-4 text-center text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;