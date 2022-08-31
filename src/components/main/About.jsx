import React from "react"
import christianImg from "../../assets/Jerjian_Christian_skype.jpg"

export default function(){
    return(
        <div className="About">
            <h1 className="about-title">About me</h1>
            <div className="about-desc">
                <img src={christianImg} alt="" className="about-desc-christianImg" />
                <h2 className="about-desc-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, esse dolores? Veritatis nostrum harum tenetur. Cum commodi omnis, harum natus iure rerum, pariatur amet exercitationem adipisci, porro labore deleniti. Deserunt!</h2>
            </div>
        </div>
    )
}