import React from "react";
import projectData from "../../../data/projects.json"
import "./Work.css"

export default function(){
    const data = projectData.projects

    const projectElements = data.map((project => {
        const {id, title, githubLink, deployedLink, description, technologies, image} = project
        return(
            <div className="projects" key={id}>
                <div className="project-info">
                    {title && <p className="projects-info-title">{title}</p>}
                    {description && <p className="projects-info-description">Description: {description}</p>}
                    {technologies && <ul className="projects-info-technologies">
                        <span className="projects-info-technologies-title">Technologies Used</span>
                        {technologies.map((techElement) => <li key={techElement}>{techElement}</li>)}</ul>}
                </div>
                <div className="projects-img">
                    {deployedLink ? 
                        <div>
                            <p className="projects-img-deployedText">Click on the image to view the deployed website</p>
                            <a href={deployedLink}><img className="projects-img-item" src={image} alt=""/></a>
                        </div>  
                        : <img src={image} alt="" className="projects-img-item"/> 
                    }
                </div>
                
            </div>
        )
    }))

    return(
        <div className="Work" id="Work">
            <h1 className="work-title">My Work</h1>
            <div className="work-desc">   
                {projectElements}
            </div>
            <hr />
        </div>
    )
}