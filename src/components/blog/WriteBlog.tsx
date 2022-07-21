// @author Dharmay Dineshchandra Sureja
// Banner id (B00904061)
// email : dh276903@dal.ca
// This componenet is responsoible to show form to submit and publish blogs
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";

import * as React from "react";
import {useState} from "react";
import axios from "axios";

export default function WriteBlog () {
    const [open, setOpen] = React.useState(false);

    const initialValues = {
        title: "",
        description: "",
        content: "",
    };
    const [formValue, setFormValue] = useState(initialValues);

    const handleChange = (e: { target: { name: any; value: any } }) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    };
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
            setOpen(true);
        
    };
    const gotpage = () => {
        const form_data = {
            userID: localStorage.getItem("userID"),
            title: formValue.title,
            description: formValue.description,
            content: formValue.content,

        };
    
        axios
            .put("/api/blogs", form_data)
            .then((response) => {
            
                if (response.status === 201) {
                
                    window.location.href = "/blog";
                } else {
                    alert("Can not add blog!");
                }
            })
            .catch(function(error) {
                alert("Can not add blog!");
                console.log(error);
            
            });
        
    }
    const handleClose = () => {
        setOpen(false);
    };
    const card_1 = {
        backgroundColor: "white",
        borderRadius: "10px",
        borderWidth: 1,
        margin: "10px",
        padding: "10px"
    };
    // @ts-ignore
    // @ts-ignore
    return(


        <Container component="main" maxWidth="md">

            <Card variant="outlined" style={card_1}>
                <Box
                    sx={{
                        marginTop: 0,
                        display: 'relative',
                        flexDirection: 'column',
                        alignItems: 'center',

                    }}
                >

                    <Grid container  spacing={0}
                          direction="column"
                          alignItems="center"
                          justifyContent="center">
                        <Typography variant="h3"  sx={{texAlign:"center", flexGrow:1}}>
                            Write Blog
                        </Typography>
                    </Grid>

                        <form onSubmit={handleSubmit}>

                            <TextField
                                fullWidth
                                label="Blog Title"
                                name='title'
                                required
                                onChange={handleChange}
                                onSubmit={handleSubmit}
                                value={formValue.title}
                                sx={{ marginTop:1, marginBottom:2}}
                            />

                            <TextField
                                fullWidth
                                required
                                label="Short Description"
                                name={"description"}
                                multiline
                                onChange={handleChange}
                                onSubmit={handleSubmit}
                                value={formValue.description}
                                sx={{ marginTop:1, marginBottom:2}}
                            />
                              <TextField
                                fullWidth
                                required
                                label="Content"
                                name={"content"}
                                onChange={handleChange}
                                onSubmit={handleSubmit}
                                value={formValue.content}
                                rows={4}
                                multiline
                                sx={{ marginTop:1, marginBottom:2}}
                            />

                       
                            <Button
                                fullWidth
                                variant="contained"
                                type={"submit"}
                                sx={ { bgcolor: "#2E8BC0"}}
                            >
                                Submit
                            </Button>
                        </form>

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
                        By Clicking Submit Your blog will be saved and published.
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
