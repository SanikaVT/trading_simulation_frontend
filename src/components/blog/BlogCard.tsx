import {ButtonBase, CardActionArea} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import * as React from "react";
import Grid from "@mui/material/Grid";

export default function BlogCard (){


    function  hello () {
        console.log("hello ji");
    }

    const card_border = {
        backgroundColor: "white",
        borderRadius: "10px",
        borderWidth: 1,
    };

    return(
        <Grid item xs={6} md={3}>
        <Card sx={{ maxWidth: 345}} style={card_border}>
            <ButtonBase onClick={hello}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height='50%'
                        //image reference https://www.flaticon.com/free-icon/stock-market_3843966
                        image={require("./stock.png")}
                        alt="Stock Exchange"
                    />
                    <CardContent >
                        <Typography gutterBottom variant="h5" component="div">
                            Stock Market Blog
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            A stock market, equity market, or share market is the aggregation of buyers and sellers of stocks, which represent ownership claims on businesses; these may include securities listed on a public stock
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </ButtonBase>
        </Card>
        </Grid>
    );
}