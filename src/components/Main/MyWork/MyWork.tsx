import React from "react"

import Project from "./Project"

import project_quiz from "/src/assets/Project_Quiz.png"
import project_url from "/src/assets/Project_Url-shortening.png"
import project_sneaker from "/src/assets/Project_Sneaker.png"

export default function() {
    return <section id="myWork" className="myWork">
        <div className="gutter-row">
            <h2 className="primary-heading">My Work</h2>
            <Project 
                preview={project_url} 
                title="Url-Shortening App"
                description="A Website for shortening Urls with Typescript and API calls." 
                technologies={["HTML", "SCSS", "Javascript/Typescript", "React", "API", "Responsive"]}
                link={"https://bruckner-url-shortening.netlify.app/"}
            />

            <Project 
                preview={project_sneaker} 
                title="E-Commerce App"
                description="A Sneaker application for practicing React with a working cart." 
                technologies={["HTML", "SCSS", "Javascript", "React", "Responsive"]}
                link={"https://bruckner-e-commerce.netlify.app/"}
            />

            <Project 
                preview={project_quiz} 
                title="Quizzical App"
                description="A fun Quiz App with API calls and a loading animation." 
                technologies={["HTML", "SCSS", "Javascript", "React", "API"]}
                link={"https://bruckner-quiz.netlify.app/"}
            />
        </div>
    </section>
}