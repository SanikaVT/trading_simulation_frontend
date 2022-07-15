import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import styled from "styled-components";
import { TextField } from "@mui/material";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { CSVLink } from "react-csv";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import axios from "axios";

interface Orders {
  orders: IOrderStatus[];
}
interface IOrderStatus {
  id: string;
  orderID: string;
  orderType: string;
  price: number;
  quantity: number;
  status: string;
  symbol: string;
  timestamp: Date;
}

const columns: GridColDef[] = [
  { field: "id", headerName: "Id", flex: 1, hide: true },
  {
    field: "orderID",
    headerName: "Order ID",
    flex: 1,
  },
  { field: "symbol", headerName: "Symbol", flex: 1 },
  {
    field: "timestamp",
    headerName: "Trade time",
    flex: 1,
  },

  {
    field: "orderType",
    headerName: "Type",
    flex: 1,
  },
  {
    field: "quantity",
    headerName: "Qty.",
    flex: 1,
  },
  {
    field: "price",
    headerName: "Price",
    flex: 1,
  },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
  },
];

function OrderStatus() {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const spacingStyles = {
    ...(matchesMD && { marginTop: "20px" }),
  };
  const [startDate, setStartDate] = React.useState<Date | null>(
    new Date("12/31/2021")
  );
  const [endDate, setEndDate] = React.useState<Date | null>(new Date());
  const [searchItem, setSearchItem] = useState("");
  let initialOrders: IOrderStatus[] = [];
  const [rows, setRows] = useState(initialOrders);
  const [ordersData, setOrdersData] = useState(initialOrders);
  const [constOrdersData, setConstOrdersData] = useState(initialOrders);

  useEffect(() => {
    axios({
      method: "get",
      url: "/api/order",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        let data: Orders = response.data;
        setOrdersData(data.orders);
        setConstOrdersData(data.orders);
        setRows(data.orders);
      })
      .catch((err) => {
        console.log(err);
      });
    setSearchItem("");
    updateOrdersHandler("", startDate, endDate);
  }, []);

  const updateOrdersHandler = async (
    searchText: string | null,
    startDate: Date | null,
    endDate: Date | null
  ) => {
    setRows(constOrdersData);
    setOrdersData(constOrdersData);
    startDate = startDate == null ? new Date() : startDate;
    endDate = endDate == null ? new Date() : endDate;
    let filterData = constOrdersData.filter((row) => {
      const timestamp = new Date(row.timestamp);
      const checkForYear =
        startDate != null
          ? timestamp.getFullYear() > startDate?.getFullYear()
          : false;
      const checkForMonth = checkForYear
        ? true
        : timestamp.getFullYear() === startDate?.getFullYear()
        ? timestamp.getMonth() > startDate?.getMonth()
        : false;
      const checkForDate = checkForMonth
        ? true
        : timestamp.getMonth() === startDate?.getMonth()
        ? timestamp.getDate() >= startDate?.getDate()
        : false;
      if (
        timestamp != null &&
        startDate != null &&
        endDate != null &&
        checkForDate &&
        timestamp.getDate() <= endDate.getDate() &&
        timestamp.getMonth() <= endDate.getMonth() &&
        timestamp.getFullYear() <= endDate.getFullYear()
      )
        return row;
    });
    setOrdersData(filterData);
    setRows(filterData);

    if (searchText !== null && searchText !== "") {
      if (searchText.length > 0) {
        filterData = filterData.filter((row) =>
          row.symbol.toLowerCase().includes(searchText.toLowerCase())
        );
        setOrdersData(filterData);
        setRows(filterData);
      } else {
        setOrdersData(constOrdersData);
        setRows(constOrdersData);
      }
    }
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item lg={2}></Grid>
          <Grid item lg={5} xs={12}></Grid>
          <Grid item lg={5}></Grid>
          <Grid item lg={2}></Grid>
          <Grid item lg={3} md={4} xs={12}>
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
          <Grid item lg={3} md={4} xs={12}>
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
          <Grid item lg={3} md={4} xs={12} sx={{ ...spacingStyles }}>
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
          <Grid item lg={1}></Grid>
          <Grid item md={8}></Grid>
          <Grid item md={4} xs={12} sx={{ ...spacingStyles }}>
            <CSVLink data={ordersData}>Download data:</CSVLink>
          </Grid>
          <Grid item lg={2}></Grid>
          <Grid item lg={8} xs={12}>
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
          <Grid item lg={2}></Grid>
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
