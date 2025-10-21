import HeroScroll from "../Effects/HeroScroll"
import ImgScrollSwap from "../Effects/ImgScrollSwap"
import ScrollVideo from "../Effects/ScrollVideo"
import ZoomTransition from "../Effects/ZoomTransition"
import ScrollText from "../Effects/ScrollText"
import PlayAudio from "../Effects/PlayAudio"
import DollarBill from "../../img/Trond/DollarBill_Trond.jpg"
import Busk1 from "../../img/Trond/Busk1.png"
import Busk2 from "../../img/Trond/Busk2.png"
import Lommelykt1 from "../../img/Trond/Lommelykt1.png"
import Lommelykt2 from "../../img/Trond/Lommelykt2.png"
import Avis_animasjon from "../../img/Trond/Avis_animasjon_final.mp4"
import Kirkens_bymisjon from "../../img/Trond/kirkens_bymisjon.jpg"
import Trond_intervju from "../../img/Trond/Trond_intervju.jpg"
import "../../styles/_trond.scss"



export default function Trond() {
    const transitionDuration = 3;
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
                flipCount={3}
                flipSpeed={0.8}
                delayScroll={0.1}
                overlayScrollOffset={0.8}
                className="my-flipbook"
            />

            <article className="story-intro">
                <p>Lommelykten lyser i ansiktet på de to fengselsrømmlingene.</p>

                <p>Med bagger fulle av smuglet narkotika befinner Trond og Morten seg nå i et dilemma.</p>

                <p>Overgi seg eller fortsette på rømmen med 2 menn som gisler, der en av mennene er politi?</p>
            </article>

            <ScrollVideo 
                src={Avis_animasjon}
                className="my-scroll-video"
                playbackRate={0.8}
            />

            <article className="question">
                <h2>Men hvordan havnet de her?</h2>
            </article>

            <section className="transition-block">
                <ZoomTransition
                    imageStart={Kirkens_bymisjon}
                    imageEnd={Trond_intervju}
                    altStart="Kirkens Bymisjon"
                    altEnd="Trond under intervjun"
                    startScale={1}
                    endScale={1.5}
                    transitionDuration={transitionDuration}
                />

            
                    
                <ScrollText transitionDuration={transitionDuration}>
                    <p className="text">
                    På trappene utenfor Halden Togstasjon møter vi Trond Henriksen, mange
                    husker han som “Norges farligste mann” og en beryktet person innen
                    det kriminelle miljøet på 90/tidlig 2000-tallet.
                    
                    Trond møter oss med et vennlig smil og et solid håndtrykk. Han har
                    siden 2011 jobbet for Kirkens bymisjon, og viser oss stolt rundt i
                    togstasjonens lokaler som i dag fungerer som café. Over gaten ligger
                    det gamle godshuset som ble bygd i 1879, dette er i dag restaurert
                    og driftes av bymisjonen som kurs- og konferansesenter og er en
                    av Trond sine mange hjertesaker for byen.
                    </p>

                    <p className="text-1">“Har dere spist?” - spør han oss</p>

                    <p className="text-2">“Nei, i grunn ikke” - svarer vi i kor</p>

                    <p className="text-3">
                    Han viser oss inn på kjøkkenet og en kollega av Trond serverer oss
                    dagens suppe som vi balanserer over gaten og inn i det gamle
                    godshuset. Her setter vi oss ned for en prat med Trond. Dette er hans historie.
                    </p>

                </ScrollText>
            </section>

            <section>
                <article className="childhood">
                    <p>Trond er nå bosatt i Halden og nærmer seg 60 år, men kommer opprinnelig fra østkanten, nærmere bestemt Vålerenga i Oslo. </p>

                    <p>-”Jeg pleier å si at jeg er født i Vålerengatunnelen", forteller Trond. Der vokste han opp i enkle kår sammen med sin mor og to søsken.</p>

                    <p>Barndommen ble beskrevet som fin, men at den også bar preg av utfordringer. Oppveksten var preget av mye rus og utrygghet. Moren omgikk seg stadig med menn som slet med rus, til tross for at hun selv var avholds. Dette gjorde at barna tidlig ble eksponert for rus. </p>

                    <p>-”Jeg husker godt det da jeg skulle prøve den hasjpipa for første gang. Jeg trodde jeg skulle dø, for mamma sa at hvis man brukte narkotika så kunne man dø” forteller han på en spøkefull måte.</p>
                </article>
                
                <article>
                    <PlayAudio />
                </article>
            </section>

            <section>  
                <article className="dollarBill-section">
                <h3>"100kr"</h3>
                <img src={DollarBill} alt="Trond på en hundralapp" />
                </article>
    
                <article className="text-container">
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </article>
            </section>
    
        </section>
    )
}