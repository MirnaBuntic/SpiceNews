import "../../styles/_zoomtransition.scss";
import { useEffect, useRef } from "react";
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
}) {
  const startRef = useRef(null);
  const endRef = useRef(null);
  const pinRef = useRef(null);

  useEffect(() => {
    const startImg = startRef.current;
    const endImg = endRef.current;
    const pinWrapper = pinRef.current;
    if (!startImg || !endImg || !pinWrapper) return;

    const vh =
    typeof window !== "undefined" && window.visualViewport
      ? window.visualViewport.height
      : window.innerHeight;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: pinWrapper,
        start: "top top",
        end: `+=${vh * transitionDuration}`,
        scrub: true,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        fastScrollEnd: true,
        markers: false, 
      },
    });

    tl.to(startImg, { scale: endScale, opacity: 0, ease: "none" }, 0);

    tl.fromTo(endImg, { opacity: 0 }, { opacity: 1, ease: "none" }, 0);

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };

  }, [startScale, endScale, transitionDuration]);

  return (
    <article className="zoom-section">
      <div className="zoom-container">
        <div className="pin-wrapper" ref={pinRef}>
          <img
            ref={startRef}
            src={imageStart}
            alt={altStart}
            className="zoom-image base"
          />
          <img
            ref={endRef}
            src={imageEnd}
            alt={altEnd}
            className="zoom-image overlay"
          />
        </div>
      </div>
    </article>
  );
}
