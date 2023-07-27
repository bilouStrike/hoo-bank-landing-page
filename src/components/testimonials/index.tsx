import { feedback } from "../../constants";
import FeedbackCard from "../feedbackCard";
import styles from "../../style";
import AnimateText from "../textAnimation";

const Testimonials = () => (
  <section className="mt-[170px] relative" id="Clients">
    <div className="absolute z-[0] w-[74%] h-[120%] -right-[53%] rounded-full blue__gradient bottom-40" />
    <div className={`${styles.boxWidth} flex-col relative`}>
        <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
                <h2 className={styles.heading2}>
                    What People are <br className="sm:block hidden" /> saying about us
                </h2>
                <div className="w-full md:mt-0 mt-6">
                    <AnimateText>
                        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
                        Everything you need to accept card payments and grow your business
                        anywhere on the planet.
                        </p>
                    </AnimateText>
                </div>
        </div>
        <div className="flex flex-col md:flex-row sm:justify-start justify-center w-full feedback-container relative z-[1]">
            {feedback.map((card, index) => 
                <FeedbackCard key={card.id} index={index} {...card} />
            )}
        </div>
    </div>   
  </section>
);

export default Testimonials;