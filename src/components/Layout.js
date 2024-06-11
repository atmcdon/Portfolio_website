import React from 'react';
import './Layout.css';
import FallingLetters from '../components/FallingLetters';
import Header from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <div className="background-falling-letters">
                <FallingLetters />
            </div>
            <div className="social-media">
                <a href="https://www.linkedin.com/in/andrew-mcdonald-it/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://github.com/atmcdon" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
            <div className="content-bottom-page">
                {children}
            </div>
        </div>
    );
};

export default Layout;
