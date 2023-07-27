import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface AnimationTextProps {
    children: React.ReactNode;
    delay?: number
}

const AnimateText: React.FC<AnimationTextProps> = ({children, delay = 0}) => {

    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            mainControls.start("visible");
        }
    }, [isInView]);

    return (
        <div ref={ref}>
            <motion.div
                variants={{
                    hidden: {opacity: 0, y: 75},
                    visible: {opacity: 1, y: 0}  
                }}
                initial="hidden"
                animate={mainControls}
                transition={{duration: 0.3, delay: 0.20 + delay}}
            >
                {children}
            </motion.div>
        </div>
    )
}

export default AnimateText;