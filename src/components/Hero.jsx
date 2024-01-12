import styles from "../style";
import { discount, robot } from "../assets";

import GetStarted from "./GetStarted";

const Hero = () => (

  <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-10">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph}`}>
          <span className="text-white">20% </span>
          de promotion à l'inscription pendant {" "}
          <span className="text-white">1 mois</span>
        </p>
      </div>

      <div className="flex flex-row items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          Paiement <br className="sm:block hidden" /> {" "}
          Nouvelle <span className="text-gradient">Génération</span>
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>

      <p className={`${styles.paragraph} my-5`}>
        Notre équipe d'experts utilise une méthodologie ayant pour but d'identifier les cartes de crédit les plus susceptibles de répondre à vos besoins.
        Nous examinons les taux annuels en pourcentage ainsi que les frais annuels.
      </p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={robot} alt="facturation" className="w-full h-full relative z-[5]" />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>

    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </section>
)


export default Hero
