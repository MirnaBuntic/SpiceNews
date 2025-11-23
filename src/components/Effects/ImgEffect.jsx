import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "../../styles/_imgeffect.scss"


gsap.registerPlugin(ScrollTrigger)

export default function ImgEffect({
    src,
    alt = "",
    containerClassName,
    imgClassName,
    text,
    textClass
}) {

    const containerRef = useRef(null)
    const contentRef = useRef(null)

    useEffect(() => {
        const container = containerRef.current
        const content = contentRef.current
        if (!container || !content) return

        const ctx = gsap.context(() => {
            gsap.from(content, {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: container ?? content,
                    start: "top 80%",
                    toggleActions: "play none none none",
                }
            })
        }, container);

        return () => ctx.revert();
    }, [])

    return (
        <article ref={containerRef} className={containerClassName}>
            {src ? (
            <img ref={contentRef} src={src} alt={alt} className={imgClassName} />

            ) : (
                <p ref={contentRef} className={textClass}>{text}</p>
            )}
        </article>
    )
}