import { useState } from "react";
import { motion } from "motion/react";
import ThemeToggler from "@/assets/ThemeToggler";

const Hamburger = () => {
    const [isOpen, setOpen] = useState(false);
    const toggleMenu = () => {
        console.log(isOpen);
        setOpen(!isOpen);
    }
  return (
    <>
    <div className="hamburger" onClick={toggleMenu}>
        <div className="line" />
        <div className="line" />
        <div className="line" />
    </div>
    <motion.div
        initial={{ opacity:0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ type: "decay", duration: 0.3 }}
    >
        <div className={`menu ${isOpen ? "open" : ""}`}>
            <a href="#" className="close" onClick={toggleMenu}>&times;</a>
            <a href="#about" onClick={() => setOpen(false)}>ABOUT</a>
            <a href="#experience" onClick={() => setOpen(false)}>EXPERIENCE</a>
            <a href="#projects" onClick={() => setOpen(false)}>PROJECTS</a>
            <a href="#contact" onClick={() => setOpen(false)}>CONTACT</a>
            <ThemeToggler hamburger/>
        </div>
    </motion.div>
    </>
    )
}
export default Hamburger