import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
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
    // window.location.href = "/signin";

    console.log(formValue);
    const que1 = parseInt(formValue.question1);
    const que2 = parseInt(formValue.question2);
    const que3 = parseInt(formValue.question3);
    console.log(que1 + que2 + que3);
    const calculaterisk1 = (que1 + que2 + que3) / 3;
    console.log(calculaterisk1);
    if (calculaterisk1 < 2) {
      // @ts-ignore
      setCalculateRisk("Low");
    } else if (calculaterisk1 < 3) {
      // @ts-ignore
      setCalculateRisk("Medium");
    } else {
      // @ts-ignore
      setCalculateRisk("High");
    }

    console.log(calculaterisk);
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

    console.log(form_data);
    axios
      .post("/api/register", form_data)
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          console.log(response.data.status);
          alert("successfully registered");
          window.location.href = "/signin";
        } else {
          alert("Email or password is wrong!");
        }
      })
      .catch(function (error) {
        alert("Email or password is wrong!");
        console.log("Exception occured");
      });

    // window.location.href = "/signin";
  };

  const handleClose = () => {
    setOpen(false);
  };

  const card_1 = {
    backgroundColor: "white",
    borderRadius: "10px",
    borderWidth: 1,
    margin: "10px",
    padding: "10px",
  };
  return (
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
                balancing potential risk against expected returns. When making
                investment decisions, do you give more weight to potential
                losses or potential gains?
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
                How would you characterize your willingness to accept investment
                risk in order to achieve your investment objectives?
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="1"
                name="question2"
                onChange={handleChange}
                value={formValue.question2}
              >
                <FormControlLabel value="1" control={<Radio />} label="Low" />
                <FormControlLabel
                  value="2"
                  control={<Radio />}
                  label="Average"
                />
                <FormControlLabel value="3" control={<Radio />} label="High" />
              </RadioGroup>
              <br />
              <FormLabel id="demo-radio-buttons-group-label">
                How easily do you adapt to unexpected negative financial change?
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
  );
}
