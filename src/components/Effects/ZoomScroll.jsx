import "../../styles/_zoomscroll.scss"
import { useEffect, useRef } from "react"

export default function ZoomScroll({ image, alt = "", startScale = 1, endScale = 1.5 }) {
    const zoomRef = useRef(null);

    useEffect(() => {
        const zoomImage = zoomRef.current
        if (!zoomImage) return;

        const onScroll = () => {
            const position = zoomImage.getBoundingClientRect()

            const startThreshold = 0.4
            const endThreshold = 1
            
            let progress = (1 - position.top / window.innerHeight - startThreshold) / (endThreshold - startThreshold)
            progress = Math.min(Math.max(progress, 0), 1)
    
            zoomImage.style.transform = `scale(${startScale + progress * (endScale - startScale)})`
        }

        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [startScale, endScale])

    return (
        <section className="zoom-section">
            <div className="zoom-container">
                <img ref={zoomRef} src={image} alt={alt} className="zoom-image" />
            </div>
        </section>
    )
}