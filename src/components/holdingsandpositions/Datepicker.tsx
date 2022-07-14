import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Stack from "@mui/material/Stack";
import { Card, Grid } from "@mui/material";
// import {useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";
import PortfolioTable from "./PortfolioTable";
import { useState } from "react";
import { CSVLink } from "react-csv";

export default function ResponsiveDatePickers() {
  const [valueFrom, setValueFrom] = React.useState<Date | null>(new Date());
  const [valueTo, setValueTo] = React.useState<Date | null>(new Date());
  // const navigate = useNavigate();
  // const routeChange = () =>{
  //     let path = `/`;
  //     navigate(path);
  // }
  const [show, setShow] = useState(false);

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

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        <Card className="margin">
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={4}
          >
            <Grid item>
              <DesktopDatePicker
                className="margin"
                disableFuture
                label="From"
                openTo="year"
                views={["year", "month", "day"]}
                value={valueFrom}
                onChange={(newValue) => {
                  setValueFrom(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />{" "}
            </Grid>
            <Grid item>
              <DesktopDatePicker
                className="margin"
                label="To"
                value={valueTo}
                minDate={new Date("2017-01-01")}
                onChange={(newValue) => {
                  setValueTo(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />{" "}
            </Grid>
          </Grid>
          <br />
          {show && <PortfolioTable />}
          <br />
          <Grid container direction="column" alignItems="center" spacing={4}>
            <CSVLink data={reportData}>Download Report</CSVLink>
            <Button
              variant="contained"
              color="success"
              onClick={() => setShow((prev) => !prev)}
            >
              Show
            </Button>
          </Grid>
        </Card>
      </Stack>
    </LocalizationProvider>
  );
}
