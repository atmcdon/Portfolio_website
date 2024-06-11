import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, technologies }) => {
    return (
        <div className="project-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <p><strong>Technologies:</strong> {technologies.join(', ')}</p>
        </div>
    );
};

export default ProjectCard;
