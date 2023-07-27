import styles, { layout } from "../../style";
import { stats } from "../../constants";
import AnimateText from "../textAnimation";

const State = () => {
  return (
    <section>
        <div className={`${layout.section} ${styles.boxWidth} flex-wrap`}>
            {stats.map((stat) => (
                <div key={stat.id} className={`flex-1 flex justify-center md:justify-start items-center flex-row m-3`} >
                    <AnimateText>
                    <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
                        {stat.value}
                    </h4>
                    </AnimateText>

                    <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
                        {stat.title}
                    </p>
                </div>
            ))}  
        </div>
    </section>
  )
}

export default State