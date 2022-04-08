import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProject } from "../utils/sanity/services/projectService";

export default function Project() {
    const {slug} = useParams();
    
    const [currentProject, setCurrentProject] = useState(null);

    const getProject = async (slug) => {
        const theProject = await fetchProject(slug);
        setCurrentProject(theProject[0]);
    }

    useEffect(() => {
        getProject(slug);
    }, [slug]);

    console.log(currentProject);

    

    return(<h1>{currentProject?.title}</h1>)
}