/**
 * Author: Dharmik Hiteshkumar Soni
 * BannerID: B00867641
 * Email: dh657288@dal.ca
 */

/**
 * This component is responsible to render recommended and favorite stocks of the current user
 * This component will fetch the data from backend from the backend file
 * Components used here are : Recommendation, Favorites, ToastContainer
 */
import { useState, useEffect } from "react";
import Recommendation from "./Recommendation";
import { Stack } from "@mui/material";
import Favorites from "./Favorites";
import { TextField } from "@mui/material";
import styled from "styled-components";
import axios from "axios";
import NoFavorite from "./NoFavorites";
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
  const [constStocksData, setConstStocksData] = useState([]);

  const notify = (stock: StockSymbol) => {
    axios
      .post("/api/dashboard/favorites", {
        userId: localStorage.getItem("userID"),
        stock: stock.symbol,
      })
      .then(function(response) {
        setFavoriteStocks(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });

    toast(` Added to favorites!`, {
      transition: Bounce,
    });
  };

  const deleteF = (stock: StockSymbol) => {
    axios
      .delete("/api/dashboard/delete", {
        data: {
          userId: localStorage.getItem("userID"),
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
    axios
      .post("/api/dashboard/favorite", {
        userId: localStorage.getItem("userID"),
      })
      .then((res) => {
        const data = res.data.favorites;

        setFavoriteStocks(data);
      });
  }, []);

  useEffect(() => {
    axios
      .post("/api/dashboard", {
        userId: localStorage.getItem("userID"),
      })
      .then(async (res) => {
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
                if (event.target.value.length > 0) {
                  const filterData = stocksData.filter((stock: StockSymbol) => {
                    return (
                      stock.symbol
                        .toLowerCase()
                        .includes(event.target.value.toLowerCase()) ||
                      stock.symbol
                        .toLowerCase()
                        .includes(event.target.value.toLowerCase())
                    );
                  });
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
