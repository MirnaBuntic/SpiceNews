import ArticleCard from "./ArticleCard";
import Trond_fengsel from "../img/Trond/Trond_fengsel.jpg"
import Header from "./Header";

export default function Home() {

    return (
        <div className="home-container">
            <Header />

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
        </div>
    )
}