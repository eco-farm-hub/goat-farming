import React from 'react';
import BlogCard from './BlogCard';
import { useBlog } from '@site/src/context/BlogContext';

const BottomBlogs = () => {
    const { relatedBlogs } = useBlog();

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-2 py-10 mx-auto">
                <div className="text-center">
                    <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">From the blog</h1>
                </div>
                <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
                    {relatedBlogs.map((blog, index) => (
                        <BlogCard key={index} blog={blog} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BottomBlogs;