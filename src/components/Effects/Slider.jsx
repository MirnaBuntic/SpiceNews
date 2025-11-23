import { useState} from "react"

export default function Slider ({ images }) {
    const [current, setCurrent] = useState(0);

    if (!images.length) return null

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };

    
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