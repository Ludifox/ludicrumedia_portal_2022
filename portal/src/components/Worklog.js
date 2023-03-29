import { Box, Grid } from "@mui/material"
import { blueGrey } from "@mui/material/colors"
import dayjs from "dayjs"

export default function Worklog({log}) {
    let totalHours = 0
    console.log(log)
    return (
        <section id="worklog">
            <h3>Arbeidslogg</h3>
            <Grid container spacing={2} rowSpacing={2} columns={12} style={{fontWeight: 600, backgroundColor: blueGrey}}>
                <Grid item={true} xs={6} md={3} lg={2}>Dato</Grid>
                <Grid item={true} xs={6} md={3} lg={2}>Timeantall</Grid>
                <Grid item={true} xs={12} md={6} lg={8}>Arbeidsbeskrivelse</Grid>
            </Grid>
            {log ? 
            log.map((w) => {
                const adato = dayjs(w.dato, "YYYY-MM-DD")
                totalHours = totalHours + Number(w.timer)
                return (<Box key={w._key} sx={{flexGrow: 1}}>
                    <Grid container spacing={2} rowSpacing={2} columns={12} style={{marginBottom: 5}}>
                        <Grid item={true} xs={6} md={3} lg={2}>{adato.$D+"."+adato.$M+"."+adato.$y}</Grid>
                        <Grid item={true} xs={6} md={3} lg={2}>{w.timer}</Grid>
                        <Grid item={true} xs={12} md={6} lg={8}>{w.beskrivelse}</Grid>
                    </Grid>
                </Box>)
            })
            : <Grid container columns={1}><Grid item={true} xs={1}>Ingen oppførte arbeidstimer enda</Grid></Grid>}
            <p>Totalt antall timer: {totalHours}</p>
        </section>

    )
}