import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import styled from "styled-components";
import { TextField, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

interface Orders {
  ordersStatus: OrderStatus[];
}
interface OrderStatus {
  id: Number;
  symbol: String;
  tradetime: String;
  orderid: String;
  type: String;
  qty: Number;
  price: Number;
  status: String;
}
const row = {
  id: 1,
  symbol: "AAPL",
  tradetime: "2022-02-24 10:02:05",
  orderid: "1000000006516250",
  type: "Buy",
  qty: 10,
  price: 165,
  status: "Cancelled",
};
//let rows =[row, row, row, row, row, row, row, row, row, row];

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
          <Grid item xs={4}></Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={5}>
            <TextField
              label="Search"
              variant="outlined"
              className="form-input"
              value={searchItem}
              defaultValue=""
              onChange={(event) => {
                setSearchItem(event.target.value);
                rows = constOrdersData;
                if (event.target.value.length > 0) {
                  const filterData = rows.filter((row) =>
                    row.symbol
                      .toLowerCase()
                      .includes(event.target.value.toLowerCase())
                  );
                  setOrdersData(filterData);
                  rows = filterData;
                } else {
                  setOrdersData(constOrdersData);
                  rows = constOrdersData;
                }
              }}
              style={{
                width: "250px",
                marginBottom: 20,
              }}
            />
          </Grid>
          <Grid item xs={4}></Grid>
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
