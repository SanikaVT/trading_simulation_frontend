import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import FormHelperText from '@mui/material/FormHelperText';
import {useState} from "react";
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function SignUp() {

    const [open, setOpen] = React.useState(false);
    const initialValues = { password: "", confpassword:"", fname:"", lname:"",email:"", phoneno: "", address:"", creditCard:""};
    const [formValue, setFormValue] = useState(initialValues);
    const [formError, setFormError] = useState({
        password: undefined,
        email: false,
        fname: undefined,
        lname: undefined,
        confpassword: undefined,
        phoneno: undefined,
        creditCard: undefined
    });
    let errori =0;

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    };


    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // @ts-ignore
        setFormError(validate(formValue));
        if(errori===0)
        {
            localStorage.setItem("email", formValue.email);
            localStorage.setItem("fname", formValue.fname);
            localStorage.setItem("lname", formValue.lname);
            localStorage.setItem("phoneno", formValue.phoneno);
            localStorage.setItem("address", formValue.address);
            localStorage.setItem("creditCard", formValue.creditCard);
            localStorage.setItem("password", formValue.password);
            setOpen(true);
            console.log("done")

        }
        else{
            console.log("error");
            console.log(formError);
        }
    };

    const gotpage = () => {
        window.location.href = "/riskappetite";
    }

    const validate = (values: { password: any; confpassword: any; fname: any; lname: any; email: any; phoneno:any; creditCard:any}) => {

        const errors = {
            password: undefined,
            confpassword: undefined,
            lname: undefined,
            email: undefined,
            phoneno: undefined,
            creditCard: undefined
        };
        const namereg = /[^A-Za-z]/;
        const emailreg = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const phonereg = /^[0-9]+$/;
        console.log("hello"+values.email);

        if (values.password.length < 8) {
            // @ts-ignore
            errors.password = "Password must be more than 8 characters";
            errori = 1;
        }
        else if (values.creditCard.length !== 16){
            // @ts-ignore
            errors.creditCard = "Please enter valid 16 Digit Credit card number";

            errori = 1;
        }
        else if(values.password !== values.confpassword){
            // @ts-ignore
            errors.confpassword="Password does not match";
            // @ts-ignore
            errors.password="Password does not match";
            errori = 1;
        }
        else if(namereg.test(values.fname)){
            // @ts-ignore
            errors.fname = "First name should only contains alphabetic numbers"
            errori =1;
        }

        else if(namereg.test(values.lname)){
            // @ts-ignore
            errors.lname = "Last name should only contains alphabetic numbers"
            errori =1;
        }
        else if(!emailreg.test(values.email)){
            // @ts-ignore
            errors.email = "Email is not valid"
            errori =1;
        }
        else if(!phonereg.test(values.phoneno) || values.phoneno.length !== 10 ){
            // @ts-ignore
            errors.phoneno = "Phone number should only contain numbers and should be 10 digit"
            errori =1;
        }

        else {
            errori=0;
        }
        return errors;

    }
    const gotosignin =()=>{

        window.location.href="/";
    }

    const card_1 = {
        backgroundColor: "white",
        borderRadius: "10px",
        borderWidth: 1,
        margin: "10px",
        padding: "10px"
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (

        <Container component="main" maxWidth="xs">

            <Card variant="outlined" style={card_1}>
                <Box
                    sx={{
                        marginTop: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',

                    }}
                >
                    <h2>Welcome to DTrade</h2>
                    <Typography fontSize={25} >
                        Sign Up
                    </Typography>
                    <br/>

                    <Box >

                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={2}>

                                <Grid item xs={12} sm={6}>
                                    <TextField

                                        label="First Name"
                                        name='fname'
                                        required
                                        onChange={handleChange}
                                        onSubmit={handleSubmit}
                                        value={formValue.fname}
                                        error={formError.fname}
                                        // sx={{ marginBottom:1, marginTop:1}}
                                    /><FormHelperText>{formError.fname}</FormHelperText>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField

                                        label="Last Name"
                                        name='lname'
                                        required
                                        onChange={handleChange}
                                        onSubmit={handleSubmit}
                                        value={formValue.lname}
                                        error={formError.lname}
                                        // sx={{ marginBottom:1, marginTop:1}}
                                    /><FormHelperText>{formError.lname}</FormHelperText>
                                </Grid>
                            </Grid>

                            <TextField
                                fullWidth
                                label="Email Address"
                                name='email'
                                required
                                onChange={handleChange}
                                onSubmit={handleSubmit}
                                value={formValue.email}
                                error={formError.email}
                                type='email'
                                sx={{ marginBottom:1, marginTop:1}}
                            /><FormHelperText>{formError.email}</FormHelperText>
                            <TextField
                                fullWidth
                                label="Password"
                                name='password'
                                type={"password"}
                                required
                                sx={{ marginBottom:1}}
                                onChange={handleChange}
                                onSubmit={handleSubmit}
                                value={formValue.password}
                                error={formError.password}
                            /><FormHelperText>{formError.password}</FormHelperText>

                            <TextField
                                fullWidth
                                label="Confirm Password"
                                name='confpassword'
                                type={"password"}
                                required
                                sx={{ marginTop:1, marginBottom:1}}
                                onChange={handleChange}
                                onSubmit={handleSubmit}
                                value={formValue.confpassword}
                                error={formError.confpassword}
                            /><FormHelperText>{formError.confpassword}</FormHelperText>

                            <TextField
                                fullWidth
                                required
                                label="Phone Number"
                                name='phoneno'
                                onChange={handleChange}
                                onSubmit={handleSubmit}
                                value={formValue.phoneno}
                                error={formError.phoneno}
                                sx={{ marginTop:1, marginBottom:1}}
                            /><FormHelperText>{formError.phoneno}</FormHelperText>
                            <TextField
                                fullWidth
                                required
                                label="Address"
                                multiline
                                name={"address"}
                                onChange={handleChange}
                                onSubmit={handleSubmit}
                                value={formValue.address}
                                sx={{ marginTop:1, marginBottom:1}}
                            />

                            <TextField
                                fullWidth
                                required
                                label="Credit Card number"
                                multiline
                                name={"creditCard"}
                                type='number'
                                onChange={handleChange}
                                onSubmit={handleSubmit}
                                value={formValue.creditCard}
                                error={formError.creditCard}
                                sx={{ marginTop:1, marginBottom:1}}
                            /><FormHelperText>{formError.creditCard}</FormHelperText>

                            <Button
                                sx={{marginTop:1}}
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
                        By Clicking Submit you will be redirected to Risk Appetite questionnaire.
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

    );
}