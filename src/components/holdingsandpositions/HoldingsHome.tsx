import PortfolioTable from './PortfolioTable'
import Navbar from './Navbar'
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import React from "react";
import {Grid} from "@mui/material";

export default function HoldingsHome() {
    const navigate = useNavigate();
    const routeChange = () =>{
        let path = `/report`;
        navigate(path);
    }

    const routeChangeHome = () =>{
        let path = `/holdings`;
        navigate(path);
    }

    const routeChangePosi = () =>{
        let path = `/positions`;
        navigate(path);
    }

    return (

        <div>
            <br/>
            <Grid container direction="row" alignItems="center"
                  justifyContent="center" spacing={2} >
                <Grid item>
                    <Button variant="contained" onClick={routeChangeHome}>Holdings</Button>
                </Grid>
                <Grid item>
                    <Button variant="outlined" onClick={routeChangePosi}>Positions</Button>
                </Grid>
                <Grid item>
                    <Button variant="outlined" onClick={routeChange}>Report</Button>
                </Grid>
            </Grid>
            <PortfolioTable/>


        </div>
    );
}


