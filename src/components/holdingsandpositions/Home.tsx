import PortfolioTable from './PortfolioTable.tsx'
import Navbar from './Navbar.tsx'
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import React from "react";
import {Grid} from "@mui/material";

function Home() {
    const navigate = useNavigate();
    const routeChange = () =>{
        let path = `/Report`;
        navigate(path);
    }

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
                    <Button variant="contained" onClick={routeChangeHome}>Holdings</Button>
                </Grid>
                <Grid item>
                    <Button variant="outlined">Positions</Button>
                </Grid>
                <Grid item>
                    <Button variant="outlined" onClick={routeChange}>Report</Button>
                </Grid>
            </Grid>
            <PortfolioTable/>


        </div>
    );
}

export default Home;
