import exp from "../../../public/experience.json"
import Job from "@/assets/Job"
import { motion } from "motion/react"


const Experience = () => {
    return(
        <section className="experience" id="experience">
            <h2>Experience</h2>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                >
                {exp.experience.map((job, index) => {
                    return <Job key={index} id={index} name={job.name} start={new Date(job.start)} role={job.role} description={job.description} />
                })}
            </motion.div>
        </section>
    )
}

export default Experience