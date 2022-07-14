import PortfolioTable from "./PortfolioTable";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import React from "react";
import { Grid } from "@mui/material";
import PortfolioTablePositions from "./PortfolioTablePositions";

export default function PositionsHome() {
  const navigate = useNavigate();
  const routeChange = () => {
    let path = `/report`;
    navigate(path);
  };

  const routeChangeHome = () => {
    let path = `/holdings`;
    navigate(path);
  };

  return (
    <div>
      <br />
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <Grid item>
          <Button variant="outlined" onClick={routeChangeHome}>
            Holdings
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained">Positions</Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" onClick={routeChange}>
            Report
          </Button>
        </Grid>
      </Grid>
      <PortfolioTablePositions />
    </div>
  );
}
