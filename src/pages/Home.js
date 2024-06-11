import React from 'react';
import './Home.css';
import FallingLetters from '../components/FallingLetters';
import BlinkingTerminal from '../components/BlinkingTerminal';
import PipeAnimation from '../components/PipeAnimation';
import Header from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    return (
        <div className="home">
            {/* <Header /> */}
            <div className="background-falling-letters">
                <FallingLetters />
                </div>
            {/* <PipeAnimation /> */}
            <div className="ascii-container">
                <pre className="ascii-art">
                    {`
   _____              .___                                    
  /  _  \\   ____    __| _/______   ______  _  __              
 /  /_\\  \\ /    \\  / __ |\\_  __ \\_/ __ \\ \\/ \\/ /              
/    |    \\   |  \\/ /_/ | |  | \\/\\  ___/\\     /               
\\____|__  /___|  /\\____ | |__|    \\___  >\\/\\_/                
        \\/     \\/      \\/             \\/                      
   _____         ________                       .__       .___
  /     \\   ____ \\______ \\   ____   ____ _____  |  |    __| _/
 /  \\ /  \\_/ ___\\ |    |  \\ /  _ \\ /    \\\\__  \\ |  |   / __ | 
/    Y    \\  \\___ |    \`   (  <_> )   |  \\/ __ \\|  |__/ /_/ | 
\\____|__  /\\___  >_______  /\\____/|___|  (____  /____/\\____ | 
        \\/     \\/        \\/            \\/     \\/           \\/
                    `}
                </pre>
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
                <div className="content">
                    
                    <div className="menu">
                    
                        <p>MENU</p>
                        <ul>
                        
                            <li><a href="/">Home</a></li>
                            <li><a href="/projects">Projects</a></li>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/about">About Me</a></li>
                            <li><a href="/contact">Contact</a></li>
                            {/* <li><a href="#contact">Contact</a></li> */}
                        </ul>
                        
                    </div>
                    <div className="terminal-section">
                        <BlinkingTerminal />
                        <p>I can be cracked, made, told, and played. I can be in your mind but also on your device. Without me, your secrets aren't safe. What am I?</p>
                        <p>Hint it starts with a "p".</p>
                    </div>
                </div>
                <div className="content-box">
                    <div id="projects" className="section-box">
                        <h2>Projects</h2>
                        <p>Latest Project HERE.</p>
                    </div>
                    <div id="blog" className="section-box">
                        <h2>Blog</h2>
                        <p>Latest blog posts.</p>
                    </div>
                    <div id="about" className="section-box">
                        <h2>About Me</h2>
                        <p>Hello my Name is Andrew.</p>
                    </div>
                    <div id="contact" className="section-box">
                        <h2>Contact</h2>
                        <p>Best way to contact me is though Linkedin</p>
                        <a href="https://www.linkedin.com/in/andrew-mcdonald-it/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
