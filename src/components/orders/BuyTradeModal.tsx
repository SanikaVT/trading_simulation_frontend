/**
 * Author: Udit Gandhi
 * BannerID: B00889579
 * Email: udit.gandhi@dal.ca
 */
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
  width: 375,
  height: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

//It will only accept number as input to the buy quantity
const acceptNumbers = (event: any) => {
  let charCode = event.keyCode;
  if (
    !((charCode >= 48 && charCode <= 57) || charCode === 8 || charCode === 32)
  ) {
    event.preventDefault();
  }
};

function BuyTradeModal(props: any) {
  //Gets the credits available to the user from the api.
  useEffect(() => {
    axios
      .get(`/api/users/credits`, {
        responseType: "json",
        params: { userID: localStorage.getItem("userID") },
      })
      .then(function (response) {
        console.log(response.data.credits);
        setMarginAvailable(response.data.credits);
        if (props.stockData.price > response.data.credits) {
          setMarginError(true);
        } else {
          setMarginError(false);
        }
      });
  }, []);

    //Places an order using the backend api and updates in the mongo
  let placeOrder = (event: any) => {
    axios
      .post("/api/order", {
        symbol: props.stockData.symbol,
        quantity: quantity,
        price: props.stockData.price,
        orderType: "Buy",
        userId: localStorage.getItem("userID"),
        currentMargin: marginAvailable,
      })
      .then((res) => {
        navigate("/orderstatus");
      });
  };

    //States related to the quantity of the stocks and errors.
  const [quantity, setQuantity] = useState(1);
  const [marginRequired, setMarginRequired] = useState(props.stockData.price);
  const [quantityError, setQuantityError] = useState(false);
  const [marginError, setMarginError] = useState(false);
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
            <CardContent style={{ backgroundColor: "#4CAF50", color: "white" }}>
              <HeaderFirst>
                Buy {props.stockData.symbol} X {quantity} Qty
              </HeaderFirst>
              <HeaderSecond>Price: ${props.stockData.price}</HeaderSecond>
            </CardContent>
            <Divider />
            <CardContent>
              <Stack direction="row" spacing={13}>
                <label>Quantity: </label>
                <TextField
                  value={quantity}
                  onKeyDown={acceptNumbers}
                  sx={{ width: "15ch" }}
                  onChange={(event) => {
                    let quantity = Number(event.target.value);
                    if (quantity === 0) {
                      setQuantityError(true);
                    } else {
                      setQuantityError(false);
                    }
                    setQuantity(quantity);
                    let margin = quantity * props.stockData.price;
                    setMarginRequired(margin);
                    if (margin > marginAvailable) {
                      setMarginError(true);
                    } else {
                      setMarginError(false);
                    }
                  }}
                />
              </Stack>
              {quantityError ? (
                <p style={{ color: "red" }}>Quantity cannot be 0.</p>
              ) : (
                <></>
              )}
              {marginError ? (
                <p style={{ color: "red" }}>Margin exceeded.</p>
              ) : (
                <></>
              )}
              {marginError || quantityError ? <></> : <br />}
              <Stack direction="row" spacing={16.1}>
                <label>Price: </label>
                <TextField
                  sx={{ width: "15ch" }}
                  value={props.stockData.price}
                  disabled={true}
                />
              </Stack>
              <br />
              <Stack direction="row" spacing={5.5}>
                <label>Margin required: </label>
                <TextField
                  sx={{ width: "15ch" }}
                  value={marginRequired}
                  disabled={true}
                />
              </Stack>
              <br />
              <Stack direction="row" spacing={4.9}>
                <label>Margin available: </label>
                <TextField
                  sx={{ width: "15ch" }}
                  value={marginAvailable}
                  disabled={true}
                />
              </Stack>
            </CardContent>
            <Divider />
            <CardActions style={{ display: "flex", justifyContent: "center" }}>
              <Button
                disabled={quantityError || marginError}
                variant="contained"
                color="success"
                onClick={placeOrder}
                style={{ backgroundColor: "#4CAF50", color: "white" }}
              >
                Buy
              </Button>
              <Button
                variant="outlined"
                onClick={() => {
                  setQuantity(1);
                  setMarginRequired(props.stockData.price);
                  setQuantityError(false);
                  setMarginError(false);
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
export default BuyTradeModal;
