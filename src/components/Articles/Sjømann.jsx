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

import Slider from "../Effects/Slider"

import "../../styles/_sjømann.scss"

export default function Sjømann() {

    const sliderImages1 = [
        { src: krigskort, alt: "Krigstjenestekort", caption: "Krigstjenestekort" },
        { src: attest, alt: "Attest", caption: "Attest" },
    ]

    const sliderImages2 = [
        { src: avregningsbok, alt: "Avregningsbok fra 1952.", caption: "Avregningsbok fra 1952." },
        { src: femton, alt: "Side 15 fra avregningsboken.", caption: "Side 15 fra avregningsboken." },
        { src: sytten, alt: "Side 17 fra avregningsboken.", caption: "Side 17 fra avregningsboken." },
        { src: tjuetre, alt: "Side 23 fra avregningsboken.", caption: "Side 23 fra avregningsboken." },
    ]

    return (
        <section className="tormod-article">
            <article className="intro">

                <img src={tormod} alt="Tormod på båt" className="tormod"/>

                <h2>Et liv på åpent hav</h2>

                <p>
                    Blant motordur og verktøy nederst i skipet finner vi Thormod sittende på kne med en skiftenøkkel i hånden, han utfører daglig kontroll på skipets dieselmotorer. 
                    Plutselig går det et kraftig drønn gjennom maskinrommet og den unge maskinisten blir kastet gjennom rommet. 
                    Inn fosser det en stri strøm av vann.
                </p>

                <p>La oss spole tilbake.</p>
            </article>

            <article className="sertificate">
                <p>
                    Thormod Asbjørnsen ble født 6.mars 1931 på Kråkerøy, Fredrikstad. 
                    Her vokser han opp med 1 bror og øvrig familie tett på. 
                    Han er en aktiv, pliktoppfyllende og skoleflink gutt.
                </p>

                <p>
                    Da han var 15 år i august 1946, startet læretiden hos Fredrikstad mekaniske verksted med en varighet på 9 halvår. 
                    Han startet lærertiden sin med stilling som Dreier og skal gjennom læretiden tilegne seg den kunnskapen som kreves for å få utstedt sertifikat som motormaskinist av tredje klasse. 
                    Læretiden avsluttes i 1951 og verneplikten må avlegges før karrieren til sjøs kan påbegynnes.
                </p>

                <img src={sertifikat} alt="Sertifikat - motormaskinist" />

                <p className="sertificate2">
                    Under verneplikten har Thormod blant annet stilling som kanonmann, maskinist og sveiser på Rauøy fort i Fredrikstad. 
                    Dette var noe han trivdes godt med og attesten kan bekrefte at Thormod var en pliktoppfyllende og arbeidssom ung mann. 
                    I september 1952 fullførtes verneplikten og som mange andre på den tiden, var Thormod klar for å starte en karriere til sjøs.
                </p>
            </article>

            <section className="slider-section">
                <Slider images={sliderImages1}/>
            </section>

            <article className="boat">
                <img src={båt} alt="Båt på havet" />

                <p>
                    7. Mars 1953 mønstrer Thormod på “MS Fern Gulf”, et skip som i all hovedsak fraktet tørrlast med hjemmehavn i Oslo. 
                    Skipet har New York som destinasjon og skal være ute til sjøs på ubestemt tid. 
                    Kameratskapet ombord var godt og Thormod fikk endelig oppleve det store Amerika, dette var noe han hadde sett frem i mot og han trivdes godt til sjøs. 
                    Skipet var ute periodevis og hadde ulike destinasjoner verden rundt, New Orleans, Boston og Hong Kong for å nevne noen. 
                    Det var stort for 21-åringen fra Kråkerøy å reise jorden rundt, det var ingen i familien som tidligere hadde gjort noe slikt, og historiene han fortalte til familien da han var hjemme, ble som en slags eventyrstund.
                </p>
            </article>

            <section className="slider-section">
                <Slider images={sliderImages2}/>
            </section>
            
            <section className="flex">
                <article className="flex1">
                    <p>hej</p>

                    <img src={tormodOgDama} alt="Tormod med kona" />
                </article>

                <article className="flex2">
                    <p>hej</p>

                    <img src={barnevogn} alt="Kona til Tormod med barnevogn" />
                </article>
            </section>

            <p>hej</p>
        </section>
    )
}