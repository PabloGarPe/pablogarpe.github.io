import { motion } from "motion/react"
import { useState } from "react"

const Header = () => {
    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => {
        document.documentElement.classList.toggle("dark");
        setIsOn(!isOn);
    }

    return (
        <header>
            <button 
            className = "toggle-container"
            onClick={toggleSwitch}
            style={{...container, justifyContent: isOn ? "flex-end" : "flex-start"}}
            >
                <motion.div 
                    style={handle}
                    className="toggle-handle"
                    layout 
                    transition={{ type: "spring",
                    visualDuration: 0.2,
                    bounce: 0.2, }} 
                />
            </button>
            <nav>
                <a href="#about">ABOUT</a>
                <a href="#experience">EXPERIENCE</a>
                <a href="#projects">PROJECTS</a>
                <a href="#contact">CONTACT</a>
            </nav>
        </header>
    )
}

export default Header

const handle = {
    width: 15,
    height: 15,
    backgroundColor: "var(--link-color)",
    borderRadius: "50%",
}

const container = {
    width: 75,
    height: 35,
    backgroundColor: "var(--background-color)",
    borderRadius: 50,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    padding: 10,
}