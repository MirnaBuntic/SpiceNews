//Bilder
import tormod from "../../img/Sjømann/tormod.jpg"
import sertifikat from "../../img/Sjømann/sertifikat.jpg"
import krigskort from "../../img/Sjømann/krigstjenestekort.jpg"
import attest from "../../img/Sjømann/attest.jpg"
import båt from "../../img/Sjømann/båt.jpg"
import avregningsbok from "../../img/Sjømann/avregningsbok.jpg"
import femton from "../../img/Sjømann/15.jpg"
import sytten from "../../img/Sjømann/17.jpg"
import tjuetre from "../../img/Sjømann/23.jpg"
import tormodOgDama from "../../img/Sjømann/tormod-med-dama.jpg"
import barnevogn from "../../img/Sjømann/barnevogn.jpg"
import charente from "../../img/Sjømann/charente.jpg"
import family from "../../img/Sjømann/family.jpg"
import ship from "../../img/Sjømann/ship.png"
import thormodColor from "../../img/Sjømann/Thormod-color.png"

//Effekter
import Slider from "../Effects/Slider"
import ScrollingBoat from "../Effects/ScrollingBoat"
import SwapPic from "../Effects/SwapPic"

//Styles
import "../../styles/_sjømann.scss"


export default function Sjømann() {

    const sliderImages1 = [
        { src: krigskort, alt: "Krigstjenestekort", caption: "Krigstjenestekort. Foto: privat." },
        { src: attest, alt: "Attest fra militæret", caption: "Attest fra militæret. Foto: privat." },
    ]

    const sliderImages2 = [
        { src: avregningsbok, alt: "Avregningsbok fra 1952.", caption: "Avregningsbok fra 1952. Foto: privat." },
        { src: femton, alt: "Side 15 i avregningsboken.", caption: "Side 15 i avregningsboken. Foto: privat." },
        { src: sytten, alt: "Side 17 i avregningsboken.", caption: "Side 17 i avregningsboken. Foto: privat." },
        { src: tjuetre, alt: "Side 23 i avregningsboken.", caption: "Side 23 i avregningsboken. Foto: privat." },
    ]

    return (
        <section className="tormod-article">

            <SwapPic
                startImage={tormod}
                startAlt="Svarthvit bilde av Thormod på båt"
                endImage={thormodColor}
                endAlt="Farget bilde av Thormod på båt"
            />

            <ScrollingBoat src={ship} />

            <article className="intro">

                <h2>Kollisjonen som endret kursen</h2>

                <p>
                    Blant motordur og verktøy nederst i skipet befinner Thormod seg sittende på kne med en skiftenøkkel i hånden. 
                    Han utfører den daglige kontrollen på skipets dieselmotorer. 
                    Plutselig høres et kraftig drønn gjennom maskinrommet og den unge maskinisten blir kastet gjennom rommet. 
                    Inn fosser det en stri strøm av vann.
                </p>

                <p>Men først, la oss spole tilbake.</p>
            </article>

            <article className="sertificate">
                <p>
                    Thormod Asbjørnsen ble født 6.mars 1931 på Kråkerøy, Fredrikstad. 
                    Der vokste han opp med en bror og øvrig familie. 
                    Han var en aktiv, pliktoppfyllende og skoleflink gutt.
                </p>

                <p>
                    Som 15-åring i august 1946, startet han læretiden hos Fredrikstad mekaniske verksted med en varighet på 9 halvår (fire og et halvt år). 
                    Lærertiden ble startet med stillingstittelen “Dreier” og han skulle gjennom læretiden tilegne seg kunnskapen som krevdes for å få utstedt sertifikat som “Motormaskinist av tredje klasse”. 
                    Læretiden ble avsluttet i 1951 fordi verneplikten måtte avlegges før karrieren til sjøs kunne påbegynnes.
                </p>

                <figure>
                    <img src={sertifikat} alt="Sertifikat - motormaskinist" />

                    <figcaption>Sertifikat etter endt læretid. Foto: privat.</figcaption>
                </figure>

                <p className="sertificate2">
                    Under verneplikten hadde Thormod blant annet stilling som kanonmann, maskinist og sveiser på Rauøy fort i Fredrikstad. 
                    Dette var noe han trivdes godt med og attesten kunne bekrefte at Thormod var en pliktoppfyllende og arbeidssom ung mann. 
                    I september 1952 fullførte han verneplikten. Som mange andre på den tiden, var Thormod da klar for å starte sin karriere til sjøs. 
                </p>
            </article>

            <section className="slider-section">
                <Slider images={sliderImages1}/>
            </section>

            <article className="boat">
                <figure>
                    <img src={båt} alt="Båt på havet" />

                    <figcaption>Foto: www.skipshistorie.net</figcaption>
                </figure>

                <h3>En 21-årings møte med verden</h3>

                <p>
                    7. Mars 1953 mønstret Thormod ombord på “MS Fern Gulf”. 
                    Et skip som i all hovedsak fraktet tørrlast med hjemmehavn i Oslo. 
                    Skipet hadde New York som destinasjon og skulle være ute til sjøs på ubestemt tid. 
                    Kameratskapet ombord var godt og Thormod fikk endelig oppleve det store Amerika. 
                    Noe han hadde sett frem i mot. Thormod trivdes også godt med tilværelsen på havet. 
                    Skipet var ute periodevis og hadde ulike destinasjoner verden rundt, New Orleans, Boston og Hong Kong for å nevne noen. 
                    Det var stort for 21-åringen fra Kråkerøy å reise jorden rundt. 
                    Det var ingen i familien som tidligere hadde gjort noe slikt, og historiene han fortalte til familien, ble som en slags eventyrstund. 
                </p>
            </article>

            <section className="slider-section">
                <Slider images={sliderImages2}/>
            </section>
            
            <article className="love">
                <h3>Den store kjærligheten</h3>

                <p>Da Thormod var hjemme på perm i 1956 traff han sitt livs kjærlighet. 
                    En vakker og tolmodig ung dame fra nabobyen Sarpsborg, Bjørg Andreassen. 
                    Selv med et forhold som tidvis bar preg av store avstander, uten noen form for umiddelbar kontakt, holdt de to sammen.
                </p>

                <figure>
                    <img src={tormodOgDama} alt="Tormod med kona" />

                    <figcaption>Thormod Asbjørnsen og Bjørg Andreassen. Foto: privat.</figcaption>
                </figure>
                

                <p>
                    I 1958 kom den gode nyheten om at de ventet sitt første barn. Thormod hadde på det tidspunktet en siste mønstringsperiode igjen før han skulle bytte ut livet på sjøen med jobb på trygg grunn. 
                    Under den siste turen skulle han reise med “MS Charente”, et skip som fraktet stykkgods. 
                    Reiseruten lød Oslo til San Fransisco, USA og Thormod gledet seg over at dette var den siste turen. 
                    Han hadde opplevd mye på de 6 årene han hadde jobbet. Etter å ha vært maskinist på 3 ulike skip var dette den siste turen, før et nytt kapittel startet for den lille familien.
                </p>

                <figure>
                    <img src={barnevogn} alt="Kona til Tormod med barnevogn" />

                    <figcaption>Bjørg med barnevogn. Foto: Privat.</figcaption>
                </figure>
                
            </article>

            <article className="drama">
                <h3>Dramatikken over Atlanteren</h3>

                <p>
                    En vårdag i 1959 kastet skipet loss fra kaien i Oslo og satte kursen mot San Fransisco. 
                    Overfarten gikk rolig for seg og Thormod hadde vakt i maskinrommet. Han utførte det daglige vedlikeholdet på skipets dieselmotor. 
                    Det var, foruten den gjenkjennelige støyen i maskinrommet, en stille og fredelig arbeidsdag.
                </p>

                <p>
                    Da Thormod skulle stramme den siste bolten på et oljekammer hørte han et kraftig smell, og før han visste ordet av det ble han kastet innover i det trange maskinrommet. 
                    Vannet kom fossende inn skipets skrogside og Thormod kjempet mot kreftene for å finne trappen som leder opp til lastedekket. 
                    I det han forsøkte å reise seg, kjente han en intens smerte i hele overkroppen. Thormod hadde store vansker med å få stablet seg på føttene. 
                    Kreftene fra det fossende vannet og det som senere viste seg å være brudd i mange ribbein, gjorde det vanskelig å komme seg opp.
                </p>

                <figure>
                    <img src={charente} alt="Skipet Charente." />

                    <figcaption>Foto: www.skipshistorie.net</figcaption>
                </figure>

                <p>
                    Hjemme på Kråkerøy satt en nybakt mor med sin førstefødte sønn i armene og ante ingenting om dramatikken som utfoldet seg på andre siden av kloden. 
                    Hun gledet seg til en ny hverdag med mer familietid og normale rutiner. På samme tidspunkt som Bjørg dagdrømte om fremtiden, kjempet Thormod for livet i et maskinrom. 
                </p>

                <p>
                    Han klarte til slutt å dra seg opp trappen på tross av de store vannmengdene og smertene fra ribbeinsbruddene. 
                    Ute på dekk, så han at skipet hadde kollidert med et annet lasteskip. Situasjonen på dekk var under kontroll og de fleste sjømennene slapp unna med mindre skader.
                </p>
            </article>

            <article className="safe">
                <h3>På trygg grunn</h3>

                <p>
                    Thormods siste periode til sjøs ble dramatisk, og savnet etter familien og lengten etter en forutsigbar hverdag ble stor. 
                    Da han ankom Fredrikstad etter sin siste reise ventet Bjørg og nyfødte Tom-Arild på kaien for å ta han i mot. 
                    Den lille familien var igjen gjenforent og i senere år fikk Thormod og Bjørg 2 barn til. 
                    De flyttet til Sarpsborg hvor Thormod startet som formann på Sarpsborg Mekaniske Verksted. 
                    Der bodde de i formannsboligen i 4 år før de senere kjøpte sitt eget hjem i Sarpsborg. Et hjem fylt med barnelatter, glede og mye folk. Han reiste aldri ut til sjøs igjen.
                </p>

                <figure>
                    <img src={family} alt="Thormod med familie."/>

                    <figcaption>Thormod med familie. Foto: privat.</figcaption>
                </figure>
            </article>
        </section>
    )
}