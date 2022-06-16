import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormHelperText from '@mui/material/FormHelperText';
import {useState} from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ForgotPasswordOtp() {





    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // @ts-ignore

        gotpage();

    };


    const gotpage = () => {
        window.location.href = "/forgotpassword";
    }


    const card_1 = {
        backgroundColor: "white",
        borderRadius: "10px",
        borderWidth: 1,
        margin: "10px",
        padding: "10px"
    };
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
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
                    <Avatar sx={{ m: 1, bgcolor: 'darkorange' }}> <LockOutlinedIcon /> </Avatar>

                    <Typography fontSize={25} >
                        Forgot Password
                    </Typography>
                    <br/>

                    <Box >
                        <form >
                            <TextField
                                fullWidth
                                label="Email"
                                required
                                type={"email"}
                                sx={{ marginBottom:1}}
                            />

                            <Button
                                fullWidth
                                variant="contained"
                                type={"submit"}
                            >
                                Send Code
                            </Button>
                        </form>

                        <form onSubmit={handleSubmit}>
                            <TextField
                                fullWidth
                                required
                                label="Enter Code here"
                                multiline
                                sx={{ marginBottom:2, marginTop:2}}
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