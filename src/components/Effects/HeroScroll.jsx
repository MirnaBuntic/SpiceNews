import "../../styles/_heroscroll.scss"

export default function HeroScroll({ title, image }) {
    return (
        <section className="hero-scroll">
            <img src={image} alt={title} className="hero-image" />
            <h1 className="hero-title">{title}</h1>
        </section>
    )
}