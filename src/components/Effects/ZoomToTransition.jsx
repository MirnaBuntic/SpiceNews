import "../../styles/_ZoomToTransition.scss"
import { useEffect, useRef, useState } from "react"

export default function ZoomScroll({
  imageStart,
  imageEnd,
  altStart = "",
  altEnd = "",
  startScale = 1,
  endScale = 1.5,
  zoomStart = 0.5,
  zoomEnd = 1,
  transitionStart = 1,
  transitionEnd = 1.3,
  children
}) {
  const startRef = useRef(null)
  const endRef = useRef(null)
  const textRef = useRef(null)
  const containerRef = useRef(null)
  const [pinned, setPinned] = useState(false)

  useEffect(() => {
    const startImg = startRef.current
    const endImg = endRef.current
    const container = containerRef.current
    if (!startImg || !endImg || !container) return;

    const onScroll = () => {
      const position = startImg.getBoundingClientRect()
      const viewportHeight = window.innerHeight

      let zoomProgress = (1 - position.top / viewportHeight - zoomStart) / (zoomEnd - zoomStart)
      zoomProgress = Math.min(Math.max(zoomProgress, 0), 1)

      const scale = startScale + zoomProgress * (endScale - startScale)
      startImg.style.transform = `scale(${scale})`

      let transitionProgress = (1 - position.top / viewportHeight - transitionStart) / (transitionEnd - transitionStart)
      transitionProgress = Math.min(Math.max(transitionProgress, 0), 1)

      startImg.style.opacity = 1 - transitionProgress
      startImg.style.display = transitionProgress > 1 ? "none" : "block"
      endImg.style.opacity = transitionProgress
      endImg.style.filter = `saturate(${1 + transitionProgress * 0.15})`

      let shouldPin = transitionProgress >= 1
      setPinned(shouldPin)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [startScale, endScale, zoomStart, zoomEnd, transitionStart, transitionEnd])

  return (
    <article
      className="zoom-section"
      ref={containerRef}
      style={{
        minHeight: pinned
          ? `${window.innerHeight + (textRef.current?.offsetHeight || 0)}px`
          : "100vh"
      }}
    >
      <div className="zoom-container">
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
          className={`zoom-image overlay ${pinned ? "pinned" : ""}`}
        />
      </div>
      {children && (
        <div
          ref={textRef}
          className={`text-over-image ${pinned ? "scrolling-text" : ""}`}
        >
          {children}
        </div>
      )}
    </article>
  )
}
