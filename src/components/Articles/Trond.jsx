import HeroScroll from "../Effects/HeroScroll"
import Trond_fengsel from "../../img/Trond/Trond_fengsel.jpg"
import DollarBill from "../../img/Trond/DollarBill_Trond.jpg"
import skog from "../../img/Trond/skog.jpg"
import Trond_intervju from "../../img/Trond/Trond_intervju.jpg"
import "../../styles/_trond.scss"
import ZoomToTransition from "../Effects/ZoomToTransition"

export default function Trond() {
    return (
        <div className="trond-article">
            <HeroScroll title="Trond" image={Trond_fengsel} />

            <section className="dollarBill-section">
               <h2>"100kr"</h2>
               <img src={DollarBill} alt="Trond på en hundralapp" />
            </section>

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
            />
           
        </div>
    )
}