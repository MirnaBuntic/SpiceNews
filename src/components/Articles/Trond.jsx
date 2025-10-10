import HeroScroll from "../Effects/HeroScroll"
import Trond_fengsel from "../../img/Trond/Trond_fengsel.jpg"
import DollarBill from "../../img/Trond/DollarBill_Trond.jpg"
import skog from "../../img/Trond/skog.jpg"
import "../../styles/_trond.scss"
import ZoomScroll from "../Effects/ZoomScroll"

export default function Trond() {
    return (
        <div className="trond-article">
            <HeroScroll title="Trond" image={Trond_fengsel} />

            <section className="dollarBill-section">
               <h2>"100kr"</h2>
               <img src={DollarBill} alt="Trond på en hundralapp" />
            </section>

            <ZoomScroll image={skog} alt="Kirkens Bymisjon" zoom={0.3} />
           
        </div>
    )
}