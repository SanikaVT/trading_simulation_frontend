// @author Dharmay Dineshchandra Sureja
// Banner id (B00904061)
// email : dh276903@dal.ca
// this component is responsible to register user
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import FormHelperText from "@mui/material/FormHelperText";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import bcrypt from "bcryptjs";
import { Stack } from "@mui/material";
export default function SignUp() {
  const [open, setOpen] = React.useState(false);
  const initialValues = {
    password: "",
    confpassword: "",
    fname: "",
    lname: "",
    email: "",
    phoneno: "",
    address: "",
    account: "",
  };
  const [formValue, setFormValue] = useState(initialValues);
  const [formError, setFormError] = useState({
    password: undefined,
    email: false,
    fname: undefined,
    lname: undefined,
    confpassword: undefined,
    phoneno: undefined,
    account: undefined,
  });
  let errori = 0;

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // @ts-ignore
    setFormError(validate(formValue));
    if (errori === 0) {
      //encrypt password and save values to local storage
      const hashedPassword = bcrypt.hashSync(
        formValue.password,
        "$2a$10$ZpUkUuWbmNB6uwSNyxNSmu"
      );
      localStorage.setItem("email", formValue.email);
      localStorage.setItem("fname", formValue.fname);
      localStorage.setItem("lname", formValue.lname);
      localStorage.setItem("phoneno", formValue.phoneno);
      localStorage.setItem("address", formValue.address);
      localStorage.setItem("account", formValue.account);
      localStorage.setItem("password", hashedPassword);
      setOpen(true);
    } else {
      console.log(formError);
    }
  };

  const gotpage = () => {
    window.location.href = "/riskappetite";
  };

  const validate = (values: {
    password: any;
    confpassword: any;
    fname: any;
    lname: any;
    email: any;
    phoneno: any;
    account: any;
  }) => {
    const errors = {
      password: undefined,
      confpassword: undefined,
      lname: undefined,
      email: undefined,
      phoneno: undefined,
      account: undefined,
    };
    const namereg = /[^A-Za-z]/;
    const emailreg = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const phonereg = /^[0-9]+$/;

    if (values.password.length < 8) {
      // @ts-ignore
      errors.password = "Password must be more than 8 characters";
      errori = 1;
    } else if (values.account.length !== 16) {
      // @ts-ignore
      errors.account = "Please enter valid 16 Digit Credit card number";

      errori = 1;
    } else if (values.password !== values.confpassword) {
      // @ts-ignore
      errors.confpassword = "Password does not match";
      // @ts-ignore
      errors.password = "Password does not match";
      errori = 1;
    } else if (namereg.test(values.fname)) {
      // @ts-ignore
      errors.fname = "First name should only contains alphabetic numbers";
      errori = 1;
    } else if (namereg.test(values.lname)) {
      // @ts-ignore
      errors.lname = "Last name should only contains alphabetic numbers";
      errori = 1;
    } else if (!emailreg.test(values.email)) {
      // @ts-ignore
      errors.email = "Email is not valid";
      errori = 1;
    } else if (!phonereg.test(values.phoneno) || values.phoneno.length !== 10) {
      // @ts-ignore
      errors.phoneno =
        "Phone number should only contain numbers and should be 10 digit";
      errori = 1;
    } else {
      errori = 0;
    }
    return errors;
  };
  const gotosignin = () => {
    window.location.href = "/";
  };

  const card_1 = {
    backgroundColor: "white",
    border: "none",
    padding: "10px",
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Grid container alignItems="stretch">
      <Grid
        className="left-pane"
        item
        md={7}
        sx={{ display: { xs: "none", sm: "block", md: "block" } }}
      >
        <Stack>
          <img
            src={"./home-logo.webp"}
            style={{ height: "100vh" }}
            alt="trader"
          />
        </Stack>
      </Grid>
      <Grid
        className="right-pane"
        item
        md={5}
        xs={12}
        style={{ padding: "0rem" }}
      >
        <Stack>
          <Container component="main" maxWidth="xs">
            <Card variant="outlined" style={card_1}>
              <Box
                sx={{
                  marginTop: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h2>Welcome to DTrade</h2>
                <Typography fontSize={25} style={{ color: "bolder" }}>
                  Sign Up
                </Typography>
                <br />

                <Box>
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          label="First Name"
                          name="fname"
                          required
                          onChange={handleChange}
                          onSubmit={handleSubmit}
                          value={formValue.fname}
                          error={formError.fname}
                          fullWidth
                          // sx={{ marginBottom:1, marginTop:1}}
                        />
                        <FormHelperText>{formError.fname}</FormHelperText>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          label="Last Name"
                          name="lname"
                          required
                          onChange={handleChange}
                          onSubmit={handleSubmit}
                          value={formValue.lname}
                          error={formError.lname}
                          fullWidth
                          // sx={{ marginBottom:1, marginTop:1}}
                        />
                        <FormHelperText>{formError.lname}</FormHelperText>
                      </Grid>
                    </Grid>

                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      required
                      onChange={handleChange}
                      onSubmit={handleSubmit}
                      value={formValue.email}
                      error={formError.email}
                      type="email"
                      sx={{ marginBottom: 1, marginTop: 1 }}
                    />
                    <FormHelperText>{formError.email}</FormHelperText>
                    <TextField
                      fullWidth
                      label="Password"
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
                      label="Confirm Password"
                      name="confpassword"
                      type={"password"}
                      required
                      sx={{ marginTop: 1, marginBottom: 1 }}
                      onChange={handleChange}
                      onSubmit={handleSubmit}
                      value={formValue.confpassword}
                      error={formError.confpassword}
                    />
                    <FormHelperText>{formError.confpassword}</FormHelperText>

                    <TextField
                      fullWidth
                      required
                      label="Phone Number"
                      name="phoneno"
                      onChange={handleChange}
                      onSubmit={handleSubmit}
                      value={formValue.phoneno}
                      error={formError.phoneno}
                      sx={{ marginTop: 1, marginBottom: 1 }}
                    />
                    <FormHelperText>{formError.phoneno}</FormHelperText>
                    <TextField
                      fullWidth
                      required
                      label="Address"
                      multiline
                      name={"address"}
                      onChange={handleChange}
                      onSubmit={handleSubmit}
                      value={formValue.address}
                      sx={{ marginTop: 1, marginBottom: 1 }}
                    />

                    <TextField
                      fullWidth
                      required
                      label="Account number"
                      multiline
                      name={"account"}
                      type="number"
                      onChange={handleChange}
                      onSubmit={handleSubmit}
                      value={formValue.account}
                      error={formError.account}
                      sx={{ marginTop: 1, marginBottom: 1 }}
                    />
                    <FormHelperText>{formError.account}</FormHelperText>

                    <Button
                      sx={{ marginTop: 1 }}
                      fullWidth
                      variant="contained"
                      type={"submit"}
                    >
                      Next
                    </Button>
                  </form>
                </Box>
              </Box>
            </Card>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Do you confirm all details?"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  By Clicking Submit you will be redirected to Risk Appetite
                  questionnaire.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={gotpage} autoFocus>
                  Submit
                </Button>
              </DialogActions>
            </Dialog>

            <Card variant="outlined" style={card_1}>
              <Button
                fullWidth
                variant="outlined"
                type={"submit"}
                onClick={gotosignin}
              >
                Sign-in
              </Button>
            </Card>
          </Container>
        </Stack>
      </Grid>
    </Grid>
  );
}
