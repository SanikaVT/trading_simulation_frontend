import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Recommendation from "./Recommendation";
import { Stack } from "@mui/material";
import Favorites from "./Favorites";
import { StockSymbol } from "../../types/StockSymbol";
import { TextField } from "@mui/material";

const initialStocksList: StockSymbol[] = [
  {
    symbol: "APPL",
    currency: "USD",
    price: 261.74,
    previousClose: 259.45,
    open: 261.07,
    high: 263.31,
    low: 260.68,
  },
  {
    symbol: "INFY",
    currency: "USD",
    price: 261.74,
    previousClose: 259.45,
    open: 261.07,
    high: 263.31,
    low: 260.68,
  },
  {
    symbol: "IBM",
    currency: "USD",
    price: 261.74,
    previousClose: 259.45,
    open: 261.07,
    high: 263.31,
    low: 260.68,
  },
  {
    symbol: "TCS",
    currency: "USD",
    price: 261.74,
    previousClose: 259.45,
    open: 261.07,
    high: 263.31,
    low: 260.68,
  },
];

function Home() {
  const [searchItem, setSearchItem] = useState("");
  const [stocksData, setStocksData] = useState(initialStocksList);
  const [constStocksData, setConstStocksData] = useState(stocksData);
  useEffect(() => {
    setStocksData(stocksData);
    setConstStocksData(stocksData);
  }, []);
  return (
    <>
      <Stack>
        <TextField
          label="Search"
          variant="outlined"
          className="form-input"
          value={searchItem}
          defaultValue=""
          onChange={(event) => {
            setSearchItem(event.target.value);
            if (event.target.value.length > 0) {
              const filterData = stocksData.filter((stock) =>
                stock.symbol
                  .toLowerCase()
                  .includes(event.target.value.toLowerCase())
              );
              setStocksData(filterData);
            } else {
              setStocksData(constStocksData);
            }
          }}
          style={{
            width: "250px",
            marginBottom: 20,
          }}
        />
        <Recommendation stocksData={stocksData} />
        <Favorites stocksData={stocksData} />
      </Stack>
    </>
  );
}

export default Home;
