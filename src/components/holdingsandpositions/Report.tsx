import Button from "@mui/material/Button";
import Datepicker from "./Datepicker";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import React, { useState } from "react";
import { CSVLink } from "react-csv";

function Report() {
  const navigate = useNavigate();
  const routeChangeHome = () => {
    let path = `/holdings`;
    navigate(path);
  };

  function createData(
    stockname: string,
    buydate: string,
    qty: number,
    avgcost: number,
    currentval: number
  ) {
    return { stockname, buydate, qty, avgcost, currentval };
  }

  const rows = [
    createData("Adani Power", "12/2/2020", 40, 12.22, 13.4),
    createData("Reliance", "30/4/2021", 10, 1200.22, 1123.4),
    createData("BSNL", "12/4/2022", 50, 2.22, 3.4),
    createData("Robert Engineers", "12/2/2020", 80, 12.22, 13.4),
    createData("Jio Telecommunications", "12/2/2022", 2000, 1233.22, 1223.4),
    createData("Starlite Power", "12/2/2020", 122, 1.22, 1.4),
  ];

  const [reportData, setReportData] = useState(rows);
  const routeChangePosi = () => {
    let path = `/positions`;
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
          <Button variant="outlined" onClick={routeChangePosi}>
            Positions
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained">Report</Button>
        </Grid>
      </Grid>
      <Datepicker />
    </div>
  );
}

export default Report;
