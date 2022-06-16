import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Stack from '@mui/material/Stack';
import {Card, Grid} from "@mui/material";
import "./Datepicker.css";
// import {useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";
import PortfolioTable from "./PortfolioTable"
import {useState} from "react";

export default function ResponsiveDatePickers() {
    const [valueFrom, setValueFrom] = React.useState<Date | null>(new Date());
    const [valueTo, setValueTo] = React.useState<Date | null>(new Date());
    // const navigate = useNavigate();
    // const routeChange = () =>{
    //     let path = `/`;
    //     navigate(path);
    // }
    const [show, setShow] = useState(false);

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
                <Card className="margin">
                    <Grid container direction="row" alignItems="center" justifyContent="center" spacing={4} >
                        <Grid item>
                            <DesktopDatePicker className="margin"
                                               disableFuture
                                               label="From"
                                               openTo="year"
                                               views={['year', 'month', 'day']}
                                               value={valueFrom}
                                               onChange={(newValue) => {
                                                   setValueFrom(newValue);
                                               }}
                                               renderInput={(params) => <TextField {...params} />}
                            />                        </Grid>
                        <Grid item>
                            <DesktopDatePicker className="margin"
                                               label="To"
                                               value={valueTo}
                                               minDate={new Date('2017-01-01')}
                                               onChange={(newValue) => {
                                                   setValueTo(newValue);
                                               }}
                                               renderInput={(params) => <TextField {...params} />}
                            />                        </Grid>
                    </Grid>
                    <br/>
                    {show && <PortfolioTable/>}
                    <br/>
                    <Grid container direction="column" alignItems="center">
                    <Button variant="contained" color="success" onClick={() => setShow(prev => !prev)}>
                        Show
                    </Button>
                    </Grid>
                </Card>
            </Stack>
        </LocalizationProvider>
    );
}
