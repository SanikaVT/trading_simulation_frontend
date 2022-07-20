// @author Dharmay Dineshchandra Sureja
// Banner id (B00904061)
// email : dh276903@dal.ca
// this component is responsible to signin user
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Divider, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import FormHelperText from "@mui/material/FormHelperText";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import axios from "axios";
import bcrypt from "bcryptjs";
import { ClassNames } from "@emotion/react";

const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "black",
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "black",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "black",
    },
    "& .MuiOutlinedInput-input": {
      color: "black",
    },
    "&:hover .MuiOutlinedInput-input": {
      color: "black",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "black",
    },
    "& .MuiInputLabel-outlined": {
      color: "black",
    },
    "&:hover .MuiInputLabel-outlined": {
      color: "black",
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "black",
    },
  },
});

export default function SignIn() {
  // const Centeral ={
  //     justifyContent: 'center',
  //     paddingLeft:'125px'
  // };

  const Color = {
    color: "black",
    borderWidth: 1,
    borderColor: "black",
  };
  const card_1 = {
    backgroundColor: "white",
    color: "black",
    border: "none",
  };

  const initialValues = { email: "", password: "" };
  const [formValue, setFormValue] = useState(initialValues);
  const [formError, setFormError] = useState({
    password: false,
    email: false,
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
      const hashedPassword = bcrypt.hashSync(
        formValue.password,
        "$2a$10$ZpUkUuWbmNB6uwSNyxNSmu"
      );

      const form_data = {
        email: formValue.email,
        password: hashedPassword,
      };

      // api call to check login credentials
      axios
        .post("/api/register/login", form_data)
        .then((response) => {
          if (response.status === 200) {
            localStorage.setItem("userID", response.data.userID);
            localStorage.setItem("email", response.data.email);
            // alert(localStorage.getItem("email"));
            window.location.href = "/dashboard";
          } else {
            alert("Email or password is wrong!");
          }
        })
        .catch(function(error) {
          alert("Email or password is wrong!");
        });

      //window.location.href = "/dashboard";
    } else {
      console.log(formError);
    }
  };

  //validate user form input
  const validate = (values: { password: any; email: any }) => {
    const emailreg = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const errors = {
      password: undefined,
      email: undefined,
    };

    if (!values.password) {
      // @ts-ignore
      errors.password = "Password is required";
      errori = 1;
    } else if (values.password.length < 8) {
      // @ts-ignore
      errors.password = "Password must be more than 8 characters";
      errori = 1;
    } else if (!emailreg.test(values.email)) {
      // @ts-ignore
      errors.email = "Email is not valid";
      errori = 1;
    } else {
      errori = 0;
    }
    return errors;
  };

  const classes = useStyles();

  return (
    <Grid container alignItems="stretch">
      <Grid
        className="hidden-xs"
        md={7}
        item
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
        sm={12}
        item
        md={5}
        xs={12}
        sx={{ p: { xs: "0rem", md: "5rem", sm: "5rem", lm: "5rem" } }}
      >
        <Stack>
          <Container component="main" maxWidth="lg">
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
                <Avatar sx={{ m: 1, bgcolor: "darkorange" }}></Avatar>
                <Typography fontSize={25}>Sign in</Typography>
                <br />

                <Box sx={{ width: 1 }}>
                  <form onSubmit={handleSubmit}>
                    <TextField
                      fullWidth
                      className={classes.root}
                      label="Email Address"
                      type="email"
                      name="email"
                      onChange={handleChange}
                      value={formValue.email}
                      error={formError.email}
                      required
                    />
                    <br></br>
                    <br></br>
                    <TextField
                      fullWidth
                      className={classes.root}
                      name="password"
                      id="password"
                      label="Password"
                      type="password"
                      onChange={handleChange}
                      onSubmit={handleSubmit}
                      value={formValue.password}
                      error={formError.password}
                      required
                    />
                    <FormHelperText>{formError.password}</FormHelperText>
                    {/*<br></br>*/}
                    <br></br>
                    <Button type="submit" fullWidth variant="contained">
                      Sign In
                    </Button>
                  </form>
                  <Grid
                    container
                    alignItems="center"
                    justifyContent="center"
                    style={{ marginTop: "1rem" }}
                  >
                    <Grid item>
                      <Link
                        variant="body1"
                        href={"/forgotpasswordotp"}
                        style={{ color: "black" }}
                      >
                        Forgot password?
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
                <Divider orientation={"horizontal"} flexItem style={Color} />
                <Box>
                  <br></br>
                  <Button variant="contained" color="success" href={"/signup"}>
                    Sign Up{" "}
                  </Button>
                </Box>
              </Box>
            </Card>
          </Container>
        </Stack>
      </Grid>
    </Grid>
  );
}
