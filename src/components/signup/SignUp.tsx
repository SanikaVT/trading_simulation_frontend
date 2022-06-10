import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import FormHelperText from '@mui/material/FormHelperText';
import {useState} from "react";



export default function SignUp() {


    const initialValues = { password: "", confpassword:"", fname:"", lname:"",email:""};
    const [formValue, setFormValue] = useState(initialValues);
    const [formError, setFormError] = useState({
        password: undefined,
        email: false,
        fname: undefined,
        lname: undefined,
        confpassword: undefined
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
            console.log("done")
            window.location.href = "/riskappetite";
        }
        else{
            console.log("error");
            console.log(formError);
        }
    };

    const validate = (values: { password: any; confpassword: any; fname: any; lname: any; email: any; }) => {

        const errors = {
            password: undefined,
            confpassword: undefined,
            lname: undefined,
            email: undefined
        };
        const namereg = /[^A-Za-z]/;
        const emailreg = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        console.log("hello"+values.email);

        if (values.password.length < 8) {
            // @ts-ignore
            errors.password = "Password must be more than 8 characters";
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

        else {
            errori=0;
        }
        return errors;

    }

    const card_1 = {
        backgroundColor: "white",
        borderRadius: "10px",
        borderWidth: 1,
        margin: "10px",
        padding: "10px"
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
                        <TextField
                            fullWidth
                            label="First Name"
                            name='fname'
                            required
                            onChange={handleChange}
                            onSubmit={handleSubmit}
                            value={formValue.fname}
                            error={formError.fname}
                            sx={{ marginBottom:1, marginTop:1}}
                        /><FormHelperText>{formError.fname}</FormHelperText>
                        <TextField
                            fullWidth
                            label="Last Name"
                            name='lname'
                            required
                            onChange={handleChange}
                            onSubmit={handleSubmit}
                            value={formValue.lname}
                            error={formError.lname}
                            sx={{ marginBottom:1, marginTop:1}}
                        /><FormHelperText>{formError.lname}</FormHelperText>
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
                            label="Phone Number"
                            sx={{ marginTop:1, marginBottom:2}}
                        />
                        <TextField
                            fullWidth
                            label="Address"
                            multiline
                            sx={{ marginBottom:2}}
                        />


                        <Button
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
        </Container>
    );
}