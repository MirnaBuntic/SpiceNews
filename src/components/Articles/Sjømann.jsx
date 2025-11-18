import tormod from "../../img/Sjømann/tormod.jpg"

import "../../styles/_sjømann.scss"

export default function Sjømann() {

    return (
        <section className="tormod-article">
            <article className="intro">
                <img src={tormod} alt="Tormod på båt" className="tormod"/>

                <p>
                    Blant motordur og verktøy nederst i skipet finner vi Thormod sittende på kne med en skiftenøkkel i hånden, han utfører daglig kontroll på skipets dieselmotorer. 
                    Plutselig går det et kraftig drønn gjennom maskinrommet og den unge maskinisten blir kastet gjennom rommet. 
                    Inn fosser det en stri strøm av vann.
                </p>

                <p>La oss spole tilbake.</p>
            </article>

            <article>
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
            </article>

            
        </section>
    )
}