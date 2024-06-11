import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header>
            <h1>Andrew's Portfolio</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/about">About Me</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
};

export default Header;
