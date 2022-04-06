import client from "../client";

export const fetchAllProjects = async () => {
    const projects = client.fetch(`*[_type == "project"]{..., customer->}`)
    return projects
}

export const fetchProject = async (slug) => {
    const project = client.fetch(`*[_type == "project" && slug == $slug]{..., customer->}`,{slug})
    return project?.[0]
}