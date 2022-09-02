import React from "react";
import { DiReact, DiHtml5, DiCss3, DiJavascript, DiGithubBadge, DiNodejs, DiMongodb, DiGoogleCloudPlatform, DiJava, DiPython} from "react-icons/di";
import {AiOutlineConsoleSql} from "react-icons/ai"
import "./Skills.css"






export default function(){
    return(
        <div className="Skills" id="Skills">
            <h1 className="skills-title">My Skills</h1>
            <div className="skills-info">
                <div className="skills-info-web-tech">
                    <h1 className="skills-info-title">Web Development Technologies</h1>
                    <ul className="skills-info-web-tech-ul">
                        <li>React <DiReact className="skills-icon" color="#61DBFB"/></li> 
                        <li>HTML <DiHtml5 className="skills-icon" color="#f06529"/></li>
                        <li>CSS <DiCss3 className="skills-icon" color="#264de4"/></li>
                        <li>JavaScript <DiJavascript className="skills-icon" color="#F0DB4F"/></li>
                        <li>Github <DiGithubBadge className="skills-icon" color="#171515"/></li>
                        <li>EJS</li>
                        <li>Node and NPM <DiNodejs className="skills-icon" color="#215732"/></li>
                        <li>ExpressJS</li>
                        <li>MongoDB <DiMongodb className="skills-icon" color="#4DB33D"/></li>
                        <li>Google API <DiGoogleCloudPlatform className="skills-icon" color="#4285F4"/></li>
                    </ul>
                </div>
                <div className="skills-info-add-lang">
                    <h1 className="skills-info-title">Additional Languages</h1>
                    <ul className="skills-info-add-lang-ul">
                        <li>Java <DiJava className="skills-icon" color="#f89820"/></li>
                        <li>Python <DiPython className="skills-icon" color="#4B8BBE"/></li>
                        <li>Lisp</li>
                        <li>SQL <AiOutlineConsoleSql className="skills-icon"/></li>
                    </ul>   
                </div>
            </div>
            <hr />
        </div>
    )
}