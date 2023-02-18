import React from "react"

import github_logo from "../../assets/github.svg"
import linkedIn_logo from "../../assets/linkedIn.svg"
import frontEndMentor_logo from "../../assets/frontendmentor.png"

export default function() {
    return <footer className="footer">
        <a href="https://github.com/BrucknerDeveloper" target="_blank"><img className="footer__icon" src={github_logo} /></a>
        <a href="https://www.linkedin.com/in/daniel-bruckner-40b043257/" target="_blank"><img className="footer__icon" src={linkedIn_logo} /></a>
        <a href="https://www.frontendmentor.io/profile/DaBruckner" target="_blank"><img className="footer__icon" src={frontEndMentor_logo} /></a>
    </footer>
}