import {useEffect, useState} from 'react'
import './css/main.css';
import ProjectCard from './components/ProjectCard';
import { fetchAllProjects } from './utils/sanity/services/projectService';

function App() {
  const [projects, setProjects] = useState();

  const getAllProjects = async () => {
    const allProjects = await fetchAllProjects();
    setProjects(allProjects);
  }

  useEffect(() => {
    getAllProjects();
  }, [])

  return (
    <main>
      {projects?.map((project) => <ProjectCard key={project._id} project={project} />)}
    </main>
  );
}

export default App;
