import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { CardActions } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import BuyTradeModal from "../orders/BuyTradeModal";
import SellTradeModal from "../orders/SellTradeModal";

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

function StockCard() {
  const [openBuyModal, setOpenBuyModal] = useState(false);
  const [openSellModal, setOpenSellModal] = useState(false);

  const openBuyTradeModal = (event: any) => {
    setOpenBuyModal(true);
  };

  const openSellTradeModal = (event: any) => {
    setOpenSellModal(true);
  };

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
      <Card
        sx={{ maxWidth: 300 }}
        style={{
          backgroundColor: "#ededed",
          borderRadius: "1px",
          padding: "5spx",
        }}
      >
        <CardActionArea>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{ fontWeight: "bolder" }}
            >
              Adani
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <p>
                {" "}
                Price:{" "}
                <span
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    padding: "2px",
                    borderRadius: "2px",
                    border: "1px solid",
                  }}
                >
                  75${" "}
                </span>
              </p>
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <div>
              <Button
                size="small"
                onClick={openBuyTradeModal}
                style={{
                  backgroundColor: "#4CAF50",
                  color: "white",
                  fontWeight: "bolder",
                  marginRight: "2px",
                }}
              >
                Buy
              </Button>
              <Button
                size="small"
                onClick={openSellTradeModal}
                style={{
                  backgroundColor: "#f55723",
                  color: "white",
                  fontWeight: "bolder",
                }}
              >
                Sell
              </Button>
              <IconButton aria-label="favorite" style={{ margin: "3px" }}>
                <StarIcon
                  style={{
                    padding: "2px",
                    marginRight: "3px",
                    border: "1px solid solid",
                    background: "white",
                    borderRadius: "50%",
                    color: "orange",
                  }}
                />
                <AutoGraphIcon
                  style={{
                    padding: "2px",
                    marginRight: "3px",
                    border: "1px solid solid",
                    background: "white",
                    borderRadius: "50%",
                    color: "black",
                  }}
                />
              </IconButton>
            </div>
          </CardActions>
        </CardActionArea>
      </Card>
    </>
  );
}

export default StockCard;
