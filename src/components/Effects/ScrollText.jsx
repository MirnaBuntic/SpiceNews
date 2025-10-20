import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../styles/_scrolltext.scss"

gsap.registerPlugin(ScrollTrigger);

export default function ScrollText({ children, transitionDuration = 1 }) {
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    gsap.from(el, {
      opacity: 0,
      y: 50,
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });
  }, [transitionDuration]);

  return (
    <article ref={textRef} className="scroll-text">
      {children}
    </article>
  );
}
