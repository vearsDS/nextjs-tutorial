'use client';
import { NewFeature, TitleText, TypingText } from "@/components";
import { newFeatures } from "@/constants";
import { fadeIn, planetVariants, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import styles from '../styles';
const WhatsNew = () => (
    <section className={`${styles.paddings} reative z-10`}>
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: 'false', amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}>
            
            <motion.div
                variants={fadeIn('right','tween', 0.2,1)}
                className={`flex-[0.75] flex justify-center flex-col`}>
                <TypingText title="| Whats New" />
                <TitleText title={<>Whats New About GoldenLecerveau</>} />
                <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
                    {newFeatures.map((feature) => (
                        <NewFeature
                            key={feature.title}
                            {...feature} />

                    ))}
                </div>
            </motion.div>
            <motion.div
                variants={planetVariants('right')}
                className={`${styles.flexCenter} flex-1`}>
                <img src='/whats-new.png'
                    alt="whats-new"
                className= "w-[90%] h-[90%] object-contain"/>
            </motion.div>
        </motion.div>
    </section>
)

export default WhatsNew;
