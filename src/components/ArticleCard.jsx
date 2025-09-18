import katt from '../img/katt.jpg';

export default function ArticleCard() {

    return (
        <article>
            <figure className='article-card'>
                <img src={katt} alt='katt'/>
                <figcaption>Artikkel 1</figcaption>
            </figure>
        </article>
    )
}
