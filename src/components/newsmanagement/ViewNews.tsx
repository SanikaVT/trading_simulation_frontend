import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import {Grid} from "@mui/material";

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

// const n=8;
const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function StockReviewCard() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>

    <Grid container
          direction="row"
          spacing={7}
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: '50vh' }}>
        <Grid item>
            <Card sx={{ maxWidth: 345 }} >
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="stock">
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Stocks have officially entered bear market territory—here’s what that means and what you should do"
                    subheader="Jun 14 2022 9:00 AM"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image="https://image.cnbcfm.com/api/v1/image/107065467-1653317146427-gettyimages-1206148250-urn_newsml_dpa_com_20090101_200309-99-250434-2.jpeg?v=1653317177&w=740&h=416&ffmt=webp"
                    alt="stock image"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        The months-long slide for the S&P 500 index has officially thrown stocks far enough off of their all-time highs to be considered a bear market.

                        Since the beginning of 2022, the S&P 500 index is down nearly 21% as of Monday afternoon, with companies like Amazon and Google parent Alphabet leading the way with their 39% and 27% respective drops. Elon Musk’s Tesla has also lost 45% of its market value since January — shaving more than $500 billion off of its market cap.

                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>More:</Typography>
                        <Typography paragraph>

                            The problem has been exacerbated by inflation and global uncertainty, with experts predicting that a recession could be around the corner.

                            Here’s what you need to know about bear markets, and what you should do when you find yourself in one.
                        </Typography>
                        <Typography paragraph>
                            What exactly is a bear market?
                            Put simply, bear market is the term used to describe when the equity markets are down 20% or more from their most recent all-time high. In this case, the S&P 500 index closed Monday at 3,749.91, with its previous high being 4,818.62.

                            Since World War II, there have been 14 bear markets that have pulled the S&P down an average of 30%, according to CNBC. Each bear market is unique, says Laura Veldkamp, a finance and economics professor at Columbia University, and the current one has a slew of causes.

                            Wherever there’s a lot of guessing and a lot of uncertainty, that means people’s beliefs can move around a lot. And with those beliefs go stock prices.

                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </Grid>
        <Grid item>
            <Card sx={{ maxWidth: 345 }} >
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="stock">
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Stocks have officially entered bear market territory—here’s what that means and what you should do"
                    subheader="Jun 14 2022 9:00 AM"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image="https://image.cnbcfm.com/api/v1/image/107065467-1653317146427-gettyimages-1206148250-urn_newsml_dpa_com_20090101_200309-99-250434-2.jpeg?v=1653317177&w=740&h=416&ffmt=webp"
                    alt="stock image"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        The months-long slide for the S&P 500 index has officially thrown stocks far enough off of their all-time highs to be considered a bear market.

                        Since the beginning of 2022, the S&P 500 index is down nearly 21% as of Monday afternoon, with companies like Amazon and Google parent Alphabet leading the way with their 39% and 27% respective drops. Elon Musk’s Tesla has also lost 45% of its market value since January — shaving more than $500 billion off of its market cap.

                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>More:</Typography>
                        <Typography paragraph>

                            The problem has been exacerbated by inflation and global uncertainty, with experts predicting that a recession could be around the corner.

                            Here’s what you need to know about bear markets, and what you should do when you find yourself in one.
                        </Typography>
                        <Typography paragraph>
                            What exactly is a bear market?
                            Put simply, bear market is the term used to describe when the equity markets are down 20% or more from their most recent all-time high. In this case, the S&P 500 index closed Monday at 3,749.91, with its previous high being 4,818.62.

                            Since World War II, there have been 14 bear markets that have pulled the S&P down an average of 30%, according to CNBC. Each bear market is unique, says Laura Veldkamp, a finance and economics professor at Columbia University, and the current one has a slew of causes.

                            Wherever there’s a lot of guessing and a lot of uncertainty, that means people’s beliefs can move around a lot. And with those beliefs go stock prices.

                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </Grid>
        <Grid item>
            <Card sx={{ maxWidth: 345 }} >
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="stock">
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Stocks have officially entered bear market territory—here’s what that means and what you should do"
                    subheader="Jun 14 2022 9:00 AM"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image="https://image.cnbcfm.com/api/v1/image/107065467-1653317146427-gettyimages-1206148250-urn_newsml_dpa_com_20090101_200309-99-250434-2.jpeg?v=1653317177&w=740&h=416&ffmt=webp"
                    alt="stock image"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        The months-long slide for the S&P 500 index has officially thrown stocks far enough off of their all-time highs to be considered a bear market.

                        Since the beginning of 2022, the S&P 500 index is down nearly 21% as of Monday afternoon, with companies like Amazon and Google parent Alphabet leading the way with their 39% and 27% respective drops. Elon Musk’s Tesla has also lost 45% of its market value since January — shaving more than $500 billion off of its market cap.

                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>More:</Typography>
                        <Typography paragraph>

                            The problem has been exacerbated by inflation and global uncertainty, with experts predicting that a recession could be around the corner.

                            Here’s what you need to know about bear markets, and what you should do when you find yourself in one.
                        </Typography>
                        <Typography paragraph>
                            What exactly is a bear market?
                            Put simply, bear market is the term used to describe when the equity markets are down 20% or more from their most recent all-time high. In this case, the S&P 500 index closed Monday at 3,749.91, with its previous high being 4,818.62.

                            Since World War II, there have been 14 bear markets that have pulled the S&P down an average of 30%, according to CNBC. Each bear market is unique, says Laura Veldkamp, a finance and economics professor at Columbia University, and the current one has a slew of causes.

                            Wherever there’s a lot of guessing and a lot of uncertainty, that means people’s beliefs can move around a lot. And with those beliefs go stock prices.

                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </Grid>

        {/*{Array(n).map((element, index) =>*/}




    </Grid>
            </>
        );
}
