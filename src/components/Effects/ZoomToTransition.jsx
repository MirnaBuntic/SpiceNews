import "../../styles/_ZoomToTransition.scss"
import { useEffect, useRef } from "react"

export default function ZoomScroll({

    imageStart,
    imageEnd,
    altStart = "",
    altEnd = "",
    startScale = 1,
    endScale = 1.5,
    zoomStart = 0.5,
    zoomEnd = 1,
    transitionStart = 1,
    transitionEnd = 1.3

    }) {

    const startRef = useRef(null);
    const endRef = useRef(null);

    useEffect(() => {
        const startImg = startRef.current
        const endImg = endRef.current
        if (!startImg || !endImg) return;

        const onScroll = () => {
            const position = startImg.getBoundingClientRect()
            const viewportHeight = window.innerHeight

            let zoomProgress = (1 - position.top / viewportHeight - zoomStart) / (zoomEnd - zoomStart)
            zoomProgress = Math.min(Math.max(zoomProgress, 0), 1)

            const scale = startScale + zoomProgress * (endScale - startScale)
            startImg.style.transform = `scale(${scale})`

            let transitionProgress = (1 - position.top / viewportHeight - transitionStart) / (transitionEnd - transitionStart)
            transitionProgress = Math.min(Math.max(transitionProgress, 0), 1)

            startImg.style.opacity = 1 - transitionProgress
            endImg.style.opacity = transitionProgress
            endImg.style.filter = `contrast(${1 + transitionProgress * 0.15}) saturate(${1 + transitionProgress * 0.15})`

            if (transitionProgress > 1) {
                startImg.style.display = "none"
            } else {
                startImg.style.display = "block"
            }

        }

        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [startScale, endScale, zoomStart, zoomEnd, transitionStart, transitionEnd])

    return (
        <section className="zoom-section">
            <div className="zoom-container">
                <img ref={startRef} src={imageStart} alt={altStart} className="zoom-image base" />
                <img ref={endRef} src={imageEnd} alt={altEnd} className="zoom-image overlay" />
            </div>
        </section>
    )
}