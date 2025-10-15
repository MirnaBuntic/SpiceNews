import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../styles/_imgscrollswap.scss";

gsap.registerPlugin(ScrollTrigger);

export default function ImgScrollSwap({
  image1,
  image2,
  overlay1,
  overlay2,
  alt1,
  alt2,
  altOverlay1,
  altOverlay2,
  flipCount = 10,
  flipSpeed = 0.1,
  delayScroll = 0.2,
  overlayScrollOffset = 0.2,
  className = "",
}) {
  const containerRef = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const overlay1Ref = useRef(null);
  const overlay2Ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        
        gsap.set(img1Ref.current, { zIndex: 1 });
        gsap.set(img2Ref.current, { zIndex: 0 });
        gsap.set(overlay1Ref.current, { autoAlpha: 0 });
        gsap.set(overlay2Ref.current, { autoAlpha: 0 });


        const tl = gsap.timeline({
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
            pin: true,
           },
        });

        tl.to({}, { duration: delayScroll });

        for (let i = 0; i < flipCount; i++) {
            tl.set(img1Ref.current, { zIndex: 1 });
            tl.set(img2Ref.current, { zIndex: 0 });
            tl.to({}, { duration: flipSpeed });

            tl.set(img1Ref.current, { zIndex: 0 });
            tl.set(img2Ref.current, { zIndex: 1 });
            tl.to({}, { duration: flipSpeed });
        }

        tl.to(overlay1Ref.current, { autoAlpha: 1, duration: 0.5 });
        tl.to(overlay2Ref.current, { autoAlpha: 1, duration: 0.5 }, `+=${overlayScrollOffset}`);
        tl.to(overlay1Ref.current, { autoAlpha: 0, duration: 0.5 }, `<`);

    }, containerRef);

    return () => ctx.revert();
    }, [flipCount, flipSpeed, delayScroll, overlayScrollOffset]);


  return (
    <div ref={containerRef} className={`img-scroll-flipbook ${className}`}>
      <img
        ref={img1Ref}
        src={image1}
        alt={alt1}
        />

      <img
        ref={img2Ref}
        src={image2}
        alt={alt2}
      />

      <img
        ref={overlay1Ref}
        src={overlay1}
        alt={altOverlay1}
        className="overlay-image"
      />

      <img
        ref={overlay2Ref}
        src={overlay2}
        alt={altOverlay2}
        className="overlay-image"
      />
    </div>
  );
}
