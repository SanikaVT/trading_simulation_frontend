import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import styled from "styled-components";
import { TextField, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { CSVLink } from "react-csv";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

interface Orders {
  ordersStatus: IOrderStatus[];
}
interface IOrderStatus {
  id: Number;
  symbol: string;
  tradetime: string;
  orderid: string;
  type: string;
  qty: Number;
  price: Number;
  status: string;
}

const columns: GridColDef[] = [
  { field: "symbol", headerName: "Symbol", width: 200 },
  {
    field: "tradetime",
    headerName: "Trade time",
    width: 180,
  },
  {
    field: "orderid",
    headerName: "Order ID",
    width: 180,
  },
  {
    field: "type",
    headerName: "Type",
    width: 150,
  },
  {
    field: "qty",
    headerName: "Qty.",
    width: 150,
  },
  {
    field: "price",
    headerName: "Price",
    width: 150,
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
  },
];

function OrderStatus() {
  const [startDate, setStartDate] = React.useState<Date | null>(new Date());
  const [endDate, setEndDate] = React.useState<Date | null>(new Date());
  const [searchItem, setSearchItem] = useState("");
  const intialOrders: Orders = {
    ordersStatus: [
      {
        id: 1,
        symbol: "AAPL",
        tradetime: "2022-02-24 10:02:05",
        orderid: "1000000006516250",
        type: "Buy",
        qty: 10,
        price: 165,
        status: "Cancelled",
      },
      {
        id: 2,
        symbol: "INFY",
        tradetime: "2022-02-24 10:02:05",
        orderid: "1000000006516250",
        type: "Buy",
        qty: 10,
        price: 165,
        status: "Cancelled",
      },
      {
        id: 3,
        symbol: "TCS",
        tradetime: "2022-02-24 10:02:05",
        orderid: "1000000006516250",
        type: "Buy",
        qty: 10,
        price: 165,
        status: "Cancelled",
      },
      {
        id: 4,
        symbol: "CBDT",
        tradetime: "2022-02-24 10:02:05",
        orderid: "1000000006516250",
        type: "Buy",
        qty: 10,
        price: 165,
        status: "Cancelled",
      },
    ],
  };

  const [ordersData, setOrdersData] = useState(intialOrders.ordersStatus);
  const [constOrdersData, setConstOrdersData] = useState(
    intialOrders.ordersStatus
  );

  let rows = ordersData;

  useEffect(() => {
    setOrdersData(ordersData);
    setConstOrdersData(ordersData);
  }, []);

  const updateOrdersHandler = async (
    searchText: string | null,
    startDate: Date | null,
    endDate: Date | null
  ) => {
    rows = constOrdersData;
    setOrdersData(constOrdersData);

    startDate = startDate == null ? new Date(Date.now()) : startDate;
    endDate = endDate == null ? new Date(Date.now()) : endDate;

    rows.forEach((row) => {
      console.log(new Date(row.tradetime), new Date(row.tradetime));
    });
    console.log(startDate.getDate(), endDate.getDate());
    let filterData = rows.filter((row) => {
      if (
        startDate != null &&
        endDate != null &&
        new Date(row.tradetime) >= startDate &&
        new Date(row.tradetime) <= endDate
      )
        return row;
    });

    console.log(filterData.length);

    setOrdersData(filterData);
    rows = filterData;

    if (searchText !== null && searchText !== "") {
      if (searchText.length > 0) {
        filterData = filterData.filter((row) =>
          row.symbol.toLowerCase().includes(searchText.toLowerCase())
        );
        setOrdersData(filterData);
        rows = filterData;
      } else {
        setOrdersData(constOrdersData);
        rows = constOrdersData;
      }
    }
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={2}></Grid>
          <Grid item xs={5}>
            <Typography
              variant="h6"
              component="div"
              color={"black "}
              fontWeight={"bolder"}
              sx={{ flexGrow: 1 }}
              style={{ marginBottom: 10 }}
            >
              Order Status
            </Typography>
          </Grid>
          <Grid item xs={5}></Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={3}>
            <TextField
              label="Search"
              variant="outlined"
              className="form-input"
              value={searchItem}
              defaultValue=""
              onChange={async (event) => {
                let searchText = event.target.value;
                setSearchItem(searchText);
                await updateOrdersHandler(searchText, startDate, endDate);
              }}
              style={{
                width: "250px",
                marginBottom: 20,
              }}
            />
          </Grid>
          <Grid item xs={2}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                disableFuture
                label="Start Date"
                openTo="year"
                views={["year", "month", "day"]}
                value={startDate}
                onChange={async (event) => {
                  if (event !== null) {
                    setStartDate(event);
                    await updateOrdersHandler("", event, null);
                  }
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={2}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                disableFuture
                label="End Date"
                openTo="year"
                views={["year", "month", "day"]}
                value={endDate}
                onChange={async (event) => {
                  if (event !== null) {
                    setEndDate(event);
                    await updateOrdersHandler("", null, event);
                  }
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={3} style={{ marginTop: 35 }}>
            <CSVLink data={ordersData}>Download data:</CSVLink>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <Wrapper>
              <div style={{ display: "flex", height: 400, width: "100%" }}>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  pageSize={5}
                  rowsPerPageOptions={[20]}
                  disableSelectionOnClick
                />
              </div>
            </Wrapper>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </Box>

      <Stack></Stack>
      <Stack></Stack>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default OrderStatus;
