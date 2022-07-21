// @author Dharmay Dineshchandra Sureja
// Banner id (B00904061)
// email : dh276903@dal.ca
// This component is responsible to edit blog and populate form to make changes to existing blog
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
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

export default function EditBlog () {
    const { id } = useParams();
    const form_data = {
        blogsID:id
    };
    
    const initialValues = {
        title: "",
        description: "",
        content: "",
        blogsID:"",
        userID:""
    };
   
    const [formValue, setFormValue] = useState(initialValues);

    useEffect(() => {
        axios
            .post("/api/blogs/details", form_data)
            .then((response) => {
                
                setFormValue(response.data.blogs)
               

            })
            .catch(function(error) {
                alert("Can not get blog!");
                console.log(error);
               
            });

    }, []);

    const [open, setOpen] = React.useState(false);
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setOpen(true);
    
    };

    const handleChange = (e: { target: { name: any; value: any } }) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    };

    const gotpage = () => {
        const formdata = {
            userID: localStorage.getItem("userID"),
            blogsID: id,
            title: formValue.title,
            description: formValue.description,
            content: formValue.content,

        };
        axios
            .post("/api/blogs", formdata)
            .then((response) => {
            
                if (response.status === 201) {
                
                    window.location.href = "/blog";
                } else {
                    alert("Can not update blog!");
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
                       Edit Blog
                    </Typography>
                 </Grid>
                    <form onSubmit={handleSubmit}>

                        <TextField
                            fullWidth

                            label="Blog Title"
                            name='title'
                            
                            onChange={handleChange}
                             value={formValue.title}
                            required
                            sx={{ marginTop:1, marginBottom:2}}
                        />

                        <TextField
                            fullWidth
                            required
                            label="Short Description"
                            name={"description"}
                            onChange={handleChange}
                            value={formValue.description}
                            defaultValue={" A stock market, equity market, or share market is the aggregation of buyers and sellers of stocks, which represent ownership claims on businesses; these may include securities listed on a public stock"}
                            multiline
                            sx={{ marginTop:1, marginBottom:2}}
                        />
                        <TextField
                            fullWidth
                            required
                            defaultValue={"A stock market, equity market, or share market is the aggregation of buyers and sellers of stocks (also called shares), which represent ownership claims on businesses; these may include securities listed on a public stock exchange, as well as stock that is only traded privately, such as shares of private companies which are sold to investors through equity crowdfunding platforms. Investment is usually made with an investment strategy in mind.\n" +
                                "Stocks can be categorized by the country where the company is domiciled. For example, Nestlé and Novartis are domiciled in Switzerland and traded on the SIX Swiss Exchange, so they may be considered as part of the Swiss stock market, although the stocks may also be traded on exchanges in other countries, for example, as American depositary receipts (ADRs) on U.S. stock markets."}
                            label="Content"
                            name={"content"}
                            onChange={handleChange}
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
