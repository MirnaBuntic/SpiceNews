import { useRef, useEffect } from "react"
import gsap from "gsap"
import  { ScrollTrigger } from "gsap/ScrollTrigger"
import "../../styles/_scrollvideo.scss"

gsap.registerPlugin(ScrollTrigger)

export default function ScrollVideo({ src, className = "", playbackRate = 1 }) {
    const videoRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    const container = containerRef.current
    if (!video || !container) return

    video.playbackRate = playbackRate

    const trigger = ScrollTrigger.create({
      trigger: container,
      start: "top center",   
      end: "bottom center",  
      onEnter: () => video.play(),
      onEnterBack: () => video.play(),
      onLeave: () => video.pause(),
      onLeaveBack: () => video.pause(),
    })

    return () => {
      trigger.kill()
    }
  }, [])

  return (
    <article
      ref={containerRef}
      className={`scroll-video-container ${className}`}
    >
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        preload="auto"
        className="scroll-video"
      />
    </article>
  )
}