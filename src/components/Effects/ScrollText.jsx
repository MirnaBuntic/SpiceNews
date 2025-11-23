import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../styles/_scrolltext.scss"

gsap.registerPlugin(ScrollTrigger);

export default function ScrollText({ children, transitionDuration = 1, className="" }) {
  const textRef = useRef(null);

  useLayoutEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    gsap.from(textElement, {
      opacity: 0,
      y: 50,
      scrollTrigger: {
        trigger: textElement,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });
  }, [transitionDuration]);

  return (
    <article ref={textRef} className={`scroll-text ${className}`}>
      {children}
    </article>
  );
}
