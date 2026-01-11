import ThemeToggler from "@/assets/ThemeToggler"

const Header = () => {

    return (
        <header>
            <ThemeToggler />
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
