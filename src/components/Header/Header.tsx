import React, { useEffect, useLayoutEffect, useRef } from "react";//#endregion

//gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function() {
    const introRef = useRef<any>(null);
    // const navItemsRef = useRef<any>(null); //idk if this is better or via classes (probabbly with ref)


    useEffect(() => {
        // gsap.from(introRef.current, {
        //     // scrollTrigger: {
        //     //     trigger: introRef.current,
        //     //     start: "180px center",
        //     //     markers: true,
        //     //     toggleActions: "play none none none"
        //     // },
        //     x: -100,
        //     duration: 1.5
        // });

        const timeline = gsap.timeline();
        timeline.fromTo(".nav__item", 
            {
                y: -20,
                opacity: 0
            }, 
            {
                y: 0,
                opacity: 1,
                duration: .75,
                ease: "power1.inOut",
                stagger: {
                    from: "start",
                    amount: .1
                  }
            },
            
        )

        timeline.fromTo(introRef.current, 
            { 
                opacity: 0,
                filter:"blur(4px)"
            },
            {
                opacity: 1,
                filter:"blur(0px)",
                duration: 1.25
        });

      }, []);

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