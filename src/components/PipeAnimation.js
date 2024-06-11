import React, { useEffect, useRef } from 'react';
import './PipeAnimation.css';

const PipeAnimation = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const directions = ['UP', 'RIGHT', 'DOWN', 'LEFT'];
        const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FFFF33', '#FF5733', '#33FFF9', '#A133FF'];
        const pipeChars = {
            'UP': '┃',
            'RIGHT': '━',
            'DOWN': '┃',
            'LEFT': '━',
            'UP_RIGHT': '┏',
            'RIGHT_DOWN': '┓',
            'DOWN_LEFT': '┛',
            'LEFT_UP': '┗',
            'UP_LEFT': '┗',
            'RIGHT_UP': '┓',
            'DOWN_RIGHT': '┛',
            'LEFT_DOWN': '┏'
        };
        const size = 20;
        let pipes = [];

        class Pipe {
            constructor(x, y, direction, color) {
                this.x = x;
                this.y = y;
                this.direction = direction;
                this.color = color;
                this.char = pipeChars[this.direction] || '┃'; // Default to '┃' if no match
            }

            draw(context) {
                context.fillStyle = this.color;
                context.font = '20px monospace';
                context.fillText(this.char, this.x, this.y);
            }

            update() {
                if (Math.random() > 0.7) {
                    const newDirection = directions[Math.floor(Math.random() * directions.length)];
                    if (this.direction !== newDirection) {
                        this.direction = `${this.direction}_${newDirection}`;
                    } else {
                        this.direction = newDirection;
                    }
                    this.char = pipeChars[this.direction] || '┃'; // Default to '┃' if no match
                }

                switch (this.direction) {
                    case 'UP':
                        this.y -= size;
                        break;
                    case 'RIGHT':
                        this.x += size;
                        break;
                    case 'DOWN':
                        this.y += size;
                        break;
                    case 'LEFT':
                        this.x -= size;
                        break;
                    case 'UP_RIGHT':
                    case 'LEFT_DOWN':
                        this.x += size;
                        this.direction = 'RIGHT';
                        break;
                    case 'RIGHT_DOWN':
                    case 'UP_LEFT':
                        this.y += size;
                        this.direction = 'DOWN';
                        break;
                    case 'DOWN_LEFT':
                    case 'RIGHT_UP':
                        this.x -= size;
                        this.direction = 'LEFT';
                        break;
                    case 'LEFT_UP':
                    case 'DOWN_RIGHT':
                        this.y -= size;
                        this.direction = 'UP';
                        break;
                    default:
                        break;
                }

                // Wrap around edges
                if (this.x >= canvas.width) this.x = 0;
                if (this.x < 0) this.x = canvas.width - size;
                if (this.y >= canvas.height) this.y = 0;
                if (this.y < 0) this.y = canvas.height - size;
            }
        }

        function animate() {
            context.clearRect(0, 0, canvas.width, canvas.height);
            if (pipes.length < 100) {
                const direction = directions[Math.floor(Math.random() * directions.length)];
                const color = colors[Math.floor(Math.random() * colors.length)];
                pipes.push(new Pipe(canvas.width / 2, canvas.height / 2, direction, color));
            }
            pipes.forEach(pipe => {
                pipe.update();
                pipe.draw(context);
            });
            requestAnimationFrame(animate);
        }

        animate();

        return () => {
            pipes = [];
        };
    }, []);

    return <canvas ref={canvasRef} className="pipe-animation"></canvas>;
};

export default PipeAnimation;
