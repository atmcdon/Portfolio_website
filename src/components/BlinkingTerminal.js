// import React, { useState, useEffect, useRef } from 'react';
// import './BlinkingTerminal.css';

// const BlinkingTerminal = () => {
//     const [input, setInput] = useState('');
//     const [showCursor, setShowCursor] = useState(true);
//     const terminalRef = useRef(null);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setShowCursor(prevShowCursor => !prevShowCursor);
//         }, 500);
//         return () => clearInterval(interval);
//     }, []);

//     useEffect(() => {
//         terminalRef.current.focus();
//     }, []);

//     const handleInputChange = (e) => {
//         setInput(e.target.value);
//     };

//     const handleKeyPress = (e) => {
//         if (e.key === 'Enter') {
//             setInput('');
//         }
//     };

//     return (
//         <div className="blinking-terminal" onClick={() => terminalRef.current.focus()}>
//             <span className="prompt">$ </span>
//             <input
//                 type="text"
//                 ref={terminalRef}
//                 value={input}
//                 onChange={handleInputChange}
//                 onKeyPress={handleKeyPress}
//                 className="input"
//             />
//             {showCursor && <span className="cursor">|</span>}
//         </div>
//     );
// };

// export default BlinkingTerminal;

import React, { useState, useRef } from 'react';
import CoffeeCup from './CoffeeCup';
import './BlinkingTerminal.css';

const BlinkingTerminal = () => {
    const [input, setInput] = useState('');
    const [showCoffeeCup, setShowCoffeeCup] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const cursorRef = useRef(null);
    const riddleAnswer = 'password'; // Example answer

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim().toLowerCase() === riddleAnswer) {
            setShowCoffeeCup(true);
            setExpanded(true);
        }
    };

    const handleFocus = () => {
        if (cursorRef.current) {
            cursorRef.current.classList.add('hidden');
        }
    };

    const handleBlur = () => {
        if (cursorRef.current) {
            cursorRef.current.classList.remove('hidden');
        }
    };

    return (
        <div className={`terminal ${expanded ? 'expanded' : ''}`}>
            <form onSubmit={handleSubmit}>
                <label>$ </label>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="terminal-input"
                    autoFocus
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
                <span ref={cursorRef} className="cursor"></span>
            </form>
            <p>Answer the riddle into the terminal</p>
            {showCoffeeCup && <CoffeeCup triggerAnimation={showCoffeeCup} />}
        </div>
    );
};

export default BlinkingTerminal;
