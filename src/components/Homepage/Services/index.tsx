import { WrenchIcon, TruckIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import React from 'react';

const services = [
  {
    title: 'Farm Maintenance',
    description: 'Offering full maintenance services to keep your farm running efficiently.',
    icon: WrenchIcon,
  },
  {
    title: 'Livestock Transport',
    description: 'Safe and reliable transport solutions for your livestock.',
    icon: TruckIcon,
  },
  {
    title: 'Consulting & Support',
    description: 'Expert consulting to help you optimize your goat farming operations.',
    icon: UserGroupIcon,
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">
            Our Services
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold sm:text-4xl">
            What We Offer
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
            Our services are designed to help goat farmers manage and grow their operations with ease.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-1 lg:grid-cols-3">
          {services.map((service, idx) => (
            <div key={idx} className="flex flex-col items-center p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-200 mb-6">
                <service.icon className="h-8 w-8 text-green-600" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="mt-4 text-center text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;