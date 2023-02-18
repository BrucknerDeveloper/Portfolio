import React, { useEffect, useState } from "react"

//components
import MyWork from "./MyWork/MyWork"
import AboutMe from "./AboutMe"
import Contact from "./Contact"

//imgs
import upArrow from "../../assets/arrow-up.svg"

export default function() {
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const [showBackToTop, setShowBackToTop] = useState<boolean>(false)

    const mountedStyle = {
        animation: "inAnimation 250ms ease-in"
      };
      const unmountedStyle = {
        animation: "outAnimation 270ms ease-out",
        animationFillMode: "forwards"
      };

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 700) {
                setIsMounted(true)
                setShowBackToTop(true)
            }
            else {
                setIsMounted(false)
            }
        })
    }, [])

    return <main className="main">
        <MyWork />
        <AboutMe />
        <Contact />
        {
            showBackToTop && 
            <a 
                href="#header" 
                className="main__backToTopArrow" 
                onAnimationEnd={() => { if (!isMounted) setShowBackToTop(false) }}
                style={isMounted ? mountedStyle : unmountedStyle}
            >
                <img className="main__upArrow" src={upArrow} />
            </a>
        }
    </main>
}