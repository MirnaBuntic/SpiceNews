import { useLayoutEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "../../styles/_scrollingboat.scss"

gsap.registerPlugin(ScrollTrigger);

//Hjälp av chatgpt
export default function ScrollingBoat({src}) {
    const wrapperRef = useRef(null)
    const boatRef = useRef(null)
    const barRef = useRef(null)

    useLayoutEffect(() => {
        const wrapper = wrapperRef.current
        const boat = boatRef.current;
        const bar = barRef.current;

        if (!wrapper || !boat || !bar) return;

        const ctx = gsap.context(() => {
            const scrollConfig = {
                trigger: document.documentElement,
                start: () => window.innerHeight - 150,
                end: "bottom bottom",
                scrub: true,
                invalidateOnRefresh: true,
            }

            gsap.to(boat, {
                x: () => window.innerWidth - boat.offsetWidth,
                ease: "none",
                scrollTrigger: scrollConfig,
            })


            gsap.to(bar, {
                scaleX: 1,
                ease: "none",
                scrollTrigger: scrollConfig,
            });

            ScrollTrigger.create({
                trigger: document.documentElement,
                start: () => window.innerHeight - 150,
                toggleClass: {
                targets: wrapper,
                className: "wrapper--visible",
                },
            })
        })
    
        return () => ctx.revert();
    }, []);

    return (
        <div ref={wrapperRef} className="wrapper">
            <div ref={barRef} className="progress" />
            <img ref={boatRef} src={src} className="scrolling-boat" />
        </div>
    )
}