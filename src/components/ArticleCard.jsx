import { Link } from "react-router-dom"

export default function ArticleCard({ title, image, link }) {

    return (
        <article>
            <Link to={link}>

                <figure className='article-card'>
                    <img src={image} alt={title} />
                    <figcaption>{title}</figcaption>
                </figure>

            </Link>
        </article>
    )
}
