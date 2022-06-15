import React from "react";
import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";

function UserDetailComp() {
  return (
    <Box sx={{ flexGrow: 1, alignItems: "center" }}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 5 }}
      >
        <Grid item xs={12}>
          {/* Code Reference: https://mui.com/material-ui/react-avatar/ */}
          <Avatar sx={avatarStyle}>ES</Avatar>
        </Grid>

        <Grid item xs={12} sx={{ m: 4 }}>
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            textAlign="center"
          >
            Emily Stewart
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ mb: 4 }}>
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            textAlign="center"
          >
            Phone: +1 902 837 3748
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ mb: 4 }}>
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            textAlign="center"
          >
            Email:emily@gmail.com
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

const avatarStyle = {
  fontSize: "3rem",
  width: 180,
  height: 180,
  backgroundColor: "#2E8BC0",
};

export default UserDetailComp;
