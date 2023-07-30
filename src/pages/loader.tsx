import { motion } from "framer-motion";
import styles from "../styles/Loader.module.css"

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: any) => {
        const delay = 1 + i * 0.1
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: 'spring', duration: 1.5, bounce: 0 },
                opacity: { delay, duration: 0.01 }
            }
        }
    }
}



const Loader = ({loading}: any) => {
    const handleTransitionEnd = () => {
        document.querySelector('.loader')?.classList.add('hidden')
        document.querySelector('body')?.classList.remove('disable-scroll');
    }
    return (
        <>
            <div className={`loader absolute top-0 left-0 z-50 w-screen h-screen bg-[#0f0f0f] overscroll-auto ${styles['loader-container']} ${loading ? '' : styles.hidden}`} onTransitionEnd={handleTransitionEnd}>
                <div className='w-[inherit] h-[inherit] flex flex-col items-center justify-center'>
                    <motion.svg
                        width="200"
                        height="200"
                        viewBox="0 0 200 200"
                        initial="hidden"
                        animate="visible"
                        className={'rotate-90'}
                    >
                        <motion.circle
                            cx="100"
                            cy="100"
                            r="80"
                            stroke="#ffffff"
                            fill="#0f0f0f"
                            strokeWidth={4}
                            variants={draw}
                        />
                    </motion.svg>
                    <p>NEJC FERJAN</p>
                </div>
            </div>
        </>
    )
}

export default Loader;