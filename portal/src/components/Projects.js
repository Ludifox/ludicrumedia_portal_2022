import { useEffect, useState } from "react";
import { fetchAllProjects } from "../utils/sanity/services/projectService";
import ProjectCard from "./ProjectCard";

export default function Projects() {
    const [projects, setProjects] = useState();

    const getAllProjects = async () => {
        const allProjects = await fetchAllProjects();
        setProjects(allProjects);
    }

    useEffect(() => {
        getAllProjects();
    }, [])

    return (
        <><h1>Prosjekter</h1>
        <section className="cardFlex projects">
            {projects?.map((project) => <ProjectCard key={project._id} project={project} />)}
        </section></>
    )
}