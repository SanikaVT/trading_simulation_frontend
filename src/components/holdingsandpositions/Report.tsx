import Navbar from './Navbar.tsx';
import Button from "@mui/material/Button";
import Datepicker from "./Datepicker.tsx";
import {useNavigate} from "react-router-dom";
import {Grid} from "@mui/material";
import React from "react";


function Report() {
    const navigate = useNavigate();
    const routeChangeHome = () =>{
        let path = `/`;
        navigate(path);
    }
    return (
        <div>

            <Navbar/>

            <br/>
            <Grid container direction="row" alignItems="center"
                  justifyContent="center" spacing={2} >
                <Grid item>
                    <Button variant="outlined" onClick={routeChangeHome}>Holdings</Button>
                </Grid>
                <Grid item>
                    <Button variant="outlined">Positions</Button>
                </Grid>
                <Grid item>
                    <Button variant="contained">Report</Button>
                </Grid>
            </Grid>
            <Datepicker/>

        </div>
    );
}

export default Report;