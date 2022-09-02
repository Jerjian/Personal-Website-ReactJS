import React from "react";
import "./contact.css"
import { DiGithubBadge } from "react-icons/di";
import {AiFillLinkedin} from "react-icons/ai"



export default function(){
    return(
        <div className="Contact">
            <h1 className="contact-title">Contact</h1>
            <div className="contact-info">
                <p>By email: christianjerjian@gmail.com</p>
                <div className="contact-info-logo">
                    <a href="https://www.linkedin.com/in/christianjerjian/"><AiFillLinkedin color="#0072b1" className="contact-info-logo-icon"/></a>
                    <a href="https://github.com/Jerjian"><DiGithubBadge color="#171515" className="contact-info-logo-icon" /></a>
                </div>
            </div>
        </div>
    )
}