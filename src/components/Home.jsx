import ArticleCard from "./ArticleCard";
import Trond_fengsel from "../img/Trond/Trond_fengsel.jpg"

export default function Home() {

    return (
        <section className="article-section">

            <ArticleCard
                title="Trond"
                image={Trond_fengsel}
                link={"/trond"}
            />
            
            <ArticleCard
                title="Trond"
                image={Trond_fengsel}
                link={"/trond"}
            />
            <ArticleCard
                title="Trond"
                image={Trond_fengsel}
                link={"/trond"}
            />
            <ArticleCard
                title="Trond"
                image={Trond_fengsel}
                link={"/trond"}
            />
    
        </section>
    )
}