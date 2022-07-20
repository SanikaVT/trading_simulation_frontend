// @author Dharmay Dineshchandra Sureja
// Banner id (B00904061)
// email : dh276903@dal.ca
// this component is responsible to ask riskappetite questions.
import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Stack } from "@mui/material";
import { FormControl, FormControlLabel, FormLabel } from "@mui/material";
import { RadioGroup, Radio } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import axios from "axios";

export default function RiskAppetite() {
  const [open, setOpen] = React.useState(false);
  const initialValues = { question1: "1", question2: "2", question3: "2" };
  const [formValue, setFormValue] = useState(initialValues);
  const [calculaterisk, setCalculateRisk] = useState();
  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = () => {
    const que1 = parseInt(formValue.question1);
    const que2 = parseInt(formValue.question2);
    const que3 = parseInt(formValue.question3);

    const calculaterisk1 = (que1 + que2 + que3) / 3;

    if (calculaterisk1 < 2) {
      // @ts-ignore
      setCalculateRisk("Low");
    } else {
      // @ts-ignore
      setCalculateRisk("High");
    }

    setOpen(true);
  };
  const gotpage = () => {
    const form_data = {
      first_name: localStorage.getItem("fname"),
      last_name: localStorage.getItem("lname"),
      email: localStorage.getItem("email"),
      password: localStorage.getItem("password"),
      phone: localStorage.getItem("phoneno"),
      address: localStorage.getItem("address"),
      account: localStorage.getItem("account"),
      risk_appetite: calculaterisk,
    };

    axios
      .post("/api/register", form_data)
      .then((response) => {
        if (response.status === 201) {
          alert("successfully registered");
          window.location.href = "/signin";
        } else {
          alert("Email Already exists!");
        }
      })
      .catch(function(error) {
        alert("Email already exists!");
        console.log(error);
      });

    // window.location.href = "/signin";
  };

  const handleClose = () => {
    setOpen(false);
  };

  const card_1 = {
    backgroundColor: "white",
    border: "none",
    padding: "10px",
  };
  return (
    <Grid container alignItems="stretch">
      <Grid
        className="left-pane"
        item
        md={8}
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
        md={4}
        xs={12}
        style={{ padding: "0rem" }}
      >
        <Stack>
          <Container component="main" maxWidth="xs">
            <Card variant="outlined" style={card_1}>
              <Box
                sx={{
                  marginTop: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography fontSize={25}>Risk Appetite</Typography>
                <br />

                <Box>
                  <FormControl onSubmit={handleSubmit}>
                    <FormLabel id="demo-radio-buttons-group-label">
                      Determining an appropriate investment strategy involves
                      balancing potential risk against expected returns. When
                      making investment decisions, do you give more weight to
                      potential losses or potential gains?
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="1"
                      name="question1"
                      onChange={handleChange}
                      value={formValue.question1}
                    >
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="Potential gains only"
                      />
                      <FormControlLabel
                        value="3"
                        control={<Radio />}
                        label="Potential losses only"
                      />
                    </RadioGroup>
                    <br />
                    <FormLabel id="demo-radio-buttons-group-label">
                      How would you characterize your willingness to accept
                      investment risk in order to achieve your investment
                      objectives?
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="1"
                      name="question2"
                      onChange={handleChange}
                      value={formValue.question2}
                    >
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="Low"
                      />
                      <FormControlLabel
                        value="2"
                        control={<Radio />}
                        label="Average"
                      />
                      <FormControlLabel
                        value="3"
                        control={<Radio />}
                        label="High"
                      />
                    </RadioGroup>
                    <br />
                    <FormLabel id="demo-radio-buttons-group-label">
                      How easily do you adapt to unexpected negative financial
                      change?
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="3"
                      name="question3"
                      onChange={handleChange}
                      value={formValue.question3}
                    >
                      <FormControlLabel
                        value="3"
                        control={<Radio />}
                        label="I adapt easily"
                      />
                      <FormControlLabel
                        value="2"
                        control={<Radio />}
                        label="Neither easily nor uneasily"
                      />
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="I do not adapt easily"
                      />
                    </RadioGroup>

                    <Button
                      fullWidth
                      variant="contained"
                      type={"submit"}
                      onClick={handleSubmit}
                    >
                      Submit
                    </Button>
                  </FormControl>

                  {/*</form>*/}
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
                  By Clicking Submit Your account will be created.
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
        </Stack>
      </Grid>
    </Grid>
  );
}
