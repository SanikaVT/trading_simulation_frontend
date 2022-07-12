import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Information from './Information'




export default function Reservation() {
    const [value, setValue] = useState<Date | null>(
        new Date('2014-08-18T21:11:54'),
    );

    const handleChange = (newValue: Date | null) => {
        setValue(newValue);
    };
    const handleClick = (e: any) => {
        e.preventDefault();
        alert("Appointment make successfully")
    }
    return (

        <> <Box sx={{ flexGrow: 1 }}>

            <Grid spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 4, md: 6 }}  >
                <Grid item xs={2} sm={2} md={4}>
                    <Autocomplete
                        disablePortal
                        id="advisor"
                        options={advisor}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Advisor" />}
                    />
                </Grid>
                <Grid item xs={2} md={4} sm={2}>
                    <Autocomplete
                        disablePortal
                        id="city"
                        options={cities}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="City" />}
                    />
                </Grid>
                <Grid item xs={2} md={4} sm={2}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDatePicker
                            label="Date"
                            inputFormat="MM/dd/yyyy"
                            value={value}
                            onChange={handleChange}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>

                </Grid>


            </Grid>

            <Box component="span" sx={{ border: '1px dashed grey' }}>
                <Button variant="contained" endIcon={<SendIcon />} onClick={handleClick}>
                    Send
                </Button>
            </Box>

        </Box>
            <div>
                <Information />
            </div>
        </>






    );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const advisor = [
    { label: 'ALex', year: 1994 },
    { label: 'James', year: 1994 },
    { label: 'Rose', year: 1994 },

];

const cities = [
    { label: 'Halifax', year: 1994 },
    { label: 'Totonto   ', year: 1996 },
]

