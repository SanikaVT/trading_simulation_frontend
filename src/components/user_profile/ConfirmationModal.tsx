import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Fab } from "@mui/material";

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

function ConfirmationModal(props: any) {
  return (
    <>
      <Modal
        open={props.openConfModal}
        onClose={() => {
          props.setOpenConfModal(false);
          props.closeCreditModal();
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Card>
            <CardContent style={{ backgroundColor: "#2E8BC0", color: "white" }}>
              <HeaderFirst>Confirmation</HeaderFirst>
            </CardContent>
            <Divider />
            <CardContent>
              <Stack direction="column" spacing={6} alignItems="center">
                <Stack direction="row">
                  <label>Transaction Successful!</label>
                </Stack>
                <Stack direction="row">
                  <CheckCircleIcon />
                </Stack>
                <Stack direction="row">
                  <label>Credits will be added to your account shortly!</label>
                </Stack>
                <Divider orientation="horizontal" variant="middle" flexItem />
              </Stack>
            </CardContent>
            <CardActions style={{ display: "flex", justifyContent: "center" }}>
              <Fab color="primary" aria-label="add">
                <ArrowBackIosNewIcon
                  onClick={() => {
                    props.setOpenConfModal(false);
                    // window.location.reload();
                  }}
                  style={{ backgroundColor: "#2E8BC0", color: "white" }}
                />
              </Fab>
            </CardActions>
          </Card>
        </Box>
      </Modal>
    </>
  );
}
const HeaderFirst = styled.div``;

export default ConfirmationModal;
