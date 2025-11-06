import ArticleCard from "./ArticleCard";
import Trond_fengsel from "../img/Trond/Trond_fengsel.jpg"
import lasse from "../img/Lasse/lasse.jpg"
import skjermtid from "../img/Skjermtid/pc.png"
import tormod from "../img/Sjømann/Tormod.jpg"
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
                    title="Sjømann"
                    image={tormod}
                    link={"/trond"}
                />
        
            </section>
        </div>
    )
}