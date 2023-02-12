import React from "react"

import Project from "./Project"

import project1 from "/src/assets/arrow-up.svg"
import githubsvg from "/src/assets/github.svg"

export default function() {
    return <section id="MyWork" className="work">
        <h2 className="primary-heading fs-h2">My Work</h2>
        <Project 
            preview={githubsvg} 
            title="Quizzical App"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, eius." 
            technologies={["HTML", "SCSS", "Javascript", "React"]}
            link={"https://www.youtube.com"}
        />
    </section>
}