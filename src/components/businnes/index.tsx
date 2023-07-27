import styles, { layout } from "../../style"
import { features } from "../../constants";
import Button from "../button";
import AnimateText from "../textAnimation";

const Business = () => (
    <section className="w-full" id="Features">
        <div className={`${layout.section} ${styles.boxWidth} gap-7`}>
            <div className="flex-[1.3] sm:block flex flex-col justify-center md:justify-start">
                <AnimateText>
                    <h2 className="text-5xl font-semibold leading-[76px]">You do the business,<br/> we’ll handle the money.</h2>
                    <p className={`${styles.paragraph} max-w-[540px] mt-6`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
                <Button text="Get Started" />
                </AnimateText>
            </div>
            <div className="flex-[1] flex flex-col justify-center">
                {features.map((feature, index) => 
                    <AnimateText delay={index / 4}>
                        <div className="flex flex-row items-center p-6 gap-5">
                            <div className="p-6 bg-[#02141b] rounded-[50%]">
                                <img src={`${feature.icon}`} className="w-[40px]"/>
                            </div>
                            <div className="flex flex-col">
                                <h4 className="text-lg">{feature.title}</h4>
                                <p className="text-base font-light text-dimWhite">{feature.content}</p>
                            </div>
                        </div>  
                    </AnimateText>
                )}
            </div>
        </div>
    </section>
)

export default Business