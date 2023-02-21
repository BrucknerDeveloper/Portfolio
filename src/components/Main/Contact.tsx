import React, { useEffect, useRef } from "react"
import gsap from "gsap"


export default function() {
    const contactRef = useRef(null)

    useEffect(() => {
        gsap.fromTo(contactRef.current,
            {
                x: -100,
                opacity: 0
            },
            {           
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "Power1.easeOut",
                scrollTrigger: {
                    trigger: contactRef.current,
                    start: "top 85%",
                    markers: true,
                    toggleActions: "play none none none"
                },
            });
    }, [])

    return <section id="contact" className="contact">
        <div className="gutter-row" ref={contactRef}>
            <h2 className="primary-heading">Get in Touch</h2>
            <p className="contact__description fs-small white-1">Are you looking for a young, motivated web developer? Who can work in a team? 
            Who likes to learn new things and deliver stunning websites? Feel free to let me know. I will do my best to respond back. 😊 The quickest way 
                to reach out to me is via an email.</p>
            <a href="mailto:bruckner.developer@gmail.com" className="contact--btn btn btn--left-to-right-hover fs-small">bruckner.developer.@gmail.com</a>
        </div>    
    </section>
}