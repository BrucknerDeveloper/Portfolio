import React from "react"

import portrait from "/src/assets/Project_Quiz.png"
import lebenslauf from "/src/assets/Bruckner_Lebenslauf.pdf" //need to use the pdf in some way or else netlify removes it on build

export default function() {
    return <section id="aboutMe" className="aboutMe">
        <div className="gutter-row">
            <h2 className="primary-heading">About Me</h2>
            <div className="aboutMe__container-flex">
                <img className="aboutMe__portrait" src={portrait} />
                <div className="white-1 fs-small">
                    <p className="aboutMe__description">I'm a web developer based in Vienna, AT. I love building websites that have oustanding visuals, solve 
                        real-world problems, and that are delightful to use. My specialties include HTML, CSS/SCSS, TypeScript, 
                        React JS, and animations (GSAP, AnimeJS)</p>
                    <p className="aboutMe__description">I went to school in HTL Krems with a primary focus on media technology.</p>
                    <a href={lebenslauf} className="aboutMe__btn btn btn--left-to-right-hover">My Resume</a>           
                    <iframe src={lebenslauf} height="200" width="300"></iframe>
                </div>
            </div>     
        </div>
    </section>
}