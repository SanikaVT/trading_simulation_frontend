import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { CardActions } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import BuyTradeModal from "../orders/BuyTradeModal";
import SellTradeModal from "../orders/SellTradeModal";
import Tooltip from "@mui/material/Tooltip";
import AnalyticsIcon from "@mui/icons-material/Analytics";

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

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

function StockCard(props: any) {
  const navigate = useNavigate();
  document.body.style.overflow = "scroll";
  const [openBuyModal, setOpenBuyModal] = useState(false);
  const [openSellModal, setOpenSellModal] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const openBuyTradeModal = (event: any) => {
    setOpenBuyModal(true);
  };

  const openSellTradeModal = (event: any) => {
    setOpenSellModal(true);
  };

  const handleStarClick = () => {
    setIsActive((current) => !current);

    if (!isActive) {
      props.fun();
    }
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
          backgroundColor: "#b9b4b45c",
          border: "1px solid transparent",
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
              style={{ fontWeight: "bolder", color: "#f07d11" }}
            >
              {props.stock.symbol}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <p>
                <span
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    padding: "2px",
                    borderRadius: "2px",
                    border: "1px solid",
                  }}
                >
                  {props.stock.price} {props.stock.currency}
                </span>
              </p>
            </Typography>
            <div style={{ display: "flex", flexFlow: "row", padding: "0" }}>
              <ArrowDropUpIcon className="up" />
              <Typography style={{ color: "white" }}>
                {props.stock.high}
              </Typography>
              <ArrowDropDownIcon className="down" />
              <Typography style={{ color: "white" }}>
                {props.stock.low}
              </Typography>
            </div>
          </CardContent>
          <CardActions disableSpacing>
            <div style={{ display: "flex" }}>
              <Button
                size="small"
                onClick={openBuyTradeModal}
                style={{
                  backgroundColor: "#4CAF50",
                  color: "white",
                  fontWeight: "bolder",
                  marginRight: "2px",
                  boxShadow: "2",
                }}
              >
                Buy
              </Button>

              <Button
                className="btn"
                size="small"
                onClick={openSellTradeModal}
                style={{
                  backgroundColor: "#f55723",
                  color: "white",
                  fontWeight: "bolder",
                  borderRadius: "",
                }}
              >
                Sell
              </Button>

              <Tooltip title="Click to add to/remove it from favorite" arrow>
                <IconButton aria-label="favorite" onClick={handleStarClick}>
                  <StarIcon
                    style={{
                      padding: "1px",
                      color: isActive ? "orange" : "black",
                    }}
                  />
                </IconButton>
              </Tooltip>

              <Tooltip title="Go to Analytics" arrow>
                <IconButton
                  aria-label="graph"
                  onClick={() => navigate("/analytics")}
                >
                  <AnalyticsIcon
                    style={{
                      color: "#e78215",
                    }}
                  />
                </IconButton>
              </Tooltip>
            </div>
          </CardActions>
        </CardActionArea>
      </Card>
    </>
  );
}

export default StockCard;
