import React from 'react';
import './BlogPost.css';

const BlogPost = ({ title, date, summary }) => {
    return (
        <div className="blog-post">
            <h3>{title}</h3>
            <p><em>{date}</em></p>
            <p>{summary}</p>
        </div>
    );
};

export default BlogPost;
