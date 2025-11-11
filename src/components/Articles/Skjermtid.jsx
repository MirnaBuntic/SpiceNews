//Bilder
import pc_mobil from "../../img/Skjermtid/pc_og_mobil.png"

//Styles
import "../../styles/_skjermtid.scss"

export default function Skjermtid() {

    return (
        <section className="skjermtid-article">
            <img src={pc_mobil} alt="pc og mobil" className="pcMobil" />

            <h2>Skjermen: den nye virkeligheten</h2>


        </section>
    )
}