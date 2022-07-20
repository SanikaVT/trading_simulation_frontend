//author: qiwei sun
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Information from './Information';
import { useEffect, useState } from "react";
import axios from "axios"



// reservation page allowded user to make a appointment and show the appointment made by the user and 
export default function Reservation() {

    //initialize the data
    const [value, setValue] = useState<Date | null>(new Date());
    interface characterData {
        id: number;
        title: string,
        lastName: string,
        firstName: string,
        age: number,
        address: string,
        email: string
    }
    const [data, setData] = useState<characterData[]>([]);
    const [advisorName, setAdvisorName] = useState('')
    const [address, setAddress] = useState('')

    // get data when load the page
    useEffect(() => { fetchData() }, [])
    const fetchData = () => {
        axios.get('/api/advisor').then((result) => {
            if (result.data.advisor) {
                setData(result.data.advisor)

            }


        }).catch((err) => {
            console.log('error')
            console.log(err);
        })
    }
    // get full name of the advisor 
    const advisor = data.map(advisor => advisor.firstName.concat("-").concat(advisor.lastName))

    // create a appointment
    const handleClick = (e: any) => {
        axios.get('/api/advisor/' + advisorName).then((result) => {
            const data = { fullName: advisorName, address: address, date: value, email: result.data.advisor.email, firstName: result.data.advisor.firstName, lastName: result.data.advisor.lastName, age: result.data.advisor.age, userID: parseInt(localStorage.getItem("userID") || "") }
            axios.post('/api/appointment/', data).then((result) => {
                window.location.reload();
            }).catch((err) => {
                console.log('error')
                console.log(err);
            })
            alert("Appointment make successfully")

        }).catch((err) => {
            console.log('error')
            console.log(err);
        })
    }
    // if user logged in, show list of the appointment that user has been made
    if (localStorage.getItem("userID")) {
        return (
            <> <Box sx={{ flexGrow: 1 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}  >
                    <Grid item xs={2} sm={2} md={4} sx = {{gap: 1}} >
                        <Autocomplete
                            onChange={(event, value) => value ? setAdvisorName(value) : null}
                            disablePortal
                            id="advisor"
                            options={advisor}
                            sx={{ width: 300 ,gap: 2 }}
                            renderInput={(params) => <TextField {...params} label="Advisor" />}
                        />
                    </Grid>
                    <Grid item xs={2} md={4} sm={2}>
                        <Autocomplete
                            onChange={(event, value) => value ? setAddress(value.label) : null}
                            disablePortal
                            id="city"
                            options={cities}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="City" />}
                        />
                    </Grid>
                    <Grid item xs={2} md={4} sm={2}>

                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DateTimePicker
                                renderInput={(props) => <TextField {...props} />}
                                label="DateTimePicker"
                                value={value}
                                onChange={(newValue) => {
                                    setValue(newValue);
                                }}
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
    
    } else {
        // if user not loggined     
        return (
            <>your need to log in to book an appointment</>
        )

    }
}

const cities = [
    { label: 'Halifax' },
    { label: 'Totonto   ' },
    { label: 'Quebec City' }
]

