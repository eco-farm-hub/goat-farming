import React from 'react';

const AboutUs = () => {
  return (
    <div className="py-16 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <img src="/goat-farming/img/org-bg-rm.png" alt="About Us" className="rounded-lg shadow-md" />
        </div>
        <div className="w-full md:w-1/2 md:pl-16 mt-8 md:mt-0">
          <h2 className="text-4xl font-bold mb-4">About Our Farm</h2>
          <p className="mb-8 mt-2">
            We are committed to raising healthy goats using sustainable farming practices.
            Our goal is to provide the highest quality goat milk, cheese, and meat products,
            while ensuring the well-being of our herds and the environment.
          </p>
          <a href="/about" className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg transition-transform transform hover:scale-105 duration-300">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;