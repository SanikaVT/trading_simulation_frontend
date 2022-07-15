import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import axios from "axios";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  height: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const acceptNumbers = (event: any) => {
  let charCode = event.keyCode;
  if (
    !((charCode >= 48 && charCode <= 57) || charCode === 8 || charCode === 32)
  ) {
    event.preventDefault();
  }
};

function SellTradeModal(props: any) {
  useEffect(() => {
    axios
      .get(`/api/users/credits`, {
        responseType: "json",
        params: { userID: localStorage.getItem("userID") },
      })
      .then(function(response) {
        console.log(response.data.credits);
        setMarginAvailable(response.data.credits);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`/api/order/stockcount`, {
        responseType: "json",
        params: {
          userId: localStorage.getItem("userID"),
          symbol: props.stockData.symbol,
        },
      })
      .then(function(response) {
        if (response.data.count === 0) {
        } else {
          setAvailableQuantity(response.data.count);
          setQuantityLeft(response.data.count - 1);
        }
      });
  }, [props.openModal]);
  let placeOrder = (event: any) => {
    axios
      .post("/api/order", {
        symbol: props.stockData.symbol,
        quantity: quantity,
        price: props.stockData.price,
        orderType: "Sell",
        userId: localStorage.getItem("userID"),
        currentMargin: marginAvailable,
      })
      .then((res) => {
        navigate("/orderstatus");
      });
  };
  const [availableQuantity, setAvailableQuantity] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [quantityLeft, setQuantityLeft] = useState(availableQuantity);
  const [quantityError, setQuantityError] = useState(false);
  const [quantityLeftError, setQuantityLeftError] = useState(false);
  const [marginAvailable, setMarginAvailable] = useState(0);
  const navigate = useNavigate();
  return (
    <>
      <Modal
        open={props.openModal}
        onClose={() => {
          props.setOpenModal(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Card>
            <CardContent style={{ backgroundColor: "#f55723", color: "white" }}>
              <HeaderFirst>
                Sell {props.stockData.symbol} X {quantity} Qty
              </HeaderFirst>
              <HeaderSecond>Price: ${props.stockData.price}</HeaderSecond>
            </CardContent>
            <Divider />
            <CardContent>
              <Stack direction="row" spacing={7}>
                <label>Available quantity: </label>
                <TextField value={availableQuantity} disabled={true} />
              </Stack>
              <br />
              <Stack direction="row" spacing={9}>
                <label>Quantity selling: </label>
                <TextField
                  value={quantity}
                  onKeyDown={acceptNumbers}
                  onChange={(event) => {
                    let quantity = Number(event.target.value);
                    setQuantity(quantity);
                    if (quantity === 0) {
                      setQuantityError(true);
                    } else {
                      setQuantityError(false);
                    }

                    let quantityLeft =
                      availableQuantity - Number(event.target.value);
                    setQuantityLeft(quantityLeft);
                    if (quantity > availableQuantity) {
                      setQuantityLeftError(true);
                    } else {
                      setQuantityLeftError(false);
                    }
                  }}
                />
              </Stack>
              {quantityError ? (
                <p style={{ color: "red" }}>Quantity cannot be 0.</p>
              ) : (
                <></>
              )}
              {quantityLeftError ? (
                <p style={{ color: "red" }}>Quantity exceeded.</p>
              ) : (
                <></>
              )}
              {quantityLeftError || quantityError ? <></> : <br />}
              <Stack direction="row" spacing={12}>
                <label>Quantity left: </label>
                <TextField value={quantityLeft} disabled={true} />
              </Stack>
              <br />
              <Stack direction="row" spacing={19}>
                <label>Price: </label>
                <TextField value={props.stockData.price} disabled={true} />
              </Stack>
            </CardContent>
            <Divider />
            <CardActions style={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                color="error"
                disabled={quantityError || quantityLeftError}
                onClick={placeOrder}
                style={{ backgroundColor: "#f55723", color: "white" }}
              >
                Sell
              </Button>
              <Button
                variant="outlined"
                onClick={() => {
                  setQuantity(1);
                  setQuantityLeft(availableQuantity - 1);
                  setQuantityError(false);
                  setQuantityLeftError(false);
                  props.setOpenModal(false);
                }}
              >
                Cancel
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Modal>
    </>
  );
}
const HeaderFirst = styled.div``;
const HeaderSecond = styled.div`
  padding-top: 10px;
  font-size: 12px;
`;
export default SellTradeModal;
