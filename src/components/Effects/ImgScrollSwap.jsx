import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../styles/_imgscrollswap.scss";

gsap.registerPlugin(ScrollTrigger);

//Fått hjälp av chatgpt
export default function ImgScrollSwap({
  image1,
  image2,
  alt1 = "",
  alt2 = "",
  flipCount = 4,          
  flipSpeed = 0.1,        
  overlayText,            
  overlay1,               
  overlay2,               
  altOverlay1 = "",
  altOverlay2 = "",
  overImage,            
  altOverImage = "",
  className = "",
}) {
  const containerRef = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const textRef = useRef(null);
  const overlay1Ref = useRef(null);
  const overlay2Ref = useRef(null);
  const finalRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const img1 = img1Ref.current;
      const img2 = img2Ref.current;
      const text = textRef.current;
      const overlay1 = overlay1Ref.current;
      const overlay2 = overlay2Ref.current;
      const finalImg = finalRef.current;

      if (!img1 || !img2) return;

      gsap.set(img1, { opacity: 1 });
      gsap.set(img2, { opacity: 0 });

      if (text) {
        gsap.set(text, { opacity: 0, y: 20 });
      }

      if (overlay1) gsap.set(overlay1, { opacity: 0 });
      if (overlay2) gsap.set(overlay2, { opacity: 0 });
      if (finalImg) gsap.set(finalImg, { opacity: 0 });

      const flipTl = gsap.timeline({
        repeat: flipCount - 1,
        yoyo: true,
      });

      flipTl
        .to(img1, { opacity: 0, duration: flipSpeed })
        .to(img2, { opacity: 1, duration: flipSpeed }, "<");

      const tl = gsap.timeline({
        paused: true, 
      });

      tl.to({}, { duration: 0.5 });

      tl.to({}, { duration: 0.5 });

      if (text && overlayText) {
        tl.to(text, {
          opacity: 1,
          y: 0,
          duration: 0.6,
        });
        tl.add(flipTl, "<")
      } else {
        tl.add(flipTl);
      }

      if (overlay1 && overlay2) {
        
        tl.to(
          overlay1,
          {
            opacity: 1,
            duration: 0.7,
          },
          "+=0.2"
        )

        
        if (text && overlayText) {
          tl.to(
            text,
            {
              opacity: 0,
              duration: 0.3,
            },
            "<" 
          )
        }
        
        tl.to(overlay2, {
          opacity: 1,
          duration: 0.7,
        })
          
          .to(
            overlay1,
            {
              opacity: 0,
              duration: 0.7,
            },
            "<"
          );
      }

      if (finalImg) {
        tl.to(finalImg, {
          opacity: 1,
          duration: 0.8,
        }, "+=0.2")
      }

  
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: () => "+=" + window.innerHeight * 3,
        pin: true,
        scrub: true,
        animation: tl,
    
      });
    }, containerRef);

    return () => ctx.revert();
  }, [flipCount, flipSpeed, overlayText]);

  return (
    <article
      ref={containerRef}
      className={`img-scroll-flipbook ${className}`}
    >
      <img ref={img1Ref} src={image1} alt={alt1} />
      <img ref={img2Ref} src={image2} alt={alt2} />

      {overlay1 && (
        <img
          ref={overlay1Ref}
          src={overlay1}
          alt={altOverlay1}
          className="overlay-image"
        />
      )}

      {overlay2 && (
        <img
          ref={overlay2Ref}
          src={overlay2}
          alt={altOverlay2}
          className="overlay-image"
        />
      )}

      {overImage && (
        <img
          ref={finalRef}
          src={overImage}
          alt={altOverImage}
          className="over-image-content"
        />
      )}

      {overlayText && (
        <div ref={textRef} className="overlay-text-content">
          {overlayText}
        </div>
      )}
    </article>
  );
}
