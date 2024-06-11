// import React from 'react';

// import ProjectCard from '../components/ProjectCard';
// import './Projects.css';

// const projects = [
//     { title: 'Project 1', description: 'Task management web app', technologies: ['React', 'Node.js', 'MongoDB'] },
//     { title: 'Project 2', description: 'Cybersecurity dashboard', technologies: ['Python', 'Flask', 'Splunk'] },
//     { title: 'Project 3', description: 'Educational game', technologies: ['Unity', 'C#'] },
// ];

// const Projects = () => {
//     return (
//         <div className="projects">
//             <h2>Projects</h2>
//             {projects.map((project, index) => (
//                 <ProjectCard key={index} {...project} />
//             ))}
//         </div>
//     );
// };

// export default Projects;

import React from 'react';

import ProjectCard from '../components/ProjectCard';
import './Projects.css';
import FallingLetters from '../components/FallingLetters';
import BlinkingTerminal from '../components/BlinkingTerminal';
import PipeAnimation from '../components/PipeAnimation';
import Header from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const projects = [
    { title: 'Project 1', description: 'Task management web app', technologies: ['React', 'Node.js', 'MongoDB'] },
    { title: 'Project 2', description: 'Cybersecurity dashboard', technologies: ['Python', 'Flask', 'Splunk'] },
    { title: 'Project 3', description: 'Educational game', technologies: ['Unity', 'C#'] },
];

const Projects = () => {
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
__________                   __               __          
\\______   \\_______  ____    |__| ____   _____/  |_  ______
 |     ___/\\_  __ \\/  _ \\   |  |/ __ \\_/ ___\\   __\\/  ___/
 |    |     |  |  (  <_> )  |  \\  ___/\\  \\___|  |  \\___ \\ 
 |____|     |__|   \\____/\\__|  |\\___  >\___   >__| /____  >
                        \\______|    \\/     \\/          \\/ 
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
                <div className="projects">
                    <h2>Projects</h2>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
