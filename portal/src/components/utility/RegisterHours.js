import {useState} from "react"
import { DatePicker } from "@mui/x-date-pickers";
import { Alert, Box, Button, FormControl, Grid, InputAdornment, TextField } from "@mui/material";
import { updateWorklog } from "../../utils/sanity/services/worklogServices";
import PunchClockIcon from '@mui/icons-material/PunchClock'

export default function RegisterHours({prosjekt, setRegisterFormStatus}) {
    const [besk, setBesk] = useState(null)
    const [dato, setDato] = useState(null)
    const [timer, setTimer] = useState(null)
    const [error, setError] = useState(null)

    const handleBeskChange = (e) => {
        e.preventDefault()
        setBesk(e.target.value)
    }

    const handleTimerChange = (e) => {
        e.preventDefault()
        setTimer(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(besk === null || dato === null || timer === null ) {
            setError(1)
        } else {
            const result = await updateWorklog(prosjekt._id, besk, dato, timer)
            if(result === 1) {
                setBesk(null)
                setDato(null)
                setTimer(null)
                setError(null)
                setRegisterFormStatus(false)
            }
        }
    }
    return (
        <>
           
            
            <form>
                <Box sx={{padding: 2}}>
                    <h3>Registrer timer i {prosjekt.title} ({prosjekt.kundenavn})</h3>
                    {error === 1 ? <Alert severity="warning">Alle felter må være fylt ut</Alert> : null}
                    <Grid container spacing={2} sx={{padding:2}}>
                        <Grid xs={12} md={6}>
                            <FormControl fullWidth sx={{ p: 1 }}>
                                <TextField onChange={handleBeskChange} label="Beskrivelse av arbeid" variant="outlined" multiline cols={16} rows={4} />
                            </FormControl>
                        </Grid>
                        <Grid xs={12} md={3} sx={{ p: 1 }}>
                            <Box style={{marginBottom: 12}}>
                                <TextField InputProps={{startAdornment: (
                                        <InputAdornment position="start">
                                        <PunchClockIcon />
                                        </InputAdornment>
                                    ),
                                }} label="Antall timer" variant="outlined" onChange={handleTimerChange} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
                            </Box>
                            <Box>
                                <DatePicker label="Dato" onChange={(newValue) => setDato(newValue)} />
                            </Box>
                        </Grid>
                        <Grid xs={12} md={3}>
                        <Button variant="outlined" type="submit" onClick={handleSubmit}>Lagre</Button>
                        </Grid>
                    </Grid>
               </Box>
            </form>

        </>
    )
}