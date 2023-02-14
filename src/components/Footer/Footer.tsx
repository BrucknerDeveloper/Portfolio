import React from "react"

import github_logo from "/src/assets/github.svg"
import linkedIn_logo from "/src/assets/linkedIn.svg"
import frontEndMentor_logo from "/src/assets/frontendmentor.png"


export default function() {
    return <footer className="footer">
        <a href="#"><img className="footer__icon" src={github_logo} /></a>
        <a href="#"><img className="footer__icon" src={linkedIn_logo} /></a>
        <a href="#"><img className="footer__icon" src={frontEndMentor_logo} /></a>
    </footer>
}