import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export default function() {
    const introRef = useRef<any>();

    useLayoutEffect(() => {
        // Refs allow you to access DOM nodes
        console.log(introRef) // { current: div.box }
        // then we can animate them like so...
        gsap.to(introRef.current, {
          rotation: "+=360"
        });
      });

    return <header className="header" id="header">
        {/* Navigation */}
        <nav className="nav fs-normal white-1 gutter-row">
            <ul className="nav__items">
                <li className="nav__item"><a href="#myWork" className="nav__link">Work</a></li>
                <li className="nav__item"><a href="#aboutMe" className="nav__link">About</a></li>
                <li className="nav__item"><a href="#contact" className="nav__link">Contact</a></li>
            </ul>
        </nav>

        {/* Intro */}
        <div className="gutter-row header__row">
            <div className="header__intro" ref={introRef}>
                <h1 className="header__title fs-h1">Daniel Bruckner</h1>
                <p className="header__description fs-medium ff-jost white-1">A Front-end Developer based in Vienna, AT</p>
                <a href="#contact" className="btn btn--pink fs-normal">Get in touch</a>
            </div>
        </div>
        
    </header>
} 