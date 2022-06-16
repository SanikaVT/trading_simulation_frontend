import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {Divider} from "@mui/material";
import Card from '@mui/material/Card';
import FormHelperText from '@mui/material/FormHelperText';
import {useState} from "react";




export default function SignIn() {

    const Centeral ={
        justifyContent: 'center',
        paddingLeft:'50px'
    };

    const Color = {
        color: "black", borderWidth:1, borderColor: "black"
    };
    const card_1 = {
        backgroundColor: "white",
        borderRadius: "10px",
        borderWidth: 1,
        margin: "10px",
        padding: "10px"
    };

    const initialValues = { password: ""};
    const [formValue, setFormValue] = useState(initialValues);
    const [formError, setFormError] = useState({
        password: false
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
            window.location.href = "/dashboard";
        }
        else{
            console.log("error");
            console.log(formError);
        }
    };

    const validate = (values: { password: any; }) => {

        const errors = {
            password: undefined
        };

        if (!values.password) {
            // @ts-ignore
            errors.password = "Password is required";
            errori = 1;
        }
        else if (values.password.length < 8) {
            // @ts-ignore
            errors.password = "Password must be more than 8 characters";
            errori = 1;
        }
        else {
            errori = 0;
        }
        return errors;

    }


    return (

        <Container component="main" maxWidth="xs">

            <Card variant="outlined" style={card_1}>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',

                    }}
                >
                    <h2>Welcome to DTrade</h2>
                    <Avatar sx={{ m: 1, bgcolor: 'darkorange' }}>
                    </Avatar>
                    <Typography fontSize={25} >
                        Sign in
                    </Typography>
                    <br/>

                    <Box>
                        <form onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            label="Email Address"
                            type='email'
                            required

                        />
                        <br></br>
                        <br></br>
                        <TextField
                            fullWidth
                            name='password'
                            id='password'
                            label="Password"
                            type='password'
                            onChange={handleChange}
                            onSubmit={handleSubmit}
                            value={formValue.password}
                           error={formError.password}
                            required
                        />
                            <FormHelperText>{formError.password}</FormHelperText>
                        {/*<br></br>*/}
                        <br></br>
                        <Button
                            type='submit'
                            fullWidth
                            variant="contained"
                        >
                            Sign In
                        </Button>
                        </form>
                        <Grid container>
                            <Grid item style={Centeral}>

                                <Link variant="body2" href={"/forgotpassword"} >
                                    Forgot password?
                                </Link>

                            </Grid>

                        </Grid>

                    </Box>
                    <Divider orientation={"horizontal"} flexItem style={Color}/>
                    <Box>
                        <br></br>
                        <Button  variant="contained" color="success" href={"/signup"}>
                            Sign Up </Button>
                    </Box>

                </Box>
            </Card>
        </Container>
    );
}

