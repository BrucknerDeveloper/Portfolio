import React from "react"

import Project from "./Project"

import project_quiz from "/src/assets/Project_Quiz.png"
import project_url from "/src/assets/Project_Url-shortening.png"
import project_sneaker from "/src/assets/Project_Sneaker.png"

export default function() {
    return <section id="MyWork" className="myWork">
        <div className="gutter-row">
            <h2 className="primary-heading">My Work</h2>
            <Project 
                preview={project_url} 
                title="Quizzical App"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, eius." 
                technologies={["HTML", "SCSS", "Javascript", "React"]}
                link={"https://www.youtube.com"}
            />

            <Project 
                preview={project_sneaker} 
                title="Quizzical App"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, eius." 
                technologies={["HTML", "SCSS", "Javascript", "React"]}
                link={"https://www.youtube.com"}
            />

            <Project 
                preview={project_quiz} 
                title="Quizzical App"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, eius." 
                technologies={["HTML", "SCSS", "Javascript", "React"]}
                link={"https://www.youtube.com"}
            />
        </div>
    </section>
}