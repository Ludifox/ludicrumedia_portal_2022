import { Button, Drawer, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProject } from "../utils/sanity/services/projectService";
import RegisterHours from "./utility/RegisterHours";
import Worklog from "./Worklog";

export default function Project() {
    const {slug} = useParams();
    
    const [currentProject, setCurrentProject] = useState(null);
    const [registerFormStatus, setRegisterFormStatus] = useState(false)

    const getProject = async (slug) => {
        const theProject = await fetchProject(slug);
        setCurrentProject(theProject[0]);
    }

    useEffect(() => {
        getProject(slug);
    }, [slug]);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setRegisterFormStatus(open);
      }

    console.log(currentProject);

    return(
        <section id="project">
            <Grid container columns={2}>
                <Grid xs={2} md={1}>
                    <h2>{currentProject?.kundenavn}: {currentProject?.title}</h2>
                    <p>{currentProject?.description}</p>
                    <Button variant="outlined" onClick={toggleDrawer(true)}>Registrer arbeidstimer</Button>
                </Grid>
                <Grid xs={2} md={1}>
                    <Worklog log={currentProject?.worklog} />
                </Grid>
            </Grid>
        <Drawer anchor="bottom" open={registerFormStatus} onClose={toggleDrawer(false)}><RegisterHours setRegisterFormStatus={setRegisterFormStatus} prosjekt={currentProject} /></Drawer>
        </section>
    )
}