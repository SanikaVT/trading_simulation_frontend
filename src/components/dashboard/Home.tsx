import { useState, useEffect } from "react";
import Recommendation from "./Recommendation";
import { Stack } from "@mui/material";
import Favorites from "./Favorites";
import { TextField } from "@mui/material";
import styled from "styled-components";
import { StockSymbol } from "../../types/StockSymbol";

import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  {
    symbol: "ADA",
    currency: "USD",
    price: 261.74,
    previousClose: 259.45,
    open: 261.07,
    high: 263.31,
    low: 260.68,
  },
  {
    symbol: "ABA",
    currency: "USD",
    price: 261.74,
    previousClose: 259.45,
    open: 261.07,
    high: 263.31,
    low: 260.68,
  },
];

const SearchField = styled(TextField)({


  "& label":{
    color:"white",
  },

  "& input":{
    color: "white",
  },

  "& label.Mui-focused": {
    color: "#2E8BC0",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#2E8BC0",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#edf2f5",
    },
    "&:hover fieldset": {
      borderColor: "#2E8BC0",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#2E8BC0",
    },
  },
});

const notify = () => {
  toast(` Added to favorites!`, {
    transition: Bounce,
  });
};

function Home() {
  const [searchItem, setSearchItem] = useState("");
  const [stocksData, setStocksData] = useState(initialStocksList);
  const [constStocksData, setConstStocksData] = useState(initialStocksList);

  useEffect(() => {
    setStocksData(stocksData);
    setConstStocksData(stocksData);
  }, []);

  return (
    <div >
      <div className="image">

      <Stack className="search" >
        <SearchField
        label="Search Here...."
          className="form-input"
          value={searchItem}
          onChange={(event) => {
            setSearchItem(event.target.value);
            if (event.target.value.length > 0) {
              const filterData = stocksData.filter((stock) =>
                stock.symbol
                  .toLowerCase()
                  .includes(event.target.value.toLowerCase())
              );
              console.log(filterData);
              setStocksData(filterData);
            } else {
              setStocksData(constStocksData);
            }
          }}
          style={{
            width: "30%",
            marginBottom: "5px",
            marginTop:'2rem',
            color:'white !important'
            
          }}
        />
        <Recommendation stocksData={stocksData} fun={notify} />
        <Favorites stocksData={stocksData} fun={notify} />
        <ToastContainer
          className="toast"
          autoClose={1000}
          position="bottom-right"
          toastStyle={{
            color: "black",
            fontWeight: "bolder",
          }}
        />
      </Stack>

      </div>
      
    </div>
  );
}

export default Home;
