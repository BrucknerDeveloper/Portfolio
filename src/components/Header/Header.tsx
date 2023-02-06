import React from "react"

export default function() {
    return <header className="header">
        {/* Navigation */}
        <nav className="nav">
            <ul className="nav__items">
                <li className="nav__item"><a href="#MyWork" className="nav__link">Work</a></li>
                <li className="nav__item"><a href="#AboutMe" className="nav__link">About</a></li>
                <li className="nav__item"><a href="#Contact" className="nav__link">Contact</a></li>
            </ul>
        </nav>

        {/* Intro */}
        <div className="header__intro">
            <h1 className="header__title">Daniel Bruckner</h1>
            <p className="header__description">A Front-end Developer based in Vienna, AT</p>
            <a href="#contact" className="btn btn--pink">Get in touch</a>
        </div>
    </header>
} 