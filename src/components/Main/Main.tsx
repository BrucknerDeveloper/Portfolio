import React from "react"

//components
import MyWork from "./MyWork/MyWork"
import AboutMe from "./AboutMe"
import Contact from "./Contact"

//imgs
import upArrow from "../../assets/arrow-up.svg"

export default function() {
    return <main className="main">
        <MyWork />
        <AboutMe />
        <Contact />
        <a href="#header" className="main__backToTopArrow">
            <img className="main__upArrow" src={upArrow} />
        </a>
    </main>
}