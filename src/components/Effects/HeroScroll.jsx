import "../../styles/_heroscroll.scss"

export default function HeroScroll({ title, image }) {
    return (
        <article className="hero-scroll">
            <img src={image} alt={title} className="hero-image" />
            <h1 className="hero-title">{title}</h1>
        </article>
    )
}