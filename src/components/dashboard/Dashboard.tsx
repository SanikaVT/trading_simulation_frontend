import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import BuyTradeModal from "./orders/BuyTradeModal";
import SellTradeModal from "./orders/SellTradeModal";

interface StockSymbol {
  symbol: String;
  currency: String;
  price: Number;
  previousClose: Number;
  open: Number;
  high: Number;
  low: Number;
}

const stockData: StockSymbol = {
  symbol: "APPL",
  currency: "USD",
  price: 261.74,
  previousClose: 259.45,
  open: 261.07,
  high: 263.31,
  low: 260.68,
};

function Dashboard() {
  const [openBuyModal, setOpenBuyModal] = useState(false);
  const [openSellModal, setOpenSellModal] = useState(false);

  const openBuyTradeModal = (event: any) => {
    setOpenBuyModal(true);
  };

  const openSellTradeModal = (event: any) => {
    setOpenSellModal(true);
  };

  /*fetch(
    "https://finnhub.io/api/v1/stock/symbol?exchange=US&token=ca5rb6iad3ib7i7rpch0"
  )
    .then((res) => res.json())
    .then(
      (result) => {
        console.log(result);
      },
      (error) => {}
    );*/
  return (
    <>
      <BuyTradeModal
        openModal={openBuyModal}
        setOpenModal={setOpenBuyModal}
        stockData={stockData}
      />
      <SellTradeModal
        openModal={openSellModal}
        setOpenModal={setOpenSellModal}
        stockData={stockData}
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 750 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Symbol</TableCell>
              <TableCell align="right">Currency</TableCell>
              <TableCell align="right">Current Price</TableCell>
              <TableCell align="right">Previous Close</TableCell>
              <TableCell align="right">Open Price</TableCell>
              <TableCell align="right">High</TableCell>
              <TableCell align="right">Low</TableCell>
              <TableCell align="right">Buy</TableCell>
              <TableCell align="right">Sell</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              key="1"
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {stockData.symbol}
              </TableCell>
              <TableCell align="right">{stockData.currency}</TableCell>
              <TableCell align="right">{Number(stockData.price)}</TableCell>
              <TableCell align="right">
                {Number(stockData.previousClose)}
              </TableCell>
              <TableCell align="right">{Number(stockData.open)}</TableCell>
              <TableCell align="right">{Number(stockData.high)}</TableCell>
              <TableCell align="right">{Number(stockData.low)}</TableCell>
              <TableCell align="right">
                <Button
                  variant="contained"
                  color="success"
                  onClick={openBuyTradeModal}
                  style={{ backgroundColor: "#4CAF50", color: "white" }}
                >
                  Buy
                </Button>
              </TableCell>
              <TableCell align="right">
                <Button
                  variant="contained"
                  color="error"
                  onClick={openSellTradeModal}
                  style={{ backgroundColor: "#f55723", color: "white" }}
                >
                  Sell
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Dashboard;
