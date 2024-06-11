import React from 'react';
import BlogPost from '../components/BlogPost';
import './Blog.css';

const blogPosts = [
    { title: 'Blog Post 1', date: '2024-01-01', summary: 'Summary of blog post 1.' },
    { title: 'Blog Post 2', date: '2024-02-01', summary: 'Summary of blog post 2.' },
    // Add more blog posts as needed
];

const Blog = () => {
    return (
        <div className="blog">
            <h2>Blog</h2>
            {blogPosts.map((post, index) => (
                <BlogPost key={index} {...post} />
            ))}
        </div>
    );
};

export default Blog;
