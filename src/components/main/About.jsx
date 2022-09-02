import React from "react"
import christianImg from "../../assets/Jerjian_Christian_skype.jpg"

export default function(){
    return(
        <div className="About" id="About">
            <h1 className="about-title">About me</h1>
            <div className="about-desc">
                <img src={christianImg} alt="" className="about-desc-christianImg" />
                <div className="about-desc-text">
                    <p>I am an Accountant turned Software developer!</p>
                    <p>After graduating from the University of Concordia with a Bachelors in Commerce (Major in Accountancy, Minor in Finance) the Covid-19 pandemic just started and I developed a passion for building products that delivers value.</p>
                    <p>Shortly before pursuing Computer Science, I came across a Chrome Extention called Tab for a Cause. This extension essentially adds unintrisuive advertisements to every tab you open. The catch is that the advertisement profits will be donated to any cause you wish! </p>
                    <p>I was, and still am, so enthusiastic about the ability for a single individual to leverage the internet and web apps to deliver value to the world. </p>
                    <p>I wanted to deliver the same kind of tangible value and my joy for building useful things made me decide to pursue a second degree in Computer Science. </p>
                    <p>I still have a special interest in businesses and investing which will be demonstrated by some of my projects down below!</p>
                </div>            
            </div>
            <hr />
        </div>
    )
}