import { useState, useEffect } from "react";
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
import axios from "axios";

function StockCard(props: any) {
  const navigate = useNavigate();
  document.body.style.overflow = "scroll";
  const [openBuyModal, setOpenBuyModal] = useState(false);
  const [openSellModal, setOpenSellModal] = useState(false);
  const [sellModalInActive, setSellModalInActive] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const openBuyTradeModal = (event: any) => {
    setOpenBuyModal(true);
  };

  const openSellTradeModal = (event: any) => {
    setOpenSellModal(true);
  };

  const handleStarClick = () => {
    setIsActive((current) => !current);
    if (props.fav) {
      props.delFav(props.stock);
      setIsFadingOut(false);
      return;
    }

    if (!props.stock.isActive) {
      props.fun(props.stock);
    } else {
      props.delFav(props.stock);
    }
  };

  //Author: Udit Gandhi
  useEffect(() => {
    axios
      .get(`/api/order/stockcount`, {
        responseType: "json",
        params: {
          userId: localStorage.getItem("userID"),
          symbol: props.stock.symbol,
        },
      })
      .then(function(response) {
        if (response.data.count <= 0) {
          setSellModalInActive(true);
        } else {
          setSellModalInActive(false);
        }
      });
  }, [props.stock.symbol]);

  return (
    //Author: Udit Gandhi
    <>
      <BuyTradeModal
        openModal={openBuyModal}
        setOpenModal={setOpenBuyModal}
        stockData={props.stock}
      />
      <SellTradeModal
        openModal={openSellModal}
        setOpenModal={setOpenSellModal}
        stockData={props.stock}
      />
      <Card
        // className={isFadingOut ? "stock-fadeout" : ""}
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
                className="shimmer"
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
                disabled={sellModalInActive}
                className="btn shimmer"
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
                <IconButton
                  aria-label="favorite"
                  onClick={
                    // fadeOut(setTimeout(() => handleStarClick(), 300))
                    handleStarClick
                  }
                >
                  <StarIcon
                    style={{
                      padding: "1px",
                      color: props.fav
                        ? "orange "
                        : props.stock.isActive
                        ? "orange"
                        : "black",
                    }}
                  />
                </IconButton>
              </Tooltip>

              <Tooltip title="Go to Analytics" arrow>
                <IconButton
                  aria-label="graph"
                  onClick={() =>
                    navigate("/analytics", {
                      state: { stock: props.stock, width: 150, height: 450 },
                    })
                  }
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
