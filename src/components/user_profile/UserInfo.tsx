/**
 * Author: Sanika Tamhankar
 * BannerID: B00909848
 * Email: sn295037@dal.ca
 */
import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField } from "@mui/material";
import { Autocomplete } from "@mui/material";
import axios from "axios";
const options = ["High", "Low"];

function UserInfoComp() {
  const userID = localStorage.getItem("userID");
  const [openAddrDialog, setAddrDOpen] = React.useState(false);

  const handleClickAddrOpen = () => {
    setAddrDOpen(true);
  };

  const handleAddrClose = () => {
    setAddrDOpen(false);
  };

  const [openAccDialog, setAccDOpen] = React.useState(false);

  const handleClickAccOpen = () => {
    setAccDOpen(true);
  };

  const handleAccClose = () => {
    setAccDOpen(false);
  };

  const [openRiskAppDialog, setRiskAppetiteOpen] = React.useState(false);

  const handleClickRiskOpen = () => {
    setRiskAppetiteOpen(true);
  };

  const handleRiskClose = () => {
    setRiskAppetiteOpen(false);
  };

  useEffect(() => {
    axios
      .get(`/api/users`, {
        responseType: "json",
        params: { userID: userID },
      })
      .then(function (response) {
        setAddress(response.data.prof.address);
        setAddress2(response.data.prof.address);
        setAccount(response.data.prof.account);
        setAccount2(response.data.prof.account);
        setRiskAppetite(response.data.prof.risk_appetite);
        setRiskAppetite2(response.data.prof.risk_appetite);
       
      });
  }, []);

  function postUserData() {
    axios
      .post(`/api/users`, {
        userID: userID,
        address: address2,
        account: account2,
        risk_appetite: risk_appetite2,
      })
      .then((res) => {
      
      });
  }

  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  function changeAddress() {
    if (address2.trim().length !== 0) {
      setAddress(address2);
    }
    setAddrDOpen(false);
    postUserData();
  }

  const [account, setAccount] = useState("");
  const [account2, setAccount2] = useState("");
  function changeAccount() {
    if (account2.trim().length !== 0) {
      setAccount(account2);
    }
    setAccDOpen(false);
    postUserData();
  }

  const [risk_appetite, setRiskAppetite] = useState(options[0]);
  const [risk_appetite2, setRiskAppetite2] = useState("");
  function changeRiskAppetite() {

    if (risk_appetite2.trim().length !== 0) {
      setRiskAppetite(risk_appetite2);
    }
    setRiskAppetiteOpen(false);
    postUserData();
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4} sx={{ mt: 2, m: 1, alignItems: "center" }}>
        <Grid item xs={12} sx={{ mb: 3 }}>
          <Typography
            variant="h5"
            color="inherit"
            component="div"
            fontWeight="bold"
          >
            Profile Information
          </Typography>
        </Grid>
        <Grid item md={3} xs={12}>
          <Typography
            display="inline"
            variant="h6"
            color="inherit"
            component="div"
            fontWeight="bold"
          >
            Address:
          </Typography>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography
            display="inline"
            variant="h6"
            color="inherit"
            component="div"
            defaultValue={address}
          >
            {address}
          </Typography>
        </Grid>
        <Grid item md={3} xs={12}>
          <Button id="1" onClick={handleClickAddrOpen}>
            <EditIcon />
          </Button>
        </Grid>
        <Grid item md={3} xs={12}>
          <Typography
            display="inline"
            variant="h6"
            color="inherit"
            component="div"
            fontWeight="bold"
          >
            Account number:
          </Typography>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography
            display="inline"
            variant="h6"
            color="inherit"
            component="div"
            defaultValue={account}
          >
            {account}
          </Typography>
        </Grid>
        <Grid item md={2} xs={12}>
          <Button id="2" onClick={handleClickAccOpen}>
            <EditIcon />
          </Button>
        </Grid>

        <Grid item md={3} xs={12}>
          <Typography
            display="inline"
            variant="h6"
            color="inherit"
            component="div"
            fontWeight="bold"
          >
            Risk Appetite:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography
            display="inline"
            variant="h6"
            color="inherit"
            component="div"
            defaultValue={risk_appetite}
          >
            {risk_appetite}
          </Typography>
        </Grid>
        <Grid item md={2} xs={12}>
          <Button id="3" onClick={handleClickRiskOpen}>
            <EditIcon />
          </Button>
        </Grid>
      </Grid>

      {/* Code Reference: https://mui.com/material-ui/react-dialog/ */}

      <Dialog
        fullWidth={true}
        maxWidth={"lg"}
        open={openAddrDialog}
        onClose={handleAddrClose}
      >
        <DialogTitle>Edit your address</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            type="text"
            fullWidth
            variant="standard"
            value={address2}
            onChange={(event) => setAddress2(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={changeAddress}>Save</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        fullWidth={true}
        maxWidth={"lg"}
        open={openAccDialog}
        onClose={handleAccClose}
      >
        <DialogTitle>Edit your account number</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            type="text"
            fullWidth
            variant="standard"
            value={account2}
            onChange={(event) => setAccount2(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={changeAccount}>Save</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        fullWidth={true}
        maxWidth={"sm"}
        open={openRiskAppDialog}
        onClose={handleRiskClose}
      >
        <DialogTitle>Change your Risk Appetite</DialogTitle>
        <DialogContent>
          <Autocomplete
            id="combo-box"
            options={options}
            value={risk_appetite}
            sx={{ width: 300 }}
            onChange={(event, value) => setRiskAppetite2(String(value))}
            renderInput={(params) => <TextField {...params} type="text" />}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={changeRiskAppetite}>Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default UserInfoComp;
