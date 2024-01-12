import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (

  <div className={`${styles.flexCenter} w-[185px] h-[185px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>

    <div className={`${styles.flexCenter} bg-primary w-full h-full rounded-full`}>
        <p className="font-poppins font-medium text-[18px] mr-2">
          <span className="text-gradient">Commencer</span>        
        </p>
        <img
            src={arrowUp}
            alt="icone fleche"
            className="w-[23px] h-[23px] object-contain"
          />
    </div>
    
  </div>
)


export default GetStarted
