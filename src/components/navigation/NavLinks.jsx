import React from "react";

export default function(props){

    const handleClick = (event)=>{
        console.log(event.target)
        console.log(props)
        props.setBurger(prevBurger => !prevBurger)
        
    }
    return( 
        <div className="NavLinks">
            <a href="/#About" className="NavLinks-item" onClick={handleClick}>About</a>
            <a href="/#Work" className="NavLinks-item" onClick={handleClick}>My Work</a>
            <a href="/#Skills" className="NavLinks-item" onClick={handleClick}>Skills</a>
            <a href="/#Contact" className="NavLinks-item" onClick={handleClick}>Contact</a>
        </div>
    )
}