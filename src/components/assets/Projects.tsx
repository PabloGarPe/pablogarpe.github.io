import { motion } from "motion/react"
import proj from "../../../public/projects.json"
import Project from "@/assets/Project"

const Projects = () => {
    return(
        <section className="projects" id="projects">
            <h2>Projects</h2>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                >
                <div className="projects-container">
                    {proj.projects.map((project, index) => {
                        return (
                            <Project key={index} id={index} title={project.title} description={project.description} link={project.link}
                            img={project.img} alt={project.alt} />
                        )
                    })}
                </div>
            </motion.div>
        </section>
    )
}

export default Projects