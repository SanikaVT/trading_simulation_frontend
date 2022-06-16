import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import UserDetailComp from "./UserDetail";
import UserCreditsComp from "./UserCredits";
import { Divider } from "@mui/material";
import DynamicUserInfoComp from "./DynamicUserInfo";

function UserDetail() {
  return (
    <Box >
      <Grid container>
        <Grid item xs={12} md={3}>
          <UserDetailComp />
        </Grid>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Grid item xs={12} md={6}>
          <DynamicUserInfoComp />
        </Grid>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Grid item xs={12} md={2} marginLeft={3}>
          <UserCreditsComp />
        </Grid>
      </Grid>
    </Box>
  );
}

export default UserDetail;
