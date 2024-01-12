import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (

  <section id="product" className={layout.sectionReverse}>

    <div className={layout.sectionImgReverse}>

      <img src={bill} alt="facturation" className="w-full h-full relative z-[5]" />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />

    </div>

    <div className={layout.sectionInfo}>
      
      <h2 className={styles.heading2}>Contrôlez facilement vos <br className="sm:block hidden" /> frais & facturation.</h2>
      <p className={`${styles.paragraph} max-w-[470] mt-5`}>Réalisez et surveillez vos paiements et transactions à tout moment via notre application.</p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="apple_store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_store" className="w-[128px] h-[42px] object-contain cursor-pointer" />
      </div>

    </div>
  </section>
)


export default Billing
