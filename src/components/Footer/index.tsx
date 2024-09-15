import React, { useEffect, useState } from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";

const products = [
  {
    name: "Goat Breeds",
    href: "#",
  },
  {
    name: "Feeding & Nutrition",
    href: "#",
  },
  {
    name: "Goat Housing",
    href: "#",
  },
  {
    name: "Health & Veterinary Care",
    href: "#",
  },
  {
    name: "Farm Equipment",
    href: "#",
  },
  {
    name: "Resources",
    isAccordion: true,
    content: [
      { name: "Goat Care Tips", href: "#" },
      {
        name: "Seasonal Feeding",
        href: "#",
      },
      { name: "Breeding Practices", href: "#" },
      { name: "Disease Prevention", href: "#" },
      { name: "Sustainable Farming", href: "#" },
      { name: "Veterinary Contacts", href: "#" },
    ],
  },
];

const developers = [
  { name: "Farm Management Tools", href: "#" },
  { name: "Training Videos", href: "#" },
  { name: "Success Stories", href: "#" },
  { name: "Organic Farming", href: "#" },
  { name: "Goat Health Guides", href: "#" },
  {
    name: "Sustainable Practices",
    isAccordion: true,
    content: [
      { name: "Water Conservation", href: "#" },
      { name: "Soil Management", href: "#" },
      { name: "Rotational Grazing", href: "#" },
    ],
  },
];

const usecases = [
  { name: "Commercial Farming", href: "#" },
  { name: "Dairy Farming", href: "#" },
  { name: "Meat Production", href: "#" },
  { name: "Fiber Production", href: "#" },
  { name: "Backyard Farming", href: "#" },
];

const company = [
  { name: "About Us", href: "#" },
  { name: "Success Stories", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Careers", href: "#" },
  { name: "Community", href: "#" },
  { name: "Contact Us", href: "#" },
  { name: "FAQ", href: "#" },
];

const comparisons = [
  { name: "Goat Breeds Comparison", href: "#" },
  { name: "Feed Types", href: "https://goatfarm.com/feed-types" },
  { name: "Housing Systems", href: "https://goatfarm.com/housing-systems" },
  { name: "Dairy vs Meat Goats", href: "https://goatfarm.com/dairy-vs-meat" },
  {
    name: "Rotational Grazing vs Free Range",
    href: "https://goatfarm.com/grazing-vs-free-range",
  },
  {
    name: "View More Comparisons",
    isAccordion: true,
    content: [
      {
        name: "Meat Production Systems",
        href: "https://goatfarm.com/meat-systems",
      },
      { name: "Fiber Production Techniques", href: "#" },
      { name: "Organic vs Conventional Farming", href: "#" },
      { name: "Goat Vaccination Protocols", href: "#" },
    ],
  },
];

function Safety({ className }) {
  return (
    <div
      className={clsx(
        "flex max-w-[418px] flex-row overflow-clip rounded-2xl bg-white dark:bg-[#474747]",
        className
      )}
    >
      <div className="flex flex-1 place-items-center justify-center rounded-2xl bg-white px-4 py-6 font-bold text-gray-500 dark:bg-[#474747] dark:text-[#fff]">
        Animal Welfare, <br /> Our Priority.
      </div>
      <div className="flex flex-1 items-center justify-around px-6">
        <img src="/img/soc-compliant-1.png" alt="Certified Organic" />
        <img src="/img/vector.png" alt="Animal Welfare Approved" />
        <img
          style={{ width: "62px" }}
          src="/img/gdpr_docs.png"
          alt="Sustainably Certified"
        />
      </div>
    </div>
  );
}

function Status({ className }) {
  const [status, setStatus] = useState({
    indicator: "none",
    description: "Farm Operations Normal",
  });

  useEffect(() => {
    if (typeof StatusPage !== "undefined") {
      var sp = new StatusPage.page({ page: "wjlxrzb5h09l" });
      sp.status({
        success: function (data) {
          setStatus({
            indicator: data.status.indicator,
            description: data.status.description,
          });
        },
      });
    }
  }, []);

  return (
    <Link
      href="https://status.goatfarm.com"
      className={clsx(
        "flex items-center gap-2 rounded-lg border p-1 px-2 font-semibold text-gray-500 transition-colors hover:border-gray-400 hover:bg-white dark:hover:bg-[#474747]",
        className
      )}
      target="_blank"
    >
      <div
        className={clsx(
          "h-4 w-4 rounded-full",
          status.indicator === "none" ? "bg-[#2DB002]" : "bg-[#E9B949]"
        )}
      />
      <div className="flex items-center gap-1">
        {status.description}
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          className="text-gray-400 transition-transform duration-200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.83333 5L3.33333 7.5L4.16667 8.33333L7.5 5L4.16667 1.66667L3.33333 2.5L5.83333 5Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </Link>
  );
}

const Footer = () => {
  return (
    <footer className="bg-[#f9f9f9] dark:bg-[#1A1A1A] border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto py-12">
        {/* Footer Content */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Products Section */}
          <div>
            <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
              Products
            </h3>
            <ul className="mt-4 space-y-3 list-none pl-0">
              {products.map((product) => (
                <li key={product.name}>
                  {product.isAccordion ? (
                    <details className="group">
                      <summary className="cursor-pointer text-gray-700 dark:text-gray-300 group-hover:text-blue-500 transition">
                        {product.name}
                      </summary>
                      <ul className="ml-4 mt-2 space-y-2 list-none pl-0">
                        {product.content.map((item) => (
                          <li key={item.name}>
                            <Link
                              href={item.href}
                              className="hover:text-blue-500 transition"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <Link
                      href={product.href}
                      className="hover:text-blue-500 transition"
                    >
                      {product.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Developers Section */}
          <div>
            <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
              Developers
            </h3>
            <ul className="mt-4 space-y-3 list-none pl-0">
              {developers.map((developer) => (
                <li key={developer.name}>
                  {developer.isAccordion ? (
                    <details className="group">
                      <summary className="cursor-pointer text-gray-700 dark:text-gray-300 group-hover:text-blue-500 transition">
                        {developer.name}
                      </summary>
                      <ul className="ml-4 mt-2 space-y-2 list-none pl-0">
                        {developer.content.map((item) => (
                          <li key={item.name}>
                            <Link
                              href={item.href}
                              className="hover:text-blue-500 transition"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <Link
                      href={developer.href}
                      className="hover:text-blue-500 transition"
                    >
                      {developer.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Use Cases Section */}
          <div>
            <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
              Use Cases
            </h3>
            <ul className="mt-4 space-y-3 list-none pl-0">
              {usecases.map((usecase) => (
                <li key={usecase.name}>
                  <Link
                    href={usecase.href}
                    className="hover:text-blue-500 transition"
                  >
                    {usecase.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-3 list-none pl-0">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-blue-500 transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} <Link to="https://codeharborhub.github.io/">CodeHarborHub</Link>. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link href="#" className="hover:text-blue-500 transition">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-blue-500 transition">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;