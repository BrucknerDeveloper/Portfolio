import React from "react"

import githubsvg from "../../../assets/github.svg"

type ProjectProps = {
    preview: string,
    title: string,
    description: string,
    technologies: string[],
    link: string
}

export default function({preview, title, description, technologies, link}: ProjectProps) {

    return <div className="project">
        <img className="project__preview" src={preview} />
        <div>
            <h3>{title}</h3>
            <p className="project__description fs-small white-1">{description}</p>
            <ul className="project__items white-1 fs-small">
                {technologies.map((item: string, index: number) => 
                    <li className="project__item" key={index}>{item}</li>
                )}
            </ul>
            <div className="project__container-link">
                <a className="project__link fs-small white-1 btn btn--bottom-border btn--left-to-right-hover" href={link} target="_blank">Visit Site <span>&rarr;</span></a>
                <a href="https://github.com/BrucknerDeveloper" target="_blank"><img className="project__github" src={githubsvg} /></a>
            </div>
        </div>
    </div>
}