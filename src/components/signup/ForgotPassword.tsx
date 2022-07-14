import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FormHelperText from "@mui/material/FormHelperText";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import axios from "axios";

export default function ForgotPassword() {
  const [open, setOpen] = React.useState(false);
  const initialValues = { password: "", confpassword: "", email: "" };
  const [formValue, setFormValue] = useState(initialValues);
  const [formError, setFormError] = useState({
    password: false,
    confpassword: undefined,
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    const forgotemail = localStorage.getItem("forgotemail");
    const checkemail = "email";
    // @ts-ignore
    setFormValue({ ...formValue, [checkemail]: forgotemail });
    e.preventDefault();
    // @ts-ignore
    setFormError(validate(formValue));
    if (errori === 0) {
      setOpen(true);
      console.log("done");
    } else {
      console.log("error");
      console.log(formError);
    }
  };
  let errori = 0;
  const validate = (values: { password: any; confpassword: any }) => {
    const errors = {
      password: undefined,
      confpassword: undefined,
    };

    if (values.password.length < 8) {
      // @ts-ignore
      errors.password = "Password must be more than 8 characters";
      errori = 1;
    } else if (values.password !== values.confpassword) {
      // @ts-ignore
      errors.confpassword = "Password does not match";
      // @ts-ignore
      errors.password = "Password does not match";
      errori = 1;
    } else {
      errori = 0;
    }
    return errors;
  };
  const handleClose = () => {
    setOpen(false);
  };
  const gotpage = () => {
    const form_data = {
      email: formValue.email,
      password: formValue.password,
    };
    console.log(formValue);
    axios
      .post("/api/register/forgotpassword", form_data)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          console.log(response.data.status);
          alert("Your password has been successfully changed");
          window.location.href = "/signin";
        } else {
          alert("Please try again");
        }
      })
      .catch(function (error) {
        alert("Something went Wrong!");
        console.log("Exception occured");
      });
    // window.location.href = "/signin";
  };
  const gotosignin = () => {
    window.location.href = "/";
  };
  const gotosignup = () => {
    window.location.href = "/signup";
  };

  const card_1 = {
    backgroundColor: "white",
    borderRadius: "10px",
    borderWidth: 1,
    margin: "10px",
    padding: "10px",
  };
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  return (
    <Container component="main" maxWidth="xs">
      <Card variant="outlined" style={card_1}>
        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2>Welcome to DTrade</h2>
          <Avatar sx={{ m: 1, bgcolor: "darkorange" }}>
            {" "}
            <LockOutlinedIcon />{" "}
          </Avatar>

          <Typography fontSize={25}>Forgot Password</Typography>
          <br />

          <Box sx={{ width: 1 }}>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Enter New Password"
                name="password"
                type={"password"}
                required
                sx={{ marginBottom: 1 }}
                onChange={handleChange}
                onSubmit={handleSubmit}
                value={formValue.password}
                error={formError.password}
              />
              <FormHelperText>{formError.password}</FormHelperText>

              <TextField
                fullWidth
                label="Confirm New Password"
                name="confpassword"
                required
                type={"password"}
                sx={{ marginTop: 1, marginBottom: 0 }}
                onChange={handleChange}
                onSubmit={handleSubmit}
                value={formValue.confpassword}
                error={formError.confpassword}
              />
              <FormHelperText>{formError.confpassword}</FormHelperText>
              <Button
                fullWidth
                variant="contained"
                type={"submit"}
                sx={{ marginTop: 1 }}
              >
                Change Password
              </Button>
            </form>
          </Box>
        </Box>
      </Card>
      <Card variant="outlined" style={card_1}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Button
              fullWidth
              variant="outlined"
              type={"submit"}
              onClick={gotosignin}
            >
              Sign-in
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              fullWidth
              variant="outlined"
              type={"submit"}
              onClick={gotosignup}
            >
              Sign-Up
            </Button>
          </Grid>
        </Grid>
      </Card>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Are you sure?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            By Clicking Submit your password will be reset to new password.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={gotpage} autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
