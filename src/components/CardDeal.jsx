import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (

  <section className={layout.section}>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        La meilleure offre, <br className="sm:block hidden" /> en quelques étapes.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Consultez nos différentes offres et choisissez celle qui correspond à vos besoins !</p>
      <Button styles="mt-10" />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="carte" className="w-full h-full" />
    </div>

  </section>
)

export default CardDeal
