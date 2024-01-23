import React from 'react';
import { Link } from 'react-router-dom';
import { RiUserHeartLine } from "react-icons/ri";
import { useState } from 'react';
import BlogProps from './blogTYpes';

interface BlogCardProps {
    blog: BlogProps;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
    
    return (
        <div>
            <img src={ blog.imageUrl } alt={ blog.title }/>
            <div>
                <div>{blog.title}</div>

                <div>
                    <RiUserHeartLine />
                    <p>{ blog.authorName }</p>
                </div>

                <p>{ blog.datePublished }</p>
            </div>
        </div>
    )
};

export  default BlogCard;