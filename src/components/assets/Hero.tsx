import { motion } from "motion/react"

const Hero = () => {
    return (
        <section className="hero" id="about">
                <motion.img 
                    src="/image.webp" 
                    alt="Profile Picture"
                    className="picture"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", visualDuration: 0.3, bounce: 0.3 }}
                />
                <div className="hero-text">
                    <motion.h1
                        initial={{ y: -250 }}
                        animate={{ y: 0 }}
                        transition={{ type: "spring", visualDuration: 0.5, bounce: 0.3 }}
                    >
                        PABLO GARCÍA PERNAS
                    </motion.h1>
                    <motion.p
                        initial={{ opacity:0 }}
                        animate={{ opacity:1 }}
                        transition={{ delay: 0.5, type:"spring",visualDuration: 0.5, bounce: 0.3 }}
                    >
                        A passionate web developer crafting beautiful and functional digital experiences. <br />
                        I'm currently studying Computer Engineering and Maths at the University of Oviedo, Asturias.
                    </motion.p>
                </div>
            </section>
    )
}

export default Hero