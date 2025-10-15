import HeroScroll from "../Effects/HeroScroll"
import ImgScrollSwap from "../Effects/ImgScrollSwap"
import DollarBill from "../../img/Trond/DollarBill_Trond.jpg"
import Busk1 from "../../img/Trond/Busk1.png"
import Busk2 from "../../img/Trond/Busk2.png"
import "../../styles/_trond.scss"
import "../../styles/_imgscrollswap.scss"


export default function Trond() {
    return (
        <section className="trond-article">

            <ImgScrollSwap
                image1={Busk1}
                image2={Busk2}
                alt1="Busk nr 1"
                alt2="Busk nr 2"
                flipCount={8}
                flipSpeed={0.1}
                delayScroll={0.3}
                className="my-custom-class"
            />

            
             <article className="dollarBill-section">
               <h2>"100kr"</h2>
               <img src={DollarBill} alt="Trond på en hundralapp" />
            </article>
            
           

          
            
           
        </section>
    )
}