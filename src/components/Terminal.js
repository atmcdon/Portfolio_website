import React, { useState } from 'react';
import './Terminal.css';

const Terminal = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState([]);

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleInputSubmit = (e) => {
        if (e.key === 'Enter') {
            setOutput([...output, `> ${input}`, 'Easter Egg Found!']);
            setInput('');
        }
    };

    return (
        <div className="terminal">
            <div className="output">
                {output.map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleInputSubmit}
                placeholder="Type a command..."
            />
        </div>
    );
};

export default Terminal;
