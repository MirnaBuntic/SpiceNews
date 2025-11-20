import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollingBoat({src}) {
    const ref = useRef(null);

    useLayoutEffect(() => {
        const el = ref.current;
        if (!el) return;

        const ctx = gsap.context(() => {
        gsap.to(el, {
            x: () => window.innerWidth - el.offsetWidth,
            ease: "none",
            scrollTrigger: {
                trigger: document.documentElement, 
                start: () => window.innerHeight - 150,                 
                end: "bottom bottom",              
                scrub: true,                       
                invalidateOnRefresh: true
            },
        })

        ScrollTrigger.create({
            trigger: document.documentElement,
            start: () => window.innerHeight - 150,
            toggleClass: {
                targets: el,
                className: "scrolling-boat--visible",
            },
        })
    })
    
        return () => ctx.revert();
    }, []);

    return (
        <img ref={ref} src={src} className="scrolling-boat" />
    )
}