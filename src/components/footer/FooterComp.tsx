import { Box, Grid } from "@mui/material";

function FooterComp() {
  return (
    <Box sx={{ mt: 5, flexGrow: 1, bgcolor: "#2E8BC0" }}>
      <Grid container color="white" direction="column">
        <Grid item xs={12} textAlign="center" sx={{ mt: 3, mb: 3 }}>
          © 2016 - 2022 DTrade.com. All rights reserved.
        </Grid>
      </Grid>
    </Box>
  );
}

export default FooterComp;
