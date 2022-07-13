import { useState, useEffect } from "react";
import Recommendation from "./Recommendation";
import { Stack } from "@mui/material";
import Favorites from "./Favorites";
import { TextField } from "@mui/material";
import styled from "styled-components";
import axios from "axios";
import { StockSymbol } from "../../types/StockSymbol";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SearchField = styled(TextField)({
  "& label": {
    color: "white",
  },

  "& input": {
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

function Home() {
  const [searchItem, setSearchItem] = useState("");
  const [stocksData, setStocksData] = useState([]);
  const [favoriteStocks, setFavoriteStocks] = useState([]);
  const [constStocksData, setConstStocksData] = useState(stocksData);

  const notify = (stock: StockSymbol) => {
    axios
      .post("http://localhost:8080/api/dashboard/favorites", {
        userId: 1,
        stock: stock.symbol,
      })
      .then(function (response) {
        console.log("btn click response", response.data);
        setFavoriteStocks(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    toast(` Added to favorites!`, {
      transition: Bounce,
    });
  };

  const deleteF = (stock: StockSymbol) => {
    axios
      .delete("http://localhost:8080/api/dashboard/delete", {
        data: {
          userId: 1,
          stock: stock.symbol,
        },
      })
      .then((response) => {
        setFavoriteStocks(response.data);
      });
    toast(` Removed from favorites!`, {
      transition: Bounce,
    });
  };

  useEffect(() => {
    axios.get("http://localhost:8080/api/dashboard/favorites").then((res) => {
      const data = res.data.favorites;
      console.log("favorites are", res.data.favorites);
      setFavoriteStocks(data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:8080/api/dashboard").then(async (res) => {
      const data = res.data.recommendedStocks;
      const updatedStock = data.map((stock: StockSymbol) => {
        if (JSON.stringify(favoriteStocks).includes(stock._id)) {
          return {
            ...stock,
            isActive: true,
          };
        } else {
          return {
            ...stock,
            isActive: false,
          };
        }
      });
      console.log("data on dashboard", updatedStock);

      setStocksData(updatedStock);
      setConstStocksData(updatedStock);
    });
  }, [favoriteStocks]);

  return (
    <div>
      <div className="image">
        <Stack className="search">
          {
            <SearchField
              label="Search Here...."
              className="form-input"
              value={searchItem}
              onChange={(event) => {
                setSearchItem(event.target.value);
                if (event.target.value.length >= 0) {
                  const filterData = stocksData.filter((stock: StockSymbol) =>
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
                marginTop: "2rem",
                color: "white !important",
              }}
            />
          }
          <Recommendation
            stocksData={stocksData}
            fun={notify}
            delFavorite={deleteF}
          />

          <Favorites
            stocksData={favoriteStocks}
            fun={notify}
            delFavorite={deleteF}
          />
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
