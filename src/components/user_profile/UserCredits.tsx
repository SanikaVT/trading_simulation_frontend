import React from "react";
import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { Button } from "@mui/material";
import { useState } from "react";
import BuyCreditsModal from "./BuyCreditsModal";

function UserCreditsComp() {
  const [openCreditsModal, setOpenCreditsModal] = useState(false);

  const openBuyCreditsModal = (event: any) => {
    setOpenCreditsModal(true);
  };

  return (

    
    <Box sx={{ flexGrow: 1 ,alignItems:"center"}}>
      <BuyCreditsModal
        openModal={openCreditsModal}
        setOpenModal={setOpenCreditsModal}
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
              default: 450,
            }}
          >
            450
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
