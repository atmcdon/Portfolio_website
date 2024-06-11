import React, { useEffect, useRef } from 'react';
import './FallingLetters.css';

const FallingLetters = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const fontSize = 16;
        const columns = canvas.width / fontSize;
        const drops = Array.from({ length: columns }).map(() => 1);

        const draw = () => {
            context.fillStyle = 'rgba(0, 43, 54, 0.05)';
            context.fillRect(0, 0, canvas.width, canvas.height);
            context.fillStyle = '#0F0';
            context.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = letters[Math.floor(Math.random() * letters.length)];
                context.fillText(text, i * fontSize, drops[i] * fontSize);
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const intervalId = setInterval(draw, 50);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return <canvas ref={canvasRef} className="falling-letters"></canvas>;
};

export default FallingLetters;
