import React, { useState } from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from "@mui/material";


function UserInfoComp(props: any) {

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
  

  const [address, setAddress]=useState(props.address);
  const [address2, setAddress2] = useState(props.address);
    function changeAddress()
    {
      if (address2.trim().length !== 0)
      {
        setAddress(address2);
      }
      setAddrDOpen(false)
    }

  const [account, setAccount]=useState(props.account);
  const [account2, setAccount2] = useState(props.account);
    function changeAccount()
    {
      if (account2.trim().length !== 0)
      {
        setAccount(account2);
      }
      setAccDOpen(false)
    }

    // const [risk_app, setRiskAppetite]=useState(props.risk_appetite);
    // const [risk_app2, setRiskAppetite2] = useState(props.risk_appetite);
    //   function changeRiskApp()
    //   {
    //     if (risk_app2.trim().length !== 0)
    //     {
    //       setAddress(risk_app2);
    //     }
    //     setAddrDOpen(false)
    //   }

  return (
    <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={4} sx={{mt:2, m:1, alignItems:"center"}} >
        <Grid item xs={12} sx={{mb:3}}>
          <Typography variant="h5" color="inherit" component="div" fontWeight="bold">
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
        <Grid item md={6}xs={12}>
          <Typography
            display="inline"
            variant="h6"
            color="inherit"
            component="div"
            defaultValue={props.address}
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
        <Grid item md={6}xs={12}>
          <Typography
            display="inline"
            variant="h6"
            color="inherit"
            component="div"
            defaultValue={props.account}
          >
            {account}
          </Typography>
        </Grid>
        <Grid item md={2} xs={12}>
          <Button id="2" onClick={handleClickAccOpen}>
            <EditIcon />
          </Button>
        </Grid>
        {/* <Grid item xs={3}>
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
            defaultValue={props.risk_appetite}
          >
            {props.risk_appetite}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Button id="3" onClick={handleClickAddrOpen}>
            <EditIcon />
          </Button>
        </Grid> */}
      </Grid>

      {/* Code Reference: https://mui.com/material-ui/react-dialog/ */}
      
      <Dialog fullWidth={true}
  maxWidth={'lg'} open={openAddrDialog} onClose={handleAddrClose}>
        <DialogTitle>Enter your {props.addr_ip}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            type="text"
            fullWidth
            variant="standard"
            value={address2}
            onChange = {(event) => setAddress2(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={changeAddress}>Save</Button>
        </DialogActions>

      </Dialog>

      <Dialog fullWidth={true}
  maxWidth={'lg'} open={openAccDialog} onClose={handleAccClose}>
        <DialogTitle>Enter your {props.accountNum}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            type="text"
            fullWidth
            variant="standard"
            value={account2}
            onChange = {(event) => setAccount2(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={changeAccount}>Save</Button>
        </DialogActions>

      </Dialog>
    </Box>
    
  );
}

export default UserInfoComp;
