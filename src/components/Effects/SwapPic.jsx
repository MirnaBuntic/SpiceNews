import { useLayoutEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "../../styles/_SwapPic.scss"

gsap.registerPlugin(ScrollTrigger)

export default function SwapPic({ startImage, endImage, startAlt="", endAlt="", className="", start }) {

    const newImgRef = useRef(null)

  useLayoutEffect(() => {
    const newImg = newImgRef.current
    if (!newImg) return

    const ctx = gsap.context(() => {
      gsap.to(newImg, {
        opacity: 1,
        scaleX: 1,
        ease: "power2.out",         
        scrollTrigger: {
            trigger: newImg,
            start,  
            end: "+=150",    
            scrub: 0.4,      
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className={`img-wrap ${className}`}>

      <img src={startImage} className="startImg" alt={startAlt} />

      <img
        ref={newImgRef}
        src={endImage}
        className="endImg"
        alt={endAlt}
      />
    </div>
  )
}