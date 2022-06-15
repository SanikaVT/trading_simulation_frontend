import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Stack from '@mui/material/Stack';
import {Card} from "@mui/material";
import "./Datepicker.css";
import {useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";

export default function ResponsiveDatePickers() {
    const [valueFrom, setValueFrom] = React.useState(new Date());
    const [valueTo, setValueTo] = React.useState(new Date());
    const navigate = useNavigate();
    const routeChange = () =>{
        let path = `/`;
        navigate(path);
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
                <Card className="margin">
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
                />
                    <DesktopDatePicker className="margin"
                    label="To"
                    value={valueTo}
                    minDate={new Date('2017-01-01')}
                    onChange={(newValue) => {
                    setValueTo(newValue);
                }}
                    renderInput={(params) => <TextField {...params} />}
                    />
                    <br/>
                    <br/>
                    <Button variant="contained" color="success" onClick={routeChange}>
                        Show
                    </Button>
                </Card>
            </Stack>
        </LocalizationProvider>
    );
}
