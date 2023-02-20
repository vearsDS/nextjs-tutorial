'use client';
import { InsightCard, TitleText, TypingText } from "@/components";
import { insights } from "@/constants";
import { staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import styles from '../styles';
const Insight = () => (
    <section className={`${styles.paddings} reative z-10`}>
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: 'false', amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex flex-col`}>
                <TypingText title="Insight" textStyles="text-center"/>
                <TitleText title="Insight About Lecerveaue" textStyles="text-center"/>
                <div className="mt-[50px] flex flex-col gap-[30px]">
                    {insights.map((insight, index) => (
                        <InsightCard key={`insight-${index}`} {...insight} index={index+1} />
                    ))}
                 </div>
        </motion.div>
        
    </section>
)

export default Insight;
