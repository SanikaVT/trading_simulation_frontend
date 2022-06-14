
import Typography from "@mui/material/Typography";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';

export default function BlogDetails() {
    const card_border = {
        backgroundColor: "white",
        // borderRadius: "10px",
        borderWidth: 1,
        paddingBottom: 2,
        // alignLeft:20,
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={8}> <Card style={card_border} sx={{pl: 3, pb: 1, mb: 1}}>
                <Grid container
                      spacing={0}
                      direction="column"
                      alignItems="center"
                      justifyContent="center"
                      maxWidth={"md"}
                >

                    <Typography variant="h3">
                        Stock Market Blog
                    </Typography>
                    <Box
                        component="img"
                        sx={{
                            height: 233,
                            width: 350,
                            maxHeight: {xs: 200, md: 250},
                            maxWidth: {xs: 350, md: 250},

                        }}
                        alt="The house from the offer."
                        src={require("./stock.png")}
                    />
                    <Typography variant="subtitle1" gutterBottom component="div">
                        A stock market, equity market, or
                        share market is the aggregation of buyers and sellers of stocks (also called shares), which
                        represent ownership claims on businesses; these may include securities listed on a public stock
                        exchange, as well as stock that is only traded privately, such as shares of private companies
                        which are sold to investors through equity crowdfunding platforms. Investment is usually made
                        with an investment strategy in mind.
                        <br/>
                        Stocks can be categorized by the country where the company is domiciled. For example, Nestlé and
                        Novartis are domiciled in Switzerland and traded on the SIX Swiss Exchange, so they may be
                        considered as part of the Swiss stock market, although the stocks may also be traded on
                        exchanges in other countries, for example, as American depositary receipts (ADRs) on U.S. stock
                        markets.
                    </Typography>
                </Grid></Card>
                <Grid item>
                <Typography variant={"h6"}> Total Likes: 1</Typography>
                </Grid>
            </Grid>

            <Grid item xs={4}>
                Like Blog
                <IconButton aria-label="like" color="error">
                    <FavoriteIcon/>
                </IconButton>

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

                        sx={{marginBottom: 2,  bgcolor: "#2E8BC0"}}
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

        </Grid>

    );

}