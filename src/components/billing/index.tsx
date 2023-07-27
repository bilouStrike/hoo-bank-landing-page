import styles, { layout } from "../../style"
import { bill, apple, google } from "../../assets";
import AnimateText from "../textAnimation";

const Billing = () => {
  return (
    <section>
        <div className={`${layout.section} ${styles.boxWidth}`}>
            <div className="flex-[1.3] md:mr-10 mr-0 md:mt-0 mt-10 relative">
                <img src={bill} className="w-[530px]"/>
            </div>
            <div className="flex-[1] flex justify-center items-start flex-col">
                <AnimateText>
                    <h3 className="text-[48px]">Easily control your billing & invoicing.</h3>
                    <p className={`${styles.paragraph} mt-6`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
                    <div className="flex justify-start mt-6">
                        <img src={apple} className="mr-6"/>
                        <img src={google}/>
                    </div>
                </AnimateText>
            </div>
        </div>
    </section>
  )
}

export default Billing
