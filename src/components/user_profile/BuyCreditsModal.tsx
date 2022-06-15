import React, { useState } from "react";
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
  m: 3
};

var isError=true;

const acceptNumbers = (event: any) => {
  let charCode = event.keyCode;
  if (
    !((charCode >= 48 && charCode <= 57) || charCode === 8 || charCode === 32)
  ) {
    event.preventDefault();
  }
};

function BuyCreditsModal(props: any) {
  const [credits, setCredits] = useState(100);
  const [creditsError, setCreditsError] = useState(false);
  const [account, setAccount] = useState(0);
  const [accountError, setAccountError] = useState(false);
  const [cvv, setCVV] = useState(0);
  const [cvvError, setCVVError] = useState(false);
  const [confirmationModal, setOpenConfirmationModal] = useState(false);

  const openConfirmationModal = (event: any) => {
    setOpenConfirmationModal(true);
  };
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
       openModal={confirmationModal}
       setOpenModal={setOpenConfirmationModal}
     />
          <Card>
            <CardContent style={{ backgroundColor: "#2E8BC0", color: "white" }}>
              <HeaderFirst>
                Buy more credits
              </HeaderFirst>
            </CardContent>
            <Divider />
            <CardContent>
              <Stack direction="column" spacing={3}>
              <Stack direction="row" spacing={8}>
                <label>Enter Credits: </label>
                <TextField
                  value={credits}
                  onKeyDown={acceptNumbers}
                  onChange={(event) => {
                    let credits = Number(event.target.value);
                    if (credits === 0) {
                      setCreditsError(true);
                      isError=true;
                    } else {
                      setCreditsError(false);
                      isError=false;
                    }
                    setCredits(credits);
                  }}
                />
              </Stack>
              {creditsError ? (
                <p style={{ color: "red" }}>Please enter valid amount</p>
              ) : (
                <></>
              )}
              <Stack direction="row" spacing={8}>
                <label>Account Details </label>
              </Stack>
              <Stack direction="row" spacing={7}>
                <label>Card Number: </label>
                <TextField
                  value={account}
                  onKeyDown={acceptNumbers}
                  onChange={(event:any) => {
                    let account = Number(event.target.value);
                    if ((account+"").length === 16) {
                      setAccountError(false);
                      isError=false;
                    } else {
                      setAccountError(true);
                      isError=true;
                    }
                    setAccount(account);

                  }}
                />
              </Stack>
              {accountError ? (
                <p style={{ color: "red" }}>Please enter a valid account number</p>
              ) : (
                <></>
              )}
              <Stack direction="row" spacing={16}>
                <label>CVV: </label>
                <TextField
                  value={cvv}
                  onKeyDown={acceptNumbers}
                  onChange={(event:any) => {
                    let cvv = Number(event.target.value);
                    if ((cvv+"").length === 3) {
                      setCVVError(false);
                      isError=false;
                    } else {
                      setCVVError(true);
                      isError=true;
                    }
                    setCVV(cvv);
                  }}
                />
              </Stack>
              {cvvError ? (
                    <p style={{ color: "red" }}>Please enter a valid CVV of 3 digits</p>
                  ) : (
                    <></>
                  )}
              </Stack>
            </CardContent>
            <Divider />
            <CardActions style={{ display: "flex", justifyContent: "center" }}>
              <Button
                disabled={creditsError && accountError && cvvError}
                variant="contained"
                color="success"
                onClick= {
                  isError?
                  undefined:(openConfirmationModal)
                }
                style={{ backgroundColor: "#2E8BC0", color: "white" }}
              >
                Buy
              </Button>
              <Button
                variant="outlined"
                onClick={() => {
                  setCredits(100);
                  setAccount(0);
                  setCVV(0);
                  setCreditsError(false);
                  setAccountError(false);
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
