import React, { useState, useEffect } from 'react';
import './CoffeeCup.css';

const CoffeeCup = ({ triggerAnimation }) => {
    const [frame, setFrame] = useState(0);

    const coffeeCupFrames = [
        `







        )   (
        (   ) (
        ( )  (
       _______)_
       .-'---------|  
    ( C|/\\/\\/\\/\\/|
     '-./\\/\\/\\/\\/|
       '_________'
        '-------'
        `,
        `
       __ __    ___  
      |  |  |  /  _]
      |  |  | /  [_ 
      |  _  ||    _]
      |  |  ||   [_ 
      |  |  ||     |
      |__|__||_____|
         )  (
        (   ) )
         ) ( (
       _______)_
       .-'---------|  
    ( C|/\\/\\/\\/\\/|
     '-./\\/\\/\\/\\/|
       '_________'
        '-------'
        `,
        `
       __ __    ___  _      _      
      |  |  |  /  _]| |    | |    
      |  |  | /  [_ | |    | |    
      |  _  ||    _]| |___ | |___ 
      |  |  ||   [_ |     ||     |
      |  |  ||     ||     ||     |
      |__|__||_____||_____||_____|
        (   )
        (    ) )
         )  ( (
       ___(___)_
       .-'---------|  
    ( C|/\\/\\/\\/\\/|
     '-./\\/\\/\\/\\/|
       '_________'
        '-------'
        `,
        `
       __ __    ___  _      _       ___   __ 
      |  |  |  /  _]| |    | |     /   \\ |  |
      |  |  | /  [_ | |    | |    |     ||  |
      |  _  ||    _]| |___ | |___ |  O  ||__|
      |  |  ||   [_ |     ||     ||     | __ 
      |  |  ||     ||     ||     ||     ||  |
                  |__|__||_____||_____||_____| \\___/ |__|                                        
        ( )
        (   )  )
         (  ) (
       _______)_
       .-'---------|  
    ( C|/\\/\\/\\/\\/|
     '-./\\/\\/\\/\\/|
       '_________'
        '-------'
        `
    ];

    useEffect(() => {
        if (!triggerAnimation) return;

        const interval = setInterval(() => {
            setFrame((prevFrame) => (prevFrame + 1) % coffeeCupFrames.length);
        }, 500);

        return () => clearInterval(interval);
    }, [triggerAnimation]);

    return (
        <div className="coffee-cup">
            <pre>{coffeeCupFrames[frame]}</pre>
        </div>
    );
};

export default CoffeeCup;
