import Snackbar from '@mui/material/Snackbar';
import Typography from "@mui/material/Typography";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";

export default function BlogDetails() {

    const [likeOpen, setlikeOpen] = React.useState(false);

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };

    const confirmdelete = () => {
        setOpen(true);
    }
    const card_border = {
        backgroundColor: "white",
        // borderRadius: "10px",
        borderWidth: 1,
        paddingBottom: 2,
        // alignLeft:20,
    };

    const editblog = () => {
        window.location.href = "/editblog";
    }
    const gotpage = () => {
        window.location.href = "/blog";
    }


    const likeblog = () => {
        setlikeOpen(true);
    }
    const likeblogclose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setlikeOpen(false);
    };

    const action = (
        <React.Fragment>

            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={likeblogclose}
            >
                <CloseIcon fontSize="small"/>
            </IconButton>
        </React.Fragment>
    );

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={8}><Button onClick={editblog}>Edit Blog</Button>
                <Button onClick={confirmdelete}>Delete Blog</Button>
            </Grid>
            <Grid item xs={12} md={8}>

                <Card style={card_border} sx={{pl: 3, pb: 1, mb: 1}}>
                    <Grid container
                          spacing={0}
                          direction="column"
                          alignItems="center"
                          justifyContent="center"
                          maxWidth={"md"}
                    >
                        <Grid item xs={12}>
                            <Typography variant="h3">
                                Stock Market Blog
                            </Typography>
                        </Grid>
                        <Grid item sm={12}>
                            <Box
                                component="img"
                                sx={{
                                    height: 233,
                                    width: 350,
                                    maxHeight: {xs: 100, md: 250, sm: 200},
                                    maxWidth: {xs: 150, md: 250, sm: 350},
                                }}
                                alt="The house from the offer."
                                src={require("./stock.png")}
                            /></Grid>
                        <Grid item sm={12}>
                            <Typography variant="subtitle1" gutterBottom>
                                A stock market, equity market, or
                                share market is the aggregation of buyers and sellers of stocks (also called shares),
                                which
                                represent ownership claims on businesses; these may include securities listed on a
                                public stock
                                exchange, as well as stock that is only traded privately, such as shares of private
                                companies
                                which are sold to investors through equity crowdfunding platforms. Investment is usually
                                made
                                with an investment strategy in mind.
                                <br/>
                                Stocks can be categorized by the country where the company is domiciled. For example,
                                Nestlé and
                                Novartis are domiciled in Switzerland and traded on the SIX Swiss Exchange, so they may
                                be
                                considered as part of the Swiss stock market, although the stocks may also be traded on
                                exchanges in other countries, for example, as American depositary receipts (ADRs) on
                                U.S. stock
                                markets.
                            </Typography></Grid>
                    </Grid></Card>
                <Grid item sm={12}>
                    <Typography variant={"h6"}> Total Likes: 1</Typography>
                </Grid>
            </Grid>

            <Grid item xs={12} md={4}>
                Like Blog
                <IconButton aria-label="like" onClick={likeblog} color="error">
                    <FavoriteIcon/>
                </IconButton>
                <Snackbar
                    open={likeOpen}
                    autoHideDuration={2000}
                    message="Blog Liked"
                    onClose={likeblogclose}
                    action={action}

                />
                <form>
                    <TextField
                        fullWidth
                        label="Write Comment"
                        name={"comment"}
                        multiline
                        required
                        sx={{marginTop: 1, marginBottom: 2}}
                    />
                    <Button
                        type="submit"
                        variant="contained"

                        sx={{marginBottom: 2, bgcolor: "#2E8BC0"}}
                    >
                        Submit
                    </Button>
                </form>
                <Divider variant="middle"/>
                <Typography variant="h5" component="div">
                    Comments
                </Typography>
                <Card style={card_border} sx={{pl: 1, pb: 1, mb: 1}}>
                    <Typography variant="body1">
                        User 1
                    </Typography>
                    <Typography color="text.secondary" variant="body2">
                        Very Well Explained!
                    </Typography></Card>
                <Card style={card_border} sx={{pl: 1, pb: 1, mb: 1}}>
                    <Typography variant="body1">
                        User 2
                    </Typography>
                    <Typography color="text.secondary" variant="body2">
                        Very Well Explained!
                    </Typography></Card>
                <Card style={card_border} sx={{pl: 1, pb: 1, mb: 1}}>
                    <Typography variant="body1">
                        User 3
                    </Typography>
                    <Typography color="text.secondary" variant="body2">
                        Very Well Explained!
                    </Typography>
                </Card>
            </Grid>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Are you sure you want to delete this blog?"}
                </DialogTitle>

                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={gotpage} autoFocus>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </Grid>

    );

}