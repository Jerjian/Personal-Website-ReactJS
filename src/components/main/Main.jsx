import React from "react";
import About from "./About";
import "./main.css"
import Work from "./Work";
import Skills from "./Skills";
import Contact from "./Contact";

export default function(){
    return(
        <div className="Main">
            <About/>
            <Work/>
            <Skills/>
            <Contact/>
        </div>

    )
}