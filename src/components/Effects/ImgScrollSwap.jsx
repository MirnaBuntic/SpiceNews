import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../styles/_imgscrollswap.scss";

gsap.registerPlugin(ScrollTrigger);

export default function ImgScrollSwap({
  image1,
  image2,
  alt1 = "Bild 1",
  alt2 = "Bild 2",
  flipCount = 10,
  flipSpeed = 0.1,
  delayScroll = 0.2,
  className = "",
}) {
  const containerRef = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        
        gsap.set(img1Ref.current, { zIndex: 1 });
        gsap.set(img2Ref.current, { zIndex: 0 });

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
    }, containerRef);

    return () => ctx.revert();
    }, [flipCount, flipSpeed, delayScroll]);


  return (
    <div ref={containerRef} className={`img-scroll-flipbook ${className}`}>
      <img
        ref={img1Ref}
        src={image1}
        alt={alt1}
        style={{ backfaceVisibility: "hidden", willChange: "opacity" }}
      />
      <img
        ref={img2Ref}
        src={image2}
        alt={alt2}
        style={{ backfaceVisibility: "hidden", willChange: "opacity" }}
      />
    </div>
  );
}
