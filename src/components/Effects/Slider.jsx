import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap";

export default function Slider ({ images }) {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1);
    const imgRef = useRef(null);
    const touchStart = useRef(null);
    const touchEnd = useRef(null);

    const nextSlide = () => {
        setDirection(1);
        setCurrent((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };

    const onTouchStart = (e) => (touchStart.current = e.touches[0].clientX);
    const onTouchEnd = (e) => {
        touchEnd.current = e.changedTouches[0].clientX;
        handleSwipe();
    };

    const handleSwipe = () => {
        const distance = touchStart.current - touchEnd.current;
        const minSwipeDistance = 50;
        if (distance > minSwipeDistance) nextSlide();
        else if (distance < -minSwipeDistance) prevSlide();
    };

    useEffect(() => {
        const img = imgRef.current;

        gsap.fromTo(
            img,
            { x: direction * 100, autoAlpha: 0 },
            { x: 0, autoAlpha: 1, duration: 0.6, ease: "power2.out" }
        );
    }, [current]);

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
            ref={imgRef}
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