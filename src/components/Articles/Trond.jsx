import HeroScroll from "../Effects/HeroScroll"
import Trond_fengsel from "../../img/Trond/Trond_fengsel.jpg"
import DollarBill from "../../img/Trond/DollarBill_Trond.jpg"
import skog from "../../img/Trond/skog.jpg"
import Trond_intervju from "../../img/Trond/Trond_intervju.jpg"
import "../../styles/_trond.scss"
import ZoomToTransition from "../Effects/ZoomToTransition"

export default function Trond() {
    return (
        <section className="trond-article">
            
            <HeroScroll image={Trond_fengsel}>
                <h1>Trond</h1>
            </HeroScroll>

            <article className="dollarBill-section">
               <h2>"100kr"</h2>
               <img src={DollarBill} alt="Trond på en hundralapp" />
            </article>

            <div className="zoom-with-text">
                <ZoomToTransition
                    imageStart={skog}
                    imageEnd={Trond_intervju}
                    altStart="Kirkens Bymisjon"
                    altEnd="Trond under intervjun"
                    startScale={1}
                    endScale={1.5}
                    zoomStart={0.5}
                    zoomEnd={1}
                    transitionStart={1}
                    transitionEnd={1.3}
                >

                    <p>På trappene utenfor Halden Togstasjon møter vi Trond Henriksen. Mannen som på et tidspunkt har blitt betegnet som “Norges farligste mann”.</p>

                    <p>Trond møter oss med et vennlig smil og et fast håndtrykk. Det tar ikke lange stunden før vi blir tatt med inn på togstasjonen, som i dag er en café og møteplass, drevet av Kirkens bymisjon. </p>

                    <p>Kirkens Bymisjon har vært Trond sin arbeidsplass siden 2011, hvor han har jobbet med flere ulike prosjekter. Blant annet har Trond tatt stor del i restaureringen av Byparken i Halden. </p>

                    <p>Byparken er et stort murbygg og er togstasjonens nærmeste nabo. Murbygget har før i tiden vært en togstall og bærer fortsatt preg av historie. I nettopp dette bygget setter vi oss ned for å snakke med Norges farligste mann.</p>

                    <p>Hvem er han og hvordan ble han “Norges farligste mann”?</p>
                </ZoomToTransition>
            </div>
           
        </section>
    )
}