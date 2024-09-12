import React from "react";

const AboutSection = () => {
  return (
    <section className="py-20">
      <div className="text-center">
        <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">
          About Us
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
          Committed to Sustainable Goat Farming
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side: Image */}
          <div className="flex justify-center items-center">
            <img
              src="img/org-bg-rm.png"
              alt="About Our Organization"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side: Content */}
          <div className="flex flex-col justify-center">
            {/* <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight  sm:text-4xl">
              Committed to Sustainable Goat Farming
            </p> */}
            <p className="mt-4 text-lg text-gray-400">
              We are passionate about helping farmers succeed in goat farming by
              providing expert guidance, best practices, and sustainable
              solutions. Our focus is on growth, innovation, and community
              support.
            </p>

            {/* Key Values */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 flex items-center justify-center rounded-md bg-green-500 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8V4m8 8v8m-8-8v8m-8-8v8"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg leading-6 font-medium ">
                    Sustainability
                  </h4>
                  <p className="mt-2 text-base text-gray-400">
                    We ensure sustainable practices that minimize environmental
                    impact and promote long-term growth.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 flex items-center justify-center rounded-md bg-green-500 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 11a7 7 0 0114 0 7 7 0 01-14 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg leading-6 font-medium ">
                    Community Support
                  </h4>
                  <p className="mt-2 text-base text-gray-400">
                    We empower local communities by providing the tools and
                    resources they need to thrive.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 flex items-center justify-center rounded-md bg-green-500 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h8m-4-4v8"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg leading-6 font-medium ">Growth</h4>
                  <p className="mt-2 text-base text-gray-400">
                    We focus on fostering sustainable growth for farmers and the
                    agriculture industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
