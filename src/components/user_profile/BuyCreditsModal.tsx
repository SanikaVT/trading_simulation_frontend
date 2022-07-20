/**
 * Author: Sanika Tamhankar
 * BannerID: B00909848
 * Email: sn295037@dal.ca
 */
import React, { useEffect, useState } from "react";
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
import ConfirmationModal from "./ConfirmationModal";
import axios from "axios";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 425,
  height: 550,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 22,
  p: 4,
  m: 3,
};

function BuyCreditsModal(props: any) {
  var cred = 0;
  var isError = false;
  const [credits, setCredits] = useState(0);
  const [credits2, setCredits2] = useState(0);
  const [creditsError, setCreditsError] = useState(false);
  const [cardNum, setCard] = useState(0);
  const [cardError, setCardError] = useState(false);
  const [cvv, setCVV] = useState(0);
  const [cvvError, setCVVError] = useState(false);
  const [confirmationModal, setOpenConfirmationModal] = useState(false);
  const userID = localStorage.getItem("userID");
  const handleClickCreditModalClose = () => {
    props.openModal(false);
  };

  const acceptNumbers = (event: any) => {
    let charCode = event.keyCode;
    if (
      !((charCode >= 48 && charCode <= 57) || charCode === 8 || charCode === 32)
    ) {
      event.preventDefault();
    }
  };
  function changeCredits() {
    console.log(isError);
    if (!isError) {
      if (credits2 !== 0) {
        cred = credits + credits2;
        postUserData();
        // props.setOpenModal(false);
        props.setNewCredits(Number(cred));
        setOpenConfirmationModal(true);
      }
    }
  }
  function postUserData() {
    axios
      .post(`http://localhost:3100/api/users`, {
        userID: userID,
        credits: Number(cred),
      })
      .then((res) => {
        sendMail();
      });
  }

  function sendMail() {
    axios
      .post(`http://localhost:3100/api/users/sendThisEmail`, {
        mail: localStorage.getItem("email"),
        credits: Number(cred),
      })
      .then((res) => {});
  }

  useEffect(() => {
    axios
      .get(`http://localhost:3100/api/users`, {
        responseType: "json",
        params: { userID: userID },
      })
      .then(function(response) {
        setCredits(response.data.prof.credits);
      });
  }, []);

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
          <ConfirmationModal
            openConfModal={confirmationModal}
            setOpenConfModal={setOpenConfirmationModal}
            closeCreditModal={handleClickCreditModalClose}
          />
          <Card>
            <CardContent style={{ backgroundColor: "#2E8BC0", color: "white" }}>
              <HeaderFirst>Buy more credits</HeaderFirst>
            </CardContent>
            <Divider />
            <CardContent>
              <Stack direction="column" spacing={3}>
                <Stack direction="row" spacing={8}>
                  <label>Enter Credits: </label>
                  <TextField
                    value={credits2}
                    onKeyDown={acceptNumbers}
                    onChange={(event: any) => {
                      let cred = Number(event.target.value);
                      console.log(event.target.value);
                      if ((cred + "").length >= 2) {
                        setCreditsError(false);
                        isError = false;
                      } else {
                        setCreditsError(true);
                        isError = true;
                      }
                      setCredits2(cred);
                    }}
                  />
                </Stack>
                {creditsError ? (
                  <p style={{ color: "red" }}>
                    Credit amount should be atleast 10
                  </p>
                ) : (
                  <></>
                )}
                <Stack direction="row" spacing={8}>
                  <label>Card Details </label>
                </Stack>
                <Stack direction="row" spacing={7}>
                  <label>Card Number: </label>
                  <TextField
                    value={cardNum}
                    onKeyDown={acceptNumbers}
                    onChange={(event: any) => {
                      let cardNum = Number(event.target.value);
                      if ((cardNum + "").length === 16) {
                        setCardError(false);
                        isError = false;
                      } else {
                        setCardError(true);
                        isError = true;
                      }
                      setCard(cardNum);
                    }}
                  />
                </Stack>
                {cardError ? (
                  <p style={{ color: "red" }}>
                    {" "}
                    Card number should have 16 digits
                  </p>
                ) : (
                  <></>
                )}
                <Stack direction="row" spacing={16}>
                  <label>CVV: </label>
                  <TextField
                    value={cvv}
                    onKeyDown={acceptNumbers}
                    onChange={(event: any) => {
                      let cvv = Number(event.target.value);
                      if ((cvv + "").length === 3) {
                        setCVVError(false);
                        isError = false;
                      } else {
                        setCVVError(true);
                        isError = true;
                      }
                      setCVV(cvv);
                    }}
                  />
                </Stack>
                {cvvError ? (
                  <p style={{ color: "red" }}>
                    Please enter a valid CVV of 3 digits
                  </p>
                ) : (
                  <></>
                )}
              </Stack>
            </CardContent>
            <Divider />
            <CardActions style={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                color="success"
                onClick={() => {
                  changeCredits();
                  handleClickCreditModalClose();
                }}
                style={{ backgroundColor: "#2E8BC0", color: "white" }}
              >
                Buy
              </Button>
              <Button
                variant="outlined"
                onClick={() => {
                  setCredits2(100);
                  setCard(0);
                  setCVV(0);
                  setCreditsError(false);
                  setCardError(false);
                  setCVVError(false);
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

export default BuyCreditsModal;
