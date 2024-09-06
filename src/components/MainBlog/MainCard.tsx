import React from 'react';
import { useBlog } from '@site/src/context/BlogContext';

const MainCard: React.FC = () => {
  const { mainBlog } = useBlog();

  return (
    <div className="lg:w-3/4 lg:px-6">
      <img className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl" src={mainBlog.image} alt="" />
      <div>
        <p className="mt-6 text-sm text-blue-500 uppercase">Want to know</p>
        <h1 className="max-w-lg mt-4 text-2xl font-semibold leading-tight text-gray-800 dark:text-white">
          {mainBlog.title}
        </h1>
        <div className="flex items-center mt-6">
          <img className="object-cover object-center w-10 h-10 rounded-full" src={mainBlog.author.image} alt={mainBlog.author.name} />
          <div className="mx-4">
            <h1 className="text-sm text-gray-700 dark:text-gray-200">{mainBlog.author.name}</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">{mainBlog.author.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;