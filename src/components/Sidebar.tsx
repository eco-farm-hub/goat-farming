import React from 'react';
import { useBlog } from '@site/src/context/BlogContext';

const Sidebar: React.FC = () => {
  const { sideLinks } = useBlog();

  return (
    <div className="mt-8 lg:w-1/4 lg:mt-0 lg:px-6">
      {sideLinks.map((link, index) => (
        <div key={index}>
          <h3 className="text-blue-500 capitalize">{link.category}</h3>
          <a href={link.link} className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400">
            {link.title}
          </a>
          {index < sideLinks.length - 1 && <hr className="my-6 border-gray-200 dark:border-gray-700" />}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;