import React from 'react';

interface BlogCardProps {
    blog: {
        title: string;
        imgUrl: string;
        author: string;
        authorImage: string;
    };
}

const BlogCard = ({ blog }: BlogCardProps) => {
    return (
        <div>
            <div className="relative">
                <img className="object-cover object-center w-full h-64 rounded-lg" src={blog.imgUrl} alt={blog.title} />
                <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900 ">
                    <img className="object-cover object-center w-10 h-10 rounded-full" src={blog.authorImage} alt={blog.author} />
                    <div className="mx-4">
                        <h1 className="text-sm text-gray-700 dark:text-gray-200">{blog.author}</h1>
                    </div>
                </div>
            </div>
            <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">{blog.title}</h1>
            <a href="#" className="inline-block mt-4 text-blue-500 underline hover:text-blue-400">Read more</a>
        </div>
    );
};

export default BlogCard;