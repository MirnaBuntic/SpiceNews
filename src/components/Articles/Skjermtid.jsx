//Effekter
import ShowResult from "../Effects/showResults"

//Bilder
import pc_mobil from "../../img/Skjermtid/pc_og_mobil.png"
import mobil from "../../img/Skjermtid/mobil.png"
import pc from "../../img/Skjermtid/pc.png"

//Styles
import "../../styles/_skjermtid.scss"

export default function Skjermtid() {

    return (
        <section className="skjermtid-article">
            <img src={pc_mobil} alt="pc og mobil" className="pcMobil" />

            <h2>Skjermen: den nye virkeligheten</h2>

            <article className="intro">
                <p>Alarmen ringer, selvfølgelig på telefonen.
                    Du leter på nattbordet og under puten, strekker deg etter den, for å slumre i 10 minutter til.
                    Allerede før du har gnidd søvnen ut av øynene har du vært i kontakt med en skjerm.
                    Så kommer den obligatoriske sjekken av varslinger, sosiale medier og nettaviser.
                    Først etter dette kan dagen starte.
                </p>

                <p>
                    Før du har satt føttene i gulvet og karret deg veien til badet (eller kjøkkenet for en kaffe) har du i snitt brukt 15 minutter på telefonen.
                    Har vi helt glemt hvordan livet er uten?
                    Har vi glemt hvordan verden og omgivelsene rundt oss ser ut? 
                </p>
            </article>

            <article className="limb">
                <p>Vi lever i en digital tid hvor skjermen ikke lenger er et tilbehør, men har blitt en integrert del av kroppen vår. 
                </p>

                <img src={mobil} alt="Hånd som holder i en telefon"/>
            </article>

            <p className="limb2">
                Mobilen ligger ikke bare i lommen, den ligger i hånden, alltid klar til å levere små doser av dopamin hver gang en varsling dukker opp. 
                Den er ikke lenger bare et verktøy, den er blitt en ubevisst refleks. 
                Små lysglimt, vibrasjoner eller den tanken på at “noe nytt har skjedd”, får oss til å instinktivt sjekke telefonen. 
                Mange gjør denne refleksen helt ubevisst. Har du tenkt over hvor ofte du sjekker telefonen? 
            </p>

            <article className="scrolling">
                <h3>Avslappende støy</h3>

                <p>Begrepet “scrolling” har nesten blitt synonymet på å slappe av, men hvor avslappende er det egentlig når hjernen bombarderes med informasjon? 
                    Fenomenet med å “bare skulle sjekke en ting” eller “bare en video til” fører ofte til at tiden forsvinner i en endeløs strøm av klipp, bilder og oppdateringer. 
                    Det som skulle være fem minutter blir plutselig en time. 
                </p>
            </article>

            <ShowResult
                question="Tilbringer du mye tid på skjerm når du er med venner og familie?"

                answers={[
                    { id: "a", text: "Ja", count: 14.3 },
                    { id: "b", text: "Nei", count: 23.8 },
                    { id: "c", text: "Prøver å la være, men det er vanskelig .", count: 61.9 },
                ]}
            />

            <article className="scrolling">
                <h3>Fanget av vanen</h3>

                <p>Vi ønsket å få svar på hvordan folk generelt reflekterer rundt egen skjermtid. 
                    Vi utførte derfor en spørreundersøkelse på en gruppe, hvor aldersspennet strakk seg fra 18 – 50 +. 
                    Undersøkelsen resulterte i 21 svar, hvor over halvparten svarte at det er vanskelig å konsentrere seg når telefonen ligger i nærheten.
                </p>

                <p>
                    Hele 61,9% svarte at de prøver å la være å bruke mobilen rundt venner og familie, men innrømmer at det er svært vanskelig. 
                    Det viser seg at selv om vi er bevisste på vanene våre, er det langt fra enkelt å bryte dem.
                </p>
            </article>

            <article className="limb2">
                <h3>Den digitale barnevakten </h3>

                <p>
                    Barn og unge vokser opp i denne digitale verdenen. Mange lærer å sveipe før de lærer å knyte skolissene, og skjermen er alltid tilgjengelig for lett underholdning.
                </p>
            </article>

            <article className="limb digital">
                <img src={pc} alt="En person sitter foran pc"/>

                <p>
                    Foreldre setter regler, men sliter med å legge bort mobilen selv. 
                </p>
            </article>

            <p className="limb2">
                Dette gjenspeiles også i undersøkelsen at majoriteten av deltakerne bruker skjerm først og fremst til underholdning og sosiale medier, ikke til jobb eller skolearbeid.
            </p>
        </section>
    )
}