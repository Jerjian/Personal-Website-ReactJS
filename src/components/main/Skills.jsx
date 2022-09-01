import React from "react";
// import { DiReact } from "@react-icons/di";
import { DiReact, DiHtml5, DiCss3, DiJavascript, DiGithubBadge, DiNodejs, DiMongodb, DiGoogleCloudPlatform, DiJava, DiPython} from "react-icons/di";
import {AiOutlineConsoleSql} from "react-icons/ai"
import { IconContext } from "react-icons";
import "./Skills.css"






export default function(){
    return(
        <div className="Skills">
            <h1 className="skills-title">My Skills</h1>
            <div className="skills-info">
                <div className="skills-info-web-tech">
                    <h1 className="skills-info-title">Web Development Technologies</h1>
                    <ul className="skills-info-web-tech-ul">
                        <li>React <DiReact color="#61DBFB"/></li> 
                        <li>HTML <DiHtml5 color="#f06529"/></li>
                        <li>CSS <DiCss3 color="#264de4"/></li>
                        <li>JavaScript <DiJavascript color="#F0DB4F"/></li>
                        <li>Github <DiGithubBadge color="#171515"/></li>
                        <li>EJS</li>
                        <li>Node and NPM <DiNodejs color="#215732"/></li>
                        <li>ExpressJS</li>
                        <li>MongoDB <DiMongodb color="#4DB33D"/></li>
                        <li>Google API <DiGoogleCloudPlatform color="#4285F4"/></li>
                    </ul>
                </div>
                <div className="skills-info-add-lang">
                    <h1 className="skills-info-title">Additional Languages</h1>
                    <ul className="skills-info-add-lang-ul">
                        <li>Java <DiJava/></li>
                        <li>Python <DiPython/></li>
                        <li>Lisp</li>
                        <li>SQL <AiOutlineConsoleSql/></li>
                    </ul>   
                </div>
            </div>
        </div>
    )
}