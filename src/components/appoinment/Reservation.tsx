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
import Advisor from './Advisor';
import { gridColumnPositionsSelector } from '@mui/x-data-grid';




export default function Reservation() {

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


    useEffect(() => { fetchData() }, [])

    const fetchData = () => {
        axios.get('/api/advisor').then((result) => {
            if(result.data.advisot){
                setData(result.data.advisor)
            }
            
            
        }).catch((err) => {
            console.log('error')
            console.log(err);
        })
    }
    const advisor = data.map(advisor => advisor.firstName.concat("-").concat(advisor.lastName))

    
    const handleClick = (e: any) => {
        
        axios.get('/api/advisor/' + advisorName).then((result) => {
            const data = { fullName: advisorName, address: address, date: value, email: result.data.advisor.email, firstName: result.data.advisor.firstName, lastName: result.data.advisor.lastName, age: result.data.advisor.age, userID: parseInt(localStorage.getItem("userID") || "") }
            console.log({data})
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
       
        
        alert("Appointment make successfully")
    }
    if (localStorage.getItem("userID")){
        return (

            <> <Box sx={{ flexGrow: 1 }}>

                <Grid spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 4, md: 6 }}  >
                    <Grid item xs={2} sm={2} md={4}>
                        <Autocomplete
                            onChange={(event, value) => value ? setAdvisorName(value) : null}
                            disablePortal
                            id="advisor"
                            options={advisor}
                            sx={{ width: 300 }}
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
        
    }else{
        return(
            <>your need to log in to book an appointment</>
        )
        
    }

    
}


const cities = [
    { label: 'Halifax' },
    { label: 'Totonto   ' },
    { label: 'Quebec City' }
]

