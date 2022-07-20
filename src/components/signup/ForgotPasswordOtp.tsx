// @author Dharmay Dineshchandra Sureja 
// Banner id (B00904061)
// email : dh276903@dal.ca
// this component is responsible to validate user by sending and checking otp
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { useState } from "react";

export default function ForgotPasswordOtp() {
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // @ts-ignore

    gotpage();
  };
  const initialValues = { email: "", otp: "" };
  const [formValue, setFormValue] = useState(initialValues);
  const [checkotp, setCheckOtp] = useState(initialValues);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const sendotp = (e: { preventDefault: () => void }) => {
    e.preventDefault();



    const form_data = {
      email: formValue.email,
    };
  //api call to send code to user and authenticate user
    axios
      .post("/api/register/otp", form_data)
      .then((response) => {
  
        setCheckOtp(response.data.otp);
        if (response.status === 200) {
        
        } else {
          alert("Email does not exist Please register!");
        }
      })
      .catch(function (error) {
    
      });
    alert("Please check your email for code");
    //window.location.href = "/dashboard";
  };

  const gotpage = (e: { preventDefault: () => void }) => {
    // @ts-ignore
    if (checkotp.toString() === formValue.otp.toString()) {
    
      localStorage.setItem("forgotemail", formValue.email);
      window.location.href = "/forgotpassword";
    } else {
     
      alert("Please check Code and Request again if you have not received!");
    }
    // window.location.href = "/forgotpassword";
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
            <form onSubmit={sendotp}>
              <TextField
                fullWidth
                label="Email Address"
                required
                name="email"
                type={"email"}
                onChange={handleChange}
                value={formValue.email}
                sx={{ marginBottom: 1 }}
              />

              <Button fullWidth variant="contained" type={"submit"}>
                Send Code
              </Button>
            </form>

            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                required
                label="Enter Code here"
                multiline
                name="otp"
                onChange={handleChange}
                value={formValue.otp}
                sx={{ marginBottom: 2, marginTop: 2 }}
              />

              <Button fullWidth variant="contained" type={"submit"}>
                Next
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
    </Container>
  );
}
