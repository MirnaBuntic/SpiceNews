import { useState, useRef } from "react"

export default function Slider ({ images }) {
    const [current, setCurrent] = useState(0);
    const touchStart = useRef(null);
    const touchEnd = useRef(null);

    const nextSlide = () => {
        setCurrent((current + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrent((current - 1 + images.length) % images.length);
    };

    const onTouchStart = (e) => {
        touchStart.current = e.changedTouches[0].screenX;
    };

    const onTouchEnd = (e) => {
        touchEnd.current = e.changedTouches[0].screenX;
        handleSwipe();
    };

    
    const handleSwipe = () => {
        if (!touchStart.current || !touchEnd.current) return;
        const distance = touchStart.current - touchEnd.current;
        const minSwipeDistance = 50;

        if (distance > minSwipeDistance) {
        nextSlide();
        } else if (distance < -minSwipeDistance) {
        prevSlide();
        }

        touchStart.current = null;
        touchEnd.current = null;
    };

    return (
    <article
        className="slider"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        >
        <button
            onClick={prevSlide}
            aria-label="Föregående bild"
            className="slider-button prev"
        >
            &#10094;
        </button>

        <img
            src={images[current].src}
            alt={images[current].alt}
            className="slider-image"
            draggable={false}
        />

        <button
            onClick={nextSlide}
            aria-label="Nästa bild"
            className="slider-button next"
        >
            &#10095;
        </button>

        {images[current].caption && (
            <p className="slider-caption">{images[current].caption}</p>
        )}
    </article>
    )
}