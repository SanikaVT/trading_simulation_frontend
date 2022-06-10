import React from "react";
import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { Button } from "@mui/material";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField } from "@mui/material";

function UserCreditsComp() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const initialCredits = "450";

  const [credits, setCredits] = useState(initialCredits);
  const [credits2, setCredits2] = useState("0");
  function addCredits() {
    if (credits2.trim().length !== 0) {
      setCredits(Number(credits) + Number(credits2)+"");
    }
    setOpen(false);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ m: 4 }}
      >
        <Grid item xs={12} sx={{ mb: 5, mt: 3 }}>
          <Typography
            variant="h5"
            color="inherit"
            component="div"
            textAlign={"center"}
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
            {credits}
          </Avatar>
        </Grid>
        <Grid item xs={12} sx={{ mt: 6 }}>
          <Button>
            <AddCircleRoundedIcon
              sx={{ fontSize: 60 }}
              onClick={handleClickOpen}
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

      {/* Code Reference: https://mui.com/material-ui/react-dialog/ */}
      <Dialog
        fullWidth={true}
        maxWidth={"lg"}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Add Credits</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="number"
            type="number"
            fullWidth
            variant="standard"
            value={credits2}
            onChange={(event) => setCredits2(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={addCredits}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default UserCreditsComp;
