import lasse from "../../img/Lasse/lasse.jpg"
import lasseDama from "../../img/Lasse/lasseOgDama.jpg"
import lasseUng from "../../img/Lasse/lasse-ung.jpg"
import produkter from "../../img/Lasse/produkter.png"
import basement from "../../img/Lasse/basement.jpg"
import lasseDama2 from "../../img/Lasse/lasse-dama2.jpg"
import logo from "../../img/Lasse/logo.png"
import hest from "../../img/Lasse/hest.jpg"
import tegning from "../../img/Lasse/tegning.png"
import jacket from "../../img/Lasse/jacket.jpg"
import c2e from "../../img/Lasse/c2e.jpg"
import c2ehest from "../../img/Lasse/c2ehest.jpg"
import light from "../../img/Lasse/light.png"

import Slider from "../Effects/Slider"
import SwapPic from "../Effects/SwapPic"
import ZoomTransition from "../Effects/ZoomTransition"
import ScrollText from "../Effects/ScrollText"

import "../../styles/_lasse.scss"

export default function Lasse() {

    const transitionDuration = 3;

    const sliderImages = [
        { src: lasse, alt: "Lasse Julsen", caption: "Lasse Julsen, 59år. Foto: privat." },
        { src: lasseDama, alt: "Lasse og kona", caption: "Gift, har 3 voksne barn og en hund. Foto: privat." },
        { src: lasseUng, alt: "Lasse som ung", caption: "Bodd i Sarpsborg hele livet. Foto: Jarl M. Andersen." },
        { src: hest, alt: "Lasse med hest", caption: "Over 40 års erfaring med tekstilindustri og klesproduksjon. Foto: Lasse Julsen." },
        { src: produkter, alt: "Produkter som Lasse har designet", caption: "Har jobbet for store merker. Blant annet Kingsland og Hést. Foto: Lasse Julsen." },
    ]

    console.log("c2e, c2ehest i Lasse:", c2e, c2ehest)

    return (
        <section className="lasse-article">

            <img
                src={light}
                alt="Lasses kjeller illustrert i en lyspære"
                className="spin-pic"
            />

            <article className="intro">
                <h2>Et liv i tekstil - nå syr Lasse sin egen drøm</h2>

                <p>
                    Har du noen gang hatt en drøm om å starte et eget selskap? 
                    Tanken på å være sin egen sjef har streifet pannelappen hos de fleste av oss. 
                    Det å kunne vie arbeidshverdagen til noe én virkelig brenner for, forblir for mange kun en drøm. 
                    En som har gjort drømmen om til virkelighet er Lasse Julsen.
                </p>
            </article>

            <article>
                <section className="slider-section lasse-slider">
                    <h3>5 raske fakta om Lasse:</h3>

                    <Slider images={sliderImages}/>
                </section>
            </article>

            <article>
                <h3 className="lasse-h3">“Hvorfor gjør vi det her for alle andre?”</h3>

                <div className="lasse-flex">
                    <p>
                        Vi befinner oss i Mørchs vei på Opsund, et rolig boligområde like utenfor Sarpsborg sentrum. 
                        Her bor Lasse med sin kone Hege og hunden Alvin. 
                        I husets kjeller ligger kontoret hvor ideen til et eget firma ble skapt. 
                    </p>

                    <img src={basement} alt="Lasses kjeller" />
                </div>
            </article>

            <article className="background">
                <p>
                    Med bakgrunn fra blant annet markedsføring på BI, IT-administrasjon hos Næringsakademiet, butikksjef i Boomerang, Domus og Cityklær har Lasse opparbeidet seg mye kunnskap om klesproduksjon og tekstil. 
                    I de senere årene har han jobbet for store merker som Kingsland og Hést. 
                    Sammenlagt har Lasse opparbeidet seg over 40 år med erfaring innenfor tekstilindustri.
                </p>

                <p>
                    I både Kingsland og Hést jobbet Lasse under ledelse av Marianne Kjærnli Fossum. 
                    Etter mange år sammen i begge bedriftene var de nå sultne på å starte noe eget. 
                    Spørsmålet “hvorfor gjør vi det her for alle andre?” ble stadig en gjenganger. 
                    Dette førte til at Lasse og Marianne tok en beslutning. 
                    Våren 2023 startet offisielt arbeidet med ridesportens nyeste merke: C2E (See To Equestrian).
                </p>

                <img src={lasseDama2} alt="Lasse og kona" />
            </article>

            <article className="design">
                <h3>Mer enn bare en designer</h3>

                <p>
                    Det å starte en egen bedrift og eget merke krever at man har kompetanse på mange områder. 
                    Marianne (som tidligere daglig leder i Kingsland og Hést) hadde kunnskapen om hvordan å drive en bedrift. 
                    Lasse hadde på sin side lang erfaring med produksjon, fortolling, markedsføring, kjennskap til fabrikker og kunnskap om design av diverse klær og accessoirer.
                </p>

                <p>
                    - For det som er når man jobber i små og mellom store selskaper er at man må ha litt forskjellige hatter, forteller Lasse.
                </p>

                <p>
                    Sammen laget de en forretningsplan med budsjett og skisserte opp en kolleksjon. 
                    Ettersom verken Marianne eller Lasse satt med egen kapital, ble de nødt til å se etter en investor. 
                    De gjennomførte en “salgspitch” for et investeringsbyrå og ble plutselig stoppet midtveis i pitchen.
                </p>

                <p>
                    - Så sier han, STOPP, jeg skal være med på det her, forteller Lasse.
                </p>

                <figure>
                    <img src={logo} alt="Logo" />

                    <figcaption>Illustrasjon/Logo: Lasse Julsen</figcaption>
                </figure>

                <p>
                    Fra det punktet forhandlet de frem en avtale om at både Marianne og Lasse fikk lønn fra dag 1. 
                    Selskapet C2E består da av en passiv eier med 50,1 prosent mens Lasse og Marianne eier 24,9 prosent hver. 
                    Alle bedriftens ledd og stillinger har derfor vært besatt av de to. Lasse forteller at han gjør alt designarbeidet, produksjon med logistikk, design av klær og salgsmateriell, vedlikehold av sosiale plattformer og oppdatering av nettbutikken.
                </p>

                <p>
                    - Alt inntil varene er på lager, så må hun sørge for at varene blir solgt, dra på messer, besøke butikker, snakke med selgere og den biten der, sier han.
                </p>
            </article>

            <SwapPic
                startImage={tegning}
                startAlt="Design-tegning av sort jakke"
                endImage={jacket}
                endAlt="Sort jakke"
                className="swap"
                start="top 40%"
            />

            <article className="market1">
                <h3>Finne sin plass i markedet</h3>

                <p>
                    Under oppstarten av et nytt merke måtte bedriften bestemme seg for hvor de skulle posisjonere seg i dagens marked. Lasse forteller at de ønsket ikke å konkurrere på pris, men heller å konkurrere på kvalitet, design, funksjonalitet og slitestyrke.
                </p>

                <p>
                    - Det betyr jo at varene våre også koster litt mer, men det er bevisst at vi har lagt oss inn der, sier han.
                </p>

                <p>
                    Lasse forteller at dagens marked og kunder stiller også krav til hvilket stoff som blir brukt, hvordan plaggene blir produsert, dyrevelferd og sosiale rettigheter hos fabrikkene de samarbeider med. 
                    Alle kravene har innvirkning på plaggets pris og stiller samtidig krav til at bedriften tenker på bærekraft.
                </p>

                <p>
                    - Det å velge resirkulert polyester, fremfor ny polyester gjør at man tar del i kretsløpet på en annen måte da, konkluderer han.
                </p>
            </article>

            <article className="market2">
                <h3>Å tegne en genser, det klarer alle</h3>

                <p>
                    På spørsmål om han har noen gode råd til de som sitter med en drøm innenfor tekstil svarer han slik: - Jo mer du kan, jo kortere er veien til suksess og jo mindre du kan, jo lengre er det, forteller han. 
                    Videre tipser Lasse om at det kan være lurt å finne ut av hvilke egenskaper man har selv, men også sette seg godt inn i hvem som tilbyr produksjon til Norge. 
                    - Norge er et fryktelig lite land, så du må finne noen produsenter som passer, sier han. Å skaffe seg innsikt i fortolling, eksportdokumenter, importdokumenter, tolltariffer, økonomi, kalkulasjon og økonomi er også noe Lasse vektlegger i sine råd. 
                    - Det er veldig mye mer å sette seg inn i, enn bare å tegne den genseren, sier han med et smil.
                </p>
            </article>

            <section className="transition-block">
                <ZoomTransition
                    imageStart={c2e}
                    imageEnd={c2ehest}
                    altStart="Modeller"
                    altEnd="Jente på hest"
                    startScale={1}
                    endScale={1.5}
                    transitionDuration={transitionDuration}
                    className="lasse-zoom"
                />

                <ScrollText transitionDuration={transitionDuration} className="scroll-lasse">
                    <p>
                        Bedriften C2E er stadig i vekst. I skrivende stund er varene Lasse har produsert tilgjengelig for kunder i Norge, Sverige, Danmark, Holland, Belgia og Irland. 
                        C2E har også lansert nettbutikk med mulighet for shipping til hele verden. Videre på agendaen står det å finne salgs-agenter i Tyskland. 
                        Det blir spennende å se på utviklingen til C2E.
                    </p>

                    <p className="p2">Ønsker du å ta en titt på varene Lasse og Marianne har laget kan du besøke nettbutikken her:</p>

                    <a href="www.c2e.site">www.c2e.site</a>
                </ScrollText>

            </section>
    

            
        </section>
    )
}