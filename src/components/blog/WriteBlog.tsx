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
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import * as React from "react";

export default function WriteBlog () {
    const [open, setOpen] = React.useState(false);
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
            setOpen(true);
            console.log("done")
    };
    const gotpage = () => {
        window.location.href = "/blog";
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



                        <form onSubmit={handleSubmit}>

                            <TextField
                                fullWidth
                                label="Blog Title"
                                name='title'
                                required
                                sx={{ marginTop:1, marginBottom:2}}
                            />

                            <TextField
                                fullWidth
                                required
                                label="Short Description"
                                name={"description"}
                                multiline
                                sx={{ marginTop:1, marginBottom:2}}
                            />
                              <TextField
                                fullWidth
                                required
                                label="Content"
                                name={"content"}
                                rows={4}
                                multiline
                                sx={{ marginTop:1, marginBottom:2}}
                            />

                        <Container maxWidth="sm">
                            <Card  variant="outlined" style={card_1} >
                                <Grid container spacing={2}  >
                                    <Grid item xs={12} md={5} >
                                      <Grid container alignItems="center"
                                            justifyContent="center">
                                          <Grid item>
                                        <Typography variant="h5" align={"center"}>
                                        Upload Image
                                    </Typography>
                                          </Grid>
                                        <Grid >
                                            <PhotoCamera sx={{mt:1}} />
                                        </Grid></Grid>
                                    </Grid>

                                    <Grid item xs={12} md={6} >

                                        <Box
                                            display="flex"
                                            justifyContent="center"
                                            alignItems="center"
                                            marginTop={1}
                                            marginLeft={1}
                                        >
                                            <input accept="image/*" id="icon-button-file" type="file"  required/>
                                        </Box>

                                    </Grid>
                                </Grid>
                            </Card>
                        </Container>

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
