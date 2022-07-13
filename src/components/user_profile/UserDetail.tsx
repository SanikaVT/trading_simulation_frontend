import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import axios from "axios";

function UserDetailComp() {
  const [first_name, setFname] = useState("");
  const [last_name, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [avatar, setAvatar] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:3100/api/users`, {
        responseType: "json",
        params: { userID: "1" },
      })
      .then(function(response) {
        setFname(response.data.prof.first_name + " ");
        setLname(response.data.prof.last_name);
        setEmail(response.data.prof.email);
        setPhone(response.data.prof.phone);
        setAvatar(
          response.data.prof.first_name.substring(0, 1).toUpperCase() +
            response.data.prof.last_name.substring(0, 1).toUpperCase()
        );
      });
  }, []);

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
          <Avatar sx={avatarStyle}>{avatar}</Avatar>
        </Grid>

        <Grid item xs={12} sx={{ m: 4 }}>
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            textAlign="center"
          >
            {first_name}
            {last_name}
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ mb: 4 }}>
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            textAlign="center"
          >
            Phone: {phone}
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ mb: 4 }}>
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            textAlign="center"
          >
            Email: {email}
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
