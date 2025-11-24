import { useState} from "react"

export default function Slider ({ images }) {
    const [current, setCurrent] = useState(0);

    if (!images || images.length === 0) return null

    const nextSlide = () => {
        setCurrent((prev) => prev === images.length - 1 ? 0 : prev + 1)
    }

    const prevSlide = () => {
        setCurrent((prev) => prev === 0 ? images.length - 1 : prev -1)
    }

    
    return (
        <article className="slider">
            <button onClick={prevSlide} className="slider-button prev">
                {"<"}
            </button>

            <img
                src={images[current].src}
                alt={images[current].alt}
                className="slider-image"
                draggable={false}
            />

            <button onClick={nextSlide} className="slider-button next">
                {">"}
            </button>

            {images[current].caption && (
                <p className="slider-caption">{images[current].caption}</p>
            )}
        </article>
    )
}