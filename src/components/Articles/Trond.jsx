import HeroScroll from "../Effects/HeroScroll"
import ImgScrollSwap from "../Effects/ImgScrollSwap"
import ScrollVideo from "../Effects/ScrollVideo"
import DollarBill from "../../img/Trond/DollarBill_Trond.jpg"
import Busk1 from "../../img/Trond/Busk1.png"
import Busk2 from "../../img/Trond/Busk2.png"
import Lommelykt1 from "../../img/Trond/Lommelykt1.png"
import Lommelykt2 from "../../img/Trond/Lommelykt2.png"
import Avis_animasjon from "../../img/Trond/Avis_animasjon_final.mp4"
import "../../styles/_trond.scss"



export default function Trond() {
    return (
        <section className="trond-article">

            <ImgScrollSwap
                image1={Busk1}
                image2={Busk2}
                overlay1={Lommelykt1}
                overlay2={Lommelykt2}
                text="STOPP, POLITI!"
                alt1="Busk nr 1"
                alt2="Busk nr 2"
                altOverlay1="Lommelykt av"
                altOverlay2="Lommelykt på"
                flipCount={2}
                flipSpeed={0.5}
                delayScroll={0.1}
                overlayScrollOffset={0.5}
                className="my-flipbook"
            />

            <article className="story-intro">
                <p>Lommelykten lyser i ansiktet på de to fengselsrømmlingene.</p>

                <p>Med bagger fulle av smuglet narkotika befinner seg Trond og Morten nå i et dilemma.</p>

                <p>Overgi seg eller fortsette på rømmen med 2 politibetjente som gisler?</p>
            </article>

            <ScrollVideo 
                src={Avis_animasjon}
                className="my-scroll-video"
                playbackRate={0.8}
            />

            <article className="question">
                <h2>Men hvordan havnet de her?</h2>
            </article>

            <article className="interview">

            </article>
            
            <article className="dollarBill-section">
               <h2>"100kr"</h2>
               <img src={DollarBill} alt="Trond på en hundralapp" />
            </article>
            
           

          
            
           
        </section>
    )
}