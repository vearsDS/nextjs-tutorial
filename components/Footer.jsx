'use client';
import styles from "@/styles";
import { footerVariants } from "@/utils/motion";
import { motion } from "framer-motion";
const Footer = () => (
    <motion.footer variants={footerVariants}
        initial='hidden'
        whileInView="show"
        className={`${styles.paddings} py-8 relative`}>
        <div className="footer-gradient"/>
        <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
            <div className="flex items-center justify-between flex-wrap gap-5">
                <h4 className="font-bold md:text-[64px] text-[44px] text-white">Enter The Lecerveaue</h4>
                <button className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]">
                    <img src="/headset.svg"
                        alt="headset"
                    className=""/>
                </button>
            </div>
        </div>
    </motion.footer>
)

export default Footer;