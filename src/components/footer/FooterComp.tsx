import { Box, Grid } from "@mui/material";
import React from "react";
import FooterLinksComp from "./FooterInfo";
import { Divider } from "@mui/material";

function FooterComp() {
  return (
    <Box sx={{ mt: 5, flexGrow: 1, bgcolor: "#2E8BC0" }}>
      <Grid container spacing={1} sx={{ pt: 4 }}>
        <Grid item xs={4}>
          <Box textAlign="center" fontWeight="bold" color="white" mb={1}>
            About
          </Box>
          <FooterLinksComp name="Our Company" />
          <FooterLinksComp name="Careers" />
          <FooterLinksComp name="Social" />
        </Grid>
        <Grid item xs={4}>
          <Box textAlign="center" fontWeight="bold" color="white" mb={1}>
            Portfolio
          </Box>
          <FooterLinksComp name="Positions" />
          <FooterLinksComp name="Holdings" />
          <FooterLinksComp name="Order Status" link="orderstatus" />
        </Grid>
        <Grid item xs={4}>
          <Box textAlign="center" fontWeight="bold" color="white" mb={1}>
            Terms & Policies
          </Box>
          <FooterLinksComp name="Terms & Conditions" />
          <FooterLinksComp name="Privacy" />
          <FooterLinksComp name="Cookies" />
        </Grid>
      </Grid>
      <Divider color="white" sx={{ borderBottomWidth: 1, mt: 3 }} />
      <Grid container color="white" direction="column">
        <Grid item xs={13} textAlign="center" sx={{ mt: 3, mb: 3 }}>
          © 2016 - 2022 DTrade.com. All rights reserved.
        </Grid>
      </Grid>
    </Box>
  );
}

export default FooterComp;
