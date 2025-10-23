//Effekter
import HeroScroll from "../Effects/HeroScroll"
import ImgScrollSwap from "../Effects/ImgScrollSwap"
import ScrollVideo from "../Effects/ScrollVideo"
import ZoomTransition from "../Effects/ZoomTransition"
import ScrollText from "../Effects/ScrollText"
import PopUp from "../Effects/PopUp"
//Bilder
import DollarBill from "../../img/Trond/DollarBill_Trond.jpg"
import Busk1 from "../../img/Trond/Busk1.png"
import Busk2 from "../../img/Trond/Busk2.png"
import Lommelykt1 from "../../img/Trond/Lommelykt1.png"
import Lommelykt2 from "../../img/Trond/Lommelykt2.png"
import Avis_animasjon from "../../img/Trond/Avis_animasjon_final.mp4"
import Kirkens_bymisjon from "../../img/Trond/kirkens_bymisjon.jpg"
import Trond_intervju from "../../img/Trond/Trond_intervju.jpg"
import Knutenrosen from "../../img/Trond/knutenrosen.jpg"
//Audio
import Trond1 from "../../audio/Trond/Trond1.MP3"
//Styles
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
                        På trappene utenfor Halden Togstasjon møter vi Trond Henriksen, 
                        mange husker han som “Norges farligste mann” og en beryktet person 
                        innen det kriminelle miljøet på 90/tidlig 2000-tallet.
                        Trond møter oss med et vennlig smil og et solid håndtrykk. 
                        Han har siden 2011 jobbet for Kirkens bymisjon, 
                        og viser oss stolt rundt i togstasjonens lokaler som i dag fungerer som café. 
                        Over gaten ligger det gamle godshuset som ble bygd i 1879. 
                        Bygget er i dag restaurert og driftes av bymisjonen som kurs- og konferansesenter, 
                        og er en av Trond sine mange hjertesaker for byen.
                    </p>

                    <p className="text-1">“Har dere spist?” - spør han oss.</p>

                    <p className="text-2">“Nei, i grunn ikke” - svarer vi i kor.</p>

                    <p className="text-3">
                        Han viser oss inn på kjøkkenet og en kollega av Trond serverer oss dagens suppe 
                        som vi balanserer over gaten og inn i det gamle godshuset. 
                        Her setter vi oss ned for en prat med Trond. Her er hans historie.
                    </p>

                </ScrollText>
            </section>

            <section>
                <article className="childhood">
                    <h4>”Jeg pleier å si at jeg er født i Vålerengatunnelen"</h4>

                    <p>Trond er nå bosatt i Halden og nærmer seg 60 år, men kommer opprinnelig fra østkanten, nærmere bestemt Vålerenga i Oslo.</p>

                    <p>-"Jeg pleier å si at jeg er født i Vålerengatunnelen", forteller Trond. Der vokste han opp i enkle kår sammen med sin mor og to søsken.</p>

                    <p>
                        Barndommen ble beskrevet som fin, men at den også bar preg av utfordringer. 
                        Oppveksten var preget av mye rus og utrygghet. 
                        Moren omgikk seg stadig med menn som slet med rus, til tross for at hun selv var avholds. 
                        Dette gjorde at barna tidlig ble eksponert for rus.
                    </p>

                    <p>-"Jeg husker godt første gangen, for da var jeg sikker på at jeg skulle dø, for det hadde mamma sagt at narkotika er farlig og jeg kan dø",  forteller han på en spøkefull måte.</p>
                </article>
                
                <article className="trond-audio">
                    <audio controls>
                        <source src={Trond1} type="audio/mpeg" />
                    </audio>
                </article>
            </section>

            <section className="school">
                <p>
                    Barndommen utenfor husets fire vegger ble også tilbrakt på Ekeberg skole. 
                    Der trivdes Trond godt frem til han ble rammet av {' '}
                    <PopUp
                        info={
                            <>
                                Knuterosen er en betennelse i underhuden som gir ømme, 
                                røde knuter på leggene. Den skyldes en immunreaksjon, ofte etter infeksjon (vanligst streptokokker), 
                                og går vanligvis over av seg selv i løpet av 4–6 uker.

                                <figure className="popup-figure">
                                    <img src={Knutenrosen} alt="Bilde av bein med sykdommen Knutenrosen." />
                                    <figcaption>
                                        Knuterosen <br />
                                        DermNetNZ.org. <br />
                                        Lisens: CC BY NC ND 3.0         
                                    </figcaption>
                                </figure>

                                <a href="https://sml.snl.no/knuterosen"> Les mer her</a>
                            </>
                        } 
                    >
                        hudsykdommen Knuterosen
                    </PopUp>{' '}
                    og ble en periode fraværende fra skolen.
                </p>

                <p>
                    Tilbake etter sykdomsperioden ble Trond møtt med et nytt fag. 
                    Engelsk, noe Trond fort forstod at han ikke mestret. 
                    Følelsen av å ikke mestre engelsken førte til at han valgte å droppe ut av faget, som senere ble til å skulke hele skoledagen.
                </p>
            </section>

            <section className="frank">
                <h4>De første skrittene inn i rusmiljøet</h4>

                <p>
                    Han kunne ikke dra hjem, så tidsfordrivet ble å reise til byen, 
                    mer spesifikt trappene ved Østbanehallen i hjertet av Oslo. 
                    Der traff han andre ungdommer som delte de samme utfordringene. 
                    Spesielt en gutt skilte seg ut for Trond, nemlig 19 år gamle Frank.
                </p>

                <p>
                    Med skinnjakke, det faktumet at han var noen år eldre og hadde draget på damene, 
                    gjorde at Frank ble en person de aller fleste i gjengen så opp til.
                </p>

                <p>(skinnjacka)</p>
                    
                <p>
                    Som 12-åring prøvde Trond for første gang narkotiske stoffer. 
                    Dette var utelukkende for å imponere Frank. 
                    Før dette hadde synet på narkotika og rus aldri vært tiltalende. 
                    Det hadde vært noe som har vært skummelt og som ifølge Tronds mor potensielt kunne føre til død.
                </p>

                <p>
                    Til tross for dette prøvde Trond hasjpipe og fikk et voldsomt hosteanfall. 
                    Han likte rusen, men det var ikke det som var viktigst. 
                    Det var å imponere Frank. Det var det viktigste.
                </p>
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

            <section className="end-story">
                <h4>Vendepunktet</h4>

                <p>Å ville klare alt selv var en dominerende tanke og det var først godt inn i 20-årene at det å oppsøke hjelp for rusmisbruket streifet Tronds hode. Det uskyldige forsøket på å imponere Frank hadde da utviklet seg til å bli et fullverdig heroinmisbruk. -"Når man først har kommet dit, så blir veien komplisert".</p>

                <p>Etter 13 år med svingdør inn og ut av fengsel (første gang som 14-åring), sonet han sent i 20-årene ved Ullersmo fengsel. Der spurte Trond om hjelp for første gang. Resultatet ble en henvisning med plass på Tyrili behandlingsinstitusjon, hvor han tilbrakte flere år.</p>

                <p>Veien ut av rusen var en krevende, lang og vanskelig vei. Det viste seg at én er ikke ferdig rehabilitert etter 3-4 måneder, som Trond først tenkte. Avhengigheten er noe du bærer med deg i lang tid, om ikke livet ut.</p>

                <p>(video som smiler)</p>

                <p>En tankefull Trond trekker på smilebåndene og sier -”Nå skal jeg, om bare en drøy måned, feire at det er 15 år siden sist jeg satt meg en sprøyte heroin, det gleder jeg meg til!"</p>
            </section>

        </section>
    )
}