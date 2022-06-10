import React, { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import styled from "styled-components";

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
const rows = [row, row, row, row, row, row, row, row, row, row];

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
  return (
    <>
      <Wrapper>
        <div style={{ display: "flex", height: 400, width: "70%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[20]}
            disableSelectionOnClick
          />
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default OrderStatus;
