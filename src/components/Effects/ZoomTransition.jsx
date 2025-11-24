import "../../styles/_zoomtransition.scss";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ZoomTransition({
  imageStart,
  imageEnd,
  altStart = "",
  altEnd = "",
  startScale = 1,
  endScale = 1.5,
  transitionDuration = 2,
  className="" 
}) {
  const startRef = useRef(null);
  const endRef = useRef(null);
  const pinRef = useRef(null);

  useLayoutEffect(() => {
    const startImg = startRef.current;
    const endImg = endRef.current;
    const pinWrapper = pinRef.current;
    
    if (!startImg || !endImg || !pinWrapper) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: pinWrapper,
        start: "top top",
        end: `+=${window.innerHeight * 3}`,
        scrub: true,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    tl.to(startImg, { scale: endScale, opacity: 0, ease: "none" });

    tl.fromTo(endImg, { opacity: 0 }, { opacity: 1, ease: "none" }, 0);

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };

  }, [startScale, endScale, transitionDuration]);

  return (
    <article className={`zoom-section ${className}`}>
      <div className="pin-wrapper" ref={pinRef}>
        <img
          ref={startRef}
          src={imageStart}
          alt={altStart}
          className="zoom-image start"
        />
        <img
          ref={endRef}
          src={imageEnd}
          alt={altEnd}
          className="zoom-image end"
        />
      </div>
    </article>
  )
}