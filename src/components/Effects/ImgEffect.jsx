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
}) {

    const containerRef = useRef(null)
    const imgRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(imgRef.current, {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current ?? imgRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                }
            })
        }, containerRef);

        return () => ctx.revert();
    }, [])

    return (
        <article ref={containerRef} className={containerClassName}>
            <img ref={imgRef} src={src} alt={alt} className={imgClassName} />
        </article>
    )
}