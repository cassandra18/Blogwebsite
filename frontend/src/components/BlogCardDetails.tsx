import React, { useEffect } from 'react';
import { useState } from 'react';
import BlogCard from './BlogCard';
import { BlogProps } from './blogTYpes';


const   BlogCardDetails: React.FC = () => {
    const [blogData, setBlogData] = useState<BlogProps []>([]);

    useEffect(() => {
        fetch('https://locahost:3000/api/blogs')
        .then(response => response.json())
        .then(data => setBlogData(data))
        .catch(error => console.error('Error fetching blog data:', error))

    }, []);
    
    return (
        <div>
            {blogData.mao((blog, index) => (
                <BlogCard key={index} blog={blog} />
            ))}
        </div>
    );
};

export default BlogCardDetails;