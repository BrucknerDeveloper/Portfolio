import React from "react"

export default function() {
    return <header className="header" id="header">
        {/* Navigation */}
        <nav className="nav fs-normal white-1">
            <ul className="nav__items">
                <li className="nav__item"><a href="#myWork" className="nav__link">Work</a></li>
                <li className="nav__item"><a href="#aboutMe" className="nav__link">About</a></li>
                <li className="nav__item"><a href="#contact" className="nav__link">Contact</a></li>
            </ul>
        </nav>

        {/* Intro */}
        <div className="header__intro">
            <h1 className="header__title fs-h1">Daniel Bruckner</h1>
            <p className="header__description fs-medium ff-jost white-1">A Front-end Developer based in Vienna, AT</p>
            <a href="#contact" className="btn btn--pink fs-medium">Get in touch</a>
        </div>
    </header>
} 