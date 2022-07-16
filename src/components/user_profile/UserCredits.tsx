/**
 * Author: Sanika Tamhankar
 * BannerID: B00909848
 * Email: sn295037@dal.ca
 */
import React, { useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { Button } from "@mui/material";
import { useState } from "react";
import BuyCreditsModal from "./BuyCreditsModal";
import axios from "axios";

function UserCreditsComp() {
  const [openCreditsModal, setOpenCreditsModal] = useState(false);
  const userID = localStorage.getItem("userID");

  const openBuyCreditsModal = (event: any) => {
    setOpenCreditsModal(true);
  };
  const [credits, setCredits] = useState(0);

  function getUserData() {
    axios
      .get(`/api/users`, {
        responseType: "json",
        params: { userID: userID },
      })
      .then(function (response) {
        setCredits(response.data.prof.credits);
        console.log(response.data.prof);
      });
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Box sx={{ flexGrow: 1, alignItems: "center" }}>
      <BuyCreditsModal
        openModal={openCreditsModal}
        setOpenModal={setOpenCreditsModal}
        setNewCredits={setCredits}
      />
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} sx={{ mb: 5, mt: 5 }}>
          <Typography
            variant="h5"
            color="inherit"
            component="div"
            textAlign={"center"}
            fontWeight="bold"
          >
            Available Credits
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {/* Code Reference : https://mui.com/material-ui/react-avatar/ */}
          <Avatar
            sx={{
              width: 140,
              height: 140,
              fontSize: "2rem",
              alignItems: "center",
              backgroundColor: "#2E8BC0",
            }}
          >
            {credits}
          </Avatar>
        </Grid>
        <Grid item xs={12} sx={{ mt: 6 }}>
          <Button>
            <AddCircleRoundedIcon
              sx={{ fontSize: 60 }}
              onClick={openBuyCreditsModal}
            />
          </Button>
        </Grid>
        <Grid item xs={12} sx={{ mt: 1 }}>
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            textAlign={"center"}
          >
            Add more Credits
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default UserCreditsComp;
