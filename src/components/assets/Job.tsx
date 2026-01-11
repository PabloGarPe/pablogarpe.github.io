const Job = (props:JobProps) => {
    const now = new Date();
    return (
        <div className="job" id={props.id as string + " - job"}>
            <h3>{props.name}</h3>
            <h4>{props.role} | {props.start.toLocaleDateString("es-ES", { day:'2-digit',year: 'numeric', month: 'long' })}</h4>
            <h5>{(now.getFullYear() - props.start.getFullYear()) *12 + (now.getMonth() - props.start.getMonth())} months</h5>
            <p>{props.description}</p>
        </div>
    )
}

export default Job

interface JobProps {
    id: string | number;
    name: string;
    start: Date;
    role: string;
    description: string;
}