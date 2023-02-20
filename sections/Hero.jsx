'use client';
import { slideIn, staggerContainer, textVariant } from "@/utils/motion";
import { motion } from "framer-motion";
import styles from '../styles';
const Hero = () => (
    <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
        <motion.div className={ `${styles.innerWidth} mx-auto flex flex-col`} variants={staggerContainer} initial='hidden' whileInView="show" viewport={{once : false,amount:0.24}}>
            <div className="flex justify-center items-center flex-col relative z-10">
                <motion.h1 className={`${styles.heroHeading}`} variants={textVariant(1.1)}>
                    Lecerveaue
                </motion.h1>
                <motion.div variants={textVariant(1.2)} className="flex flex-row justify-center items-center">
                    <h1 className={styles.heroHeading}>Ma</h1>
                    <div className={styles.heroDText}/>
                    <h1 className={styles.heroHeading}>Ness</h1>
                </motion.div>
            </div>
            <motion.div className="relative w-full md:-mt-[20px] -mt-[12px]" variants={slideIn('right', 'tween', 0.2, 1)}>
                <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] x-[0] -top-[30px]"/>
                    <img src='/cover.png' alt = 'cover' className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"></img>
                    <a href="#explore">
                        <div className="h-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
                            <img src="/stamp.png"
                            alt ='stamp' className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
                            />
                        </div>
                    </a>
            </motion.div>
        </motion.div>
    </section>
)

export default Hero;
