import React from "react";
import './styles.css';



  


function Navhovprint(){

    return (
        <>
            <li>
                <span className="link">
                    <span className="word">
                        <span className="char" data-char="p" style={{"--charIndex": 0 }}>p</span>
                        <span className="char" data-char="r" style={{"--charIndex": 1 }}>r</span>
                        <span className="char" data-char="i" style={{"--charIndex": 2 }}>i</span>
                        <span className="char" data-char="n" style={{"--charIndex": 3 }}>n</span>
                        <span className="char" data-char="t" style={{"--charIndex": 4 }}>t</span>
                        <span className="char" data-char="s" style={{"--charIndex": 5 }}>s</span>
                    </span>
                </span>
                    
            </li>
        </>
        
    )
}

export default Navhovprint;