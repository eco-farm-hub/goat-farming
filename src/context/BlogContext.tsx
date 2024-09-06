import React, { createContext, useContext, useState } from 'react';
import { blogData } from '@site/src/data/BlogData';

const BlogContext = createContext(null);

export const BlogProvider = ({ children }: any) => {
    const [blogs, setBlogs] = useState(blogData);
    
    return (
        <BlogContext.Provider value={blogs}>
            {children}
        </BlogContext.Provider>
    );
};

export const useBlog = () => useContext(BlogContext);