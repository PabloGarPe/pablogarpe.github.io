const Project = (projectProps: ProjectProps) => {
    return (
        <div className="project-card">
            <h3>{projectProps.title}</h3>
            <p>{projectProps.description}</p>
            {projectProps.technologies && (
                <p><strong>Technologies:</strong> {projectProps.technologies.join(", ")}</p>
            )}
            <a href={projectProps.link} target="_blank" rel="noopener noreferrer">
                <img src={projectProps.img} alt={projectProps.alt} className="project-image" />
            </a>
        </div>
    )
}

export default Project

interface ProjectProps {
    id: number
    title: string
    description: string
    link: string
    img: string
    alt: string
    technologies?: string[]
}