import "../../styles/_heroscroll.scss"

export default function HeroScroll({ children, image }) {
    return (
        <article className="hero-scroll">
            <img src={image} alt="" className="hero-image" />
            <div className="hero-text">{children}</div>
        </article>
    )
}