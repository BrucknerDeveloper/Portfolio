import React from "react"

import portrait from "/src/assets/Project_Quiz.png"

export default function() {
    return <section id="aboutMe" className="aboutMe">
        <div className="gutter-row">
            <h2 className="primary-heading">About Me</h2>
            <div className="aboutMe__container-flex">
                <img className="aboutMe__portrait" src={portrait} />
                <div className="white-1 fs-normal">
                    <p className="aboutMe__description">I'm a web developer and designer based out of London, UK. I love building apps that solve 
                        real-world problems, and that are delightful to use. My specialities include TypeScript, 
                        React JS, Tailwind CSS, and Styled Components.</p>
                    <p className="aboutMe__description">My background is in teaching and marketing, and I have a bachelors degree in English from 
                        Kings College. I also have five adorable cats.</p>
                    <a href="#" className="aboutMe__btn btn btn--left-to-right-hover">My Resume</a>  {/* LINK TO RESUME */}             
                </div>
            </div>     
        </div>
    </section>
}