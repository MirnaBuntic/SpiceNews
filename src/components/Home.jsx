import ArticleCard from "./ArticleCard";
import Trond_fengsel from "../img/Trond/Trond_fengsel.jpg"
import lasse from "../img/Lasse/lasse.jpg"
import skjermtid from "../img/Skjermtid/pc.png"
import Header from "./Header";

export default function Home() {

    return (
        <div className="home-container">
            <Header />

            <section className="article-section">

                <ArticleCard
                    title="Fra fengsel til forsoning"
                    image={Trond_fengsel}
                    link={"/trond"}
                />
                
                <ArticleCard
                    title="Lasse"
                    image={lasse}
                    link={"/lasse"}
                />
                <ArticleCard
                    title="Skjermtid"
                    image={skjermtid}
                    link={"/skjermtid"}
                />
                <ArticleCard
                    title="Jimmys morfar"
                    image={Trond_fengsel}
                    link={"/trond"}
                />
        
            </section>
        </div>
    )
}