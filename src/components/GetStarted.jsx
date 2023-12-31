import styles from "../style";
import {arrowUp } from '../assets';


const GetStarted = () =>(
     <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer  hover:bg-yellow-300 `}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium leading-[23px] text-[18px] mr-3">
            <span className="text-gradient">Get</span>
          </p>
          <img src={arrowUp} alt="" className="w-[23px] h-[23px] object-contain"/>
        </div>
        <p className="font-poppins font-medium leading-[23px] text-[18px]">
            <span className="text-gradient">Started</span>
          </p>
      </div>
     </div>
)

export default GetStarted