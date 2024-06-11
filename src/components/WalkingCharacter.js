import React, { useState, useEffect } from 'react';
import './WalkingCharacter.css';

const WalkingCharacter = ({ triggerAnimation }) => {
    const [position, setPosition] = useState({ x: 50, y: 50 });
    const [frame, setFrame] = useState(0);

    const characterFrames = [
        `
 O
 /|\\
 / \\
        `,
        `
 O
 /|\\
  |\\
        `,
        `
 O
 /|\\
 / \\
        `,
        `
 O
 /|\\
 / 
        `,
    ];

    useEffect(() => {
        if (!triggerAnimation) return;

        const handleKeyPress = (e) => {
            setPosition((prev) => {
                switch (e.key) {
                    case 'ArrowRight':
                        return { ...prev, x: prev.x + 10 };
                    case 'ArrowLeft':
                        return { ...prev, x: prev.x - 10 };
                    case 'ArrowUp':
                        return { ...prev, y: prev.y - 10 };
                    case 'ArrowDown':
                        return { ...prev, y: prev.y + 10 };
                    default:
                        return prev;
                }
            });
            setFrame((prevFrame) => (prevFrame + 1) % characterFrames.length);
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [triggerAnimation]);

    return (
        <div
            className="character"
            style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        >
            <pre>{characterFrames[frame]}</pre>
        </div>
    );
};

export default WalkingCharacter;
